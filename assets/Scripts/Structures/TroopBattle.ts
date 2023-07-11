export class TroopBattle {
    teamTroop: string
    typeTroop: string
    levelTroop: number
    quantityTroop: number
    damageTroop: number
    typeAttack: string
    typeShot: string
    activeHp: number
    availableHp: number

    constructor(teamTroop: string, typeTroop: string, levelTroop: number, quantityTroop: number, damageTroop: number, typeAttack: string, typeShot: string, activeHp: number, availableHp: number) {
        this.teamTroop = teamTroop
        this.typeTroop = typeTroop
        this.levelTroop = levelTroop
        this.quantityTroop = quantityTroop
        this.damageTroop = damageTroop
        this.typeAttack = typeAttack
        this.typeShot = typeShot
        this.activeHp = activeHp
        this.availableHp = availableHp
    }
}