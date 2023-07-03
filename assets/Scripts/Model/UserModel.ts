import { _decorator, Component } from 'cc';
import { TechnicalConfig } from '../Static/TechnicalConfig';
import { Cryptor } from '../Other/Cryptor';
import { Product } from '../Structures/Product';
const { ccclass } = _decorator;

@ccclass('UserModel')
export class UserModel extends Component {

    public static instance: UserModel

    public sessionHash: string
    public sessionId: number
    public userId: string
    public isNewUser: boolean
    public accountsId: string[]
    public accountId: string
    public permission: string
    public serverTime: number
    public products: Product[]

    protected onLoad(): void {
        UserModel.instance = this

        this.sessionId = 0
        this.userId = TechnicalConfig.NAME
        this.sessionHash = Cryptor.getRandomHash()
    }
}
