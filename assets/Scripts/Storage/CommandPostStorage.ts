import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('CommandPostStorage')
export class CommandPostStorage extends Component {

    public static instance: CommandPostStorage;

    public levelCommandPost: number;
    public levelRepairShop: number;

    public levelMergeGoldMine: number;
    public levelBuildGoldMine: number;

    public levelMergeTroopAir: number;
    public levelMergeBarracksAir: number;
    public levelBuildBarracksAir: number;

    public levelMergeTroopMarine: number;
    public levelMergeBarracksMarine: number;
    public levelBuildBarracksMarine: number;

    public levelMergeTroopOverland: number;
    public levelMergeBarracksOverland: number;
    public levelBuildBarracksOverland: number;

    onLoad() {
        CommandPostStorage.instance = this;
    }

    start() {
        this.levelCommandPost = 1;
        this.levelRepairShop = 1;

        this.levelMergeGoldMine = 1;
        this.levelBuildGoldMine = 1;

        this.levelMergeTroopAir = 1;
        this.levelMergeBarracksAir = 1;
        this.levelBuildBarracksAir = 1;

        this.levelMergeTroopMarine = 1;
        this.levelMergeBarracksMarine = 1;
        this.levelBuildBarracksMarine = 1;

        this.levelMergeTroopOverland = 1;
        this.levelMergeBarracksOverland = 1;
        this.levelBuildBarracksOverland = 1;
    }
}

