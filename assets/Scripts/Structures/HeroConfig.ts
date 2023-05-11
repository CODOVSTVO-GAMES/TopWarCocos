export class HeroConfig {
    type: string
    codeName: string

    startDamage: number
    startDefense: number
    startLeader: number

    coefDamage: number
    coefDefense: number

    constructor(type: string, codeName: string, startDamage: number, startLeader: number, startDefense: number, coefDamage: number, coefDefense: number) {
        this.type = type
        this.codeName = codeName

        this.startDamage = startDamage
        this.startDefense = startDefense
        this.startLeader = startLeader

        this.coefDamage = coefDamage
        this.coefDefense = coefDefense
    }
    
}