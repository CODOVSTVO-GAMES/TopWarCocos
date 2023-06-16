import { _decorator, Component } from 'cc';
import { UpgradeCommandPostInerface } from './UpgradePanel/UpgradeCommandPostInerface';
import { UpgradeOtherInterface } from './UpgradePanel/UpgradeOtherInterface';
import { SecondaryInterface } from '../../SecondaryInterface';
import { TypesModals } from '../../../Static/TypesModals';
const { ccclass } = _decorator;

@ccclass('ModalCommandPostLogic')
export class ModalCommandPostLogic extends Component {

    public static instance: ModalCommandPostLogic;

    onLoad() {
        ModalCommandPostLogic.instance = this;
    }

    openUpgradeCommandPost() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST);
        UpgradeCommandPostInerface.instance.updateInterface();
    }

    openRepairShop() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_REPAIR_SHOP);
        UpgradeOtherInterface.instance.updateInterfaceRepairShop();
    }

    openMergeGoldMine() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_GOLD_MINE);
        UpgradeOtherInterface.instance.updateInterfaceMergeGoldMine();
    }

    openMergeTroopAir() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_TROOP_AIR);
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopAir();
    }

    openMergeTroopMarine() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_TROOP_MARINE);
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopMarine();
    }

    openMergeTroopOverland() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_TROOP_OVERLAND);
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopOverland();
    }

    openMergeBarracksAir() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_BARRACK_AIR);
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksAir();
    }

    openMergeBarracksMarine() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_BARRACK_MARINE);
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksMarine();
    }

    openMergeBarracksOverland() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_BARRACK_OVERLAND);
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksOverland();
    }

    openBuildGoldMine() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_BUILD_GOLD_MINE);
        UpgradeOtherInterface.instance.updateInterfaceBuildGoldMine();
    }

    openBuildBarracksAir() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_BUILD_BARRACK_AIR);
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksAir();
    }

    openBuildBarracksMarine() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_BUILD_BARRACK_MARINE);
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksMarine();
    }

    openBuildBarracksOverland() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_BUILD_BARRACK_OVERLAND);
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksOverland();
    }
}
