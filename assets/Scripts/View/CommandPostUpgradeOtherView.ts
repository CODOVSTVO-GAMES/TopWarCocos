import { _decorator, Component, Node, Label, Sprite, SpriteFrame } from 'cc';
import { SecondaryInterface } from '../UI/SecondaryInterface';
import { TypesModals } from '../Static/TypesModals';
const { ccclass, property } = _decorator;

@ccclass('CommandPostUpgradeOtherView')
export class CommandPostUpgradeOtherView extends Component {

    public static instance: CommandPostUpgradeOtherView

    @property({ type: Label })
    public mainTitle: Label

    @property({ type: Label })
    public actualLevelObject_0: Label

    @property({ type: Label })
    public actualLevelObject_1: Label

    @property({ type: Label })
    public nextLevelObject: Label

    @property({ type: Label })
    public gameLevel: Label

    @property({ type: Label })
    public receivedExperience: Label

    @property({ type: Label })
    public actualPower: Label

    @property({ type: Label })
    public receivedPower: Label

    @property({ type: Label })
    public requirementCoins: Label

    @property({ type: Label })
    public requirementItems: Label

    @property({ type: Sprite })
    public spriteActualLevelObject: Sprite

    @property({ type: Sprite })
    public spriteNextLevelObject: Sprite

    @property({ type: Sprite })
    public spriteUpgradeItem: Sprite

    @property({ type: Node })
    public upgradeButton: Node

    @property({ type: Node })
    public getItemsButton: Node

    protected onLoad(): void {
        CommandPostUpgradeOtherView.instance = this
    }

    eventUpgradeOther() {
        let typeModal = SecondaryInterface.instance.getTypeActiveSecondLayoutModal();

        if (typeModal == TypesModals.UPGRATE_REPAIR_SHOP) this.eventUpgradeRepairShop()
        else if (typeModal == TypesModals.UPGRATE_MERGE_GOLD_MINE) this.eventUpgradeMergeGoldMine()
        else if (typeModal == TypesModals.UPGRATE_MERGE_TROOP_AIR) this.eventUpgradeMergeTroopAir()
        else if (typeModal == TypesModals.UPGRATE_MERGE_TROOP_MARINE) this.eventUpgradeMergeTroopMarine()
        else if (typeModal == TypesModals.UPGRATE_MERGE_TROOP_OVERLAND) this.eventUpgradeMergeBarracksOverland()
        else if (typeModal == TypesModals.UPGRATE_MERGE_BARRACK_AIR) this.eventUpgradeMergeBarracksAir()
        else if (typeModal == TypesModals.UPGRATE_MERGE_BARRACK_MARINE) this.eventUpgradeMergeBarracksMarine()
        else if (typeModal == TypesModals.UPGRATE_MERGE_BARRACK_OVERLAND) this.eventUpgradeMergeBarracksOverland()
        else if (typeModal == TypesModals.UPGRATE_BUILD_GOLD_MINE) this.eventUpgradeBuildGoldMine()
        else if (typeModal == TypesModals.UPGRATE_BUILD_BARRACK_AIR) this.eventUpgradeBuildBarracksAir()
        else if (typeModal == TypesModals.UPGRATE_BUILD_BARRACK_MARINE) this.eventUpgradeBuildBarracksMarine()
        else if (typeModal == TypesModals.UPGRATE_BUILD_BARRACK_OVERLAND) this.eventUpgradeBuildBarracksOverland()
    }

    eventUpgradeRepairShop() {
        // CommandPostStorageController.addLevelRepairShop();
        // GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateRepairBuilding(CommandPostStorageController.getLevelRepairShop()));
        // BackpackStorageController.reduceItem(TypesItems.PLAN_COMMAND_POST, ConfigStorageController.getImprivementResourceNumberRepairBuilding(CommandPostStorageController.getLevelRepairShop()));
        // GameStorageController.addExperience(ConfigStorageController.getExpMainBuildingByLevel(CommandPostStorageController.getLevelRepairShop()));
        // GameStorageController.addTechnoPower(ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelRepairShop()));
        // UpgradeOtherInterface.instance.updateInterfaceRepairShop();
        // ModalCommandPostInterface.instance.updateInterface();
        // UpgradeOtherLogic.checkBtnModal();
    }

