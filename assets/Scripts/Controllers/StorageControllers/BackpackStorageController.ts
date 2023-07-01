import { _decorator } from 'cc';
import { BackpackStorage } from '../../Storage/InventoryStorage';
import { QuantityItem } from '../../Structures/QuantityItem';
import { BufferStorageController } from './BufferStorageController';
import { TypesStorages } from '../../Static/TypesStorages';

export class BackpackStorageController {

    static assigningSaveValues(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj[i]))
            BackpackStorage.instance.inventory.push(new QuantityItem(json.type, json.quantity))
        }
    }

    static addItem(type: string, quantity: number) {
        if (quantity == 0) return
        for (let i = 0; i < BackpackStorage.instance.inventory.length; i++) {
            if (BackpackStorage.instance.inventory[i].type == type) {
                BackpackStorage.instance.inventory[i].quantity += quantity
                return this.saveStorage()
            }
        }
        BackpackStorage.instance.inventory.push(new QuantityItem(type, quantity))
        this.saveStorage()
    }

    static reduceItem(type: string, quantity: number) {
        if (quantity == 0) return
        for (let i = 0; i < BackpackStorage.instance.inventory.length; i++) {
            if (BackpackStorage.instance.inventory[i].type == type) {
                BackpackStorage.instance.inventory[i].quantity -= quantity
                if (BackpackStorage.instance.inventory[i].quantity == 0) {
                    BackpackStorage.instance.inventory.splice(i, 1)
                }
                return this.saveStorage()
            }
        }
        this.saveStorage()
    }

    static getInvenoryLength(): number {
        return BackpackStorage.instance.inventory.length
    }

    static getAllItems(): Array<QuantityItem> {
        return BackpackStorage.instance.inventory
    }

    static getQuantityByType(type: string): number {
        for (let i = 0; i < BackpackStorage.instance.inventory.length; i++) {
            if (BackpackStorage.instance.inventory[i].type == type) {
                return BackpackStorage.instance.inventory[i].quantity
            }
        }
        return 0
    }

    static getQuantityByIndex(index: number): number {
        return BackpackStorage.instance.inventory[index].quantity
    }

    static getTypeByIndex(index: number): string {
        return BackpackStorage.instance.inventory[index].type
    }

    static saveStorage() {
        let obj: Object[] = []
        for (let i = 0; i < BackpackStorage.instance.inventory.length; i++) {
            obj.push({
                type: BackpackStorage.instance.inventory[i].type,
                quantity: BackpackStorage.instance.inventory[i].quantity
            });
        }
        BufferStorageController.addItem(TypesStorages.BACKPACK_STORAGE, obj)
    }
}
