import { GameRewardModel } from "../Model/GameRewardModel";
import { TypesItems } from "../Static/TypesItems";
import { QuantityItem } from "../Structures/QuantityItem";
import { BackpackPresenter } from "./BackpackPresenter";
import { GamePresenter } from "./GamePresenter";

export class GameRewardPresenter {

    public static processingCollectReward() {
        for (let i = 0; i < GameRewardModel.instance.reward.length; i++) {
            let typeItem = GameRewardModel.instance.reward[i].type
            let quantityItem = GameRewardModel.instance.reward[i].quantity

            if (typeItem == TypesItems.EXPERIENCE) {
                GamePresenter.addExperience(quantityItem)
            }
            else {
                BackpackPresenter.addItemBackpack(typeItem, quantityItem)
            }
        }
        for (let i = 0; i < GameRewardModel.instance.itemsReward.length; i++) {
            GameRewardModel.instance.itemsReward[i].destroy()
        }
        GameRewardModel.instance.reward = []
        GameRewardModel.instance.itemsReward = []
    }

    public static initReward(reward: QuantityItem[]) {
        for (let i = 0; i < reward.length; i++) {
            GameRewardModel.instance.reward.push(reward[i])
        }
    }
}