import { CommandPostModel } from "../Model/CommandPostModel";
import { TypesItems } from "../Static/TypesItems";
import { TypesObjects } from "../Static/TypesObjects";
import { CommandPostUpgradeMainView } from "../View/CommandPostUpgradeMainView";
import { CommandPostUpgradeOtherView } from "../View/CommandPostUpgradeOtherView";
import { CommandPostView } from "../View/CommandPostView";
import { BackpackPresenter } from "./BackpackPresenter";
import { ConfigPresenter } from "./ConfigPresenter";
import { GamePresenter } from "./GamePresenter";
import { HomeMapPresenter } from "./HomeMapPresenter";

export class CommandPostPresenter {

    public static processingUpgradeCommandPost() {
        CommandPostModel.instance.levelCommandPost += 1
        GamePresenter.reduceCoins(ConfigPresenter.getPriceUpdateMainBuildingByLevel(CommandPostModel.instance.levelCommandPost))
        GamePresenter.addExperience(ConfigPresenter.getExpMainBuildingByLevel(CommandPostModel.instance.levelCommandPost))
        GamePresenter.addTechnoPower(ConfigPresenter.getPowerMainBuildingByLevel(CommandPostModel.instance.levelCommandPost))
        BackpackPresenter.reduceItemBackpack(TypesItems.PLAN_COMMAND_POST, ConfigPresenter.getImprivementResourceNumberMainBuildingByLevel(CommandPostModel.instance.levelCommandPost))
        HomeMapPresenter.upgradeLevelObject(HomeMapPresenter.getObjectParametersByType(TypesObjects.COMMAND_POST).index)

        CommandPostUpgradeMainView.instance.renderInterface()
        CommandPostView.instance.renderHeader()
    }

    public static processingUpgradeRepairShop() {
        CommandPostModel.instance.levelRepairShop += 1
        GamePresenter.reduceCoins(ConfigPresenter.getPriceUpdateRepairBuilding(CommandPostModel.instance.levelRepairShop))
        GamePresenter.addExperience(ConfigPresenter.getExpMainBuildingByLevel(CommandPostModel.instance.levelRepairShop))
        GamePresenter.addTechnoPower(ConfigPresenter.getPowerMainBuildingByLevel(CommandPostModel.instance.levelRepairShop))
        BackpackPresenter.reduceItemBackpack(TypesItems.PLAN_COMMAND_POST, ConfigPresenter.getImprivementResourceNumberRepairBuilding(CommandPostModel.instance.levelRepairShop))

        CommandPostView.instance.renderHeader()
        CommandPostView.instance.renderItemUpgradeRepairShop()
        CommandPostUpgradeOtherView.instance.renderInterfaceRepairShop()
        CommandPostUpgradeOtherView.instance.renderSuitableButton()
    }

