import { _decorator } from 'cc';
import { UserStorage } from '../UserStorage';

export class ControllerUserStorage {

    static setSessionHash(sessionHash: string) {
        UserStorage.instance.sessionHash = sessionHash;
    }

    static getSessionHash(): string {
        return UserStorage.instance.sessionHash;
    }

    static setSessionId(sessionId: number) {
        UserStorage.instance.sessionId = sessionId;
    }

    static getSessionId(): number {
        return UserStorage.instance.sessionId;
    }

    static setUserId(userId: string) {
        UserStorage.instance.userId = userId
    }

    static getUserId(): string {
        return UserStorage.instance.userId;
    }
}