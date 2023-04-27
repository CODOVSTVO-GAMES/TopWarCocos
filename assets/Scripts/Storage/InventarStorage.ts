import { _decorator, Component, Node } from 'cc';
import { Item } from '../Structures/Item';
const { ccclass, property } = _decorator;

@ccclass('InventarStorage')
export class InventarStorage extends Component {

    public static instance: InventarStorage

    private inventory: Array<Item> = []

    start() {
        InventarStorage.instance = this
    }

    addItem(type:string, quantity: number){
        for(let x = 0; x < this.inventory.length; x++){
            if (this.inventory[x].type == type){
                this.inventory[x].quantity += quantity
                return
            }
        }
        this.inventory.push(new Item(type, quantity))
    }

    getAllItem() : Array<Item> {
        return this.inventory
    }

    getQuantityByType(type: string) : number{
        for(let x = 0; x < this.inventory.length; x++){
            if (this.inventory[x].type == type){
                return this.inventory[x].quantity
            }
        }
        return 0
    }
}