    eventUpgradeMergeGoldMine() {
        // CommandPostStorageController.addLevelMergeGoldMine();
        // GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine()));
        // BackpackStorageController.reduceItem(TypesItems.PLAN_MERGE_GOLD_MINE, ConfigStorageController.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine()));
        // GameStorageController.addExperience(ConfigStorageController.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine()));
        // GameStorageController.addTechnoPower(ConfigStorageController.getPowerBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine()));
        // UpgradeOtherInterface.instance.updateInterfaceMergeGoldMine();
        // ModalCommandPostInterface.instance.updateInterface();
        // UpgradeOtherLogic.checkBtnModal();
    }

    eventUpgradeMergeTroopAir() {
        // CommandPostStorageController.addLevelMergeTroopAir();
        // GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostStorageController.getLevelMergeTroopAir()));
        // BackpackStorageController.reduceItem(TypesItems.PLAN_MERGE_TROOP_AIR, ConfigStorageController.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostStorageController.getLevelMergeTroopAir()));
        // GameStorageController.addExperience(ConfigStorageController.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostStorageController.getLevelMergeTroopAir()));
        // GameStorageController.addTechnoPower(ConfigStorageController.getPowerUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostStorageController.getLevelMergeTroopAir()));
        // UpgradeOtherInterface.instance.updateInterfaceMergeTroopAir();
        // ModalCommandPostInterface.instance.updateInterface();
        // UpgradeOtherLogic.checkBtnModal();
    }

    eventUpgradeMergeTroopMarine() {
        // CommandPostStorageController.addLevelMergeTroopMarine();
        // GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostStorageController.getLevelMergeTroopMarine()));
        // BackpackStorageController.reduceItem(TypesItems.PLAN_MERGE_TROOP_MARINE, ConfigStorageController.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostStorageController.getLevelMergeTroopMarine()));
        // GameStorageController.addExperience(ConfigStorageController.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostStorageController.getLevelMergeTroopMarine()));
        // GameStorageController.addTechnoPower(ConfigStorageController.getPowerUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostStorageController.getLevelMergeTroopMarine()));
        // UpgradeOtherInterface.instance.updateInterfaceMergeTroopMarine();
        // ModalCommandPostInterface.instance.updateInterface();
        // UpgradeOtherLogic.checkBtnModal();
    }

    eventUpgradeMergeTroopOverland() {
        // CommandPostStorageController.addLevelMergeTroopOverland();
        // GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostStorageController.getLevelMergeTroopOverland()));
        // BackpackStorageController.reduceItem(TypesItems.PLAN_MERGE_TROOP_OVERLAND, ConfigStorageController.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostStorageController.getLevelMergeTroopOverland()));
        // GameStorageController.addExperience(ConfigStorageController.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostStorageController.getLevelMergeTroopOverland()));
        // GameStorageController.addTechnoPower(ConfigStorageController.getPowerUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostStorageController.getLevelMergeTroopOverland()));
        // UpgradeOtherInterface.instance.updateInterfaceMergeTroopOverland();
        // ModalCommandPostInterface.instance.updateInterface();
        // UpgradeOtherLogic.checkBtnModal();
    }

    eventUpgradeMergeBarracksAir() {
        // CommandPostStorageController.addLevelMergeBarracksAir();
        // GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelMergeBarracksAir()));
        // BackpackStorageController.reduceItem(TypesItems.PLAN_MERGE_BARRACK_AIR, ConfigStorageController.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelMergeBarracksAir()));
        // GameStorageController.addExperience(ConfigStorageController.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelMergeBarracksAir()));
        // GameStorageController.addTechnoPower(ConfigStorageController.getPowerBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelMergeBarracksAir()));
        // UpgradeOtherInterface.instance.updateInterfaceMergeBarracksAir();
        // ModalCommandPostInterface.instance.updateInterface();
        // UpgradeOtherLogic.checkBtnModal();
    }

    eventUpgradeMergeBarracksMarine() {
        // CommandPostStorageController.addLevelMergeBarracksMarine();
        // GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelMergeBarracksMarine()));
        // BackpackStorageController.reduceItem(TypesItems.PLAN_MERGE_BARRACK_MARINE, ConfigStorageController.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelMergeBarracksMarine()));
        // GameStorageController.addExperience(ConfigStorageController.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelMergeBarracksMarine()));
        // GameStorageController.addTechnoPower(ConfigStorageController.getPowerBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelMergeBarracksMarine()));
        // UpgradeOtherInterface.instance.updateInterfaceMergeBarracksMarine();
        // ModalCommandPostInterface.instance.updateInterface();
        // UpgradeOtherLogic.checkBtnModal();
    }

