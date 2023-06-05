import { _decorator, Component, Label, Sprite } from 'cc';
import { ModalBackpackLogic } from './ModalBackpackLogic';
import { SpriteStorage } from '../../../Storage/SpriteStorage';
const { ccclass, property } = _decorator;

@ccclass('ItemBackpack')
export class ItemBackpack extends Component {

    public typeItem: string;

    @property({ type: Label })
    public quantityItem: Label;

    @property({ type: Sprite })
    public spriteItem: Sprite;

    clickItemBackpack() {
        ModalBackpackLogic.instance.selectItem(this.typeItem);
    }

    updateLabelQuantity(quantity: number) {
        this.quantityItem.string = quantity.toString();
        this.spriteItem.spriteFrame = SpriteStorage.instance.getItemBackpack(this.typeItem);
    }
}