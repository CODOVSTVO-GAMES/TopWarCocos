export class ConfigSpawnBuildings {
    type: string
    level: number

    experience: number
    power: number

    //цена покупки
    priceBuy: number

    //ресурсы улучшения
    priceUpdate: number
    imprivementResourceType: string
    imprivementResourceNumber: number

    expPerSpawn: number // даем опыта за спавн(рудники, казармы)

    constructor(
        type: string, level: number, experience: number, power: number,

        imprivementResourceType: string, imprivementResourceNumber: number, priceUpdate: number,

        priceBuy: number,

        expPerSpawn: number
    ) {
        this.type = type
        this.level = level

        this.experience = experience
        this.power = power

        this.priceBuy = priceBuy

        this.priceUpdate = priceUpdate
        this.imprivementResourceType = imprivementResourceType
        this.imprivementResourceNumber = imprivementResourceNumber

        this.expPerSpawn = expPerSpawn
    }
}

