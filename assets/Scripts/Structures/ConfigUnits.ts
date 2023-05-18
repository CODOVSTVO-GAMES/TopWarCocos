export class UnitsCongig {
    type: string
    level: number

    experience: number
    power: number

    //поля воинов
    hp: number
    damage: number
    attackType: string
    timeCreation: number

    //цена покупки
    priceBuy: number

    //ресурсы улучшения
    priceUpdate: number
    imprivementResourceType: string
    imprivementResourceNumber: number

    expPerSpawn: number

    constructor(
        type: string, level: number,

        experience: number, power: number,

        imprivementResourceType: string, imprivementResourceNumber: number, priceUpdate: number,

        hp: number, damage: number, attackType: string, timeCreation: number, priceBuy: number,

        expPerSpawn: number
    ) {
        this.type = type
        this.level = level

        this.experience = experience
        this.power = power

        this.hp = hp
        this.damage = damage
        this.attackType = attackType
        this.timeCreation = timeCreation
        this.priceBuy = priceBuy

        this.priceUpdate = priceUpdate
        this.imprivementResourceType = imprivementResourceType
        this.imprivementResourceNumber = imprivementResourceNumber

        this.expPerSpawn = expPerSpawn
    }
}
