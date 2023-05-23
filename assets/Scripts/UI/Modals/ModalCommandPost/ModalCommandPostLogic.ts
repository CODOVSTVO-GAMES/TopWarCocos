import { _decorator, Component, Node } from 'cc';
import { UpgradeCommandPostInerface } from './UpgradePanel/UpgradeCommandPostInerface';
import { UpgradeOtherInterface } from './UpgradePanel/UpgradeOtherInterface';
import { UpgradeCommandPostLogic } from './UpgradePanel/UpgradeCommandPostLogic';
import { UpgradeOtherLogic } from './UpgradePanel/UpgradeOtherLogic';
const { ccclass, property } = _decorator;

@ccclass('ModalCommandPostLogic')
export class ModalCommandPostLogic extends Component {

    public static instance: ModalCommandPostLogic;

    @property({ type: Node })
    public backgraund: Node;

    @property({ type: Node })
    public upgrateCommandPost: Node;

    @property({ type: Node })
    public upgrateOther: Node;

    private typeActiveModal: string;

    onLoad() {
        ModalCommandPostLogic.instance = this;
    }

    start() {
        this.closeAll();
    }

    openUpgradeCommandPost() {
        UpgradeCommandPostInerface.instance.updateInterface();
        UpgradeCommandPostLogic.checkBtnModal();
        this.backgraund.active = true;
        this.upgrateCommandPost.active = true;
        this.typeActiveModal = "upgradeCommandPost";
    }

    openRepairShop() {
        UpgradeOtherInterface.instance.updateInterfaceRepairShop();
        this.typeActiveModal = "repairShop";
        this.openUpgradeOther();
    }

    openMergeGoldMine() {
        UpgradeOtherInterface.instance.updateInterfaceMergeGoldMine();
        this.typeActiveModal = "mergeGoldMine";
        this.openUpgradeOther();
    }

    openMergeTroopAir() {
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopAir();
        this.typeActiveModal = "mergeTroopAir";
        this.openUpgradeOther();
    }

    openMergeTroopMarine() {
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopMarine();
        this.typeActiveModal = "mergeTroopMarine";
        this.openUpgradeOther();
    }

    openMergeTroopOverland() {
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopOverland();
        this.typeActiveModal = "mergeTroopOverland";
        this.openUpgradeOther();
    }

    openMergeBarracksAir() {
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksAir();
        this.typeActiveModal = "mergeBarracksAir";
        this.openUpgradeOther();
    }

    openMergeBarracksMarine() {
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksMarine();
        this.typeActiveModal = "mergeBarracksMarine";
        this.openUpgradeOther();
    }

    openMergeBarracksOverland() {
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksOverland();
        this.typeActiveModal = "mergeBarracksOverland";
        this.openUpgradeOther();
    }

    openBuildGoldMine() {
        UpgradeOtherInterface.instance.updateInterfaceBuildGoldMine();
        this.typeActiveModal = "buildGoldMine";
        this.openUpgradeOther();
    }

    openBuildBarracksAir() {
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksAir();
        this.typeActiveModal = "buildBarracksAir";
        this.openUpgradeOther();
    }

    openBuildBarracksMarine() {
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksMarine();
        this.typeActiveModal = "buildBarracksMarine";
        this.openUpgradeOther();
    }

    openBuildBarracksOverland() {
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksOverland();
        this.typeActiveModal = "buildBarracksOverland";
        this.openUpgradeOther();
    }

    openUpgradeOther() {
        UpgradeOtherLogic.checkBtnModal();
        this.backgraund.active = true;
        this.upgrateOther.active = true;
    }

    closeAll() {
        this.backgraund.active = false;
        this.upgrateCommandPost.active = false;
        this.upgrateOther.active = false;
        this.typeActiveModal = "";
    }

    getTypeActiveModal(): string {
        return this.typeActiveModal;
    }
}
