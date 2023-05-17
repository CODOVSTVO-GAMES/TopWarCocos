export class CharacterInfo {
    public level: number;
    public experience: number;
    public stars: number;
    public damage: number;
    public defense: number;
    public leadership: number;
    public type: string;
    public codeName: string;
    public typeTroop: string;

    constructor(level: number, experience: number, stars: number, damage: number, defence: number, leadership: number, type: string, codeName: string, typeTroop: string) {
        this.level = level;
        this.experience = experience;
        this.stars = stars;
        this.damage = damage;
        this.defense = defence;
        this.leadership = leadership;
        this.type = type;
        this.codeName = codeName;
        this.typeTroop = typeTroop;
    }
}