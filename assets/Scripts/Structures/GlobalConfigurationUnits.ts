export class GlobalConfigurationUnits {
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

    //бонус атаки главного здания
    attackBonus: number

    expPerSpawn: number // даем опыта за спавн(рудники, казармы)
    productionInTime: number // производство в минуту(рудники)


    constructor(
        type: string, level: number,

        experience: number, power: number,

        imprivementResourceType: string, imprivementResourceNumber: number, priceUpdate: number,

        hp: number, damage: number, attackType: string, timeCreation: number, priceBuy: number,

        attackBonus: number,

        expPerSpawn: number, productionInTime: number
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

        this.attackBonus = attackBonus

        this.expPerSpawn = expPerSpawn
        this.productionInTime = productionInTime
    }
}

