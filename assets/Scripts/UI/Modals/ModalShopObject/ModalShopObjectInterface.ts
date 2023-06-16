import { _decorator, Button, Component, Label, Sprite } from 'cc';
import { SpriteStorage } from '../../../Storage/SpriteStorage';
import { TypesObjects } from '../../../Static/TypesObjects';
import { ControllerCommandPostStorage } from '../../../Storage/Controllers/ControllerCommandPostStorage';
import { ControllerConfigStorage } from '../../../Storage/Controllers/ControllerConfigStorage';
import { ControllerGameStorage } from '../../../Storage/Controllers/ControllerGameStorage';
import { ConvertLargeNumber } from '../../../Other/ConvertLargeNumber';
const { ccclass, property } = _decorator;

@ccclass('ModalShopObjectInterface')
export class ModalShopObjectInterface extends Component {

    public static instance: ModalShopObjectInterface;

    @property({ type: Label })
    private levelBarrackAir: Label;

    @property({ type: Label })
    private levelBarrackMarine: Label;

    @property({ type: Label })
    private levelBarrackOverland: Label;

    @property({ type: Label })
    private levelGoldMine: Label;

    @property({ type: Label })
    private costBuyBarrackAir: Label;

    @property({ type: Label })
    private costBuyBarrackMarine: Label;

    @property({ type: Label })
    private costBuyBarrackOverland: Label;

    @property({ type: Label })
    private costBuyGoldMine: Label;

    @property({ type: Sprite })
    private iconBarrackAir: Sprite;

    @property({ type: Sprite })
    private iconBarrackMarine: Sprite;

    @property({ type: Sprite })
    private iconBarrackOverland: Sprite;

    @property({ type: Sprite })
    private iconGoldMine: Sprite;

    @property({ type: Button })
    private buttonBarrackAir: Button;

    @property({ type: Button })
    private buttonBarrackMarine: Button;

    @property({ type: Button })
    private buttonBarrackOverland: Button;

    @property({ type: Button })
    private buttonGoldMine: Button;

    onLoad() {
        ModalShopObjectInterface.instance = this;
    }

    updateInterface() {
        let levelBuildBarracksAir = ControllerCommandPostStorage.getLevelBuildBarracksAir().toString();
        let levelBuildBarracksMarine = ControllerCommandPostStorage.getLevelBuildBarracksMarine().toString();
        let levelBuildBarracksOverland = ControllerCommandPostStorage.getLevelBuildBarracksOverland().toString();
        let levelBuildGoldMine = ControllerCommandPostStorage.getLevelBuildGoldMine().toString();
        let costBuyBarrackAir = ConvertLargeNumber.convert(ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelBuildBarracksAir()));
        let costBuyBarrackMarine = ConvertLargeNumber.convert(ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelBuildBarracksMarine()));
        let costBuyBarrackOverland = ConvertLargeNumber.convert(ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelBuildBarracksOverland()));
        let costBuyGoldMine = ConvertLargeNumber.convert(ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelBuildGoldMine()));
        let iconBarrackAir = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelBuildBarracksAir());
        let iconBarrackMarine = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelBuildBarracksMarine());
        let iconBarrackOverland = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelBuildBarracksOverland());
        let iconGoldMine = SpriteStorage.instance.getObjectSprite(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelBuildGoldMine());

        this.levelBarrackAir.string = levelBuildBarracksAir;
        this.levelBarrackMarine.string = levelBuildBarracksMarine;
        this.levelBarrackOverland.string = levelBuildBarracksOverland;
        this.levelGoldMine.string = levelBuildGoldMine;
        this.costBuyBarrackAir.string = costBuyBarrackAir;
        this.costBuyBarrackMarine.string = costBuyBarrackMarine;
        this.costBuyBarrackOverland.string = costBuyBarrackOverland;
        this.costBuyGoldMine.string = costBuyGoldMine;
        this.iconBarrackAir.spriteFrame = iconBarrackAir;
        this.iconBarrackMarine.spriteFrame = iconBarrackMarine;
        this.iconBarrackOverland.spriteFrame = iconBarrackOverland;
        this.iconGoldMine.spriteFrame = iconGoldMine;

        if (ControllerGameStorage.getCoins() >= ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelBuildBarracksAir())) {
            this.buttonBarrackAir.interactable = true;
        }
        else {
            this.buttonBarrackAir.interactable = false;
        }

        if (ControllerGameStorage.getCoins() >= ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelBuildBarracksMarine())) {
            this.buttonBarrackMarine.interactable = true;
        }
        else {
            this.buttonBarrackMarine.interactable = false;
        }

        if (ControllerGameStorage.getCoins() >= ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelBuildBarracksOverland())) {
            this.buttonBarrackOverland.interactable = true;
        }
        else {
            this.buttonBarrackOverland.interactable = false;
        }

        if (ControllerGameStorage.getCoins() >= ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelBuildGoldMine())) {
            this.buttonGoldMine.interactable = true;
        }
        else {
            this.buttonGoldMine.interactable = false;
        }
    }
}   