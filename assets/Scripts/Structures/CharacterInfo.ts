
export class CharacterInfo {
    public level: number;
    public exp: number;
    public stars: number;
    public type: string;
    public codeName: string;
    public typeTroop: string;

    constructor(level: number, exp: number, stars: number, type: string, codeName: string, typeTroop: string) {
        this.level = level;
        this.exp = exp;
        this.stars = stars;
        this.type = type;
        this.codeName = codeName;
        this.typeTroop = typeTroop;
    }
}