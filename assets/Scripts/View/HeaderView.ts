import { _decorator, Component, Label } from 'cc';
import { ConvertLargeNumber } from '../Other/ConvertLargeNumber';
import { GameModel } from '../Model/GameModel';
const { ccclass, property } = _decorator;

@ccclass('HeaderView')
export class HeaderView extends Component {

    public static instance: HeaderView

    @property({ type: Label })
    public coins: Label

    @property({ type: Label })
    public gems: Label

    @property({ type: Label })
    public level: Label

    @property({ type: Label })
    public power: Label

    protected onLoad(): void {
        HeaderView.instance = this
    }

    public renderCoins() {
        let coins = ConvertLargeNumber.convert(GameModel.instance.coins)

        this.coins.string = coins
    }

    public renderGems() {
        let gems = ConvertLargeNumber.convert(GameModel.instance.gems)

        this.gems.string = gems
    }

    public renderLevel() {
        let level = "Ур. " + GameModel.instance.level.toString()

        this.level.string = level
    }

    public renderPower() {
        let power = GameModel.instance.maxPower.toString()

        this.power.string = power
    }
}