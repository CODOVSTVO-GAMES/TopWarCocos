import { _decorator, Component } from 'cc';
import { Item } from '../Structures/Item';
const { ccclass } = _decorator;

@ccclass('InventoryStorage')
export class BackpackStorage extends Component {

    public static instance: BackpackStorage

    public inventory: Array<Item> = []

    onLoad() {
        BackpackStorage.instance = this
    }
}