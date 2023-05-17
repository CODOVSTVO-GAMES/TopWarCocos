import { _decorator, Component } from 'cc';
import { Item } from '../Structures/Item';
import { ControllerInventoryStorage } from './Controllers/ControllerInventoryStorage';
import { TypesInventory } from '../Static/TypesInventory';
const { ccclass } = _decorator;

@ccclass('InventoryStorage')
export class InventoryStorage extends Component {

    public static instance: InventoryStorage

    public inventory: Array<Item> = []

    onLoad() {
        InventoryStorage.instance = this
    }

    start() {
        for (let i = 0; i < TypesInventory.BOOKS.length; i++) {
            ControllerInventoryStorage.addItem(TypesInventory.BOOKS[i], 12)
        }

        for (let i = 0; i < TypesInventory.FRAGMENTS.length; i++) {
            ControllerInventoryStorage.addItem(TypesInventory.FRAGMENTS[i], 50);
        }
    }
}