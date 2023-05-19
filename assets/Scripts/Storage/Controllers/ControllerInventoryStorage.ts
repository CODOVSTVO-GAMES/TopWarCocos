import { _decorator } from 'cc';
import { InventoryStorage } from '../InventoryStorage';
import { Item } from '../../Structures/Item';
import { ControllerBufferStorage } from './ControllerBufferStorage';
import { TypesStorages } from '../../Static/TypesStorages';

export class ControllerInventoryStorage {

    static assignStartingValues() {

    }

    static assigningSaveValues(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj));

        }
    }

    static addItem(type: string, quantity: number) {
        if (quantity == 0) return;
        for (let i = 0; i < InventoryStorage.instance.inventory.length; i++) {
            if (InventoryStorage.instance.inventory[i].type == type) {
                InventoryStorage.instance.inventory[i].quantity += quantity;
                return this.updateInvenoryStorage();
            }
        }
        InventoryStorage.instance.inventory.push(new Item(type, quantity));
        this.updateInvenoryStorage();
    }

    static reduceItem(type: string, quantity: number) {
        if (quantity == 0) return;
        for (let i = 0; i < InventoryStorage.instance.inventory.length; i++) {
            if (InventoryStorage.instance.inventory[i].type == type) {
                InventoryStorage.instance.inventory[i].quantity -= quantity;
                return this.updateInvenoryStorage();
            }
        }
        this.updateInvenoryStorage();
    }

    static getAllItems(): Array<Item> {
        return InventoryStorage.instance.inventory;
    }

    static getQuantityByType(type: string): number {
        for (let i = 0; i < InventoryStorage.instance.inventory.length; i++) {
            if (InventoryStorage.instance.inventory[i].type == type) {
                return InventoryStorage.instance.inventory[i].quantity;
            }
        }
        return 0;
    }

    static updateInvenoryStorage() {
        let obj: Object[] = [];
        for (let i = 0; i < InventoryStorage.instance.inventory.length; i++) {
            obj.push({
                type: InventoryStorage.instance.inventory[i].type,
                quantity: InventoryStorage.instance.inventory[i].quantity
            });
        }
        ControllerBufferStorage.addItem(TypesStorages.INVENTORY_STORAGE, obj);
    }
}
