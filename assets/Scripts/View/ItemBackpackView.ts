import { _decorator, Component, Label, Sprite } from 'cc';
import { BackpackPresenter } from '../Presenter/BackpackPresenter';
import { SpriteModel } from '../Model/SpriteModel';
const { ccclass, property } = _decorator;

@ccclass('ItemBackpackView')
export class ItemBackpackView extends Component {

    public type: string
    public quantity: number

    @property({ type: Label })
    public quantityItem: Label

    @property({ type: Sprite })
    public spriteItem: Sprite

    public eventSelectItem() {
        BackpackPresenter.processingSelectItem(this.type)
    }

    public renderInterface(type: string, quantity: number) {
        this.type = type
        this.quantity = quantity

        this.renderQuantityItem()
        this.renderSpriteItem()
    }

    private renderQuantityItem() {
        let quantityItem = this.quantity.toString()

        this.quantityItem.string = quantityItem
    }

    private renderSpriteItem() {
        let spriteItem = SpriteModel.instance.getItemBackpack(this.type)

        this.spriteItem.spriteFrame = spriteItem
    }
}