    eventUpgradeMergeBarracksOverland() {
        // CommandPostStorageController.addLevelMergeBarracksOverland();
        // GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelMergeBarracksOverland()));
        // BackpackStorageController.reduceItem(TypesItems.PLAN_MERGE_BARRACK_OVERLAND, ConfigStorageController.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelMergeBarracksOverland()));
        // GameStorageController.addExperience(ConfigStorageController.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelMergeBarracksOverland()));
        // GameStorageController.addTechnoPower(ConfigStorageController.getPowerBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelMergeBarracksOverland()));
        // UpgradeOtherInterface.instance.updateInterfaceMergeBarracksOverland();
        // ModalCommandPostInterface.instance.updateInterface();
        // UpgradeOtherLogic.checkBtnModal();
    }

    eventUpgradeBuildGoldMine() {
        // CommandPostStorageController.addLevelBuildGoldMine();
        // GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelBuildGoldMine()));
        // BackpackStorageController.reduceItem(TypesItems.PLAN_MERGE_GOLD_MINE, ConfigStorageController.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelBuildGoldMine()));
        // GameStorageController.addExperience(ConfigStorageController.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelBuildGoldMine()));
        // GameStorageController.addTechnoPower(ConfigStorageController.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelBuildGoldMine()));
        // UpgradeOtherInterface.instance.updateInterfaceBuildGoldMine();
        // ModalCommandPostInterface.instance.updateInterface();
        // UpgradeOtherLogic.checkBtnModal();
    }

    eventUpgradeBuildBarracksAir() {
        // CommandPostStorageController.addLevelBuildBarracksAir();
        // GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelBuildBarracksAir()));
        // BackpackStorageController.reduceItem(TypesItems.PLAN_BUILD_BARRACK_AIR, ConfigStorageController.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelBuildBarracksAir()));
        // GameStorageController.addExperience(ConfigStorageController.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelBuildBarracksAir()));
        // GameStorageController.addTechnoPower(ConfigStorageController.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelBuildBarracksAir()));
        // UpgradeOtherInterface.instance.updateInterfaceBuildBarracksAir();
        // ModalCommandPostInterface.instance.updateInterface();
        // UpgradeOtherLogic.checkBtnModal();
    }

    eventUpgradeBuildBarracksMarine() {
        // CommandPostStorageController.addLevelBuildBarracksMarine();
        // GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelBuildBarracksMarine()));
        // BackpackStorageController.reduceItem(TypesItems.PLAN_BUILD_BARRACK_MARINE, ConfigStorageController.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelBuildBarracksMarine()));
        // GameStorageController.addExperience(ConfigStorageController.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelBuildBarracksMarine()));
        // GameStorageController.addTechnoPower(ConfigStorageController.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelBuildBarracksMarine()));
        // UpgradeOtherInterface.instance.updateInterfaceBuildBarracksMarine();
        // ModalCommandPostInterface.instance.updateInterface();
        // UpgradeOtherLogic.checkBtnModal();
    }

    eventUpgradeBuildBarracksOverland() {
        // CommandPostStorageController.addLevelBuildBarracksOverland();
        // GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelBuildBarracksOverland()));
        // BackpackStorageController.reduceItem(TypesItems.PLAN_BUILD_BARRACK_OVERLAND, ConfigStorageController.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelBuildBarracksOverland()));
        // GameStorageController.addExperience(ConfigStorageController.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelBuildBarracksOverland()));
        // GameStorageController.addTechnoPower(ConfigStorageController.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelBuildBarracksOverland()));
        // UpgradeOtherInterface.instance.updateInterfaceBuildBarracksOverland();
        // ModalCommandPostInterface.instance.updateInterface();
        // UpgradeOtherLogic.checkBtnModal();
    }

