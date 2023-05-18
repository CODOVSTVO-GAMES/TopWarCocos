export class ConfigMergeBuildings {
    type: string
    level: number

    experience: number
    power: number

    //ресурсы улучшения
    priceUpdate: number
    imprivementResourceType: string
    imprivementResourceNumber: number

    productionInTime: number // производство в минуту(рудники)

    constructor(
        type: string, level: number,

        experience: number, power: number,

        imprivementResourceType: string, imprivementResourceNumber: number, priceUpdate: number,
        productionInTime: number
    ) {
        this.type = type
        this.level = level

        this.experience = experience
        this.power = power

        this.priceUpdate = priceUpdate
        this.imprivementResourceType = imprivementResourceType
        this.imprivementResourceNumber = imprivementResourceNumber
        this.productionInTime = productionInTime
    }
}
