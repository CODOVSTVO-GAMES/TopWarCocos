export class HeroConfig {
    
    type: string
    codeName: string

    startDamage: number
    startLeader: number
    startDefense: number

    coefDamage: number
    coefDefense: number
    
    constructor(type: string, codeName: string , startDamage: number, startLeader: number, startDefense: number, coefDamage: number, coefDefense: number ){
        this.type = type
        this.codeName = codeName

        this.startDamage = startDamage
        this.startLeader = startLeader
        this.startDefense = startDefense

        this.coefDamage = coefDamage
        this.coefDefense = coefDefense
    }
    
}