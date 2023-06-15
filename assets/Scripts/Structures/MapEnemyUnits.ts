import { TaskReward } from "./TaskReward"
import { Unit } from "./Unit"

export class MapEnemyBattle {
    mapNumber: number

    units1: Unit[]
    units2: Unit[]
    units3: Unit[]

    power: number

    reward: TaskReward[]

    constructor(mapNumer: number, units1: Unit[], units2: Unit[], units3: Unit[], power: number, reward: TaskReward[]) {
        this.mapNumber = mapNumer

        this.units1 = units1
        this.units2 = units3
        this.units3 = units3

        this.power = power

        this.reward = reward
    }
}

