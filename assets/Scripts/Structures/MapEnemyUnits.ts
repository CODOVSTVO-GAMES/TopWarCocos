import { QuantityItem } from "./QuantityItem"
import { Unit } from "./Unit"

export class MapEnemyBattle {
    numberBattle: number
    powerBattle: number
    units1: Unit[]
    units2: Unit[]
    units3: Unit[]
    reward: QuantityItem[]

    constructor(mapNumer: number, power: number, units1: Unit[], units2: Unit[], units3: Unit[], reward: QuantityItem[]) {
        this.numberBattle = mapNumer
        this.powerBattle = power
        this.units1 = units1
        this.units2 = units2
        this.units3 = units3
        this.reward = reward
    }
}

