import { _decorator, Component } from 'cc';
import { ControllerCommandPostStorage } from '../../../../Storage/Controllers/ControllerCommandPostStorage';
import { UpgradeOtherInterface } from './UpgradeOtherInterface';
import { ControllerGameStorage } from '../../../../Storage/Controllers/ControllerGameStorage';
import { ModalCommandPostLogic } from '../ModalCommandPostLogic';
import { ModalCommandPostInterface } from '../ModalCommandPostInterface';
import { ControllerConfigStorage } from '../../../../Storage/Controllers/ControllerConfigStorage';
const { ccclass } = _decorator;

@ccclass('UpgradeOtherLogic')
export class UpgradeOtherLogic extends Component {

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
        ControllerGameStorage.reduceCoins(1);
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelMergeGoldMine();
        UpgradeOtherInterface.instance.updateInterfaceMergeGoldMine();
        ModalCommandPostInterface.instance.updateInterface();
    }

    upgradeMergeGoldMine() {
        ControllerGameStorage.reduceCoins(1);
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelMergeGoldMine();
        UpgradeOtherInterface.instance.updateInterfaceMergeGoldMine();
        ModalCommandPostInterface.instance.updateInterface();
    }

    upgradeMergeTroopAir() {
        ControllerGameStorage.reduceCoins(1);
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelMergeTroopAir();
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopAir();
        ModalCommandPostInterface.instance.updateInterface();
    }

    upgradeMergeTroopMarine() {
        ControllerGameStorage.reduceCoins(1);
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelMergeTroopMarine();
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopMarine();
        ModalCommandPostInterface.instance.updateInterface();
    }

    upgradeMergeTroopOverland() {
        ControllerGameStorage.reduceCoins(1);
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelMergeTroopOverland();
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopOverland();
        ModalCommandPostInterface.instance.updateInterface();
    }

    upgradeMergeBarracksAir() {
        ControllerGameStorage.reduceCoins(1);
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelMergeBarracksAir();
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksAir();
        ModalCommandPostInterface.instance.updateInterface();
    }

    upgradeMergeBarracksMarine() {
        ControllerGameStorage.reduceCoins(1);
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelMergeBarracksMarine();
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksMarine();
        ModalCommandPostInterface.instance.updateInterface();
    }

    upgradeMergeBarracksOverland() {
        ControllerGameStorage.reduceCoins(1);
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelMergeBarracksOverland();
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksOverland();
        ModalCommandPostInterface.instance.updateInterface();
    }

    upgradeBuildGoldMine() {
        ControllerGameStorage.reduceCoins(1);
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelBuildGoldMine();
        UpgradeOtherInterface.instance.updateInterfaceBuildGoldMine();
        ModalCommandPostInterface.instance.updateInterface();
    }

    upgradeBuildBarracksAir() {
        ControllerGameStorage.reduceCoins(1);
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelBuildBarracksAir();
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksAir();
        ModalCommandPostInterface.instance.updateInterface();
    }

    upgradeBuildBarracksMarine() {
        ControllerGameStorage.reduceCoins(1);
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelBuildBarracksMarine();
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksMarine();
        ModalCommandPostInterface.instance.updateInterface();
    }

    upgradeBuildBarracksOverland() {
        ControllerGameStorage.reduceCoins(1);
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelBuildBarracksOverland();
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksOverland();
        ModalCommandPostInterface.instance.updateInterface();
    }

    getItems() {

    }
}
