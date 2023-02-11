export interface IPrimevoxCallParams {
    fromDate?: string, // - Optional - If omitted, defaults to "Today at 00:00:00". Format: YYYY-MM-DD HH:MM:SS
    toDate?: string,  // - Optional - If omitted, defaults to "Today at 23:59:59". Format: YYYY-MM-DD HH:MM:SS
    utcOffset?: string,  // - Optional - The minutes your customer/browser is away from UTC. Example: America/Chicago timezone is -300 (negative 300) minutes from UTC). Results will be returned in this time offset. Default is 0 (UTC)
    page?: number,  // - Optional - Page number to view results. Defaults to Page 1, with 500 results per page
    showInbound?: number,  // - Optional - Set to 1 (default) to show inbound calls. Set to 0 to hide inbound calls.
    showOutbound?: number, // - Optional - Set to 1 (default) to show outbound calls. Set to 0 to hide outbound calls.
    showInternal?: number, // - Optional - Set to 1 (default) to show internal calls. Set to 0 to hide internal calls.
    filterInboundCallerNumber?: number,  //- Optional - When showInbound=1, inbound calls will be filtered by the caller's phone number. 
    filterInboundDid?: number,  // - Optional - When showInbound=1, inbound calls will be filtered by the DID the caller called into. Useful for marketing campaign analysis.
    filterInboundExtenReceived?: number, // - Optional - When showInbound=1, filter inbound calls by which extension took the call (either spoke to the caller, or went to this extension's voicemail)
    filterOutboundNumberDialed?: number, // - Optional - When showOutbound=1, outbound calls will be filtered by the phone number someone dialed out to.
    filterOutboundExtenDialed?: number, // - Optional - When showOutbound=1, outbound calls will be filtered by the specific extension that made the dial.
    filterInternalExten?: number, // - Optional - When showInternal=1, show only internal calls that involve this extension number.
    filterInternalApp?: number, // - Optional - When showInternal=1, show calls to a specific application number (see the following list):
        // 1: Queue Login/Logout (*45)
        // 2: Voicemail Check (*97 or *98)
        // 3: Echo Test (*43)
        // 4: Call Forwarding (*62)
        // 5: Toggle Change (*49)
        // 6: Targeted Intercom (*80)
    filterWentToVoicemail?: number, // - Optional - Set to 1 to only show calls that ended up in someone's voicemail box. (Does not necessarily mean they left a message!) Only applicable to inbound calls.
    filterSpokeToPerson?: number, // - Optional - Set to 1 to only show calls that actually spoke to a live person. Only applicable to inbound calls.
    filterFlaggedFollowup?: number, // - Optional - Set to 1 to only show calls that are flagged for follow-up.
    filterCallSeverity?: number, // - Optional - Only show calls with a severity rating of 0 (no severity) to 5 (maximum severity)
    filterCallHasNotes?: number // - Optional - Set to 1 to only show calls that have notes attached
}