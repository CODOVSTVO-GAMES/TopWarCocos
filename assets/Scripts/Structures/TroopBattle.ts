export class TroopBattle {
    teamTroop: string
    typeTroop: string
    levelTroop: number
    indexTroop: number
    quantityTroop: number
    damageTroop: number
    typeAttack: string
    activeHp: number
    availableHp: number

    constructor(teamTroop: string, typeTroop: string, levelTroop: number, indexTroop: number, quantityTroop: number, damageTroop: number, typeAttack: string, activeHp: number, availableHp: number) {
        this.teamTroop = teamTroop
        this.typeTroop = typeTroop
        this.levelTroop = levelTroop
        this.indexTroop = indexTroop
        this.quantityTroop = quantityTroop
        this.damageTroop = damageTroop
        this.typeAttack = typeAttack
        this.activeHp = activeHp
        this.availableHp = availableHp
    }
}