import { _decorator, Component } from 'cc';
import { UpgradeCommandPostInerface } from './UpgradePanel/UpgradeCommandPostInerface';
import { UpgradeOtherInterface } from './UpgradePanel/UpgradeOtherInterface';
import { SecondaryInterface } from '../../SecondaryInterface';
import { TypesModals } from '../../../Static/TypesModals';
const { ccclass  } = _decorator;

@ccclass('ModalCommandPostLogic')
export class ModalCommandPostLogic extends Component {

    public static instance: ModalCommandPostLogic;

    public typeActiveModal: string;

    onLoad() {
        ModalCommandPostLogic.instance = this;
    }

    openUpgradeCommandPost() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_0);
        UpgradeCommandPostInerface.instance.updateInterface();
        this.typeActiveModal = "upgradeCommandPost";
    }

    openRepairShop() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
        UpgradeOtherInterface.instance.updateInterfaceRepairShop();
        this.typeActiveModal = "repairShop";
    }

    openMergeGoldMine() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
        UpgradeOtherInterface.instance.updateInterfaceMergeGoldMine();
        this.typeActiveModal = "mergeGoldMine";
    }

    openMergeTroopAir() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopAir();
        this.typeActiveModal = "mergeTroopAir";
    }

    openMergeTroopMarine() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopMarine();
        this.typeActiveModal = "mergeTroopMarine";
    }

    openMergeTroopOverland() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopOverland();
        this.typeActiveModal = "mergeTroopOverland";
    }

    openMergeBarracksAir() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksAir();
        this.typeActiveModal = "mergeBarracksAir";
    }

    openMergeBarracksMarine() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksMarine();
        this.typeActiveModal = "mergeBarracksMarine";
    }

    openMergeBarracksOverland() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksOverland();
        this.typeActiveModal = "mergeBarracksOverland";
    }

    openBuildGoldMine() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
        UpgradeOtherInterface.instance.updateInterfaceBuildGoldMine();
        this.typeActiveModal = "buildGoldMine";
    }

    openBuildBarracksAir() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksAir();
        this.typeActiveModal = "buildBarracksAir";
    }

    openBuildBarracksMarine() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksMarine();
        this.typeActiveModal = "buildBarracksMarine";
    }

    openBuildBarracksOverland() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksOverland();
        this.typeActiveModal = "buildBarracksOverland";
    }

    getTypeActiveModal(): string {
        return this.typeActiveModal;
    }
}
