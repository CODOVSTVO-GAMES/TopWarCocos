import { _decorator, Component } from 'cc';
import { ControllerInventoryStorage } from '../../../Storage/Controllers/ControllerInventoryStorage';
import { ModalBackpackInterface } from './ModalBackpackInterface';
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
            }
            else {
                this.typeSelectItem = "";
                this.quantitySelectItem = 0;
                this.usageQuantitySelectItem = 0;
            }
        }
        else {
            ControllerInventoryStorage.reduceItem(this.typeSelectItem, this.usageQuantitySelectItem);
            this.quantitySelectItem = ControllerInventoryStorage.getQuantityByType(this.typeSelectItem);
            this.usageQuantitySelectItem = ControllerInventoryStorage.getQuantityByType(this.typeSelectItem);
        }
        ModalBackpackInterface.instance.updateInterface();
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
        console.log("applyItem");
    }       
}

