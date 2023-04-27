import { _decorator, Component, instantiate, Label, Node, Prefab, Sprite } from 'cc';
import { TypesObjects } from '../Static/TypesObjects';
import { TroopRender } from './TroopRender';
import { SpriteStorage } from '../SpriteStorage';
import { BattleMap } from './BattleMap';
import { TypesAttack } from '../Static/TypesAttack';
const { ccclass, property } = _decorator;

@ccclass('Battle')
export class Battle extends Component {

    public static instance: Battle;

    @property({ type: Prefab })
    public troop: Prefab;

    @property({ type: Node })
    public inBattleBtn: Node;

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
    public isBattle: boolean = false;
    public attackingTeam: number = 0;
    public attackNumber: number = 0;

    onLoad() {
        Battle.instance = this;
        this.arrayOwn = new Array(6);
    }

    start() {
        this.arrayEnemy = this.genEnemyUnits();
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
        for (let i = 0; i < 2; i++) {
            array[i] = new Unit(10, 2, "vertical", i, TypesObjects.TROOP_OVERLAND, i + 1);
        }
        return array;
    }

    enemyRender() {
        for (let i = 0; i < this.arrayEnemy.length; i++) {
            if (this.arrayEnemy[i] != null) {
                let gameObject = instantiate(this.troop);
                gameObject.setParent(BattleMap.instance.coordsEnemy[i]);
                let troopRender = gameObject.getComponent(TroopRender);
                troopRender.index = i;
                troopRender.team = TypesObjects.TEAM_ENEMY;
                this.arrayEnemy[i].link = troopRender;
            }
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
                this.arrayOwn[i] = new Unit(unit.hp, 2, "vertical", i, unit.type, unit.level);
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
                if (this.arrayOwn[i].hp <= 0) {
                    this.arrayOwn[i].link.nodeObject.destroy();
                    this.arrayOwn[i] = null;
                }
            }
        }
    }

    spawnTroop(i: number) {
        let gameObject = instantiate(this.troop);
        gameObject.setParent(BattleMap.instance.coordsOwn[i]);
        this.arrayOwn[i].link = gameObject.getComponent(TroopRender);
        this.arrayOwn[i].link.index = this.arrayOwn[i].index;
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
        if (this.isBattle == false) {
            for (let i = 0; i < this.arrayOwn.length; i++) {
                if (this.arrayOwn[i] != null) {
                    this.isBattle = true;
                    this.inBattleBtn.active = false;
                    for (let i = 0; i < this.cards.length; i++) {
                        this.cards[i].active = false;
                    }
                    this.attack();
                    // while (this.troopAlive()) {

                    // }

                    // for (let i = 0; i < 1; i++) {

                    // }}
                }
            }
        }
    }

    attack() {
        if (this.attackingTeam == 0) {
            for (let i = 0; i < this.arrayEnemy.length; i++) {
                if (i == 0) {
                    this.attackNumber++;
                }
                if (this.arrayEnemy[i] != null) {
                    if (this.arrayEnemy[i].attackNumber < this.attackNumber) {
                        let units = this.goalSelection(this.arrayEnemy[i].link.team, this.arrayEnemy[i].type, "hor", "one");
                        if (units.length > 0) {
                            for (let i = 0; i < units.length; i++) {
                                this.arrayOwn[units[i]].hp -= this.arrayEnemy[i].damage;
                            }
                        }
                        this.unitsOwnRender();
                        this.arrayEnemy[i].attackNumber = this.attackNumber;
                    }
                }
            }
        }
        else if (this.attackingTeam == 1) {

        }
        console.log(this.arrayEnemy);
        console.log(this.arrayOwn);
    }

    troopAlive(): boolean {
        return this.howManyAliveOwn() > 0 && this.howManyAliveEnemy() > 0;
    }

    howManyAliveOwn(): number {
        let quantityAlive = 0;
        for (let i = 0; i < this.arrayOwn.length; i++) {
            if (this.arrayOwn[i] != null) {
                if (this.arrayOwn[i].hp > 0) {
                    quantityAlive++;
                }
            }
        }
        return quantityAlive;
    }

    howManyAliveEnemy(): number {
        let quantityAlive = 0;
        for (let i = 0; i < this.arrayEnemy.length; i++) {
            if (this.arrayEnemy[i] != null) {
                if (this.arrayEnemy[i].hp > 0) {
                    quantityAlive++;
                }
            }
        }
        return quantityAlive;
    }

    goalSelection(team: string, type: string, typeAttack: string, typeShot: string): number[] {
        let units;
        let quantity;
        let arrayUnits = [];
        if (team == TypesObjects.TEAM_ENEMY) {
            units = this.arrayOwn.slice(0);
        }
        else if (team == TypesObjects.TEAM_OWN) {
            units = this.arrayEnemy.slice(0);
        }
        switch (typeShot) {
            case TypesAttack.ONE:
                quantity = 1;
                break;
            case TypesAttack.TWO:
                quantity = 2;
                break;
            case TypesAttack.THREE:
                quantity = 3;
                break;
        }
        for (let i = 0; i < units.length; i++) {
            if (units[i] != null) {
                if (typeAttack == TypesAttack.HORIZON) {
                    if (units[i].type == type) {
                        arrayUnits.push(i);
                    }
                }
                else if (typeAttack == TypesAttack.VERTICAL) {
                    arrayUnits.push(i);
                }
            }
        }
        let conclusion = [];
        for (let i = 0; i < quantity; i++) {
            if (arrayUnits.length > 0) {
                conclusion.push(arrayUnits[Math.floor(Math.random() * arrayUnits.length)]);
            }
        }
        return conclusion;
    }
}

export class Unit {
    hp: number;
    damage: number;
    skill: string;
    index: number;
    type: string;
    level: number;
    attackNumber: number = 0;
    link: TroopRender;

    constructor(hp: number, damage: number, skill: string, index: number, type: string, level: number) {
        this.hp = hp
        this.damage = damage;
        this.skill = skill;
        this.index = index;
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