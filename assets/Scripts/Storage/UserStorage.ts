import { _decorator, CCString, Component } from 'cc';
import { TechnicalConfig } from '../Static/TechnicalConfig';
const { ccclass, property } = _decorator;

@ccclass('UserStorage')
export class UserStorage extends Component {

    public static instance: UserStorage;

    @property({ type: CCString })
    public sessionHash: string;

    @property({ type: CCString })
    public sessionId: number;

    @property({ type: CCString })
    public userId: string;

    onLoad() {
        UserStorage.instance = this;
        this.sessionId = 0
        this.userId = TechnicalConfig.NAME
    }
}
