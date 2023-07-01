import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('CommandPostModel')
export class CommandPostModel extends Component {

    public static instance: CommandPostModel

    public levelCommandPost: number = 1
    public levelRepairShop: number = 1
    public levelMergeGoldMine: number = 5
    public levelBuildGoldMine: number = 1
    public levelMergeTroopAir: number = 5
    public levelMergeTroopMarine: number = 5
    public levelMergeTroopOverland: number = 5
    public levelMergeBarracksAir: number = 5
    public levelMergeBarracksMarine: number = 5
    public levelMergeBarracksOverland: number = 5
    public levelBuildBarracksAir: number = 1
    public levelBuildBarracksMarine: number = 1
    public levelBuildBarracksOverland: number = 1

    protected onLoad(): void {
        CommandPostModel.instance = this
    }
}