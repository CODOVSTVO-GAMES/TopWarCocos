import { _decorator, CCString, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UserStorage')
export class UserStorage extends Component {

    public static instance: UserStorage;

    @property({ type: CCString })
    public sessionHash: string;

    @property({ type: CCString })
    public sessionId: string;

    @property({ type: CCString })
    public nodeId: string;

    @property({ type: CCString })
    public userId: string = "cocos";

    onLoad() {
        UserStorage.instance = this;
    }

    setSessionHash(sessionHash: string) {
        this.sessionHash = sessionHash;
    }
    getSessionHash(): string {
        return this.sessionHash
    }

    setSessionId(sessionId: string) {
        this.sessionId = sessionId
    }

    getSessionId(): string {
        return this.sessionId
    }

    setNodeId(nodeId: string) {
        this.nodeId = nodeId
    }

    getNodeId(): string {
        return this.nodeId
    }

    setUserId(userId: string) {
        this.userId = userId
    }

    getUserId(): string {
        return this.userId
    }
}
