import { _decorator } from 'cc';
import { InventoryStorage } from '../InventoryStorage';
import { Item } from '../../Structures/Item';

export class ControllerInventoryStorage {

    static addItem(type: string, quantity: number) {
        if (quantity == 0) return;
        for (let i = 0; i < InventoryStorage.instance.inventory.length; i++) {
            if (InventoryStorage.instance.inventory[i].type == type) {
                InventoryStorage.instance.inventory[i].quantity += quantity;
                this.updateInvenoryStorage();
                return;
            }
        }
        InventoryStorage.instance.inventory.push(new Item(type, quantity));
        this.updateInvenoryStorage();
    }

    static getAllItems(): Array<Item> {
        return InventoryStorage.instance.inventory;
    }

    static getQuantityByType(type: string): number {
        for (let x = 0; x < InventoryStorage.instance.inventory.length; x++) {
            if (InventoryStorage.instance.inventory[x].type == type) {
                return InventoryStorage.instance.inventory[x].quantity;
            }
        }
        return 0;
    }

    static updateInvenoryStorage() {
        console.log("updateInvenoryStorage");
    }
}
