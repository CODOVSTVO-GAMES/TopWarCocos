import { _decorator, Component, CCInteger } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CommandPostStorage')
export class CommandPostStorage extends Component {

    public static instance: CommandPostStorage;

    @property({ type: CCInteger })
    public levelCommandPost: number
    @property({ type: CCInteger })
    public levelRepairShop: number

    @property({ type: CCInteger })
    public levelMergeGoldMine: number
    @property({ type: CCInteger })
    public levelBuildGoldMine: number

    @property({ type: CCInteger })
    public levelMergeTroopAir: number
    @property({ type: CCInteger })
    public levelMergeBarracksAir: number
    @property({ type: CCInteger })
    public levelBuildBarracksAir: number

    @property({ type: CCInteger })
    public levelMergeTroopMarine: number
    @property({ type: CCInteger })
    public levelMergeBarracksMarine: number
    @property({ type: CCInteger })
    public levelBuildBarracksMarine: number

    @property({ type: CCInteger })
    public levelMergeTroopOverland: number
    @property({ type: CCInteger })
    public levelMergeBarracksOverland: number
    @property({ type: CCInteger })
    public levelBuildBarracksOverland: number

    public onLoad() {
        CommandPostStorage.instance = this
    }
}

