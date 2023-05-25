import { _decorator, Component, instantiate, Node, Label } from 'cc';
import { ControllerInventoryStorage } from '../../../Storage/Controllers/ControllerInventoryStorage';
import { PrefabsStorage } from '../../../Storage/PrefabsStorage';
import { ModalBackpackLogic } from './ModalBackpackLogic';
import { ItemBackpack } from './ItemBackpack';
const { ccclass, property } = _decorator;

@ccclass('ModalBackpackInterface')
export class ModalBackpackInterface extends Component {

    public static instance: ModalBackpackInterface;

    @property({ type: Node })
    private parentContent: Node;

    @property({ type: Node })
    private items: Node[] = [];

    @property({ type: Label })
    private titleSelectItem: Label;

    @property({ type: Label })
    private usageQuantitySelectItem: Label;

    onLoad() {
        ModalBackpackInterface.instance = this;
    }

    updateInterface() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].destroy();
        }
        this.items = new Array();
        for (let i = 0; i < ControllerInventoryStorage.getInvenoryLength(); i++) {
            let object = instantiate(PrefabsStorage.instance.getItemBackpack());
            object.parent = this.parentContent;
            object.getComponent(ItemBackpack).typeItem = ControllerInventoryStorage.getTypeByIndex(i);
            object.getComponent(ItemBackpack).updateLabelQuantity(ControllerInventoryStorage.getQuantityByIndex(i));
            this.items.push(object);
        }
        this.titleSelectItem.string = ModalBackpackLogic.instance.typeSelectItem;
        this.usageQuantitySelectItem.string = ModalBackpackLogic.instance.usageQuantitySelectItem.toString();
    }
}
