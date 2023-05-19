import { _decorator, Component, Node } from 'cc';
import { UpgradeCommandPostInerface } from './UpgradePanel/UpgradeCommandPostInerface';
import { UpgradeOtherInterface } from './UpgradePanel/UpgradeOtherInterface';
const { ccclass, property } = _decorator;

@ccclass('ModalCommandPostLogic')
export class ModalCommandPostLogic extends Component {

    @property({ type: Node })
    public backgraund: Node;

    @property({ type: Node })
    public upgrateCommandPost: Node;

    @property({ type: Node })
    public upgrateOther: Node;

    start() {
        this.closeAll();
    }

    openUpgradeCommandPost() {
        UpgradeCommandPostInerface.instance.updateInterface();
        this.backgraund.active = true;
        this.upgrateCommandPost.active = true;
    }

    openMergeGoldMine() {
        UpgradeOtherInterface.instance.updateInterfaceMergeGoldMine();
        this.openUpgradeOther();
    }

    openMergeTroopAir() {
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopAir();
        this.openUpgradeOther();
    }

    openMergeTroopMarine() {
        UpgradeOtherInterface.instance.updateInterfaceMergeTroopMarine();
        this.openUpgradeOther();
    }

    openMergeTroopOverland() {
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksOverland();
        this.openUpgradeOther();
    }

    openMergeBarracksAir() {
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksAir();
        this.openUpgradeOther();
    }

    openMergeBarracksMarine() {
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksMarine();
        this.openUpgradeOther();
    }

    openMergeBarracksOverland() {
        UpgradeOtherInterface.instance.updateInterfaceMergeBarracksOverland();
        this.openUpgradeOther();
    }

    openBuildGoldMine() {
        UpgradeOtherInterface.instance.updateInterfaceBuildGoldMine();
        this.openUpgradeOther();
    }

    openBuildBarracksAir() {
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksAir();
        this.openUpgradeOther();
    }

    openBuildBarracksMarine() {
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksMarine();
        this.openUpgradeOther();
    }

    openBuildBarracksOverland() {
        UpgradeOtherInterface.instance.updateInterfaceBuildBarracksOverland();
        this.openUpgradeOther();
    }

    openUpgradeOther() {
        this.backgraund.active = true;
        this.upgrateOther.active = true;
    }

    closeAll() {
        this.backgraund.active = false;
        this.upgrateCommandPost.active = false;
        this.upgrateOther.active = false;
    }
}
