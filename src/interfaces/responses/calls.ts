interface ICallResponse {
    callUuid: string, // callUuid - User for further API queries - String/UUID
    callDate: string, // callDate - Date/time of call in supplied UTC offset - String/Datetime
    callDirection: number, // callDirection - 1 for Inbound, 2 for Outbound, 3 for Internal - Integer
    cidName: string, // cidName - Name/CallerID of the person making the call - String
    cidNum: string, // cidNum - Number of the person making the call - String
    numDialed: string, // numDialed - Number this person called - String
    duration: number, // duration - Call duration in seconds - Integer
    callRecorded: boolean, // callRecorded - 1 if the call was recorded, 0 if the call was not recorded - Integer/Bool
    recordingUrl: string, // recordingUrl - HTTPS URL to fetch the recording from, if applicable - String
    didDescription: string, // didDescription - The "Description" field of a Phone Number (only applies to inbound calls from the outside world) - String
    cidPrefix: string, // cidPrefix - The "CID Prefix" field of a Phone Number (only applies to inbound calls from the outside world) - String
    lastEvent: string, // lastEvent - A text/English representation of how the call ended - String
    callFlagged: boolean, // callFlagged - Whether the call is flagged for follow-up - 1 or 0
    callSeverity: number, // callSeverity - Severity rating of the call - 0 = No Severity, 1-10 otherwise
    callNotes: string, // callNotes - Notes from the call - String (max. 255 characters)
    wentToVoicemail: number, // wentToVoicemail - Whether the caller was sent an extension's voicemail (only applies to inbound or internal calls) - 1 or 0
    spokeToPerson: number, // spokeToPerson - Whether the caller ever actually spoke to someone (only applies to inbound or internal calls) - 1 or 0
    didGroup: string, // didGroup - The name of the Group this DID belongs to, if applicable. (only applies to inbound calls from the outside world) - String
    transcription: string // transcription - The transcribed speech-to-text, if the feature is enabled. Otherwise this value is null/empty - String
}