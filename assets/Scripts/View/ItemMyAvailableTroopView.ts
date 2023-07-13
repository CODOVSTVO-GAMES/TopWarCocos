import { _decorator, Component, Label, Sprite } from 'cc';
import { SpriteModel } from '../Model/SpriteModel';
import { BattlePresenter } from '../Presenter/BattlePresenter';
import { BattleModel } from '../Model/BattleModel';
const { ccclass, property } = _decorator;

@ccclass('ItemMyAvailableTroopView')
export class ItemMyAvailableTroopView extends Component {

    @property({ type: Label })
    private levelTroopText: Label

    @property({ type: Label })
    private quantityTroopText: Label

    @property({ type: Label })
    private hpTroopText: Label

    @property({ type: Sprite })
    private spriteTroop: Sprite

    private index: number

    public eventClickOnMyAvailableTroop() {
        BattlePresenter.processingClickOnItemMyAvailableTroop(this.index)
    }

    public renderInterface(index: number) {
        this.index = index

        // let troopBattle = BattleModel.instance.myAvailableTroops[this.index]
        // let levelTroopText = "Ур. " + troopBattle.levelTroop.toString()
        // let quantityTroopText = troopBattle.quantityTroop.toString()
        // let hpTroopText = troopBattle.activeHp.toString()
        // let spriteTroop = SpriteModel.instance.getObjectSprite(troopBattle.typeTroop, troopBattle.levelTroop)

        // this.levelTroopText.string = levelTroopText
        // this.quantityTroopText.string = quantityTroopText
        // this.hpTroopText.string = hpTroopText
        // this.spriteTroop.spriteFrame = spriteTroop
    }
}