    private render(mainTitle: string, actualLevel: string, nextLevelObject: string, level: string, receivedExperience: string, actualPower: string, receivedPower: string, requirementCoins: string, requirementItems: string, spriteActualLevelObject: SpriteFrame, spriteNextLevelObject: SpriteFrame, spriteUpgradeItem: SpriteFrame) {
        this.mainTitle.string = mainTitle;
        this.actualLevelObject_0.string = actualLevel;
        this.actualLevelObject_1.string = actualLevel;
        this.nextLevelObject.string = nextLevelObject;
        this.gameLevel.string = level;
        this.receivedExperience.string = receivedExperience;
        this.actualPower.string = actualPower;
        this.receivedPower.string = receivedPower;
        this.requirementCoins.string = requirementCoins;
        this.requirementItems.string = requirementItems;
        this.spriteActualLevelObject.spriteFrame = spriteActualLevelObject;
        this.spriteNextLevelObject.spriteFrame = spriteNextLevelObject;
        this.spriteUpgradeItem.spriteFrame = spriteUpgradeItem;
    }

    // updateInterfaceRepairShop() {
    //     let mainTitle = "Ремонтный цех";
    //     let actualLevel = "Ур. " + CommandPostStorageController.getLevelRepairShop();
    //     let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelRepairShop() + 1).toString();
    //     let level = GameStorageController.getLevel().toString();
    //     let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpMainBuildingByLevel(CommandPostStorageController.getLevelRepairShop() + 1));
    //     let actualPower = GameStorageController.getPower().toString();
    //     let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelRepairShop() + 1).toString();
    //     let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateRepairBuilding(CommandPostStorageController.getLevelRepairShop() + 1));
    //     let requirementItems = BackpackStorageController.getQuantityByType(TypesItems.PLAN_COMMAND_POST) + "/" + (ConfigStorageController.getImprivementResourceNumberRepairBuilding(CommandPostStorageController.getLevelRepairShop() + 1));
    //     let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.REPAIR_SHOP, CommandPostStorageController.getLevelRepairShop());
    //     let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.REPAIR_SHOP, CommandPostStorageController.getLevelRepairShop() + 1);
    //     let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_COMMAND_POST);

    //     this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    // }

    // updateInterfaceMergeGoldMine() {
    //     let mainTitle = "Обьединение золотого рудника";
    //     let actualLevel = "Ур. " + CommandPostStorageController.getLevelMergeGoldMine();
    //     let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelMergeGoldMine() + 1).toString();
    //     let level = GameStorageController.getLevel().toString();
    //     let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine() + 1));
    //     let actualPower = GameStorageController.getPower().toString();
    //     let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelMergeGoldMine() + 1).toString();
    //     let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine() + 1));
    //     let requirementItems = BackpackStorageController.getQuantityByType(TypesItems.PLAN_MERGE_GOLD_MINE) + "/" + (ConfigStorageController.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine() + 1));
    //     let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine());
    //     let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine() + 1);
    //     let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_GOLD_MINE);

    //     this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    // }

    // updateInterfaceMergeTroopAir() {
    //     let mainTitle = "Юнит ВВС";
    //     let actualLevel = "Ур. " + CommandPostStorageController.getLevelMergeTroopAir();
    //     let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelMergeTroopAir() + 1).toString();
    //     let level = GameStorageController.getLevel().toString();
    //     let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostStorageController.getLevelMergeTroopAir() + 1));
    //     let actualPower = GameStorageController.getPower().toString();
    //     let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelMergeTroopAir() + 1).toString();
    //     let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostStorageController.getLevelMergeTroopAir() + 1));
    //     let requirementItems = BackpackStorageController.getQuantityByType(TypesItems.PLAN_MERGE_TROOP_AIR) + "/" + (ConfigStorageController.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostStorageController.getLevelMergeTroopAir() + 1));
    //     let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_AIR, CommandPostStorageController.getLevelMergeTroopAir());
    //     let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_AIR, CommandPostStorageController.getLevelMergeTroopAir() + 1);
    //     let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_TROOP_AIR);

    //     this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    // }

    // updateInterfaceMergeTroopMarine() {
    //     let mainTitle = "Юнит ВМФ";
    //     let actualLevel = "Ур. " + CommandPostStorageController.getLevelMergeTroopMarine();
    //     let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelMergeTroopMarine() + 1).toString();
    //     let level = GameStorageController.getLevel().toString();
    //     let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostStorageController.getLevelMergeTroopMarine() + 1));
    //     let actualPower = GameStorageController.getPower().toString();
    //     let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelMergeTroopMarine() + 1).toString();
    //     let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostStorageController.getLevelMergeTroopMarine() + 1));
    //     let requirementItems = BackpackStorageController.getQuantityByType(TypesItems.PLAN_MERGE_TROOP_MARINE) + "/" + (ConfigStorageController.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostStorageController.getLevelMergeTroopMarine() + 1));
    //     let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_MARINE, CommandPostStorageController.getLevelMergeTroopMarine());
    //     let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_MARINE, CommandPostStorageController.getLevelMergeTroopMarine() + 1);
    //     let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_TROOP_MARINE);

