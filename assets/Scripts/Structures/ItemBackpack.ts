export class ItemBackpack {
    typeItem: string
    quantityItem: number

    constructor(type: string, quantity: number) {
        this.typeItem = type
        this.quantityItem = quantity
    }
}