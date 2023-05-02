
export class ConfigurationCharacters {
    public type: string;
    public attack: number;
    public protection: number;
    public leadership: number;

    constructor(type: string, attack: number, protection: number, leadership: number) {
        this.type = type;
        this.attack = attack;
        this.protection = protection;
        this.leadership = leadership;
    }
}