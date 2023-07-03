import { _decorator, Component, Node, Label, instantiate } from 'cc';
import { BackpackModel } from '../Model/BackpackModel';
import { ItemBackpackView } from './ItemBackpackView';
import { BackpackPresenter } from '../Presenter/BackpackPresenter';
const { ccclass, property } = _decorator;

@ccclass('BackpackView')
export class BackpackView extends Component {

    public static instance: BackpackView

    @property({ type: Node })
    private parentContent: Node

    @property({ type: Label })
    private titleSelectItem: Label

    @property({ type: Label })
    private usageQuantitySelectItem: Label

    protected onLoad(): void {
        BackpackView.instance = this
    }

    public eventDeleteItem() {
        BackpackPresenter.processingDeleteItem()
    }

    public eventAddQuantitySelectItem() {
        BackpackPresenter.processingAddQuantitySelectItem()
    }

    public eventReduceQuantitySelectItem() {
        BackpackPresenter.processingReduceQuantitySelectItem()
    }

    public eventApplyItem() {
        BackpackPresenter.processingApplyItem()
    }

    public renderItemsBackpack() {
        for (let i = 0; i < BackpackModel.instance.itemsBackpack.length; i++) {
            BackpackModel.instance.itemsBackpack[i].destroy()
        }
        BackpackModel.instance.itemsBackpack = new Array
        for (let i = 0; i < BackpackModel.instance.backpack.length; i++) {
            let object = instantiate(this.parentContent)

            let { type: typeItem, quantity: quantityItem } = BackpackModel.instance.backpack[i]

            // let typeItem = BackpackModel.instance.backpack[i].type
            // let quantityItem = BackpackModel.instance.backpack[i].quantity

            object.parent = this.parentContent
            object.getComponent(ItemBackpackView).typeItem = typeItem
            object.getComponent(ItemBackpackView).renderQuantityItem(quantityItem)
            object.getComponent(ItemBackpackView).renderSpriteItem()
            BackpackModel.instance.itemsBackpack.push(object)
        }
    }

    public renderTitleSelectItem() {
        let titleSelectItem = BackpackModel.instance.typeSelectItem

        this.titleSelectItem.string = titleSelectItem
    }

    public renderUsageQuantitySelectItem() {
        let usageQuantitySelectItem = BackpackModel.instance.usageQuantitySelectItem.toString()

        this.usageQuantitySelectItem.string = usageQuantitySelectItem
    }
}