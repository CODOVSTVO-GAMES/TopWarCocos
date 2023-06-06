import { _decorator, Component } from 'cc';
import { Item } from '../Structures/Item';
const { ccclass } = _decorator;

@ccclass('InventoryStorage')
export class InventoryStorage extends Component {

    public static instance: InventoryStorage;

    public inventory: Array<Item> = [];

    onLoad() {
        InventoryStorage.instance = this;
    }
}