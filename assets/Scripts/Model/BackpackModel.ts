import { _decorator, Component, Node } from 'cc';
import { QuantityItem } from '../Structures/QuantityItem';
const { ccclass } = _decorator;

@ccclass('BackpackModel')
export class BackpackModel extends Component {

    public static instance: BackpackModel

    public backpack: Array<QuantityItem>
    public itemsBackpack: Array<Node>
    public typeSelectItem: string = ""
    public quantitySelectItem: number = 0
    public usageQuantitySelectItem: number = 0

    protected onLoad(): void {
        BackpackModel.instance = this
    }
}