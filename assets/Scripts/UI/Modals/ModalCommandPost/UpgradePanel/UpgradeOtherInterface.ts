import { _decorator, Component, Node, Label, Sprite, Button, SpriteFrame } from 'cc';
import { SpriteStorage } from '../../../../Storage/SpriteStorage';
import { TypesObjects } from '../../../../Static/TypesObjects';
import { CommandPostStorageController } from '../../../../Controllers/CommandPostStorageController';
import { GameStorageController } from '../../../../Controllers/GameStorageController';
import { ConfigStorageController } from '../../../../Controllers/ConfigStorageController';
import { ConvertLargeNumber } from '../../../../Other/ConvertLargeNumber';
import { InventoryStorageController } from '../../../../Controllers/InventoryStorageController';
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
        let actualLevel = "Ур. " + CommandPostStorageController.getLevelRepairShop();
        let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelRepairShop() + 1).toString();
        let level = GameStorageController.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpMainBuildingByLevel(CommandPostStorageController.getLevelRepairShop() + 1));
        let actualPower = GameStorageController.getPower().toString();
        let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelRepairShop() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateRepairBuilding(CommandPostStorageController.getLevelRepairShop() + 1));
        let requirementItems = InventoryStorageController.getQuantityByType(TypesItems.PLAN_COMMAND_POST) + "/" + (ConfigStorageController.getImprivementResourceNumberRepairBuilding(CommandPostStorageController.getLevelRepairShop() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.REPAIR_SHOP, CommandPostStorageController.getLevelRepairShop());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.REPAIR_SHOP, CommandPostStorageController.getLevelRepairShop() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_COMMAND_POST);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceMergeGoldMine() {
        let mainTitle = "Обьединение золотого рудника";
        let actualLevel = "Ур. " + CommandPostStorageController.getLevelMergeGoldMine();
        let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelMergeGoldMine() + 1).toString();
        let level = GameStorageController.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine() + 1));
        let actualPower = GameStorageController.getPower().toString();
        let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelMergeGoldMine() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine() + 1));
        let requirementItems = InventoryStorageController.getQuantityByType(TypesItems.PLAN_MERGE_GOLD_MINE) + "/" + (ConfigStorageController.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_GOLD_MINE);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceMergeTroopAir() {
        let mainTitle = "Юнит ВВС";
        let actualLevel = "Ур. " + CommandPostStorageController.getLevelMergeTroopAir();
        let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelMergeTroopAir() + 1).toString();
        let level = GameStorageController.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostStorageController.getLevelMergeTroopAir() + 1));
        let actualPower = GameStorageController.getPower().toString();
        let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelMergeTroopAir() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostStorageController.getLevelMergeTroopAir() + 1));
        let requirementItems = InventoryStorageController.getQuantityByType(TypesItems.PLAN_MERGE_TROOP_AIR) + "/" + (ConfigStorageController.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostStorageController.getLevelMergeTroopAir() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_AIR, CommandPostStorageController.getLevelMergeTroopAir());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_AIR, CommandPostStorageController.getLevelMergeTroopAir() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_TROOP_AIR);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceMergeTroopMarine() {
        let mainTitle = "Юнит ВМФ";
        let actualLevel = "Ур. " + CommandPostStorageController.getLevelMergeTroopMarine();
        let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelMergeTroopMarine() + 1).toString();
        let level = GameStorageController.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostStorageController.getLevelMergeTroopMarine() + 1));
        let actualPower = GameStorageController.getPower().toString();
        let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelMergeTroopMarine() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostStorageController.getLevelMergeTroopMarine() + 1));
        let requirementItems = InventoryStorageController.getQuantityByType(TypesItems.PLAN_MERGE_TROOP_MARINE) + "/" + (ConfigStorageController.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostStorageController.getLevelMergeTroopMarine() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_MARINE, CommandPostStorageController.getLevelMergeTroopMarine());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_MARINE, CommandPostStorageController.getLevelMergeTroopMarine() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_TROOP_MARINE);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceMergeTroopOverland() {
        let mainTitle = "Юнит СВ";
        let actualLevel = "Ур. " + CommandPostStorageController.getLevelMergeTroopOverland();
        let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelMergeTroopOverland() + 1).toString();
        let level = GameStorageController.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostStorageController.getLevelMergeTroopOverland() + 1));
        let actualPower = GameStorageController.getPower().toString();
        let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelMergeTroopOverland() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostStorageController.getLevelMergeTroopOverland() + 1));
        let requirementItems = InventoryStorageController.getQuantityByType(TypesItems.PLAN_MERGE_TROOP_OVERLAND) + "/" + (ConfigStorageController.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostStorageController.getLevelMergeTroopOverland() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_OVERLAND, CommandPostStorageController.getLevelMergeTroopOverland());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_OVERLAND, CommandPostStorageController.getLevelMergeTroopOverland() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_TROOP_OVERLAND);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceMergeBarracksAir() {
        let mainTitle = "Обьядинить базу ВВС";
        let actualLevel = "Ур. " + CommandPostStorageController.getLevelMergeBarracksAir();
        let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelMergeBarracksAir() + 1).toString();
        let level = GameStorageController.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelMergeBarracksAir() + 1));
        let actualPower = GameStorageController.getPower().toString();
        let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelMergeBarracksAir() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelMergeBarracksAir() + 1));
        let requirementItems = InventoryStorageController.getQuantityByType(TypesItems.PLAN_MERGE_BARRACK_AIR) + "/" + (ConfigStorageController.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelMergeBarracksAir() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelMergeBarracksAir());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelMergeBarracksAir() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_BARRACK_AIR);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceMergeBarracksMarine() {
        let mainTitle = "Синтезировать верфь";
        let actualLevel = "Ур. " + CommandPostStorageController.getLevelMergeBarracksMarine();
        let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelMergeBarracksMarine() + 1).toString();
        let level = GameStorageController.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelMergeBarracksMarine() + 1));
        let actualPower = GameStorageController.getPower().toString();
        let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelMergeBarracksMarine() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelMergeBarracksMarine() + 1));
        let requirementItems = InventoryStorageController.getQuantityByType(TypesItems.PLAN_MERGE_BARRACK_MARINE) + "/" + (ConfigStorageController.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelMergeBarracksMarine() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelMergeBarracksMarine());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelMergeBarracksMarine() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_BARRACK_MARINE);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceMergeBarracksOverland() {
        let mainTitle = "Синтезировать казарму";
        let actualLevel = "Ур. " + CommandPostStorageController.getLevelMergeBarracksOverland();
        let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelMergeBarracksOverland() + 1).toString();
        let level = GameStorageController.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelMergeBarracksOverland() + 1));
        let actualPower = GameStorageController.getPower().toString();
        let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelMergeBarracksOverland() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelMergeBarracksOverland() + 1));
        let requirementItems = InventoryStorageController.getQuantityByType(TypesItems.PLAN_MERGE_BARRACK_OVERLAND) + "/" + (ConfigStorageController.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelMergeBarracksOverland() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelMergeBarracksOverland());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelMergeBarracksOverland() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_BARRACK_OVERLAND);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceBuildGoldMine() {
        let mainTitle = "Строительство золотого рудника";
        let actualLevel = "Ур. " + CommandPostStorageController.getLevelMergeGoldMine();
        let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelMergeGoldMine() + 1).toString();
        let level = GameStorageController.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine() + 1));
        let actualPower = GameStorageController.getPower().toString();
        let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelMergeGoldMine() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine() + 1));
        let requirementItems = InventoryStorageController.getQuantityByType(TypesItems.PLAN_BUILD_GOLD_MINE) + "/" + (ConfigStorageController.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_BUILD_GOLD_MINE);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceBuildBarracksAir() {
        let mainTitle = "Построить базу ВВС";
        let actualLevel = "Ур. " + CommandPostStorageController.getLevelBuildBarracksAir();
        let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelBuildBarracksAir() + 1).toString();
        let level = GameStorageController.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelBuildBarracksAir() + 1));
        let actualPower = GameStorageController.getPower().toString();
        let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelBuildBarracksAir() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelBuildBarracksAir() + 1));
        let requirementItems = InventoryStorageController.getQuantityByType(TypesItems.PLAN_BUILD_BARRACK_AIR) + "/" + (ConfigStorageController.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelBuildBarracksAir() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelBuildBarracksAir());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelBuildBarracksAir() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_BUILD_BARRACK_AIR);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceBuildBarracksMarine() {
        let mainTitle = "Построить верфь";
        let actualLevel = "Ур. " + CommandPostStorageController.getLevelBuildBarracksMarine();
        let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelBuildBarracksMarine() + 1).toString();
        let level = GameStorageController.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelBuildBarracksMarine() + 1));
        let actualPower = GameStorageController.getPower().toString();
        let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelBuildBarracksMarine() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelBuildBarracksMarine() + 1));
        let requirementItems = InventoryStorageController.getQuantityByType(TypesItems.PLAN_BUILD_BARRACK_MARINE) + "/" + (ConfigStorageController.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelBuildBarracksMarine() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelBuildBarracksMarine());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelBuildBarracksMarine() + 1);
        let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_BUILD_BARRACK_MARINE);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    }

    updateInterfaceBuildBarracksOverland() {
        let mainTitle = "Построить казарму";
        let actualLevel = "Ур. " + CommandPostStorageController.getLevelBuildBarracksOverland();
        let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelBuildBarracksOverland() + 1).toString();
        let level = GameStorageController.getLevel().toString();
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelBuildBarracksOverland() + 1));
        let actualPower = GameStorageController.getPower().toString();
        let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelBuildBarracksOverland() + 1).toString();
        let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelBuildBarracksOverland() + 1));
        let requirementItems = InventoryStorageController.getQuantityByType(TypesItems.PLAN_BUILD_BARRACK_OVERLAND) + "/" + (ConfigStorageController.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelBuildBarracksOverland() + 1));
        let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelBuildBarracksOverland());
        let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelBuildBarracksOverland() + 1);
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