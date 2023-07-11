export class TroopBattle {
    typeTroop: string
    levelTroop: number
    quantityTroop: number
    damageTroop: number
    typeAttack: string
    typeShot: string
    activeHp: number
    availableHp: number
    attackNumber: number

    constructor(typeTroop: string, levelTroop: number, quantityTroop: number, damageTroop: number, typeAttack: string, typeShot: string, activeHp: number, availableHp: number, attackNumber: number) {
        this.typeTroop = typeTroop
        this.levelTroop = levelTroop
        this.quantityTroop = quantityTroop
        this.damageTroop = damageTroop
        this.typeAttack = typeAttack
        this.typeShot = typeShot
        this.activeHp = activeHp
        this.availableHp = availableHp
        this.attackNumber = attackNumber
    }
}