import { _decorator, CCBoolean, CCObject, CCString, Component } from 'cc';
import { TechnicalConfig } from '../Static/TechnicalConfig';
import { Cryptor } from '../Other/Cryptor';
import { Product } from '../Structures/Product';
const { ccclass, property } = _decorator;

@ccclass('UserStorage')
export class UserStorage extends Component {

    public static instance: UserStorage;

    @property({ type: CCString })
    public sessionHash: string

    @property({ type: CCString })
    public sessionId: number

    @property({ type: CCString })
    public userId: string

    @property({ type: CCBoolean })
    public isNewUser: boolean

    @property({ type: CCObject })
    public accountsId: Array<string>

    @property({ type: CCString })
    public accountId: string

    @property({ type: CCString })
    public permission: string

    @property({ type: CCString })
    public serverTime: number //временно в этом сторадже

    @property({ type: CCObject })
    public products: Array<Product> //временно в этом сторадже

    public onLoad() {
        UserStorage.instance = this
        this.sessionId = 0
        this.userId = TechnicalConfig.NAME
        this.sessionHash = Cryptor.getRandomHash()
    }
}
