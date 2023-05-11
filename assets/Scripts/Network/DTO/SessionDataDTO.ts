export class SessionDataDTO {
    userId: string;
    sessionHash: string;
    sessionId: number;
    constructor(userId: string, sessionHash: string, sessionId: number) {
        this.userId = userId
        this.sessionHash = sessionHash
        this.sessionId = sessionId
    }
}
