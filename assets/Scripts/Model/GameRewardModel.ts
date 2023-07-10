import { _decorator, Component, Node } from 'cc';
import { QuantityItem } from '../Structures/QuantityItem';
const { ccclass } = _decorator;

@ccclass('GameRewardModel')
export class GameRewardModel extends Component {

    public static instance: GameRewardModel
    public reward: QuantityItem[] = []
    public itemsReward: Node[] = []

    protected onLoad(): void {
        GameRewardModel.instance = this
    }
}