    //     this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    // }

    // updateInterfaceMergeTroopOverland() {
    //     let mainTitle = "Юнит СВ";
    //     let actualLevel = "Ур. " + CommandPostStorageController.getLevelMergeTroopOverland();
    //     let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelMergeTroopOverland() + 1).toString();
    //     let level = GameStorageController.getLevel().toString();
    //     let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostStorageController.getLevelMergeTroopOverland() + 1));
    //     let actualPower = GameStorageController.getPower().toString();
    //     let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelMergeTroopOverland() + 1).toString();
    //     let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostStorageController.getLevelMergeTroopOverland() + 1));
    //     let requirementItems = BackpackStorageController.getQuantityByType(TypesItems.PLAN_MERGE_TROOP_OVERLAND) + "/" + (ConfigStorageController.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostStorageController.getLevelMergeTroopOverland() + 1));
    //     let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_OVERLAND, CommandPostStorageController.getLevelMergeTroopOverland());
    //     let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.TROOP_OVERLAND, CommandPostStorageController.getLevelMergeTroopOverland() + 1);
    //     let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_TROOP_OVERLAND);

    //     this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    // }

    // updateInterfaceMergeBarracksAir() {
    //     let mainTitle = "Обьядинить базу ВВС";
    //     let actualLevel = "Ур. " + CommandPostStorageController.getLevelMergeBarracksAir();
    //     let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelMergeBarracksAir() + 1).toString();
    //     let level = GameStorageController.getLevel().toString();
    //     let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelMergeBarracksAir() + 1));
    //     let actualPower = GameStorageController.getPower().toString();
    //     let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelMergeBarracksAir() + 1).toString();
    //     let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelMergeBarracksAir() + 1));
    //     let requirementItems = BackpackStorageController.getQuantityByType(TypesItems.PLAN_MERGE_BARRACK_AIR) + "/" + (ConfigStorageController.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelMergeBarracksAir() + 1));
    //     let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelMergeBarracksAir());
    //     let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelMergeBarracksAir() + 1);
    //     let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_BARRACK_AIR);

    //     this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    // }

    // updateInterfaceMergeBarracksMarine() {
    //     let mainTitle = "Синтезировать верфь";
    //     let actualLevel = "Ур. " + CommandPostStorageController.getLevelMergeBarracksMarine();
    //     let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelMergeBarracksMarine() + 1).toString();
    //     let level = GameStorageController.getLevel().toString();
    //     let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelMergeBarracksMarine() + 1));
    //     let actualPower = GameStorageController.getPower().toString();
    //     let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelMergeBarracksMarine() + 1).toString();
    //     let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelMergeBarracksMarine() + 1));
    //     let requirementItems = BackpackStorageController.getQuantityByType(TypesItems.PLAN_MERGE_BARRACK_MARINE) + "/" + (ConfigStorageController.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelMergeBarracksMarine() + 1));
    //     let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelMergeBarracksMarine());
    //     let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelMergeBarracksMarine() + 1);
    //     let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_BARRACK_MARINE);

    //     this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    // }

    // updateInterfaceMergeBarracksOverland() {
    //     let mainTitle = "Синтезировать казарму";
    //     let actualLevel = "Ур. " + CommandPostStorageController.getLevelMergeBarracksOverland();
    //     let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelMergeBarracksOverland() + 1).toString();
    //     let level = GameStorageController.getLevel().toString();
    //     let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelMergeBarracksOverland() + 1));
    //     let actualPower = GameStorageController.getPower().toString();
    //     let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelMergeBarracksOverland() + 1).toString();
    //     let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelMergeBarracksOverland() + 1));
    //     let requirementItems = BackpackStorageController.getQuantityByType(TypesItems.PLAN_MERGE_BARRACK_OVERLAND) + "/" + (ConfigStorageController.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelMergeBarracksOverland() + 1));
    //     let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelMergeBarracksOverland());
    //     let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelMergeBarracksOverland() + 1);
    //     let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_MERGE_BARRACK_OVERLAND);

