import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('CommandPostModel')
export class CommandPostModel extends Component {

    public static instance: CommandPostModel

    public levelCommandPost: number
    public levelRepairShop: number
    public levelMergeGoldMine: number
    public levelBuildGoldMine: number
    public levelMergeTroopAir: number
    public levelMergeTroopMarine: number
    public levelMergeTroopOverland: number
    public levelMergeBarracksAir: number
    public levelMergeBarracksMarine: number
    public levelMergeBarracksOverland: number
    public levelBuildBarracksAir: number
    public levelBuildBarracksMarine: number
    public levelBuildBarracksOverland: number
    protected onLoad(): void {
        CommandPostModel.instance = this
    }

    private assignStartingValues() {
        this.levelCommandPost = 1
        this.levelRepairShop = 1
        this.levelMergeGoldMine = 5
        this.levelBuildGoldMine = 1
        this.levelMergeTroopAir = 5
        this.levelMergeTroopMarine = 5
        this.levelMergeTroopOverland = 5
        this.levelMergeBarracksAir = 5
        this.levelMergeBarracksMarine = 5
        this.levelMergeBarracksOverland = 5
        this.levelBuildBarracksAir = 1
        this.levelBuildBarracksMarine = 1
        this.levelBuildBarracksOverland = 1
    }
}