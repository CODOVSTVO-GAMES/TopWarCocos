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
}
