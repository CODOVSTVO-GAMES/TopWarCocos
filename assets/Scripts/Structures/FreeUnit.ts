import { CardTroopRender } from "../Battle/CardTroopRender";

export class FreeUnit {
    type: string;
    level: number;
    quantity: number;
    hp: number;
    linkToCardTroopRender: CardTroopRender;

    constructor(type: string, level: number, quantity: number, hp: number) {
        this.type = type;
        this.level = level;
        this.quantity = quantity;
        this.hp = hp;
    }
}