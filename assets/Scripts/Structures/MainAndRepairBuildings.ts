
export class MainAndRepairBuildings {
    type: string
    level: number

    experience: number
    power: number

    //ресурсы улучшения
    priceUpdate: number
    imprivementResourceType: string
    imprivementResourceNumber: number

    //бонус атаки главного здания
    attackBonus: number

    constructor(
        type: string, level: number,

        experience: number, power: number,

        imprivementResourceType: string, imprivementResourceNumber: number, priceUpdate: number,
        attackBonus: number
    ) {
        this.type = type
        this.level = level

        this.experience = experience
        this.power = power

        this.priceUpdate = priceUpdate
        this.imprivementResourceType = imprivementResourceType
        this.imprivementResourceNumber = imprivementResourceNumber

        this.attackBonus = attackBonus
    }
}