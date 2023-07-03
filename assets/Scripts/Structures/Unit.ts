import { TroopRender } from "../Battle/TroopRender";

export class Unit {
    hp: number
    availableHp: number
    damage: number
    index: number
    level: number
    quantity: number
    attackNumber: number = 0
    typeAttack: string
    typeShot: string
    type: string
    link: TroopRender

    constructor(hp: number, availableHp: number, damage: number, index: number, level: number, quantity: number, typeAttack: string, typeShot: string, type: string) {
        this.hp = hp
        this.availableHp = availableHp
        this.damage = damage
        this.index = index
        this.level = level
        this.quantity = quantity
        this.typeAttack = typeAttack
        this.typeShot = typeShot
        this.type = type
    }
}