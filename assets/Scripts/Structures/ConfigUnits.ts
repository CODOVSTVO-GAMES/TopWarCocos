export class UnitsCongig {
    type: string
    level: number

    experience: number
    power: number

    //поля воинов
    activeHp: number
    damageTroop: number
    typeAttack: string
    timeCreation: number

    //цена покупки
    priceBuy: number

    //ресурсы улучшения
    priceUpdate: number
    imprivementResourceType: string
    imprivementResourceNumber: number

    expPerSpawn: number

    constructor(type: string, level: number, experience: number, power: number, imprivementResourceType: string, imprivementResourceNumber: number, priceUpdate: number, activeHp: number, damageTroop: number, typeAttack: string, timeCreation: number, priceBuy: number, expPerSpawn: number) {
        this.type = type
        this.level = level

        this.experience = experience
        this.power = power

        this.activeHp = activeHp
        this.damageTroop = damageTroop
        this.typeAttack = typeAttack
        this.timeCreation = timeCreation
        this.priceBuy = priceBuy

        this.priceUpdate = priceUpdate
        this.imprivementResourceType = imprivementResourceType
        this.imprivementResourceNumber = imprivementResourceNumber

        this.expPerSpawn = expPerSpawn
    }
}
