import { _decorator, Component, instantiate, Label, Node, Prefab, Sprite } from 'cc';
import { TypesObjects } from '../Static/TypesObjects';
import { TroopRender } from './TroopRender';
import { SpriteStorage } from '../SpriteStorage';
import { BattleMap } from './BattleMap';
const { ccclass, property } = _decorator;

@ccclass('Battle')
export class Battle extends Component {

    public static instance: Battle;

    @property({ type: Prefab })
    public troop: Prefab;

    @property({ type: Node })
    public cards: Node[] = [];

    @property({ type: Sprite })
    public sprites: Sprite[] = [];

    @property({ type: Label })
    public texts: Label[] = [];

    @property({ type: Label })
    public quantity: Label[] = [];

    public arrayOwn: Unit[] = [];
    public arrayEnemy: Unit[] = [];
    public arrayCards: FreeUnit[] = [];

    onLoad() {
        Battle.instance = this;
        this.arrayOwn = new Array(6);
    }

    start() {
        this.arrayCards = this.getFreeUnits();
        this.enemyRender();
        this.cardsRender();
    }

    getFreeUnits(): FreeUnit[] {
        let array = new Array(13);
        for (let i = 0; i < 3; i++) {
            array[i] = new FreeUnit(TypesObjects.TROOP_OVERLAND, i + 1, i + 1, 10);
        }
        return array;
    }

    genEnemyUnits(): Unit[] {
        let array = new Array(6);
        for (let i = 0; i < array.length; i++) {
            array[i] = new Unit(10, 0, "vertical", i, TypesObjects.TROOP_OVERLAND, i + 1);
        }
        return array;
    }

    enemyRender() {
        this.arrayEnemy = this.genEnemyUnits();
        for (let i = 0; i < this.arrayEnemy.length; i++) {
            let gameObject = instantiate(this.troop);
            gameObject.setParent(BattleMap.instance.coordsEnemy[i]);
            let troopRender = gameObject.getComponent(TroopRender);
            troopRender.index = i;
            troopRender.team = TypesObjects.TEAM_ENEMY;
        }
    }

    cardsRender() {
        for (let i = 0; i < this.arrayCards.length; i++) {
            if (this.arrayCards[i] != null) {
                this.cards[i].active = true;
                this.texts[i].string = "Lvl. " + this.arrayCards[i].level;
                this.quantity[i].string = this.arrayCards[i].quantity.toString();
                this.sprites[i].spriteFrame = SpriteStorage.instance.getSprite(this.arrayCards[i].type, this.arrayCards[i].level);
            }
            else {
                this.cards[i].active = false;
            }
        }
    }

    clickCard(event, customEventData) {
        for (let i = 0; i < this.arrayOwn.length; i++) {
            if (this.arrayOwn[i] == null) {
                let unit = this.arrayCards[customEventData];
                this.arrayOwn[i] = new Unit(unit.hp, 0, "vertical", i, unit.type, unit.level);
                if (unit.quantity > 1) {
                    unit.quantity--;
                }
                else {
                    this.arrayCards.splice(customEventData, 1);
                    this.arrayCards.push(null);
                }
                this.unitsOwnRender();
                this.cardsRender();
                break;
            }
        }
    }

    unitsOwnRender() {
        for (let i = 0; i < this.arrayOwn.length; i++) {
            if (this.arrayOwn[i] != null) {
                if (this.arrayOwn[i].link == null) {
                    this.spawnTroop(i);
                }
                else {
                    this.arrayOwn[i].link.nodeObject.destroy();
                    this.spawnTroop(i);
                }
            }
        }
    }

    spawnTroop(i: number) {
        let gameObject = instantiate(this.troop);
        gameObject.setParent(BattleMap.instance.coordsOwn[i]);
        this.arrayOwn[i].link = gameObject.getComponent(TroopRender);
        this.arrayOwn[i].link.index = this.arrayOwn[i].numInCell;
        this.arrayOwn[i].link.team = TypesObjects.TEAM_OWN;
    }

    clickTroop(index: number) {
        let unit = this.arrayOwn[index];
        this.returnUnitInFreeArray(unit)
        this.arrayOwn[index] = null;
        this.unitsOwnRender();
        this.cardsRender();
    }

    returnUnitInFreeArray(unit: Unit) {
        for (let x = 0; x < this.arrayCards.length; x++) {
            if (this.arrayCards[x] != undefined && this.arrayCards[x].type == unit.type && this.arrayCards[x].level == unit.level) {
                this.arrayCards[x].quantity += 1;
                return;
            }
        }
        for (let x = 0; x < this.arrayCards.length; x++) {
            if (this.arrayCards[x] == null) {
                this.arrayCards[x] = new FreeUnit(unit.type, unit.level, 1, unit.hp);
                return;
            }
        }
    }

    inBattle() {
        // запретить любые нажатия на экран
        // запуск куратины
        // 
    }

    
}

export class Unit {
    hp: number;
    damage: number;
    skill: string;
    numInCell: number;
    type: string;
    level: number;
    link: TroopRender;

    constructor(hp: number, damage: number, skill: string, numInCell: number, type: string, level: number) {
        this.hp = hp
        this.damage = damage;
        this.skill = skill;
        this.numInCell = numInCell;
        this.type = type;
        this.level = level;
    }
}

class FreeUnit {
    type: string;
    level: number;
    quantity: number;
    hp: number;

    constructor(type: string, level: number, quantity: number, hp: number) {
        this.type = type;
        this.level = level;
        this.quantity = quantity;
        this.hp = hp;
    }
}