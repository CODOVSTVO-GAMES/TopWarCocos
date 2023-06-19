import { _decorator, CCString, Component, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BuildingGlobalMapParameters')
export class BuildingGlobalMapParameters extends Component {

    @property({ type: CCString })
    public type: string

    @property({ type: Label })
    public level: Label

    @property({ type: Label })
    public accountId: Label


    setAccountId(accountId: string) {
        this.accountId.string = accountId
    }

    setLevel(level: string) {
        this.level.string = level
    }

    setType(type: string) {
        this.type = type
    }
}

