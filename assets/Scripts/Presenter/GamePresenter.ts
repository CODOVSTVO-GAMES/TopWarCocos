import { ConfigPresenter } from "./ConfigPresenter";
import { GameModel } from "../Model/GameModel";
import { HeaderView } from "../View/HeaderView";

export class GamePresenter {

    public static addCoins(value: number) {
        GameModel.instance.coins += value
        HeaderView.instance.renderCoins()
    }

    public static reduceCoins(value: number) {
        GameModel.instance.coins -= value
        HeaderView.instance.renderCoins()
    }

    public static addGems(value: number) {
        GameModel.instance.gems += value
        HeaderView.instance.renderGems()
    }

    public static reduceGems(value: number) {
        GameModel.instance.gems -= value
        HeaderView.instance.renderGems()
    }

    public static addExperience(value: number) {
        GameModel.instance.experience += value
        if (GameModel.instance.experience > ConfigPresenter.getLevelExpirienceByLevel(GameModel.instance.level)) {
            GameModel.instance.level = ConfigPresenter.getLevelByExpirience(GameModel.instance.experience)
            HeaderView.instance.renderLevel()
        }
        HeaderView.instance.renderFillLevel()
    }

    public static addEnergy(value: number) {
        GameModel.instance.energy += value
        HeaderView.instance.renderPower()
    }

    public static reduceEnergy(value: number) {
        GameModel.instance.energy -= value
        HeaderView.instance.renderPower()
    }

    public static updateActualPowerAndMaxPower() {
        let sum =
            GameModel.instance.territoryPower +
            GameModel.instance.technoPower +
            GameModel.instance.heroPower +
            GameModel.instance.arsenalPower +
            GameModel.instance.professionPower +
            GameModel.instance.formationPower

        GameModel.instance.power = sum

        if (GameModel.instance.maxPower < sum) {
            GameModel.instance.maxPower
        }
    }

    public static addTerritoryPower(value: number) {
        GameModel.instance.territoryPower += value
        HeaderView.instance.renderPower()
        this.updateActualPowerAndMaxPower()
    }

    public static addTechnoPower(value: number) {
        GameModel.instance.technoPower += value
        HeaderView.instance.renderPower()
        this.updateActualPowerAndMaxPower()
    }

    public static addHeroPower(value: number) {
        GameModel.instance.heroPower += value
        HeaderView.instance.renderPower()
        this.updateActualPowerAndMaxPower()
    }

    public static addArsenalPower(value: number) {
        GameModel.instance.arsenalPower += value
        HeaderView.instance.renderPower()
        this.updateActualPowerAndMaxPower()
    }

    public static addProfessionPower(value: number) {
        GameModel.instance.professionPower += value
        HeaderView.instance.renderPower()
        this.updateActualPowerAndMaxPower()
    }

    public static addFormationPower(value: number) {
        GameModel.instance.formationPower += value
        HeaderView.instance.renderPower()
        this.updateActualPowerAndMaxPower()
    }
}