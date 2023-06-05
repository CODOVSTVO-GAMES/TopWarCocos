import { _decorator, Component } from 'cc';
import { ControllerInventoryStorage } from '../../../Storage/Controllers/ControllerInventoryStorage';
import { ModalBackpackInterface } from './ModalBackpackInterface';
import { TypesItems } from '../../../Static/TypesItems';
import { SecondaryInterface } from '../../SecondaryInterface';
import { TypesModals } from '../../../Static/TypesModals';
import { UpgradeOtherInterface } from '../ModalCommandPost/UpgradePanel/UpgradeOtherInterface';
import { UpgradeCommandPostInerface } from '../ModalCommandPost/UpgradePanel/UpgradeCommandPostInerface';
import { ModalCommandPostLogic } from '../ModalCommandPost/ModalCommandPostLogic';
const { ccclass } = _decorator;

@ccclass('ModalBackpackLogic')
export class ModalBackpackLogic extends Component {

    public static instance: ModalBackpackLogic;

    public typeSelectItem: string;

    public quantitySelectItem: number;

    public usageQuantitySelectItem: number;

    onLoad() {
        ModalBackpackLogic.instance = this;
    }

    openModalBackpack() {
        if (ControllerInventoryStorage.getInvenoryLength() > 0) {
            this.typeSelectItem = ControllerInventoryStorage.getTypeByIndex(0);
            this.quantitySelectItem = ControllerInventoryStorage.getQuantityByType(this.typeSelectItem);
            this.usageQuantitySelectItem = ControllerInventoryStorage.getQuantityByType(this.typeSelectItem);
        }
    }

    deleteItem() {
        if (ControllerInventoryStorage.getQuantityByType(this.typeSelectItem) == this.usageQuantitySelectItem) {
            ControllerInventoryStorage.reduceItem(this.typeSelectItem, this.usageQuantitySelectItem);
            if (ControllerInventoryStorage.getInvenoryLength() > 0) {
                this.typeSelectItem = ControllerInventoryStorage.getTypeByIndex(0);
                this.quantitySelectItem = ControllerInventoryStorage.getQuantityByType(this.typeSelectItem);
                this.usageQuantitySelectItem = ControllerInventoryStorage.getQuantityByType(this.typeSelectItem);
                ModalBackpackInterface.instance.updateInterface();
            }
            else {
                this.typeSelectItem = "";
                this.quantitySelectItem = 0;
                this.usageQuantitySelectItem = 0;
                ModalBackpackInterface.instance.spawnBackpack();
                ModalBackpackInterface.instance.updateInterface();
            }
        }
        else {
            ControllerInventoryStorage.reduceItem(this.typeSelectItem, this.usageQuantitySelectItem);
            this.quantitySelectItem = ControllerInventoryStorage.getQuantityByType(this.typeSelectItem);
            this.usageQuantitySelectItem = ControllerInventoryStorage.getQuantityByType(this.typeSelectItem);
            ModalBackpackInterface.instance.updateInterface();
        }
    }

    addQuantitySelectItem() {
        if (this.quantitySelectItem > this.usageQuantitySelectItem) {
            this.usageQuantitySelectItem += 1;
        }
        ModalBackpackInterface.instance.updateInterface();
    }

    reduceQuantitySelectItem() {
        if (this.usageQuantitySelectItem > 0) {
            this.usageQuantitySelectItem -= 1;
        }
        ModalBackpackInterface.instance.updateInterface();
    }

    selectItem(type: string) {
        this.typeSelectItem = type;
        this.quantitySelectItem = ControllerInventoryStorage.getQuantityByType(this.typeSelectItem);
        this.usageQuantitySelectItem = ControllerInventoryStorage.getQuantityByType(this.typeSelectItem);
        ModalBackpackInterface.instance.updateInterface();
    }

    applyItem() {
        if (this.typeSelectItem == TypesItems.PLAN_COMMAND_POST) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_0);
            ModalCommandPostLogic.instance.typeActiveModal = "repairShop";
            UpgradeCommandPostInerface.instance.updateInterface();
        }
        else if (this.typeSelectItem == TypesItems.PLAN_MERGE_TROOP_AIR) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
            ModalCommandPostLogic.instance.typeActiveModal = "mergeTroopAir";
            UpgradeOtherInterface.instance.updateInterfaceMergeTroopAir();
        }
        else if (this.typeSelectItem == TypesItems.PLAN_MERGE_TROOP_MARINE) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
            ModalCommandPostLogic.instance.typeActiveModal = "mergeTroopMarine";
            UpgradeOtherInterface.instance.updateInterfaceMergeTroopMarine();
        }
        else if (this.typeSelectItem == TypesItems.PLAN_MERGE_TROOP_OVERLAND) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
            ModalCommandPostLogic.instance.typeActiveModal = "mergeTroopOverland";
            UpgradeOtherInterface.instance.updateInterfaceMergeTroopOverland();
        }
        else if (this.typeSelectItem == TypesItems.PLAN_MERGE_GOLD_MINE) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
            ModalCommandPostLogic.instance.typeActiveModal = "mergeGoldMine";
            UpgradeOtherInterface.instance.updateInterfaceMergeGoldMine();
        }
        else if (this.typeSelectItem == TypesItems.PLAN_MERGE_BARRACK_AIR) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
            ModalCommandPostLogic.instance.typeActiveModal = "mergeBarracksAir";
            UpgradeOtherInterface.instance.updateInterfaceMergeBarracksAir();
        }
        else if (this.typeSelectItem == TypesItems.PLAN_MERGE_BARRACK_MARINE) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
            ModalCommandPostLogic.instance.typeActiveModal = "mergeBarracksMarine";
            UpgradeOtherInterface.instance.updateInterfaceMergeBarracksMarine();
        }
        else if (this.typeSelectItem == TypesItems.PLAN_MERGE_BARRACK_OVERLAND) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
            ModalCommandPostLogic.instance.typeActiveModal = "mergeBarracksOverland";
            UpgradeOtherInterface.instance.updateInterfaceMergeBarracksOverland();
        }
        else if (this.typeSelectItem == TypesItems.PLAN_BUILD_GOLD_MINE) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
            ModalCommandPostLogic.instance.typeActiveModal = "buildGoldMine";
            UpgradeOtherInterface.instance.updateInterfaceBuildGoldMine();
        }
        else if (this.typeSelectItem == TypesItems.PLAN_BUILD_BARRACK_AIR) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
            ModalCommandPostLogic.instance.typeActiveModal = "buildBarracksAir";
            UpgradeOtherInterface.instance.updateInterfaceBuildBarracksAir();
        }
        else if (this.typeSelectItem == TypesItems.PLAN_BUILD_BARRACK_MARINE) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
            ModalCommandPostLogic.instance.typeActiveModal = "buildBarracksMarine";
            UpgradeOtherInterface.instance.updateInterfaceBuildBarracksMarine();
        }
        else if (this.typeSelectItem == TypesItems.PLAN_BUILD_BARRACK_OVERLAND) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST_1);
            ModalCommandPostLogic.instance.typeActiveModal = "buildBarracksOverland";
            UpgradeOtherInterface.instance.updateInterfaceBuildBarracksOverland();
        }
    }
}

