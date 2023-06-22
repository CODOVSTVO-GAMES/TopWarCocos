import { _decorator, Component } from 'cc';
import { ItemBackpack } from '../Structures/ItemBackpack';
const { ccclass } = _decorator;

@ccclass('InventoryStorage')
export class BackpackStorage extends Component {

    public static instance: BackpackStorage

    public inventory: Array<ItemBackpack> = []

    onLoad() {
        BackpackStorage.instance = this
    }
}