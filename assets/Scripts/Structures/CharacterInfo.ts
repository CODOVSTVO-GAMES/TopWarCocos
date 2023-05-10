export class CharacterInfo {
    public level: number;
    public exp: number;
    public stars: number;
    public attack: number;
    public protection: number;
    public leadership: number;
    public type: string;
    public codeName: string;
    public typeTroop: string;

    constructor(level: number, exp: number, stars: number, attack: number, protection: number, leadership: number, type: string, codeName: string, typeTroop: string) {
        this.level = level;
        this.exp = exp;
        this.stars = stars;
        this.attack = attack;
        this.protection = protection;
        this.leadership = leadership;
        this.type = type;
        this.codeName = codeName;
        this.typeTroop = typeTroop;
    }
}