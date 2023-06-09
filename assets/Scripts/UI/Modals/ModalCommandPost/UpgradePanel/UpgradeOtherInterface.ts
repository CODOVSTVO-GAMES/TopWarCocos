import { _decorator, Component, Node, Label, Sprite, Button, SpriteFrame } from 'cc';
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

    @property({ type: Sprite })
    public spriteUpgradeItem: Sprite;

    @property({ type: Node })
    public btnUpgrade: Node;

    @property({ type: Node })
    public btnGetItems: Node;

    onLoad() {
        UpgradeOtherInterface.instance = this;
    }

    private render(mainTitle: string, actualLevel: string, nextLevelObject: string, level: string, receivedExperience: string, actualPower: string, receivedPower: string, requirementCoins: string, requirementItems: string, actualSpriteObject: SpriteFrame, nextSpriteObject: SpriteFrame, spriteUpgradeItem: SpriteFrame) {
        this.mainTitle.string = mainTitle;
        this.actualLevelObject_0.string = actualLevel;
        this.actualLevelObject_1.string = actualLevel;
        this.nextLevelObject.string = nextLevelObject;
        this.level.string = level;
        this.receivedExperience.string = receivedExperience;
        this.actualPower.string = actualPower;
        this.receivedPower.string = receivedPower;
        this.requirementCoins.string = requirementCoins;
        this.requirementItems.string = requirementItems;
        this.actualSpriteObject.spriteFrame = actualSpriteObject;
        this.nextSpriteObject.spriteFrame = nextSpriteObject;
        this.spriteUpgradeItem.spriteFrame = spriteUpgradeItem;
    }

    updateInterfaceRepairShop() {
        let mainTitle = "Ремонтный цех";
        let actualLevel = "Ур. " + ControllerCommandPostStorage.getLevelRepairShop();
        let nextLevelObject = "Ур. " + (ControllerCommandPostStorage.getLevelRepairShop() + 1).toString();
        let level = ControllerGameStorage.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpMainBuildingByLevel(ControllerCommandPostStorage.getLevelRepairShop() + 1));
        let actualPower = ControllerGameStorage.getPower().toString();
        let receivedPower = "+" + ControllerConfigStorage.getPowerMainBuildingByLevel(ControllerCommandPostStorage.getLevelRepairShop() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/" + ConvertLargeNumber.convert(ControllerConfigStorage.getPriceUpdateRepairBuilding(ControllerCommandPostStorage.getLevelRepairShop() + 1));
        let requirementItems = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_COMMAND_POST) + "/" + (ControllerConfigStorage.getImprivementResourceNumberRepairBuilding(ControllerCommandPostStorage.getLevelRepairShop() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.REPAIR_SHOP, ControllerCommandPostStorage.getLevelRepairShop());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.REPAIR_SHOP, ControllerCommandPostStorage.getLevelRepairShop() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_COMMAND_POST);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceMergeGoldMine() {
        let mainTitle = "Обьединение золотого рудника";
        let actualLevel = "Ур. " + ControllerCommandPostStorage.getLevelMergeGoldMine();
        let nextLevelObject = "Ур. " + (ControllerCommandPostStorage.getLevelMergeGoldMine() + 1).toString();
        let level = ControllerGameStorage.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelMergeGoldMine() + 1));
        let actualPower = ControllerGameStorage.getPower().toString();
        let receivedPower = "+" + ControllerConfigStorage.getPowerMainBuildingByLevel(ControllerCommandPostStorage.getLevelMergeGoldMine() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/" + ConvertLargeNumber.convert(ControllerConfigStorage.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelMergeGoldMine() + 1));
        let requirementItems = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_MERGE_GOLD_MINE) + "/" + (ControllerConfigStorage.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelMergeGoldMine() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelMergeGoldMine());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelMergeGoldMine() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_GOLD_MINE);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceMergeTroopAir() {
        let mainTitle = "Юнит ВВС";
        let actualLevel = "Ур. " + ControllerCommandPostStorage.getLevelMergeTroopAir();
        let nextLevelObject = "Ур. " + (ControllerCommandPostStorage.getLevelMergeTroopAir() + 1).toString();
        let level = ControllerGameStorage.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, ControllerCommandPostStorage.getLevelMergeTroopAir() + 1));
        let actualPower = ControllerGameStorage.getPower().toString();
        let receivedPower = "+" + ControllerConfigStorage.getPowerMainBuildingByLevel(ControllerCommandPostStorage.getLevelMergeTroopAir() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/" + ConvertLargeNumber.convert(ControllerConfigStorage.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, ControllerCommandPostStorage.getLevelMergeTroopAir() + 1));
        let requirementItems = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_MERGE_TROOP_AIR) + "/" + (ControllerConfigStorage.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, ControllerCommandPostStorage.getLevelMergeTroopAir() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_AIR, ControllerCommandPostStorage.getLevelMergeTroopAir());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_AIR, ControllerCommandPostStorage.getLevelMergeTroopAir() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_TROOP_AIR);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceMergeTroopMarine() {
        let mainTitle = "Юнит ВМФ";
        let actualLevel = "Ур. " + ControllerCommandPostStorage.getLevelMergeTroopMarine();
        let nextLevelObject = "Ур. " + (ControllerCommandPostStorage.getLevelMergeTroopMarine() + 1).toString();
        let level = ControllerGameStorage.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, ControllerCommandPostStorage.getLevelMergeTroopMarine() + 1));
        let actualPower = ControllerGameStorage.getPower().toString();
        let receivedPower = "+" + ControllerConfigStorage.getPowerMainBuildingByLevel(ControllerCommandPostStorage.getLevelMergeTroopMarine() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/" + ConvertLargeNumber.convert(ControllerConfigStorage.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, ControllerCommandPostStorage.getLevelMergeTroopMarine() + 1));
        let requirementItems = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_MERGE_TROOP_MARINE) + "/" + (ControllerConfigStorage.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, ControllerCommandPostStorage.getLevelMergeTroopMarine() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_MARINE, ControllerCommandPostStorage.getLevelMergeTroopMarine());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_MARINE, ControllerCommandPostStorage.getLevelMergeTroopMarine() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_TROOP_MARINE);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceMergeTroopOverland() {
        let mainTitle = "Юнит СВ";
        let actualLevel = "Ур. " + ControllerCommandPostStorage.getLevelMergeTroopOverland();
        let nextLevelObject = "Ур. " + (ControllerCommandPostStorage.getLevelMergeTroopOverland() + 1).toString();
        let level = ControllerGameStorage.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, ControllerCommandPostStorage.getLevelMergeTroopOverland() + 1));
        let actualPower = ControllerGameStorage.getPower().toString();
        let receivedPower = "+" + ControllerConfigStorage.getPowerMainBuildingByLevel(ControllerCommandPostStorage.getLevelMergeTroopOverland() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/" + ConvertLargeNumber.convert(ControllerConfigStorage.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, ControllerCommandPostStorage.getLevelMergeTroopOverland() + 1));
        let requirementItems = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_MERGE_TROOP_OVERLAND) + "/" + (ControllerConfigStorage.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, ControllerCommandPostStorage.getLevelMergeTroopOverland() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_OVERLAND, ControllerCommandPostStorage.getLevelMergeTroopOverland());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_OVERLAND, ControllerCommandPostStorage.getLevelMergeTroopOverland() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_TROOP_OVERLAND);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceMergeBarracksAir() {
        let mainTitle = "Обьядинить базу ВВС";
        let actualLevel = "Ур. " + ControllerCommandPostStorage.getLevelMergeBarracksAir();
        let nextLevelObject = "Ур. " + (ControllerCommandPostStorage.getLevelMergeBarracksAir() + 1).toString();
        let level = ControllerGameStorage.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelMergeBarracksAir() + 1));
        let actualPower = ControllerGameStorage.getPower().toString();
        let receivedPower = "+" + ControllerConfigStorage.getPowerMainBuildingByLevel(ControllerCommandPostStorage.getLevelMergeBarracksAir() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/" + ConvertLargeNumber.convert(ControllerConfigStorage.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelMergeBarracksAir() + 1));
        let requirementItems = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_MERGE_BARRACK_AIR) + "/" + (ControllerConfigStorage.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelMergeBarracksAir() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelMergeBarracksAir());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelMergeBarracksAir() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_BARRACK_AIR);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceMergeBarracksMarine() {
        let mainTitle = "Синтезировать верфь";
        let actualLevel = "Ур. " + ControllerCommandPostStorage.getLevelMergeBarracksMarine();
        let nextLevelObject = "Ур. " + (ControllerCommandPostStorage.getLevelMergeBarracksMarine() + 1).toString();
        let level = ControllerGameStorage.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelMergeBarracksMarine() + 1));
        let actualPower = ControllerGameStorage.getPower().toString();
        let receivedPower = "+" + ControllerConfigStorage.getPowerMainBuildingByLevel(ControllerCommandPostStorage.getLevelMergeBarracksMarine() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/" + ConvertLargeNumber.convert(ControllerConfigStorage.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelMergeBarracksMarine() + 1));
        let requirementItems = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_MERGE_BARRACK_MARINE) + "/" + (ControllerConfigStorage.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelMergeBarracksMarine() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelMergeBarracksMarine());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelMergeBarracksMarine() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_BARRACK_MARINE);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceMergeBarracksOverland() {
        let mainTitle = "Синтезировать казарму";
        let actualLevel = "Ур. " + ControllerCommandPostStorage.getLevelMergeBarracksOverland();
        let nextLevelObject = "Ур. " + (ControllerCommandPostStorage.getLevelMergeBarracksOverland() + 1).toString();
        let level = ControllerGameStorage.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelMergeBarracksOverland() + 1));
        let actualPower = ControllerGameStorage.getPower().toString();
        let receivedPower = "+" + ControllerConfigStorage.getPowerMainBuildingByLevel(ControllerCommandPostStorage.getLevelMergeBarracksOverland() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/" + ConvertLargeNumber.convert(ControllerConfigStorage.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelMergeBarracksOverland() + 1));
        let requirementItems = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_MERGE_BARRACK_OVERLAND) + "/" + (ControllerConfigStorage.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelMergeBarracksOverland() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelMergeBarracksOverland());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelMergeBarracksOverland() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_BARRACK_OVERLAND);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceBuildGoldMine() {
        let mainTitle = "Строительство золотого рудника";
        let actualLevel = "Ур. " + ControllerCommandPostStorage.getLevelMergeGoldMine();
        let nextLevelObject = "Ур. " + (ControllerCommandPostStorage.getLevelMergeGoldMine() + 1).toString();
        let level = ControllerGameStorage.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelMergeGoldMine() + 1));
        let actualPower = ControllerGameStorage.getPower().toString();
        let receivedPower = "+" + ControllerConfigStorage.getPowerMainBuildingByLevel(ControllerCommandPostStorage.getLevelMergeGoldMine() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/" + ConvertLargeNumber.convert(ControllerConfigStorage.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelMergeGoldMine() + 1));
        let requirementItems = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_BUILD_GOLD_MINE) + "/" + (ControllerConfigStorage.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelMergeGoldMine() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelMergeGoldMine());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelMergeGoldMine() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_BUILD_GOLD_MINE);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceBuildBarracksAir() {
        let mainTitle = "Построить базу ВВС";
        let actualLevel = "Ур. " + ControllerCommandPostStorage.getLevelBuildBarracksAir();
        let nextLevelObject = "Ур. " + (ControllerCommandPostStorage.getLevelBuildBarracksAir() + 1).toString();
        let level = ControllerGameStorage.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelBuildBarracksAir() + 1));
        let actualPower = ControllerGameStorage.getPower().toString();
        let receivedPower = "+" + ControllerConfigStorage.getPowerMainBuildingByLevel(ControllerCommandPostStorage.getLevelBuildBarracksAir() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/" + ConvertLargeNumber.convert(ControllerConfigStorage.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelBuildBarracksAir() + 1));
        let requirementItems = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_BUILD_BARRACK_AIR) + "/" + (ControllerConfigStorage.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelBuildBarracksAir() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelBuildBarracksAir());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelBuildBarracksAir() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_BUILD_BARRACK_AIR);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceBuildBarracksMarine() {
        let mainTitle = "Построить верфь";
        let actualLevel = "Ур. " + ControllerCommandPostStorage.getLevelBuildBarracksMarine();
        let nextLevelObject = "Ур. " + (ControllerCommandPostStorage.getLevelBuildBarracksMarine() + 1).toString();
        let level = ControllerGameStorage.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelBuildBarracksMarine() + 1));
        let actualPower = ControllerGameStorage.getPower().toString();
        let receivedPower = "+" + ControllerConfigStorage.getPowerMainBuildingByLevel(ControllerCommandPostStorage.getLevelBuildBarracksMarine() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/" + ConvertLargeNumber.convert(ControllerConfigStorage.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelBuildBarracksMarine() + 1));
        let requirementItems = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_BUILD_BARRACK_MARINE) + "/" + (ControllerConfigStorage.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelBuildBarracksMarine() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelBuildBarracksMarine());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelBuildBarracksMarine() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_BUILD_BARRACK_MARINE);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceBuildBarracksOverland() {
        let mainTitle = "Построить казарму";
        let actualLevel = "Ур. " + ControllerCommandPostStorage.getLevelBuildBarracksOverland();
        let nextLevelObject = "Ур. " + (ControllerCommandPostStorage.getLevelBuildBarracksOverland() + 1).toString();
        let level = ControllerGameStorage.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ControllerConfigStorage.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelBuildBarracksOverland() + 1));
        let actualPower = ControllerGameStorage.getPower().toString();
        let receivedPower = "+" + ControllerConfigStorage.getPowerMainBuildingByLevel(ControllerCommandPostStorage.getLevelBuildBarracksOverland() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(ControllerGameStorage.getCoins()) + "/" + ConvertLargeNumber.convert(ControllerConfigStorage.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelBuildBarracksOverland() + 1));
        let requirementItems = ControllerInventoryStorage.getQuantityByType(TypesItems.PLAN_BUILD_BARRACK_OVERLAND) + "/" + (ControllerConfigStorage.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelBuildBarracksOverland() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelBuildBarracksOverland());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelBuildBarracksOverland() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_BUILD_BARRACK_OVERLAND);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
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