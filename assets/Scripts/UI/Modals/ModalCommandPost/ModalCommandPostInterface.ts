import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { GameStorageController } from '../../../Controllers/StorageControllers/GameStorageController';
import { ConvertLargeNumber } from '../../../Other/ConvertLargeNumber';
import { CommandPostStorageController } from '../../../Controllers/StorageControllers/CommandPostStorageController';
import { SpriteStorage } from '../../../Storage/SpriteStorage';
import { TypesObjects } from '../../../Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('ModalCommandPostInterface')
export class ModalCommandPostInterface extends Component {

    public static instance: ModalCommandPostInterface;

    @property({ type: Label })
    public level: Label;

    @property({ type: Label })
    public coins: Label;

    @property({ type: Label })
    public gems: Label;

    @property({ type: Label })
    public levelCommandPost: Label;
    @property({ type: Sprite })
    public spriteCommandPost: Sprite;
    @property({ type: Node })
    public warningCommandPost: Node;

    @property({ type: Label })
    public levelRepairShop: Label;
    @property({ type: Sprite })
    public spriteRepairShop: Sprite;
    @property({ type: Node })
    public warningRepairShop: Node;

    @property({ type: Label })
    public levelMergeGoldMine: Label;
    @property({ type: Sprite })
    public spriteMergeGoldMine: Sprite;
    @property({ type: Node })
    public warningMergeGoldMine: Node;

    @property({ type: Label })
    public levelBuildGoldMine: Label;
    @property({ type: Sprite })
    public spriteBuildGoldMine: Sprite;
    @property({ type: Node })
    public warningBuildGoldMine: Node;

    @property({ type: Label })
    public levelMergeTroopAir: Label;
    @property({ type: Sprite })
    public spriteMergeTroopAir: Sprite;
    @property({ type: Node })
    public warningMergeTroopAir: Node;

    @property({ type: Label })
    public levelMergeBarracksAir: Label;
    @property({ type: Sprite })
    public spriteMergeBarracksAir: Sprite;
    @property({ type: Node })
    public warningMergeBarracksAir: Node;

    @property({ type: Label })
    public levelBuildBarracksAir: Label;
    @property({ type: Sprite })
    public spriteBuildBarracksAir: Sprite;
    @property({ type: Node })
    public warningBuildBarracksAir: Node;

    @property({ type: Label })
    public levelMergeTroopMarine: Label;
    @property({ type: Sprite })
    public spriteMergeTroopMarine: Sprite;
    @property({ type: Node })
    public warningMergeTroopMarine: Node;

    @property({ type: Label })
    public levelMergeBarracksMarine: Label;
    @property({ type: Sprite })
    public spriteMergeBarracksMarine: Sprite;
    @property({ type: Node })
    public warningMergeBarracksMarine: Node;

    @property({ type: Label })
    public levelBuildBarracksMarine: Label;
    @property({ type: Sprite })
    public spriteBuildBarracksMarine: Sprite;
    @property({ type: Node })
    public warningBuildBarracksMarine: Node;

    @property({ type: Label })
    public levelMergeTroopOverland: Label;
    @property({ type: Sprite })
    public spriteMergeTroopOverland: Sprite;
    @property({ type: Node })
    public warningMergeTroopOverland: Node;

    @property({ type: Label })
    public levelMergeBarracksOverland: Label;
    @property({ type: Sprite })
    public spriteMergeBarracksOverland: Sprite;
    @property({ type: Node })
    public warningMergeBarracksOverland: Node;

    @property({ type: Label })
    public levelBuildBarracksOverland: Label;
    @property({ type: Sprite })
    public spriteBuildBarracksOverland: Sprite;
    @property({ type: Node })
    public warningBuildBarracksOverland: Node;

    onLoad() {
        ModalCommandPostInterface.instance = this;
    }

    updateInterface() {
        this.level.string = "Ур. " + GameStorageController.getLevel().toString();
        this.coins.string = ConvertLargeNumber.convert(GameStorageController.getCoins());
        this.gems.string = ConvertLargeNumber.convert(GameStorageController.getGems());

        this.levelCommandPost.string = "Ур. " + CommandPostStorageController.getLevelCommandPost().toString();
        this.levelRepairShop.string = "Ур. " + CommandPostStorageController.getLevelRepairShop().toString();

        this.levelMergeGoldMine.string = "Ур. " + CommandPostStorageController.getLevelMergeGoldMine().toString();
        this.levelBuildGoldMine.string = "Ур. " + CommandPostStorageController.getLevelBuildGoldMine().toString();

        this.levelMergeTroopAir.string = "Ур. " + CommandPostStorageController.getLevelMergeTroopAir().toString();
        this.levelMergeBarracksAir.string = "Ур. " + CommandPostStorageController.getLevelMergeBarracksAir().toString();
        this.levelBuildBarracksAir.string = CommandPostStorageController.getLevelBuildBarracksAir().toString();

        this.levelMergeTroopMarine.string = "Ур. " + CommandPostStorageController.getLevelMergeTroopMarine().toString();
        this.levelMergeBarracksMarine.string = "Ур. " + CommandPostStorageController.getLevelMergeBarracksMarine().toString();
        this.levelBuildBarracksMarine.string = "Ур. " + CommandPostStorageController.getLevelBuildBarracksMarine().toString();

        this.levelMergeTroopOverland.string = "Ур. " + CommandPostStorageController.getLevelMergeTroopOverland().toString();
        this.levelMergeBarracksOverland.string = "Ур. " + CommandPostStorageController.getLevelMergeBarracksOverland().toString();
        this.levelBuildBarracksOverland.string = "Ур. " + CommandPostStorageController.getLevelBuildBarracksOverland().toString();

        this.spriteCommandPost.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.COMMAND_POST, CommandPostStorageController.getLevelCommandPost());
        this.spriteRepairShop.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.REPAIR_SHOP, CommandPostStorageController.getLevelRepairShop());

        this.spriteMergeGoldMine.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine());
        this.spriteBuildGoldMine.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelBuildGoldMine());

        this.spriteMergeTroopAir.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_AIR, CommandPostStorageController.getLevelMergeTroopAir());
        this.spriteMergeBarracksAir.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelMergeBarracksAir());
        this.spriteBuildBarracksAir.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelBuildBarracksAir());

        this.spriteMergeTroopMarine.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_MARINE, CommandPostStorageController.getLevelMergeTroopMarine());
        this.spriteMergeBarracksMarine.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelMergeBarracksMarine());
        this.spriteBuildBarracksMarine.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelBuildBarracksMarine());

        this.spriteMergeTroopOverland.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_OVERLAND, CommandPostStorageController.getLevelMergeTroopOverland());
        this.spriteMergeBarracksOverland.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelMergeBarracksOverland());
        this.spriteBuildBarracksOverland.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelBuildBarracksOverland());
    }
}