    //     this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    // }

    // updateInterfaceBuildGoldMine() {
    //     let mainTitle = "Строительство золотого рудника";
    //     let actualLevel = "Ур. " + CommandPostStorageController.getLevelMergeGoldMine();
    //     let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelMergeGoldMine() + 1).toString();
    //     let level = GameStorageController.getLevel().toString();
    //     let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine() + 1));
    //     let actualPower = GameStorageController.getPower().toString();
    //     let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelMergeGoldMine() + 1).toString();
    //     let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine() + 1));
    //     let requirementItems = BackpackStorageController.getQuantityByType(TypesItems.PLAN_BUILD_GOLD_MINE) + "/" + (ConfigStorageController.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine() + 1));
    //     let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine());
    //     let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine() + 1);
    //     let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_BUILD_GOLD_MINE);

    //     this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    // }

    // updateInterfaceBuildBarracksAir() {
    //     let mainTitle = "Построить базу ВВС";
    //     let actualLevel = "Ур. " + CommandPostStorageController.getLevelBuildBarracksAir();
    //     let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelBuildBarracksAir() + 1).toString();
    //     let level = GameStorageController.getLevel().toString();
    //     let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelBuildBarracksAir() + 1));
    //     let actualPower = GameStorageController.getPower().toString();
    //     let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelBuildBarracksAir() + 1).toString();
    //     let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelBuildBarracksAir() + 1));
    //     let requirementItems = BackpackStorageController.getQuantityByType(TypesItems.PLAN_BUILD_BARRACK_AIR) + "/" + (ConfigStorageController.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelBuildBarracksAir() + 1));
    //     let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelBuildBarracksAir());
    //     let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelBuildBarracksAir() + 1);
    //     let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_BUILD_BARRACK_AIR);

    //     this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    // }

    // updateInterfaceBuildBarracksMarine() {
    //     let mainTitle = "Построить верфь";
    //     let actualLevel = "Ур. " + CommandPostStorageController.getLevelBuildBarracksMarine();
    //     let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelBuildBarracksMarine() + 1).toString();
    //     let level = GameStorageController.getLevel().toString();
    //     let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelBuildBarracksMarine() + 1));
    //     let actualPower = GameStorageController.getPower().toString();
    //     let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelBuildBarracksMarine() + 1).toString();
    //     let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelBuildBarracksMarine() + 1));
    //     let requirementItems = BackpackStorageController.getQuantityByType(TypesItems.PLAN_BUILD_BARRACK_MARINE) + "/" + (ConfigStorageController.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelBuildBarracksMarine() + 1));
    //     let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelBuildBarracksMarine());
    //     let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelBuildBarracksMarine() + 1);
    //     let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_BUILD_BARRACK_MARINE);

    //     this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    // }

    // updateInterfaceBuildBarracksOverland() {
    //     let mainTitle = "Построить казарму";
    //     let actualLevel = "Ур. " + CommandPostStorageController.getLevelBuildBarracksOverland();
    //     let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelBuildBarracksOverland() + 1).toString();
    //     let level = GameStorageController.getLevel().toString();
    //     let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelBuildBarracksOverland() + 1));
    //     let actualPower = GameStorageController.getPower().toString();
    //     let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelBuildBarracksOverland() + 1).toString();
    //     let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelBuildBarracksOverland() + 1));
    //     let requirementItems = BackpackStorageController.getQuantityByType(TypesItems.PLAN_BUILD_BARRACK_OVERLAND) + "/" + (ConfigStorageController.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelBuildBarracksOverland() + 1));
    //     let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelBuildBarracksOverland());
    //     let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelBuildBarracksOverland() + 1);
    //     let spriteUpgradeItem = SpriteStorage.instance.getItemBackpack(TypesItems.PLAN_BUILD_BARRACK_OVERLAND);

    //     this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem);
    // }

    // openUpgrade(trigger: boolean) {
    //     this.btnUpgrade.active = true;
    //     this.btnGetItems.active = false;
    //     if (trigger) {
    //         this.btnUpgrade.getComponent(Button).interactable = true;
    //     }
    //     else {
    //         this.btnUpgrade.getComponent(Button).interactable = false;
    //     }
    // }

    // openGetItems() {
    //     this.btnUpgrade.active = false;
    //     this.btnGetItems.active = true;
    // }
}