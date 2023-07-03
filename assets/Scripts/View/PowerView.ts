import { _decorator, Component, Label } from 'cc';
import { PowerPresenter } from '../Presenter/PowerPresenter';
import { GameModel } from '../Model/GameModel';
const { ccclass, property } = _decorator;

@ccclass('PowerView')
export class PowerView extends Component {

    public static instance: PowerView

    @property({ type: Label })
    public power: Label

    @property({ type: Label })
    public maxPower: Label

    @property({ type: Label })
    public territoryPower: Label

    @property({ type: Label })
    public technoPower: Label

    @property({ type: Label })
    public heroPower: Label

    @property({ type: Label })
    public arsenalPower: Label

    @property({ type: Label })
    public professionPower: Label

    @property({ type: Label })
    public formationPower: Label

    protected onLoad(): void {
        PowerView.instance = this
    }

    public eventUpgradeTerritoryPower() {
        PowerPresenter.processingUpgradeTerritoryPower()
    }

    public eventUpgradeTechnoPower() {
        PowerPresenter.processingUpgradeTechnoPower()
    }

    public eventUpgradeHeroPower() {
        PowerPresenter.processingUpgradeHeroPower()
    }

    public eventUpgradeArsenalPower() {
        PowerPresenter.processingUpgradeArsenalPower()
    }

    public eventUpgradeProfessionPower() {
        PowerPresenter.processingUpgradeProfessionPower()
    }

    public eventUpgradeFormationPower() {
        PowerPresenter.processingUpgradeFormationPower()
    }

    public renderInterface() {
        let power = GameModel.instance.maxPower.toString()
        let maxPower = GameModel.instance.maxPower.toString()
        let territoryPower = GameModel.instance.territoryPower.toString()
        let technoPower = GameModel.instance.technoPower.toString()
        let heroPower = GameModel.instance.heroPower.toString()
        let arsenalPower = GameModel.instance.arsenalPower.toString()
        let professionPower = GameModel.instance.professionPower.toString()
        let formationPower = GameModel.instance.formationPower.toString()

        this.power.string = power
        this.maxPower.string = maxPower
        this.territoryPower.string = territoryPower
        this.technoPower.string = technoPower
        this.heroPower.string = heroPower
        this.arsenalPower.string = arsenalPower
        this.professionPower.string = professionPower
        this.formationPower.string = formationPower
    }
}