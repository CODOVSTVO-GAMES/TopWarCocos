import { _decorator, Component, Label } from 'cc';
import { ObjectParameters } from '../ObjectParameters';
import { HomeMapStructure } from '../Static/HomeMapStructure';
import { BattleModel } from '../Model/BattleModel';
import { ConvertLargeNumber } from '../Other/ConvertLargeNumber';
import { ConfigModel } from '../Model/ConfigModel';
const { ccclass, property } = _decorator;

@ccclass('WallView')
export class WallView extends Component {

    @property({ type: Label })
    private priceBattle: Label

    @property({ type: ObjectParameters })
    private objectParameters: ObjectParameters

    protected start(): void {
        this.renderPriceBattle()
    }

    private renderPriceBattle() {
        let numberBattle = HomeMapStructure.structure[this.objectParameters.index].numberBattle
        let priceBattle = ConvertLargeNumber.convert(ConfigModel.instance.mapEnemyBattle[numberBattle - 1].powerBattle)

        this.priceBattle.string = priceBattle
    }
}