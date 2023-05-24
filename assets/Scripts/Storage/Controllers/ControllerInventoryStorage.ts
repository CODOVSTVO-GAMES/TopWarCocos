import { _decorator } from 'cc';
import { InventoryStorage } from '../InventoryStorage';
import { Item } from '../../Structures/Item';
import { ControllerBufferStorage } from './ControllerBufferStorage';
import { TypesStorages } from '../../Static/TypesStorages';
import { TypesItems } from '../../Static/TypesItems';

export class ControllerInventoryStorage {

    static assignStartingValues() {
        this.addItem(TypesItems.PLAN_MAX_MAINBUILDING, 100);

        this.addItem(TypesItems.PLAN_MAX_GOLD_MINE, 100);
        this.addItem(TypesItems.PLAN_CREATE_GOLD_MINE, 100);

        this.addItem(TypesItems.PLAN_MAX_AIR, 100);
        this.addItem(TypesItems.PLAN_MAX_MARINE, 100);
        this.addItem(TypesItems.PLAN_MAX_OVERLAND, 100);

        this.addItem(TypesItems.PLAN_MAX_BARRACK_AIR, 100);
        this.addItem(TypesItems.PLAN_MAX_BARRACK_MARINE, 100);
        this.addItem(TypesItems.PLAN_MAX_BARRACK_OVERLAND, 100);

        for (let i = 0; i < TypesItems.BOOKS.length; i++) {
            ControllerInventoryStorage.addItem(TypesItems.BOOKS[i], 12)
        }
        for (let i = 0; i < TypesItems.FRAGMENTS.length; i++) {
            ControllerInventoryStorage.addItem(TypesItems.FRAGMENTS[i], 50);
        }
        
        this.updateInvenoryStorage();
    }

    static assigningSaveValues(obj: Object[]) {
        console.log(obj);
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj));
            InventoryStorage.instance.inventory.push(new Item(json.type, json.quantity));
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
