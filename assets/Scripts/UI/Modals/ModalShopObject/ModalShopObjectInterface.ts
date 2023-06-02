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
        this.levelBarrackAir.string = ControllerCommandPostStorage.getLevelBuildBarracksAir().toString();
        this.levelBarrackMarine.string = ControllerCommandPostStorage.getLevelBuildBarracksMarine().toString();
        this.levelBarrackOverland.string = ControllerCommandPostStorage.getLevelBuildBarracksOverland().toString();
        this.levelGoldMine.string = ControllerCommandPostStorage.getLevelBuildGoldMine().toString();

        this.costBuyBarrackAir.string = ConvertLargeNumber.convert(ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelBuildBarracksAir()));
        this.costBuyBarrackMarine.string = ConvertLargeNumber.convert(ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelBuildBarracksMarine()));
        this.costBuyBarrackOverland.string = ConvertLargeNumber.convert(ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelBuildBarracksOverland()));
        this.costBuyGoldMine.string = ConvertLargeNumber.convert(ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelBuildGoldMine()));

        this.iconBarrackAir.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelBuildBarracksAir());
        this.iconBarrackMarine.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelBuildBarracksMarine());
        this.iconBarrackOverland.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelBuildBarracksOverland());
        this.iconGoldMine.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelBuildGoldMine());

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