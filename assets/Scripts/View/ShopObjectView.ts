import { _decorator, Component, Label, Button, Sprite } from 'cc';
import { CommandPostModel } from '../Model/CommandPostModel';
import { ConvertLargeNumber } from '../Other/ConvertLargeNumber';
import { SpriteStorage } from '../Model/SpriteStorage';
import { TypesObjects } from '../Static/TypesObjects';
import { ConfigStorageController } from '../Controllers/StorageControllers/ConfigStorageController';
import { GameModel } from '../Model/GameModel';
import { ShopObjectPresenter } from '../Presenter/ShopObjectPresenter';
const { ccclass, property } = _decorator;

@ccclass('ShopObjectView')
export class ShopObjectView extends Component {

    public static instance: ShopObjectView

    @property({ type: Label })
    private levelBarrackAir: Label

    @property({ type: Label })
    private levelBarrackMarine: Label

    @property({ type: Label })
    private levelBarrackOverland: Label

    @property({ type: Label })
    private levelGoldMine: Label

    @property({ type: Label })
    private costBuyBarrackAir: Label

    @property({ type: Label })
    private costBuyBarrackMarine: Label

    @property({ type: Label })
    private costBuyBarrackOverland: Label

    @property({ type: Label })
    private costBuyGoldMine: Label

    @property({ type: Sprite })
    private iconBarrackAir: Sprite

    @property({ type: Sprite })
    private iconBarrackMarine: Sprite

    @property({ type: Sprite })
    private iconBarrackOverland: Sprite

    @property({ type: Sprite })
    private iconGoldMine: Sprite

    @property({ type: Button })
    private buttonBarrackAir: Button

    @property({ type: Button })
    private buttonBarrackMarine: Button

    @property({ type: Button })
    private buttonBarrackOverland: Button

    @property({ type: Button })
    private buttonGoldMine: Button

    protected onLoad(): void {
        ShopObjectView.instance = this
    }

    public eventBuyObject(event, customEventData) {
        if (Number(customEventData) == 0) {
            this.buyBarrackOverland()
        }
        else if (Number(customEventData) == 1) {
            this.buyGoldMine()
        }
        else if (Number(customEventData) == 2) {
            this.buyBarrackMarine()
        }
        else if (Number(customEventData) == 3) {
            this.buyBarrackAir()
        }
    }

    private buyBarrackAir() {
        ShopObjectPresenter.processingBuyBarrackAir()
    }

    private buyBarrackMarine() {
        ShopObjectPresenter.processingBuyBarrackMarine()
    }

    private buyBarrackOverland() {
        ShopObjectPresenter.processingBuyBarrackOverland()
    }

    private buyGoldMine() {
        ShopObjectPresenter.processingBuyGoldMine()
    }

    public renderInterface() {
        let levelBuildBarracksAir = CommandPostModel.instance.levelBuildBarracksAir
        let levelBuildBarracksMarine = CommandPostModel.instance.levelBuildBarracksMarine
        let levelBuildBarracksOverland = CommandPostModel.instance.levelBuildBarracksOverland
        let levelBuildGoldMine = CommandPostModel.instance.levelBuildGoldMine

        let costBuyBarrackAir = ConvertLargeNumber.convert(ConfigStorageController.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, levelBuildBarracksAir))
        let costBuyBarrackMarine = ConvertLargeNumber.convert(ConfigStorageController.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, levelBuildBarracksMarine))
        let costBuyBarrackOverland = ConvertLargeNumber.convert(ConfigStorageController.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, levelBuildBarracksOverland))
        let costBuyGoldMine = ConvertLargeNumber.convert(ConfigStorageController.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, levelBuildGoldMine))

        let iconBarrackAir = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, levelBuildBarracksAir)
        let iconBarrackMarine = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, levelBuildBarracksMarine)
        let iconBarrackOverland = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, levelBuildBarracksOverland)
        let iconGoldMine = SpriteStorage.instance.getObjectSprite(TypesObjects.GOLD_MINE, levelBuildGoldMine)

        this.levelBarrackAir.string = levelBuildBarracksAir.toString()
        this.levelBarrackMarine.string = levelBuildBarracksMarine.toString()
        this.levelBarrackOverland.string = levelBuildBarracksOverland.toString()
        this.levelGoldMine.string = levelBuildGoldMine.toString()

        this.costBuyBarrackAir.string = costBuyBarrackAir
        this.costBuyBarrackMarine.string = costBuyBarrackMarine
        this.costBuyBarrackOverland.string = costBuyBarrackOverland
        this.costBuyGoldMine.string = costBuyGoldMine

        this.iconBarrackAir.spriteFrame = iconBarrackAir
        this.iconBarrackMarine.spriteFrame = iconBarrackMarine
        this.iconBarrackOverland.spriteFrame = iconBarrackOverland
        this.iconGoldMine.spriteFrame = iconGoldMine

        if (GameModel.instance.coins >= ConfigStorageController.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, levelBuildBarracksAir)) {
            this.buttonBarrackAir.interactable = true
        }
        else {
            this.buttonBarrackAir.interactable = false
        }

        if (GameModel.instance.coins >= ConfigStorageController.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, levelBuildBarracksMarine)) {
            this.buttonBarrackMarine.interactable = true
        }
        else {
            this.buttonBarrackMarine.interactable = false
        }

        if (GameModel.instance.coins >= ConfigStorageController.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, levelBuildBarracksOverland)) {
            this.buttonBarrackOverland.interactable = true
        }
        else {
            this.buttonBarrackOverland.interactable = false
        }

        if (GameModel.instance.coins >= ConfigStorageController.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, levelBuildGoldMine)) {
            this.buttonGoldMine.interactable = true
        }
        else {
            this.buttonGoldMine.interactable = false
        }
    }
}