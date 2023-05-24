import { _decorator, Component, Node, Label, Sprite, Button } from 'cc';
import { SpriteStorage } from '../../../../Storage/SpriteStorage';
import { TypesObjects } from '../../../../Static/TypesObjects';
import { ControllerCommandPostStorage } from '../../../../Storage/Controllers/ControllerCommandPostStorage';
import { ControllerGameStorage } from '../../../../Storage/Controllers/ControllerGameStorage';
import { ControllerConfigStorage } from '../../../../Storage/Controllers/ControllerConfigStorage';
import { ConvertLargeNumber } from '../../../../Other/ConvertLargeNumber';
import { ControllerInventoryStorage } from '../../../../Storage/Controllers/ControllerInventoryStorage';
import { TypesItems } from '../../../../Static/TypesItems';
const { ccclass, property } = _decorator;

@ccclass('UpgradeOtherInterface')
export class UpgradeOtherInterface extends Component {

    public static instance: UpgradeOtherInterface;

    @property({ type: Label })
    public mainTitle: Label;

    @property({ type: Label })
    public actualLevelObject_0: Label;

    @property({ type: Label })
    public actualLevelObject_1: Label;

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



    @property({ type: Label })
    public requirementCoins: Label;

    @property({ type: Label })
    public requirementItems: Label;



    @property({ type: Sprite })
    public actualSpriteObject: Sprite;

    @property({ type: Sprite })
    public nextSpriteObject: Sprite;

    @property({ type: Node })
    public btnUpgrade: Node;

    @property({ type: Node })
    public btnGetItems: Node;

    onLoad() {
        UpgradeOtherInterface.instance = this;
    }

