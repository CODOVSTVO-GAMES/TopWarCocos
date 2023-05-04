export class Level{
    levelNumber: number
    expirience: number
    powerUponReceipt: number
    energyUponREceipt: number

    constructor(level: number, expirience: number, power: number, energy: number){
        this.levelNumber = level
        this.expirience = expirience
        this.powerUponReceipt = power
        this.energyUponREceipt = energy
    }
} 