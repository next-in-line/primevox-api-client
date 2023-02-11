import axios, { Axios } from "axios"
import { IPrimevoxApiCallHistoryResponse, IPrimevoxApiCallHistoryResponseCall } from "./interfaces/api/responses/callHistories";
import { IPrimevoxApiRingGroupAnalysis, IPrimevoxApiRingGroupAnalysisRecord } from "./interfaces/api/responses/ringGroupAnalysis";
import { IPrimevoxConfig } from "./interfaces/config"
import { ICallHistoryParams } from "./interfaces/requests/callHistory";
import { IPrimevoxRingGroupAnalysisParams } from "./interfaces/requests/ringGroupAnalysis";
import { ICallHistoryResponse } from "./interfaces/responses/callHistory"
import { IRingGroupAnalysisResponse } from "./interfaces/responses/ringGroup";

export class PrimevoxApi {
    client: Axios;
    config: IPrimevoxConfig;
    constructor(config: IPrimevoxConfig){
        this.config = config;
        this.client = axios.create({
            baseURL: config.host ?? "https://pbx.primevox.net"
        })
    }
    async callHistory (query?: ICallHistoryParams): Promise<ICallHistoryResponse[]>{
        const response = await this.client.get<IPrimevoxApiCallHistoryResponse>(`/api/call_list.php`, {
            params: {
                auth: this.config.auth,
                containerID: this.config.containerID,
                tenantID: this.config.tenantID,
                query
            }
        })
        const calls : [string, IPrimevoxApiCallHistoryResponseCall][] = Object.entries(response.data?.data)
        const values : ICallHistoryResponse[] = calls.map(([id, call]: [string, IPrimevoxApiCallHistoryResponseCall])=>({
            id,
            callUuid: call.callUuid,
            callDate: call.callDate,
            callDirection: call.callDirection,
            cidName: call.cidName, // cidName - Name/CallerID of the person making the call - String
            cidNum: call.cidNum, // cidNum - Number of the person making the call - String
            numDialed: call.numDialed, // numDialed - Number this person called - String
            duration: call.duration, // duration - Call duration in seconds - Integer
            callRecorded: call.callRecorded == 1 ? true : false, // callRecorded - 1 if the call was recorded, 0 if the call was not recorded - Integer/Bool
            recordingUrl: call.recordingUrl, // recordingUrl - HTTPS URL to fetch the recording from, if applicable - String
            didDescription: call.didDescription, // didDescription - The "Description" field of a Phone Number (only applies to inbound calls from the outside world) - String
            cidPrefix: call.cidPrefix, // cidPrefix - The "CID Prefix" field of a Phone Number (only applies to inbound calls from the outside world) - String
            lastEvent: call.lastEvent, // lastEvent - A text/English representation of how the call ended - String
            callFlagged: call.callFlagged == 1 ? true : false, // callFlagged - Whether the call is flagged for follow-up - 1 or 0
            callSeverity: call.callSeverity, // callSeverity - Severity rating of the call - 0 = No Severity, 1-10 otherwise
            callNotes: call.callNotes, // callNotes - Notes from the call - String (max. 255 characters)
            wentToVoicemail: call.wentToVoicemail == 1 ? true : false, // wentToVoicemail - Whether the caller was sent an extension's voicemail (only applies to inbound or internal calls) - 1 or 0
            spokeToPerson: call.spokeToPerson == 1 ? true : false, // spokeToPerson - Whether the caller ever actually spoke to someone (only applies to inbound or internal calls) - 1 or 0
            didGroup: call.didGroup, // didGroup - The name of the Group this DID belongs to, if applicable. (only applies to inbound calls from the outside world) - String
            transcription: call.transcription 
        }))
        return values;
    }
    async ringGroupAnalysis(query: IPrimevoxRingGroupAnalysisParams = {}){
        const response = await this.client.get<IPrimevoxApiRingGroupAnalysis>(`/api/reports/raw/ringgroup`, {
            params: {
                auth: this.config.auth, 
                containerID: this.config.containerID,
                tenantID: this.config.tenantID,
                ...query
            }
        })
        const calls : [string, IPrimevoxApiRingGroupAnalysisRecord][] = Object.entries(response.data?.data)
        const values : IRingGroupAnalysisResponse[] = calls.map(([id, ringGroupRecord]: [string, IPrimevoxApiRingGroupAnalysisRecord])=>({
            id,
            eventType: ringGroupRecord.eventType,
            eventDate: ringGroupRecord.eventDate,
            eventData1: ringGroupRecord.eventData1,
            eventData2: ringGroupRecord.eventData2,
            eventData3: ringGroupRecord.eventData3,
            eventData4: ringGroupRecord.eventData4
        }));
        
        return values;
    }
    static createClient(config: IPrimevoxConfig){
        return new this(config)
    }
}