export class ConfigurationCharacters {
    public level: number;
    public attack: number;
    public protection: number;
    public leadership: number;
    public type: string;

    constructor(level: number, attack: number, protection: number, leadership: number, type: string) {
        this.level = level;
        this.attack = attack;
        this.protection = protection;
        this.leadership = leadership;
        this.type = type;
    }
}