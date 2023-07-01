import { _decorator, Component, Label } from 'cc';
import { GameStorage } from '../Storage/GameStorage';
import { PowerPresenter } from '../Presenter/PowerPresenter';
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
        let power = GameStorage.instance.maxPower.toString()
        let maxPower = GameStorage.instance.maxPower.toString()
        let territoryPower = GameStorage.instance.territoryPower.toString()
        let technoPower = GameStorage.instance.technoPower.toString()
        let heroPower = GameStorage.instance.heroPower.toString()
        let arsenalPower = GameStorage.instance.arsenalPower.toString()
        let professionPower = GameStorage.instance.professionPower.toString()
        let formationPower = GameStorage.instance.formationPower.toString()

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