    updateInterfaceRepairShop() {
        let levelObject = ControllerCommandPostStorage.getLevelRepairShop();
        this.mainTitle.string = "Ремонтный цех";
        this.actualLevelObject_0.string = levelObject.toString();
        this.actualLevelObject_1.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpMainBuildingByLevel(levelObject + 1));
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = "+" + ControllerConfigStorage.getPowerMainBuildingByLevel(levelObject + 1).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.REPAIR_SHOP, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.REPAIR_SHOP, levelObject + 1);

        this.requirementCoins.string = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/0";
        this.requirementItems.string = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_MAX_MAINBUILDING) + "/0";
    }

    updateInterfaceMergeGoldMine() {
        let levelObject = ControllerCommandPostStorage.getLevelMergeGoldMine();
        this.mainTitle.string = "Обьединение золотого рудника";
        this.actualLevelObject_0.string = levelObject.toString();
        this.actualLevelObject_1.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, levelObject + 1));
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = "+" + ControllerConfigStorage.getPowerBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, levelObject + 1).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.GOLD_MINE, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.GOLD_MINE, levelObject + 1);

        this.requirementCoins.string = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/0";
        this.requirementItems.string = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_MAX_GOLD_MINE) + "/0";
    }

    updateInterfaceMergeTroopAir() {
        let levelObject = ControllerCommandPostStorage.getLevelMergeTroopAir();
        this.mainTitle.string = "Юнит ВВС";
        this.actualLevelObject_0.string = levelObject.toString();
        this.actualLevelObject_1.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, levelObject + 1));
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = "+" + ControllerConfigStorage.getPowerUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, levelObject + 1).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.TROOP_AIR, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.TROOP_AIR, levelObject + 1);

        this.requirementCoins.string = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/0";
        this.requirementItems.string = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_MAX_AIR) + "/0";
    }

    updateInterfaceMergeTroopMarine() {
        let levelObject = ControllerCommandPostStorage.getLevelMergeTroopMarine();
        this.mainTitle.string = "Юнит ВМФ";
        this.actualLevelObject_0.string = levelObject.toString();
        this.actualLevelObject_1.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, levelObject + 1));
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = "+" + ControllerConfigStorage.getPowerUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, levelObject + 1).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.TROOP_MARINE, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.TROOP_MARINE, levelObject + 1);

        this.requirementCoins.string = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/0";
        this.requirementItems.string = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_MAX_MARINE) + "/0";
    }

    updateInterfaceMergeTroopOverland() {
        let levelObject = ControllerCommandPostStorage.getLevelMergeTroopOverland();
        this.mainTitle.string = "Юнит СВ";
        this.actualLevelObject_0.string = levelObject.toString();
        this.actualLevelObject_1.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, levelObject + 1));
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = "+" + ControllerConfigStorage.getPowerUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, levelObject + 1).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.TROOP_OVERLAND, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.TROOP_OVERLAND, levelObject + 1);

        this.requirementCoins.string = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/0";
        this.requirementItems.string = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_MAX_OVERLAND) + "/0";
    }

    updateInterfaceMergeBarracksAir() {
        let levelObject = ControllerCommandPostStorage.getLevelMergeBarracksAir();
        this.mainTitle.string = "Синтезировать казарму";
        this.actualLevelObject_0.string = levelObject.toString();
        this.actualLevelObject_1.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, levelObject + 1));
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = "+" + ControllerConfigStorage.getPowerBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, levelObject + 1).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.BARRACKS_AIR, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.BARRACKS_AIR, levelObject + 1);

        this.requirementCoins.string = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/0";
        this.requirementItems.string = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_MAX_BARRACK_AIR) + "/0";
    }

    updateInterfaceMergeBarracksMarine() {
        let levelObject = ControllerCommandPostStorage.getLevelMergeBarracksMarine();
        this.mainTitle.string = "Синтезировать верфь";
        this.actualLevelObject_0.string = levelObject.toString();
        this.actualLevelObject_1.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, levelObject + 1));
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = "+" + ControllerConfigStorage.getPowerBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, levelObject + 1).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.BARRACKS_MARINE, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.BARRACKS_MARINE, levelObject + 1);

        this.requirementCoins.string = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/0";
        this.requirementItems.string = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_MAX_BARRACK_MARINE) + "/0";
    }

    updateInterfaceMergeBarracksOverland() {
        let levelObject = ControllerCommandPostStorage.getLevelMergeBarracksOverland();
        this.mainTitle.string = "Обьядинить базу ВВС";
        this.actualLevelObject_0.string = levelObject.toString();
        this.actualLevelObject_1.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, levelObject + 1));
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = "+" + ControllerConfigStorage.getPowerBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, levelObject + 1).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.BARRACKS_OVERLAND, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.BARRACKS_OVERLAND, levelObject + 1);

        this.requirementCoins.string = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/0";
        this.requirementItems.string = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_MAX_BARRACK_OVERLAND) + "/0";
    }

    updateInterfaceBuildGoldMine() {
        let levelObject = ControllerCommandPostStorage.getLevelBuildGoldMine();
        this.mainTitle.string = "Строительство золотого рудника";
        this.actualLevelObject_0.string = levelObject.toString();
        this.actualLevelObject_1.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, levelObject + 1));
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = "+" + ControllerConfigStorage.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, levelObject + 1).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.GOLD_MINE, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.GOLD_MINE, levelObject + 1);

        this.requirementCoins.string = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/0";
        this.requirementItems.string = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_CREATE_GOLD_MINE) + "/0";
    }

    updateInterfaceBuildBarracksAir() {
        let levelObject = ControllerCommandPostStorage.getLevelBuildBarracksAir();
        this.mainTitle.string = "Построить базу ВВС";
        this.actualLevelObject_0.string = levelObject.toString();
        this.actualLevelObject_1.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, levelObject + 1));
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = "+" + ControllerConfigStorage.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, levelObject + 1).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.BARRACKS_AIR, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.BARRACKS_AIR, levelObject + 1);

        this.requirementCoins.string = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/0";
        this.requirementItems.string = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_CREATE_BARRACK_AIR) + "/0";
    }

    updateInterfaceBuildBarracksMarine() {
        let levelObject = ControllerCommandPostStorage.getLevelBuildBarracksMarine();
        this.mainTitle.string = "Построить верфь";
        this.actualLevelObject_0.string = levelObject.toString();
        this.actualLevelObject_1.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, levelObject + 1));
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = "+" + ControllerConfigStorage.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, levelObject + 1).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.BARRACKS_MARINE, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.BARRACKS_MARINE, levelObject + 1);

        this.requirementCoins.string = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/0";
        this.requirementItems.string = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_CREATE_BARRACK_MARINE) + "/0";
    }

    updateInterfaceBuildBarracksOverland() {
        let levelObject = ControllerCommandPostStorage.getLevelBuildBarracksOverland();
        this.mainTitle.string = "Построить казарму";
        this.actualLevelObject_0.string = levelObject.toString();
        this.actualLevelObject_1.string = levelObject.toString();
        this.nextLevelObject.string = (levelObject + 1).toString();
        this.level.string = ControllerGameStorage.getLevel().toString();
        this.receivedExperience.string = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, levelObject + 1));
        this.actualPower.string = ControllerGameStorage.getPower().toString();
        this.receivedPower.string = "+" + ControllerConfigStorage.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, levelObject + 1).toString();
        this.actualSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.BARRACKS_OVERLAND, levelObject);
        this.nextSpriteObject.spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.BARRACKS_OVERLAND, levelObject + 1);

        this.requirementCoins.string = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/0";
        this.requirementItems.string = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_CREATE_BARRACK_OVERLAND) + "/0";
    }

    openUpgrade(trigger: boolean) {
        this.btnUpgrade.active = true;
        this.btnGetItems.active = false;
        if (trigger) {
            this.btnUpgrade.getComponent(Button).interactable = true;
        }
        else {
            this.btnUpgrade.getComponent(Button).interactable = false;
        }
    }

    openGetItems() {
        this.btnUpgrade.active = false;
        this.btnGetItems.active = true;
    }
}