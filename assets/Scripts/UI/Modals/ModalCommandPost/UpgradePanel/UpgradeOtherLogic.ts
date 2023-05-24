import { _decorator, Component } from 'cc';
import { ControllerCommandPostStorage } from '../../../../Storage/Controllers/ControllerCommandPostStorage';
import { UpgradeOtherInterface } from './UpgradeOtherInterface';
import { ControllerGameStorage } from '../../../../Storage/Controllers/ControllerGameStorage';
import { ModalCommandPostLogic } from '../ModalCommandPostLogic';
import { ModalCommandPostInterface } from '../ModalCommandPostInterface';
import { ControllerConfigStorage } from '../../../../Storage/Controllers/ControllerConfigStorage';
import { TypesObjects } from '../../../../Static/TypesObjects';
import { ControllerInventoryStorage } from '../../../../Storage/Controllers/ControllerInventoryStorage';
import { TypesItems } from '../../../../Static/TypesItems';
const { ccclass } = _decorator;

@ccclass('UpgradeOtherLogic')
export class UpgradeOtherLogic extends Component {

    static checkBtnModal() {
        switch (ModalCommandPostLogic.instance.getTypeActiveModal()) {
            case "repairShop":
                if (ControllerCommandPostStorage.getLevelRepairShop() < ControllerCommandPostStorage.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case "mergeGoldMine":
                if (ControllerCommandPostStorage.getLevelMergeGoldMine() < ControllerCommandPostStorage.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case "mergeTroopAir":
                if (ControllerCommandPostStorage.getLevelMergeTroopAir() < ControllerCommandPostStorage.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case "mergeTroopMarine":
                if (ControllerCommandPostStorage.getLevelMergeTroopMarine() < ControllerCommandPostStorage.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case "mergeTroopOverland":
                if (ControllerCommandPostStorage.getLevelMergeTroopOverland() < ControllerCommandPostStorage.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case "mergeBarracksAir":
                if (ControllerCommandPostStorage.getLevelMergeBarracksAir() < ControllerCommandPostStorage.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case "mergeBarracksMarine":
                if (ControllerCommandPostStorage.getLevelMergeBarracksMarine() < ControllerCommandPostStorage.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case "mergeBarracksOverland":
                if (ControllerCommandPostStorage.getLevelMergeBarracksOverland() < ControllerCommandPostStorage.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case "buildGoldMine":
                if (ControllerCommandPostStorage.getLevelBuildGoldMine() < ControllerCommandPostStorage.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case "buildBarracksAir":
                if (ControllerCommandPostStorage.getLevelBuildBarracksAir() < ControllerCommandPostStorage.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case "buildBarracksMarine":
                if (ControllerCommandPostStorage.getLevelBuildBarracksMarine() < ControllerCommandPostStorage.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
            case "buildBarracksOverland":
                if (ControllerCommandPostStorage.getLevelBuildBarracksOverland() < ControllerCommandPostStorage.getLevelCommandPost()) {
                    UpgradeOtherInterface.instance.openUpgrade(true);
                }
                else {
                    UpgradeOtherInterface.instance.openUpgrade(false);
                }
                break;
        }
    }

    clickUpgrade() {
        switch (ModalCommandPostLogic.instance.getTypeActiveModal()) {
            case "repairShop":
                this.upgradeRepairShop();
                break;
            case "mergeGoldMine":
                this.upgradeMergeGoldMine();
                break;
            case "mergeTroopAir":
                this.upgradeMergeTroopAir();
                break;
            case "mergeTroopMarine":
                this.upgradeMergeTroopMarine();
                break;
            case "mergeTroopOverland":
                this.upgradeMergeBarracksOverland();
                break;
            case "mergeBarracksAir":
                this.upgradeMergeBarracksAir();
                break;
            case "mergeBarracksMarine":
                this.upgradeMergeBarracksMarine();
                break;
            case "mergeBarracksOverland":
                this.upgradeMergeBarracksOverland();
                break;
            case "buildGoldMine":
                this.upgradeBuildGoldMine();
                break;
            case "buildBarracksAir":
                this.upgradeBuildBarracksAir();
                break;
            case "buildBarracksMarine":
                this.upgradeBuildBarracksMarine();
                break;
            case "buildBarracksOverland":
                this.upgradeBuildBarracksOverland();
                break;
        }
    }

    upgradeRepairShop() {
        ControllerCommandPostStorage.addLevelMergeGoldMine();
        ControllerGameStorage.reduceCoins(1);
        ControllerInventoryStorage.reduceItem(TypesItems.PLAN_MAX_MAINBUILDING, 0);
        ControllerGameStorage.addExperience(ControllerConfigStorage.getExpMainBuildingByLevel(ControllerCommandPostStorage.getLevelRepairShop()));
        ControllerGameStorage.addTechnoPower(ControllerConfigStorage.getPowerMainBuildingByLevel(ControllerCommandPostStorage.getLevelRepairShop()));
        UpgradeOtherInterface.instance.updateInterfaceMergeGoldMine();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeMergeGoldMine() {
        ControllerCommandPostStorage.addLevelMergeGoldMine();
        ControllerGameStorage.reduceCoins(1);
        ControllerInventoryStorage.reduceItem(TypesItems.PLAN_MAX_GOLD_MINE, 0);
        ControllerGameStorage.addExperience(ControllerConfigStorage.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelMergeGoldMine()));
        ControllerGameStorage.addTechnoPower(ControllerConfigStorage.getPowerBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelMergeGoldMine()));
        UpgradeOtherInterface.instance.updateInterfaceMergeGoldMine();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeMergeTroopAir() {
        ControllerCommandPostStorage.addLevelMergeTroopAir();
        ControllerGameStorage.reduceCoins(1);
        ControllerInventoryStorage.reduceItem(TypesItems.PLAN_MAX_AIR, 0);
        ControllerGameStorage.addExperience(ControllerConfigStorage.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, ControllerCommandPostStorage.getLevelMergeTroopAir()));
        ControllerGameStorage.addTechnoPower(ControllerConfigStorage.getPowerUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, ControllerCommandPostStorage.getLevelMergeTroopAir()));
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopAir();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeMergeTroopMarine() {
        ControllerCommandPostStorage.addLevelMergeTroopMarine();
        ControllerGameStorage.reduceCoins(1);
        ControllerInventoryStorage.reduceItem(TypesItems.PLAN_MAX_MARINE, 0);
        ControllerGameStorage.addExperience(ControllerConfigStorage.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, ControllerCommandPostStorage.getLevelMergeTroopMarine()));
        ControllerGameStorage.addTechnoPower(ControllerConfigStorage.getPowerUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, ControllerCommandPostStorage.getLevelMergeTroopMarine()));
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopMarine();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeMergeTroopOverland() {
        ControllerCommandPostStorage.addLevelMergeTroopOverland();
        ControllerGameStorage.reduceCoins(1);
        ControllerInventoryStorage.reduceItem(TypesItems.PLAN_MAX_OVERLAND, 0);
        ControllerGameStorage.addExperience(ControllerConfigStorage.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, ControllerCommandPostStorage.getLevelMergeTroopOverland()));
        ControllerGameStorage.addTechnoPower(ControllerConfigStorage.getPowerUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, ControllerCommandPostStorage.getLevelMergeTroopOverland()));
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopOverland();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeMergeBarracksAir() {
        ControllerCommandPostStorage.addLevelMergeBarracksAir();
        ControllerGameStorage.reduceCoins(1);
        ControllerInventoryStorage.reduceItem(TypesItems.PLAN_MAX_BARRACK_AIR, 0);
        ControllerGameStorage.addExperience(ControllerConfigStorage.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelMergeBarracksAir()));
        ControllerGameStorage.addTechnoPower(ControllerConfigStorage.getPowerBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelMergeBarracksAir()));
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksAir();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeMergeBarracksMarine() {
        ControllerCommandPostStorage.addLevelMergeBarracksMarine();
        ControllerGameStorage.reduceCoins(1);
        ControllerInventoryStorage.reduceItem(TypesItems.PLAN_MAX_BARRACK_MARINE, 0);
        ControllerGameStorage.addExperience(ControllerConfigStorage.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelMergeBarracksMarine()));
        ControllerGameStorage.addTechnoPower(ControllerConfigStorage.getPowerBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelMergeBarracksMarine()));
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksMarine();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeMergeBarracksOverland() {
        ControllerCommandPostStorage.addLevelMergeBarracksOverland();
        ControllerGameStorage.reduceCoins(1);
        ControllerInventoryStorage.reduceItem(TypesItems.PLAN_MAX_BARRACK_OVERLAND, 0);
        ControllerGameStorage.addExperience(ControllerConfigStorage.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelMergeBarracksOverland()));
        ControllerGameStorage.addTechnoPower(ControllerConfigStorage.getPowerBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelMergeBarracksOverland()));
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksOverland();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeBuildGoldMine() {
        ControllerCommandPostStorage.addLevelBuildGoldMine();
        ControllerGameStorage.reduceCoins(1);
        ControllerInventoryStorage.reduceItem(TypesItems.PLAN_MAX_GOLD_MINE, 0);
        ControllerGameStorage.addExperience(ControllerConfigStorage.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelBuildGoldMine()));
        ControllerGameStorage.addTechnoPower(ControllerConfigStorage.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelBuildGoldMine()));
        UpgradeOtherInterface.instance.updateInterfaceBuildGoldMine();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeBuildBarracksAir() {
        ControllerCommandPostStorage.addLevelBuildBarracksAir();
        ControllerGameStorage.reduceCoins(1);
        ControllerInventoryStorage.reduceItem(TypesItems.PLAN_CREATE_BARRACK_AIR, 0);
        ControllerGameStorage.addExperience(ControllerConfigStorage.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelBuildBarracksAir()));
        ControllerGameStorage.addTechnoPower(ControllerConfigStorage.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelBuildBarracksAir()));
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksAir();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeBuildBarracksMarine() {
        ControllerCommandPostStorage.addLevelBuildBarracksMarine();
        ControllerGameStorage.reduceCoins(1);
        ControllerInventoryStorage.reduceItem(TypesItems.PLAN_CREATE_BARRACK_MARINE, 0);
        ControllerGameStorage.addExperience(ControllerConfigStorage.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelBuildBarracksMarine()));
        ControllerGameStorage.addTechnoPower(ControllerConfigStorage.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelBuildBarracksMarine()));
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksMarine();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    upgradeBuildBarracksOverland() {
        ControllerCommandPostStorage.addLevelBuildBarracksOverland();
        ControllerGameStorage.reduceCoins(1);
        ControllerInventoryStorage.reduceItem(TypesItems.PLAN_CREATE_BARRACK_OVERLAND, 0);
        ControllerGameStorage.addExperience(ControllerConfigStorage.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelBuildBarracksOverland()));
        ControllerGameStorage.addTechnoPower(ControllerConfigStorage.getPowerBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelBuildBarracksOverland()));
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksOverland();
        ModalCommandPostInterface.instance.updateInterface();
        UpgradeOtherLogic.checkBtnModal();
    }

    getItems() {

    }
}
