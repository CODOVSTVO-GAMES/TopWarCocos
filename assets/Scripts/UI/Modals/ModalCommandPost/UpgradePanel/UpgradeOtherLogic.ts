import { _decorator, Component } from 'cc';
import { ControllerCommandPostStorage } from '../../../../Storage/Controllers/ControllerCommandPostStorage';
import { UpgradeOtherInterface } from './UpgradeOtherInterface';
import { ControllerGameStorage } from '../../../../Storage/Controllers/ControllerGameStorage';
const { ccclass, property } = _decorator;

@ccclass('UpgradeOtherLogic')
export class UpgradeOtherLogic extends Component {

    upgrateMergeGoldMine() {
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelMergeGoldMine();
        UpgradeOtherInterface.instance.updateInterfaceMergeGoldMine();
    }

    upgrateMergeTroopAir() {
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelMergeTroopAir();
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopAir();
    }

    upgrateMergeTroopMarine() {
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelMergeTroopMarine();
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopMarine();
    }

    upgrateMergeTroopOverland() {
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelMergeTroopOverland();
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopOverland();
    }

    upgrateMergeBarracksAir() {
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelMergeBarracksAir();
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksAir();
    }

    upgrateMergeBarracksMarine() {
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelMergeBarracksMarine();
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksMarine();
    }

    upgrateMergeBarracksOverland() {
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelMergeBarracksOverland();
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksOverland();
    }

    upgrateBuildGoldMine() {
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelBuildGoldMine();
        UpgradeOtherInterface.instance.updateInterfaceBuildGoldMine();
    }

    upgrateBuildBarracksAir() {
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelBuildBarracksAir();
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksAir();
    }

    upgrateBuildBarracksMarine() {
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelBuildBarracksMarine();
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksMarine();
    }

    upgrateBuildBarracksOverland() {
        ControllerGameStorage.addExperience(1);
        ControllerGameStorage.addTechnoPower(1);
        ControllerCommandPostStorage.addLevelBuildBarracksOverland();
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksOverland();
    }

    getItems() {

    }
}
