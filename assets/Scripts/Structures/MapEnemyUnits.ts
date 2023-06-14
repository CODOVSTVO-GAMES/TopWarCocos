import { Unit } from "./Unit"

export class MapEnemyUnits {
    units1: Unit[]
    units2: Unit[]
    units3: Unit[]

    mapNumber: number
    constructor(mapNumer: number, units1: Unit[], units2: Unit[], units3: Unit[]) {
        this.units1 = units1
        this.units2 = units3
        this.units3 = units3
        this.mapNumber = mapNumer
    }
}

