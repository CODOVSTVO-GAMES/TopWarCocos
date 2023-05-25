import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { ControllerGameStorage } from '../../../Storage/Controllers/ControllerGameStorage';
import { ConvertLargeNumber } from '../../../Other/ConvertLargeNumber';
import { ControllerCommandPostStorage } from '../../../Storage/Controllers/ControllerCommandPostStorage';
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
        this.level.string = "Ур. " + ControllerGameStorage.getLevel().toString();
        this.coins.string = ConvertLargeNumber.convert(ControllerGameStorage.getCoins());
        this.gems.string = ConvertLargeNumber.convert(ControllerGameStorage.getGems());

        this.levelCommandPost.string = "Ур. " + ControllerCommandPostStorage.getLevelCommandPost().toString();
        this.levelRepairShop.string = "Ур. " + ControllerCommandPostStorage.getLevelRepairShop().toString();

        this.levelMergeGoldMine.string = "Ур. " + ControllerCommandPostStorage.getLevelMergeGoldMine().toString();
        this.levelBuildGoldMine.string = "Ур. " + ControllerCommandPostStorage.getLevelBuildGoldMine().toString();

        this.levelMergeTroopAir.string = "Ур. " + ControllerCommandPostStorage.getLevelMergeTroopAir().toString();
        this.levelMergeBarracksAir.string = "Ур. " + ControllerCommandPostStorage.getLevelMergeBarracksAir().toString();
        this.levelBuildBarracksAir.string = ControllerCommandPostStorage.getLevelBuildBarracksAir().toString();

        this.levelMergeTroopMarine.string = "Ур. " + ControllerCommandPostStorage.getLevelMergeTroopMarine().toString();
        this.levelMergeBarracksMarine.string = "Ур. " + ControllerCommandPostStorage.getLevelMergeBarracksMarine().toString();
        this.levelBuildBarracksMarine.string = "Ур. " + ControllerCommandPostStorage.getLevelBuildBarracksMarine().toString();

        this.levelMergeTroopOverland.string = "Ур. " + ControllerCommandPostStorage.getLevelMergeTroopOverland().toString();
        this.levelMergeBarracksOverland.string = "Ур. " + ControllerCommandPostStorage.getLevelMergeBarracksOverland().toString();
        this.levelBuildBarracksOverland.string = "Ур. " + ControllerCommandPostStorage.getLevelBuildBarracksOverland().toString();

        this.spriteCommandPost.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.COMMAND_POST, ControllerCommandPostStorage.getLevelCommandPost());
        this.spriteRepairShop.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.REPAIR_SHOP, ControllerCommandPostStorage.getLevelRepairShop());

        this.spriteMergeGoldMine.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelMergeGoldMine());
        this.spriteBuildGoldMine.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelBuildGoldMine());

        this.spriteMergeTroopAir.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_AIR, ControllerCommandPostStorage.getLevelMergeTroopAir());
        this.spriteMergeBarracksAir.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelMergeBarracksAir());
        this.spriteBuildBarracksAir.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelBuildBarracksAir());

        this.spriteMergeTroopMarine.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_MARINE, ControllerCommandPostStorage.getLevelMergeTroopMarine());
        this.spriteMergeBarracksMarine.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelMergeBarracksMarine());
        this.spriteBuildBarracksMarine.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelBuildBarracksMarine());

        this.spriteMergeTroopOverland.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_OVERLAND, ControllerCommandPostStorage.getLevelMergeTroopOverland());
        this.spriteMergeBarracksOverland.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelMergeBarracksOverland());
        this.spriteBuildBarracksOverland.spriteFrame = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelBuildBarracksOverland());
    }
}

