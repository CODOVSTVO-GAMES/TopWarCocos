import { _decorator, Component, Label, Sprite } from 'cc';
import { SpriteModel } from '../Model/SpriteModel';
import { BattlePresenter } from '../Presenter/BattlePresenter';
import { TroopBattle } from '../Structures/TroopBattle';
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

    private troopBattle: TroopBattle

    public eventClickOnMyAvailableTroop() {
        BattlePresenter.processingClickOnItemMyAvailableTroop(this.troopBattle)
    }

    public renderInterface(troopBattle: TroopBattle) {
        this.troopBattle = troopBattle

        let levelTroopText = "Ур. " + this.troopBattle.levelTroop.toString()
        let quantityTroopText = this.troopBattle.quantityTroop.toString()
        let hpTroopText = this.troopBattle.activeHp.toString()
        let spriteTroop = SpriteModel.instance.getObjectSprite(this.troopBattle.typeTroop, this.troopBattle.levelTroop)

        this.levelTroopText.string = levelTroopText
        this.quantityTroopText.string = quantityTroopText
        this.hpTroopText.string = hpTroopText
        this.spriteTroop.spriteFrame = spriteTroop
    }
}