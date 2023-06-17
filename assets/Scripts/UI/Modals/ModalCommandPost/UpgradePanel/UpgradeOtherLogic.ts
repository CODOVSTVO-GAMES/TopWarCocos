import { _decorator, Component } from 'cc';
import { CommandPostStorageController } from '../../../../Controllers/CommandPostStorageController';
import { UpgradeOtherInterface } from './UpgradeOtherInterface';
import { GameStorageController } from '../../../../Controllers/GameStorageController';
import { ModalCommandPostInterface } from '../ModalCommandPostInterface';
import { ConfigStorageController } from '../../../../Controllers/ConfigStorageController';
import { TypesObjects } from '../../../../Static/TypesObjects';
import { InventoryStorageController } from '../../../../Controllers/InventoryStorageController';
import { TypesItems } from '../../../../Static/TypesItems';
import { SecondaryInterface } from '../../../SecondaryInterface';
import { TypesModals } from '../../../../Static/TypesModals';
const { ccclass } = _decorator;

@ccclass('UpgradeOtherLogic')
export class UpgradeOtherLogic extends Component {

    static checkBtnModal() {
        switch (SecondaryInterface.instance.getTypeActiveSecondLayoutModal()) {
            case TypesModals.UPGRATE_REPAIR_SHOP:
                if (CommandPostStorageController.getLevelRepairShop() < CommandPostStorageController.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case TypesModals.UPGRATE_MERGE_GOLD_MINE:
                if (CommandPostStorageController.getLevelMergeGoldMine() < CommandPostStorageController.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case TypesModals.UPGRATE_MERGE_TROOP_AIR:
                if (CommandPostStorageController.getLevelMergeTroopAir() < CommandPostStorageController.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case TypesModals.UPGRATE_MERGE_TROOP_MARINE:
                if (CommandPostStorageController.getLevelMergeTroopMarine() < CommandPostStorageController.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case TypesModals.UPGRATE_MERGE_TROOP_OVERLAND:
                if (CommandPostStorageController.getLevelMergeTroopOverland() < CommandPostStorageController.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case TypesModals.UPGRATE_MERGE_BARRACK_AIR:
                if (CommandPostStorageController.getLevelMergeBarracksAir() < CommandPostStorageController.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case TypesModals.UPGRATE_MERGE_BARRACK_MARINE:
                if (CommandPostStorageController.getLevelMergeBarracksMarine() < CommandPostStorageController.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case TypesModals.UPGRATE_MERGE_BARRACK_OVERLAND:
                if (CommandPostStorageController.getLevelMergeBarracksOverland() < CommandPostStorageController.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case TypesModals.UPGRATE_BUILD_GOLD_MINE:
                if (CommandPostStorageController.getLevelBuildGoldMine() < CommandPostStorageController.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case TypesModals.UPGRATE_BUILD_BARRACK_AIR:
                if (CommandPostStorageController.getLevelBuildBarracksAir() < CommandPostStorageController.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case TypesModals.UPGRATE_BUILD_BARRACK_MARINE:
                if (CommandPostStorageController.getLevelBuildBarracksMarine() < CommandPostStorageController.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case TypesModals.UPGRATE_BUILD_BARRACK_OVERLAND:
                if (CommandPostStorageController.getLevelBuildBarracksOverland() < CommandPostStorageController.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
        }
    }

    clickUpgrade() {
        let type = SecondaryInterface.instance.getTypeActiveSecondLayoutModal();

        if (type == TypesModals.UPGRATE_REPAIR_SHOP) this.upgradeRepairShop();
        else if (type == TypesModals.UPGRATE_MERGE_GOLD_MINE) this.upgradeMergeGoldMine();
        else if (type == TypesModals.UPGRATE_MERGE_TROOP_AIR) this.upgradeMergeTroopAir();
        else if (type == TypesModals.UPGRATE_MERGE_TROOP_MARINE) this.upgradeMergeTroopMarine();
        else if (type == TypesModals.UPGRATE_MERGE_TROOP_OVERLAND) this.upgradeMergeBarracksOverland();
        else if (type == TypesModals.UPGRATE_MERGE_BARRACK_AIR) this.upgradeMergeBarracksAir();
        else if (type == TypesModals.UPGRATE_MERGE_BARRACK_MARINE) this.upgradeMergeBarracksMarine();
        else if (type == TypesModals.UPGRATE_MERGE_BARRACK_OVERLAND) this.upgradeMergeBarracksOverland();
        else if (type == TypesModals.UPGRATE_BUILD_GOLD_MINE) this.upgradeBuildGoldMine();
        else if (type == TypesModals.UPGRATE_BUILD_BARRACK_AIR) this.upgradeBuildBarracksAir();
        else if (type == TypesModals.UPGRATE_BUILD_BARRACK_MARINE) this.upgradeBuildBarracksMarine();
        else if (type == TypesModals.UPGRATE_BUILD_BARRACK_OVERLAND) this.upgradeBuildBarracksOverland();
    }

    upgradeRepairShop() {
        CommandPostStorageController.addLevelRepairShop();
        GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateRepairBuilding(CommandPostStorageController.getLevelRepairShop()));
        InventoryStorageController.reduceItem(TypesItems.PLAN_COMMAND_POST, ConfigStorageController.getImprivementResourceNumberRepairBuilding(CommandPostStorageController.getLevelRepairShop()));
        GameStorageController.addExperience(ConfigStorageController.getExpMainBuildingByLevel(CommandPostStorageController.getLevelRepairShop()));
        GameStorageController.addTechnoPower(ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelRepairShop()));
        UpgradeOtherInterface.instance.updateInterfaceRepairShop();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeMergeGoldMine() {
        CommandPostStorageController.addLevelMergeGoldMine();
        GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine()));
        InventoryStorageController.reduceItem(TypesItems.PLAN_MERGE_GOLD_MINE, ConfigStorageController.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine()));
        GameStorageController.addExperience(ConfigStorageController.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine()));
        GameStorageController.addTechnoPower(ConfigStorageController.getPowerBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelMergeGoldMine()));
        UpgradeOtherInterface.instance.updateInterfaceMergeGoldMine();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeMergeTroopAir() {
        CommandPostStorageController.addLevelMergeTroopAir();
        GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostStorageController.getLevelMergeTroopAir()));
        InventoryStorageController.reduceItem(TypesItems.PLAN_MERGE_TROOP_AIR, ConfigStorageController.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostStorageController.getLevelMergeTroopAir()));
        GameStorageController.addExperience(ConfigStorageController.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostStorageController.getLevelMergeTroopAir()));
        GameStorageController.addTechnoPower(ConfigStorageController.getPowerUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostStorageController.getLevelMergeTroopAir()));
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopAir();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeMergeTroopMarine() {
        CommandPostStorageController.addLevelMergeTroopMarine();
        GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostStorageController.getLevelMergeTroopMarine()));
        InventoryStorageController.reduceItem(TypesItems.PLAN_MERGE_TROOP_MARINE, ConfigStorageController.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostStorageController.getLevelMergeTroopMarine()));
        GameStorageController.addExperience(ConfigStorageController.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostStorageController.getLevelMergeTroopMarine()));
        GameStorageController.addTechnoPower(ConfigStorageController.getPowerUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostStorageController.getLevelMergeTroopMarine()));
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopMarine();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeMergeTroopOverland() {
        CommandPostStorageController.addLevelMergeTroopOverland();
        GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostStorageController.getLevelMergeTroopOverland()));
        InventoryStorageController.reduceItem(TypesItems.PLAN_MERGE_TROOP_OVERLAND, ConfigStorageController.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostStorageController.getLevelMergeTroopOverland()));
        GameStorageController.addExperience(ConfigStorageController.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostStorageController.getLevelMergeTroopOverland()));
        GameStorageController.addTechnoPower(ConfigStorageController.getPowerUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostStorageController.getLevelMergeTroopOverland()));
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopOverland();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeMergeBarracksAir() {
        CommandPostStorageController.addLevelMergeBarracksAir();
        GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelMergeBarracksAir()));
        InventoryStorageController.reduceItem(TypesItems.PLAN_MERGE_BARRACK_AIR, ConfigStorageController.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelMergeBarracksAir()));
        GameStorageController.addExperience(ConfigStorageController.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelMergeBarracksAir()));
        GameStorageController.addTechnoPower(ConfigStorageController.getPowerBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelMergeBarracksAir()));
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksAir();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeMergeBarracksMarine() {
        CommandPostStorageController.addLevelMergeBarracksMarine();
        GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelMergeBarracksMarine()));
        InventoryStorageController.reduceItem(TypesItems.PLAN_MERGE_BARRACK_MARINE, ConfigStorageController.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelMergeBarracksMarine()));
        GameStorageController.addExperience(ConfigStorageController.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelMergeBarracksMarine()));
        GameStorageController.addTechnoPower(ConfigStorageController.getPowerBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelMergeBarracksMarine()));
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksMarine();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeMergeBarracksOverland() {
        CommandPostStorageController.addLevelMergeBarracksOverland();
        GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelMergeBarracksOverland()));
        InventoryStorageController.reduceItem(TypesItems.PLAN_MERGE_BARRACK_OVERLAND, ConfigStorageController.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelMergeBarracksOverland()));
        GameStorageController.addExperience(ConfigStorageController.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelMergeBarracksOverland()));
        GameStorageController.addTechnoPower(ConfigStorageController.getPowerBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelMergeBarracksOverland()));
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksOverland();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeBuildGoldMine() {
        CommandPostStorageController.addLevelBuildGoldMine();
        GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelBuildGoldMine()));
        InventoryStorageController.reduceItem(TypesItems.PLAN_MERGE_GOLD_MINE, ConfigStorageController.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelBuildGoldMine()));
        GameStorageController.addExperience(ConfigStorageController.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelBuildGoldMine()));
        GameStorageController.addTechnoPower(ConfigStorageController.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostStorageController.getLevelBuildGoldMine()));
        UpgradeOtherInterface.instance.updateInterfaceBuildGoldMine();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeBuildBarracksAir() {
        CommandPostStorageController.addLevelBuildBarracksAir();
        GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelBuildBarracksAir()));
        InventoryStorageController.reduceItem(TypesItems.PLAN_BUILD_BARRACK_AIR, ConfigStorageController.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelBuildBarracksAir()));
        GameStorageController.addExperience(ConfigStorageController.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelBuildBarracksAir()));
        GameStorageController.addTechnoPower(ConfigStorageController.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostStorageController.getLevelBuildBarracksAir()));
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksAir();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeBuildBarracksMarine() {
        CommandPostStorageController.addLevelBuildBarracksMarine();
        GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelBuildBarracksMarine()));
        InventoryStorageController.reduceItem(TypesItems.PLAN_BUILD_BARRACK_MARINE, ConfigStorageController.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelBuildBarracksMarine()));
        GameStorageController.addExperience(ConfigStorageController.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelBuildBarracksMarine()));
        GameStorageController.addTechnoPower(ConfigStorageController.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostStorageController.getLevelBuildBarracksMarine()));
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksMarine();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeBuildBarracksOverland() {
        CommandPostStorageController.addLevelBuildBarracksOverland();
        GameStorageController.reduceCoins(ConfigStorageController.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelBuildBarracksOverland()));
        InventoryStorageController.reduceItem(TypesItems.PLAN_BUILD_BARRACK_OVERLAND, ConfigStorageController.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelBuildBarracksOverland()));
        GameStorageController.addExperience(ConfigStorageController.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelBuildBarracksOverland()));
        GameStorageController.addTechnoPower(ConfigStorageController.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostStorageController.getLevelBuildBarracksOverland()));
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksOverland();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }
}
