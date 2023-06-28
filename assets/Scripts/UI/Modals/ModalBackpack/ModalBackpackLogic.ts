import { _decorator, Component } from 'cc';
import { BackpackStorageController } from '../../../Controllers/StorageControllers/BackpackStorageController';
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
        if (BackpackStorageController.getInvenoryLength() > 0) {
            this.typeSelectItem = BackpackStorageController.getTypeByIndex(0);
            this.quantitySelectItem = BackpackStorageController.getQuantityByType(this.typeSelectItem);
            this.usageQuantitySelectItem = BackpackStorageController.getQuantityByType(this.typeSelectItem);
        }
    }

    deleteItem() {
        if (BackpackStorageController.getQuantityByType(this.typeSelectItem) == this.usageQuantitySelectItem) {
            BackpackStorageController.reduceItem(this.typeSelectItem, this.usageQuantitySelectItem);
            if (BackpackStorageController.getInvenoryLength() > 0) {
                this.typeSelectItem = BackpackStorageController.getTypeByIndex(0);
                this.quantitySelectItem = BackpackStorageController.getQuantityByType(this.typeSelectItem);
                this.usageQuantitySelectItem = BackpackStorageController.getQuantityByType(this.typeSelectItem);
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
            BackpackStorageController.reduceItem(this.typeSelectItem, this.usageQuantitySelectItem);
            this.quantitySelectItem = BackpackStorageController.getQuantityByType(this.typeSelectItem);
            this.usageQuantitySelectItem = BackpackStorageController.getQuantityByType(this.typeSelectItem);
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
        this.quantitySelectItem = BackpackStorageController.getQuantityByType(this.typeSelectItem);
        this.usageQuantitySelectItem = BackpackStorageController.getQuantityByType(this.typeSelectItem);
        ModalBackpackInterface.instance.updateInterface();
    }

    applyItem() {
        if (this.typeSelectItem == TypesItems.PLAN_COMMAND_POST) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST)
            UpgradeCommandPostInerface.instance.updateInterface()
        }
        else if (this.typeSelectItem == TypesItems.PLAN_MERGE_TROOP_AIR) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_TROOP_AIR)
            UpgradeOtherInterface.instance.updateInterfaceMergeTroopAir()
        }
        else if (this.typeSelectItem == TypesItems.PLAN_MERGE_TROOP_MARINE) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_TROOP_MARINE)
            UpgradeOtherInterface.instance.updateInterfaceMergeTroopMarine()
        }
        else if (this.typeSelectItem == TypesItems.PLAN_MERGE_TROOP_OVERLAND) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_TROOP_OVERLAND)
            UpgradeOtherInterface.instance.updateInterfaceMergeTroopOverland();
        }
        else if (this.typeSelectItem == TypesItems.PLAN_MERGE_GOLD_MINE) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_GOLD_MINE)
            UpgradeOtherInterface.instance.updateInterfaceMergeGoldMine()
        }
        else if (this.typeSelectItem == TypesItems.PLAN_MERGE_BARRACK_AIR) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_BARRACK_AIR)
            UpgradeOtherInterface.instance.updateInterfaceMergeBarracksAir()
        }
        else if (this.typeSelectItem == TypesItems.PLAN_MERGE_BARRACK_MARINE) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_BARRACK_MARINE)
            UpgradeOtherInterface.instance.updateInterfaceMergeBarracksMarine()
        }
        else if (this.typeSelectItem == TypesItems.PLAN_MERGE_BARRACK_OVERLAND) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_BARRACK_OVERLAND)
            UpgradeOtherInterface.instance.updateInterfaceMergeBarracksOverland()
        }
        else if (this.typeSelectItem == TypesItems.PLAN_BUILD_GOLD_MINE) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_BUILD_GOLD_MINE)
            UpgradeOtherInterface.instance.updateInterfaceBuildGoldMine()
        }
        else if (this.typeSelectItem == TypesItems.PLAN_BUILD_BARRACK_AIR) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_BUILD_BARRACK_AIR)
            UpgradeOtherInterface.instance.updateInterfaceBuildBarracksAir()
        }
        else if (this.typeSelectItem == TypesItems.PLAN_BUILD_BARRACK_MARINE) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_BUILD_BARRACK_MARINE)
            UpgradeOtherInterface.instance.updateInterfaceBuildBarracksMarine()
        }
        else if (this.typeSelectItem == TypesItems.PLAN_BUILD_BARRACK_OVERLAND) {
            SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_BUILD_BARRACK_OVERLAND)
            UpgradeOtherInterface.instance.updateInterfaceBuildBarracksOverland()
        }
    }
}

