import { _decorator, Component, Label, Sprite } from 'cc';
import { BackpackPresenter } from '../Presenter/BackpackPresenter';
import { SpriteModel } from '../Model/SpriteModel';
const { ccclass, property } = _decorator;

@ccclass('ItemBackpackView')
export class ItemBackpackView extends Component {

    public typeItem: string

    @property({ type: Label })
    public quantityItem: Label

    @property({ type: Sprite })
    public spriteItem: Sprite

    public clickItemBackpack() {
        BackpackPresenter.processingSelectItem(this.typeItem)
    }

    public renderQuantityItem(quantity: number) {
        let quantityItem = quantity.toString()

        this.quantityItem.string = quantityItem
    }

    public renderSpriteItem() {
        let spriteItem = SpriteModel.instance.getItemBackpack(this.typeItem)

        this.spriteItem.spriteFrame = spriteItem
    }
}