    public static processingUpgradeMergeGoldMine() {
        CommandPostModel.instance.levelMergeGoldMine += 1
        GamePresenter.reduceCoins(ConfigPresenter.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelMergeGoldMine))
        GamePresenter.addExperience(ConfigPresenter.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelMergeGoldMine))
        GamePresenter.addTechnoPower(ConfigPresenter.getPowerBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelMergeGoldMine))
        BackpackPresenter.reduceItemBackpack(TypesItems.PLAN_MERGE_GOLD_MINE, ConfigPresenter.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelMergeGoldMine))

        CommandPostView.instance.renderHeader()
        CommandPostView.instance.renderItemUpgradeMergeGoldMine()
        CommandPostUpgradeOtherView.instance.renderInterfaceRepairShop()
        CommandPostUpgradeOtherView.instance.renderSuitableButton()
    }

    public static processingUpgradeMergeTroopAir() {
        CommandPostModel.instance.levelMergeTroopAir += 1
        GamePresenter.reduceCoins(ConfigPresenter.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostModel.instance.levelMergeTroopAir))
        GamePresenter.addExperience(ConfigPresenter.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostModel.instance.levelMergeTroopAir))
        GamePresenter.addTechnoPower(ConfigPresenter.getPowerUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostModel.instance.levelMergeTroopAir))
        BackpackPresenter.reduceItemBackpack(TypesItems.PLAN_MERGE_TROOP_AIR, ConfigPresenter.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostModel.instance.levelMergeTroopAir))

        CommandPostView.instance.renderHeader()
        CommandPostView.instance.renderItemUpgradeMergeTroopAir()
        CommandPostUpgradeOtherView.instance.renderInterfaceRepairShop()
        CommandPostUpgradeOtherView.instance.renderSuitableButton()
    }

    public static processingUpgradeMergeTroopMarine() {
        CommandPostModel.instance.levelMergeTroopMarine += 1
        GamePresenter.reduceCoins(ConfigPresenter.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostModel.instance.levelMergeTroopMarine))
        GamePresenter.addExperience(ConfigPresenter.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostModel.instance.levelMergeTroopMarine))
        GamePresenter.addTechnoPower(ConfigPresenter.getPowerUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostModel.instance.levelMergeTroopMarine))
        BackpackPresenter.reduceItemBackpack(TypesItems.PLAN_MERGE_TROOP_MARINE, ConfigPresenter.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostModel.instance.levelMergeTroopMarine))

        CommandPostView.instance.renderHeader()
        CommandPostView.instance.renderItemUpgradeMergeTroopMarine()
        CommandPostUpgradeOtherView.instance.renderInterfaceRepairShop()
        CommandPostUpgradeOtherView.instance.renderSuitableButton()
    }

    public static processingUpgradeMergeTroopOverland() {
        CommandPostModel.instance.levelMergeTroopOverland += 1
        GamePresenter.reduceCoins(ConfigPresenter.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostModel.instance.levelMergeTroopOverland))
        GamePresenter.addExperience(ConfigPresenter.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostModel.instance.levelMergeTroopOverland))
        GamePresenter.addTechnoPower(ConfigPresenter.getPowerUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostModel.instance.levelMergeTroopOverland))
        BackpackPresenter.reduceItemBackpack(TypesItems.PLAN_MERGE_TROOP_OVERLAND, ConfigPresenter.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostModel.instance.levelMergeTroopOverland))

        CommandPostView.instance.renderHeader()
        CommandPostView.instance.renderItemUpgradeMergeTroopOverland()
        CommandPostUpgradeOtherView.instance.renderInterfaceRepairShop()
        CommandPostUpgradeOtherView.instance.renderSuitableButton()
    }

    public static processingUpgradeMergeBarracksAir() {
        CommandPostModel.instance.levelMergeBarracksAir += 1
        GamePresenter.reduceCoins(ConfigPresenter.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelMergeBarracksAir))
        GamePresenter.addExperience(ConfigPresenter.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelMergeBarracksAir))
        GamePresenter.addTechnoPower(ConfigPresenter.getPowerBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelMergeBarracksAir))
        BackpackPresenter.reduceItemBackpack(TypesItems.PLAN_MERGE_BARRACK_AIR, ConfigPresenter.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelMergeBarracksAir))

        CommandPostView.instance.renderHeader()
        CommandPostView.instance.renderItemUpgradeMergeBarrackAir()
        CommandPostUpgradeOtherView.instance.renderInterfaceRepairShop()
        CommandPostUpgradeOtherView.instance.renderSuitableButton()
    }

    public static processingUpgradeMergeBarracksMarine() {
        CommandPostModel.instance.levelMergeBarracksMarine += 1
        GamePresenter.reduceCoins(ConfigPresenter.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelMergeBarracksMarine))
        GamePresenter.addExperience(ConfigPresenter.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelMergeBarracksMarine))
        GamePresenter.addTechnoPower(ConfigPresenter.getPowerBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelMergeBarracksMarine))
        BackpackPresenter.reduceItemBackpack(TypesItems.PLAN_MERGE_BARRACK_MARINE, ConfigPresenter.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelMergeBarracksMarine))

        CommandPostView.instance.renderHeader()
        CommandPostView.instance.renderItemUpgradeMergeBarrackMarine()
        CommandPostUpgradeOtherView.instance.renderInterfaceRepairShop()
        CommandPostUpgradeOtherView.instance.renderSuitableButton()
    }

    public static processingUpgradeMergeBarracksOverland() {
        CommandPostModel.instance.levelMergeBarracksOverland += 1
        GamePresenter.reduceCoins(ConfigPresenter.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelMergeBarracksOverland))
        GamePresenter.addExperience(ConfigPresenter.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelMergeBarracksOverland))
        GamePresenter.addTechnoPower(ConfigPresenter.getPowerBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelMergeBarracksOverland))
        BackpackPresenter.reduceItemBackpack(TypesItems.PLAN_MERGE_BARRACK_OVERLAND, ConfigPresenter.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelMergeBarracksOverland))

        CommandPostView.instance.renderHeader()
        CommandPostView.instance.renderItemUpgradeMergeBarrackOverland()
        CommandPostUpgradeOtherView.instance.renderInterfaceRepairShop()
        CommandPostUpgradeOtherView.instance.renderSuitableButton()
    }

    public static processingUpgradeBuildGoldMine() {
        CommandPostModel.instance.levelBuildGoldMine += 1
        GamePresenter.reduceCoins(ConfigPresenter.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelBuildGoldMine))
        GamePresenter.addExperience(ConfigPresenter.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelBuildGoldMine))
        GamePresenter.addTechnoPower(ConfigPresenter.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelBuildGoldMine))
        BackpackPresenter.reduceItemBackpack(TypesItems.PLAN_MERGE_GOLD_MINE, ConfigPresenter.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelBuildGoldMine))

        CommandPostView.instance.renderHeader()
        CommandPostView.instance.renderItemUpgradeBuildGoldMine()
        CommandPostUpgradeOtherView.instance.renderInterfaceRepairShop()
        CommandPostUpgradeOtherView.instance.renderSuitableButton()
    }

    public static processingUpgradeBuildBarracksAir() {
        CommandPostModel.instance.levelBuildBarracksAir += 1
        GamePresenter.reduceCoins(ConfigPresenter.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelBuildBarracksAir))
        GamePresenter.addExperience(ConfigPresenter.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelBuildBarracksAir))
        GamePresenter.addTechnoPower(ConfigPresenter.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelBuildBarracksAir))
        BackpackPresenter.reduceItemBackpack(TypesItems.PLAN_BUILD_BARRACK_AIR, ConfigPresenter.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelBuildBarracksAir))

        CommandPostView.instance.renderHeader()
        CommandPostView.instance.renderItemUpgradeBuildBarrackAir()
        CommandPostUpgradeOtherView.instance.renderInterfaceRepairShop()
        CommandPostUpgradeOtherView.instance.renderSuitableButton()
    }

    public static processingUpgradeBuildBarracksMarine() {
        CommandPostModel.instance.levelBuildBarracksMarine += 1
        GamePresenter.reduceCoins(ConfigPresenter.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelBuildBarracksMarine))
        GamePresenter.addExperience(ConfigPresenter.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelBuildBarracksMarine))
        GamePresenter.addTechnoPower(ConfigPresenter.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelBuildBarracksMarine))
        BackpackPresenter.reduceItemBackpack(TypesItems.PLAN_BUILD_BARRACK_MARINE, ConfigPresenter.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelBuildBarracksMarine))

        CommandPostView.instance.renderHeader()
        CommandPostView.instance.renderItemUpgradeBuildBarrackMarine()
        CommandPostUpgradeOtherView.instance.renderInterfaceRepairShop()
        CommandPostUpgradeOtherView.instance.renderSuitableButton()
    }

    public static processingUpgradeBuildBarracksOverland() {
        CommandPostModel.instance.levelBuildBarracksOverland += 1
        GamePresenter.reduceCoins(ConfigPresenter.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelBuildBarracksOverland))
        GamePresenter.addExperience(ConfigPresenter.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelBuildBarracksOverland))
        GamePresenter.addTechnoPower(ConfigPresenter.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelBuildBarracksOverland))
        BackpackPresenter.reduceItemBackpack(TypesItems.PLAN_BUILD_BARRACK_OVERLAND, ConfigPresenter.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelBuildBarracksOverland))

        CommandPostView.instance.renderHeader()
        CommandPostView.instance.renderItemUpgradeBuildBarrackOverland()
        CommandPostUpgradeOtherView.instance.renderInterfaceRepairShop()
        CommandPostUpgradeOtherView.instance.renderSuitableButton()
    }

    public static getLevelAllMerge(typeObject: string): number {
        if (typeObject == TypesObjects.GOLD_MINE) {
            return CommandPostModel.instance.levelMergeGoldMine
        }
        else if (typeObject == TypesObjects.TROOP_AIR) {
            return CommandPostModel.instance.levelMergeTroopAir
        }
        else if (typeObject == TypesObjects.TROOP_MARINE) {
            return CommandPostModel.instance.levelMergeTroopMarine
        }
        else if (typeObject == TypesObjects.TROOP_OVERLAND) {
            return CommandPostModel.instance.levelMergeTroopOverland
        }
        else if (typeObject == TypesObjects.BARRACKS_AIR) {
            return CommandPostModel.instance.levelMergeBarracksAir
        }
        else if (typeObject == TypesObjects.BARRACKS_MARINE) {
            return CommandPostModel.instance.levelMergeBarracksMarine
        }
        else if (typeObject == TypesObjects.BARRACKS_OVERLAND) {
            return CommandPostModel.instance.levelMergeBarracksOverland
        }
    }
}