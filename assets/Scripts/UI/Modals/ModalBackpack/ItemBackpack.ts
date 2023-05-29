import { _decorator, Component, Label } from 'cc';
import { ModalBackpackLogic } from './ModalBackpackLogic';
const { ccclass, property } = _decorator;

@ccclass('ItemBackpack')
export class ItemBackpack extends Component {

    public typeItem: string;

    @property({ type: Label })
    public quantityItem: Label;

    clickItemBackpack() {
        ModalBackpackLogic.instance.selectItem(this.typeItem);
    }

    updateLabelQuantity(quantity: number) {
        this.quantityItem.string = quantity.toString();
    }
}