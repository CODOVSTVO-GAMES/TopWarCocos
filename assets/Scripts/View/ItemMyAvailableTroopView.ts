import { _decorator, Component, Label, Sprite } from 'cc';
import { SpriteModel } from '../Model/SpriteModel';
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

    private typeTroop: string
    private levelTroop: number
    private quantityTroop: number
    private hpTroop: number

    public eventClickOnItem() {
        console.log("AYF")
    }

    public renderInterface(typeTroop: string, levelTroop: number, quantityTroop: number, hpTroop: number) {
        this.typeTroop = typeTroop
        this.levelTroop = levelTroop
        this.quantityTroop = quantityTroop
        this.hpTroop = hpTroop

        let levelTroopText = "Ур. " + this.levelTroop.toString()
        let quantityTroopText = this.quantityTroop.toString()
        let hpTroopText = this.hpTroop.toString()
        let spriteTroop = SpriteModel.instance.getObjectSprite(this.typeTroop, this.levelTroop)

        this.levelTroopText.string = levelTroopText
        this.quantityTroopText.string = quantityTroopText
        this.hpTroopText.string = hpTroopText
        this.spriteTroop.spriteFrame = spriteTroop
    }
}