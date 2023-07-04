import { _decorator, Component, Node } from 'cc';
import { QuantityItem } from '../Structures/QuantityItem';
const { ccclass } = _decorator;

@ccclass('BackpackModel')
export class BackpackModel extends Component {

    public static instance: BackpackModel

    public backpack: QuantityItem[]
    public itemsBackpack: Node[]
    public typeSelectItem: string
    public quantitySelectItem: number
    public usageQuantitySelectItem: number

    protected onLoad(): void {
        this.assignStartingValues()
        BackpackModel.instance = this
    }

    private assignStartingValues() {
        this.backpack = []
        this.typeSelectItem = ""
        this.quantitySelectItem = 0
        this.usageQuantitySelectItem = 0
    }
}