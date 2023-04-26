export class TroopConfiguration{
    type: string
    level: number
    hp: number
    damage: number
    attackType: string


    constructor(type: string, level: number, hp: number, damage: number, attackType: string){
        this.level = level
        this.type = type
        this.hp = hp
        this.damage = damage
        this.attackType = attackType
    }

}

