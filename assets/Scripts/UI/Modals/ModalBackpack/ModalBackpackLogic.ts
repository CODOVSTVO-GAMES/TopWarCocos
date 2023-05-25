import { _decorator, Component, Node } from 'cc';
import { ControllerInventoryStorage } from '../../../Storage/Controllers/ControllerInventoryStorage';
import { ModalBackpackInterface } from './ModalBackpackInterface';
const { ccclass, property } = _decorator;

@ccclass('ModalBackpackLogic')
export class ModalBackpackLogic extends Component {

    public typeItem: string;

    public quantitySelectItem: number;

    public usageQuantitySelectItem: number;

    deleteItem() {
        ControllerInventoryStorage.reduceItem(this.typeItem, this.usageQuantitySelectItem);
        ModalBackpackInterface.instance.updateInterface();
    }

    addQuantitySelectItem() {
        if (this.quantitySelectItem > this.usageQuantitySelectItem) {
            this.usageQuantitySelectItem += 1;
        }
    }

    reduceQuantitySelectItem() {
        if (this.usageQuantitySelectItem > 0) {
            this.usageQuantitySelectItem -= 1;
        }
    }

    applyItem() {

    }
}

