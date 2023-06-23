import { _decorator, Component } from 'cc';
import { QuantityItem } from '../Structures/QuantityItem';
const { ccclass } = _decorator;

@ccclass('InventoryStorage')
export class BackpackStorage extends Component {

    public static instance: BackpackStorage

    public inventory: Array<QuantityItem> = []

    onLoad() {
        BackpackStorage.instance = this
    }
}