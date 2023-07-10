import { _decorator, Component, Node, instantiate } from 'cc';
import { GameRewardPresenter } from '../Presenter/GameRewardPresenter';
import { GameRewardModel } from '../Model/GameRewardModel';
import { PrefabsModel } from '../Model/PrefabsModel';
import { ItemBackpackView } from './ItemBackpackView';
const { ccclass, property } = _decorator;

@ccclass('GameRewardView')
export class GameRewardView extends Component {

    public static instance: GameRewardView

    @property({ type: Node })
    private parentContent: Node

    protected onLoad(): void {
        GameRewardView.instance = this;
    }

    public eventCollectReward() {
        GameRewardPresenter.processingCollectReward()
    }

    public renderInterface() {
        for (let i = 0; i < GameRewardModel.instance.reward.length; i++) {
            let object = instantiate(PrefabsModel.instance.getItemBackpack())
            let { type: typeItem, quantity: quantityItem } = GameRewardModel.instance.reward[i]

            object.parent = this.parentContent
            object.getComponent(ItemBackpackView).renderInterface(typeItem, quantityItem)
            GameRewardModel.instance.itemsReward.push(object)
        }
    }
}