export class HeroLevel {
    levelNumber: number
    heroExpirience: number
    type: string

    constructor(type: string, level: number, expirience: number) {
        this.type = type
        this.levelNumber = level
        this.heroExpirience = expirience
    }
} 