import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { SpriteStorage } from '../../../../Storage/SpriteStorage';
import { TypesObjects } from '../../../../Static/TypesObjects';
import { ControllerCommandPostStorage } from '../../../../Storage/Controllers/ControllerCommandPostStorage';
import { ControllerGameStorage } from '../../../../Storage/Controllers/ControllerGameStorage';
import { ControllerConfigStorage } from '../../../../Storage/Controllers/ControllerConfigStorage';
const { ccclass, property } = _decorator;

@ccclass('UpgradeOtherInterface')
export class UpgradeOtherInterface extends Component {

    public static instance: UpgradeOtherInterface;

    @property({ type: Label })
    public actualLevelObject: Label;

    @property({ type: Label })
    public nextLevelObject: Label;

    @property({ type: Label })
    public level: Label;

    @property({ type: Label })
    public receivedExperience: Label;

    @property({ type: Label })
    public actualPower: Label;

    @property({ type: Label })
    public receivedPower: Label;

    @property({ type: Sprite })
    public actualSpriteObject: Sprite;

    @property({ type: Sprite })
    public nextSpriteObject: Sprite;

    onLoad() {
        UpgradeOtherInterface.instance = this;
    }

    updateInterfaceMergeGoldMine() {
        let levelObject = ControllerCommandPostStorage.getLevelMergeGoldMine();
        this.actualLevelObject.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "";
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = ControllerConfigStorage.getPowerBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, levelObject).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.GOLD_MINE, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.GOLD_MINE, levelObject + 1);
    }

    updateInterfaceMergeTroopAir() {
        let levelObject = ControllerCommandPostStorage.getLevelMergeTroopAir();
        this.actualLevelObject.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "";
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = ControllerConfigStorage.getPowerUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, levelObject).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.TROOP_AIR, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.TROOP_AIR, levelObject + 1);
    }

    updateInterfaceMergeTroopMarine() {
        let levelObject = ControllerCommandPostStorage.getLevelMergeTroopMarine();
        this.actualLevelObject.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "";
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = ControllerConfigStorage.getPowerUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, levelObject).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.TROOP_MARINE, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.TROOP_MARINE, levelObject + 1);
    }

    updateInterfaceMergeTroopOverland() {
        let levelObject = ControllerCommandPostStorage.getLevelMergeTroopOverland();
        this.actualLevelObject.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "";
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = ControllerConfigStorage.getPowerUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, levelObject).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.TROOP_OVERLAND, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.TROOP_OVERLAND, levelObject + 1);
    }

    updateInterfaceMergeBarracksAir() {
        let levelObject = ControllerCommandPostStorage.getLevelMergeBarracksAir();
        this.actualLevelObject.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "";
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = ControllerConfigStorage.getPowerBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, levelObject).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.BARRACKS_AIR, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.GOLD_MINE, levelObject + 1);
    }

    updateInterfaceMergeBarracksMarine() {
        let levelObject = ControllerCommandPostStorage.getLevelMergeBarracksMarine();
        this.actualLevelObject.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "";
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = ControllerConfigStorage.getPowerBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, levelObject).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.BARRACKS_MARINE, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.GOLD_MINE, levelObject + 1);
    }

    updateInterfaceMergeBarracksOverland() {
        let levelObject = ControllerCommandPostStorage.getLevelMergeBarracksOverland();
        this.actualLevelObject.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "";
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = ControllerConfigStorage.getPowerBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, levelObject).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.BARRACKS_OVERLAND, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.GOLD_MINE, levelObject + 1);
    }

    updateInterfaceBuildGoldMine() {
        let levelObject = ControllerCommandPostStorage.getLevelBuildGoldMine();
        this.actualLevelObject.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "";
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = ControllerConfigStorage.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, levelObject).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.GOLD_MINE, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.GOLD_MINE, levelObject + 1);
    }

    updateInterfaceBuildBarracksAir() {
        let levelObject = ControllerCommandPostStorage.getLevelBuildBarracksAir()
        this.actualLevelObject.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "";
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = ControllerConfigStorage.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, levelObject).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.BARRACKS_AIR, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.GOLD_MINE, levelObject + 1);
    }

    updateInterfaceBuildBarracksMarine() {
        let levelObject = ControllerCommandPostStorage.getLevelBuildBarracksMarine();
        this.actualLevelObject.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "";
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = ControllerConfigStorage.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, levelObject).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.BARRACKS_MARINE, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.GOLD_MINE, levelObject + 1);
    }

    updateInterfaceBuildBarracksOverland() {
        let levelObject = ControllerCommandPostStorage.getLevelBuildBarracksOverland();
        this.actualLevelObject.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "";
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = ControllerConfigStorage.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, levelObject).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.BARRACKS_OVERLAND, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.GOLD_MINE, levelObject + 1);
    }
}