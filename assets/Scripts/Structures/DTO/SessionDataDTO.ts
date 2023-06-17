export class SessionDataDTO {
    accountId: string;
    sessionHash: string;
    sessionId: number;
    serverTime: number

    constructor(accountId: string, sessionHash: string, sessionId: number) {
        this.accountId = accountId
        this.sessionHash = sessionHash
        this.sessionId = sessionId
    }
}
