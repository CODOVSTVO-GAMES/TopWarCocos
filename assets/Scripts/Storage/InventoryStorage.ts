import { _decorator, Component } from 'cc';
import { Item } from '../Structures/Item';
import { ControllerInventoryStorage } from './Controllers/ControllerInventoryStorage';
import { TypesItems } from '../Static/TypesItems';
const { ccclass } = _decorator;

@ccclass('InventoryStorage')
export class InventoryStorage extends Component {

    public static instance: InventoryStorage

    public inventory: Array<Item> = []

    onLoad() {
        InventoryStorage.instance = this
    }

    start() {
        for (let i = 0; i < TypesItems.BOOKS.length; i++) {
            ControllerInventoryStorage.addItem(TypesItems.BOOKS[i], 12)
        }

        for (let i = 0; i < TypesItems.FRAGMENTS.length; i++) {
            ControllerInventoryStorage.addItem(TypesItems.FRAGMENTS[i], 50);
        }
    }
}