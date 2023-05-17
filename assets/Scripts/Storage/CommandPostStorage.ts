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
}

