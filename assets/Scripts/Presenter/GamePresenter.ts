import { ConfigStorageController } from "../Controllers/StorageControllers/ConfigStorageController";
import { GameModel } from "../Model/GameModel";

export class GamePresenter {

    public static addCoins(value: number) {
        GameModel.instance.coins += value
    }

    public static reduceCoins(value: number) {
        GameModel.instance.coins -= value
    }

    public static addGems(value: number) {
        GameModel.instance.gems += value
    }

    public static reduceGems(value: number) {
        GameModel.instance.gems -= value
    }

    public static addExperience(value: number) {
        GameModel.instance.experience += value
        if (GameModel.instance.experience > ConfigStorageController.getLevelExpirienceByLevel(GameModel.instance.level)) {
            GameModel.instance.level = ConfigStorageController.getLevelByExpirience(GameModel.instance.experience)
        }
    }

    public static addEnergy(value: number) {
        GameModel.instance.energy += value
    }

    public static reduceEnergy(value: number) {
        GameModel.instance.energy -= value
    }
}