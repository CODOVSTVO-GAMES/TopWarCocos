import { _decorator } from 'cc';
import { BackpackStorage } from '../../Storage/InventoryStorage';
import { ItemBackpack } from '../../Structures/ItemBackpack';
import { BufferStorageController } from './BufferStorageController';
import { TypesStorages } from '../../Static/TypesStorages';
import { TypesItems } from '../../Static/TypesItems';

export class BackpackStorageController {

    static assignStartingValues() {
        this.addItem(TypesItems.PLAN_COMMAND_POST, 100)

        this.addItem(TypesItems.PLAN_MERGE_GOLD_MINE, 100)
        this.addItem(TypesItems.PLAN_BUILD_GOLD_MINE, 100)

        this.addItem(TypesItems.PLAN_MERGE_TROOP_AIR, 100)
        this.addItem(TypesItems.PLAN_MERGE_TROOP_MARINE, 100)
        this.addItem(TypesItems.PLAN_MERGE_TROOP_OVERLAND, 100)

        this.addItem(TypesItems.PLAN_MERGE_BARRACK_AIR, 100)
        this.addItem(TypesItems.PLAN_MERGE_BARRACK_MARINE, 100)
        this.addItem(TypesItems.PLAN_MERGE_BARRACK_OVERLAND, 100)

        this.addItem(TypesItems.PLAN_BUILD_BARRACK_AIR, 100)
        this.addItem(TypesItems.PLAN_BUILD_BARRACK_MARINE, 100)
        this.addItem(TypesItems.PLAN_BUILD_BARRACK_OVERLAND, 100)

        for (let i = 0; i < TypesItems.BOOKS.length; i++) {
            BackpackStorageController.addItem(TypesItems.BOOKS[i], 12)
        }
        for (let i = 0; i < TypesItems.FRAGMENTS.length; i++) {
            BackpackStorageController.addItem(TypesItems.FRAGMENTS[i], 50)
        }

        this.saveStorage()
    }

    static assigningSaveValues(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj[i]))
            BackpackStorage.instance.inventory.push(new ItemBackpack(json.type, json.quantity))
        }
    }

    static addItem(type: string, quantity: number) {
        if (quantity == 0) return
        for (let i = 0; i < BackpackStorage.instance.inventory.length; i++) {
            if (BackpackStorage.instance.inventory[i].typeItem == type) {
                BackpackStorage.instance.inventory[i].quantityItem += quantity
                return this.saveStorage()
            }
        }
        BackpackStorage.instance.inventory.push(new ItemBackpack(type, quantity))
        this.saveStorage()
    }

    static reduceItem(type: string, quantity: number) {
        if (quantity == 0) return
        for (let i = 0; i < BackpackStorage.instance.inventory.length; i++) {
            if (BackpackStorage.instance.inventory[i].typeItem == type) {
                BackpackStorage.instance.inventory[i].quantityItem -= quantity
                if (BackpackStorage.instance.inventory[i].quantityItem == 0) {
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

    static getAllItems(): Array<ItemBackpack> {
        return BackpackStorage.instance.inventory
    }

    static getQuantityByType(type: string): number {
        for (let i = 0; i < BackpackStorage.instance.inventory.length; i++) {
            if (BackpackStorage.instance.inventory[i].typeItem == type) {
                return BackpackStorage.instance.inventory[i].quantityItem
            }
        }
        return 0
    }

    static getQuantityByIndex(index: number): number {
        return BackpackStorage.instance.inventory[index].quantityItem
    }

    static getTypeByIndex(index: number): string {
        return BackpackStorage.instance.inventory[index].typeItem
    }

    static saveStorage() {
        let obj: Object[] = []
        for (let i = 0; i < BackpackStorage.instance.inventory.length; i++) {
            obj.push({
                type: BackpackStorage.instance.inventory[i].typeItem,
                quantity: BackpackStorage.instance.inventory[i].quantityItem
            });
        }
        BufferStorageController.addItem(TypesStorages.BACKPACK_STORAGE, obj)
    }
}
