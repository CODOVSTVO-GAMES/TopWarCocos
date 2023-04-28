import { _decorator, Component, instantiate, Label, Node, Prefab, Sprite } from 'cc';
import { TypesObjects } from '../Static/TypesObjects';
import { TroopRender } from './TroopRender';
import { SpriteStorage } from '../SpriteStorage';
import { BattleMap } from './BattleMap';
import { TypesAttack } from '../Static/TypesAttack';
import { ConfigStorage } from '../Storage/ConfigStorage';
const { ccclass, property } = _decorator;

@ccclass('Battle')
export class Battle extends Component {

    public static instance: Battle;

    @property({ type: Prefab })
    public troop: Prefab;

    @property({ type: Node })
    public inBattleBtn: Node;

    @property({ type: Node })
    public endScreen: Node;

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
        this.sortedArrayCards();
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
            let config = ConfigStorage.instance.getConfigByTypeAndLevel(TypesObjects.TROOP_OVERLAND, i + 1);
            array[i] = new Unit(config.hp, config.damage, TypesAttack.HORIZON, config.attackType, i, config.type, config.level);
        }
        return array;
    }

    ownRender() {
        for (let i = 0; i < this.arrayOwn.length; i++) {
            if (this.arrayOwn[i] != null) {
                if (this.arrayOwn[i].link == null) {
                    this.spawnTroop(i, TypesObjects.TEAM_OWN);
                }
                else {
                    this.arrayOwn[i].link.nodeObject.destroy();
                    this.spawnTroop(i, TypesObjects.TEAM_OWN);
                }
                if (this.arrayOwn[i].hp <= 0) {
                    this.arrayOwn[i].link.nodeObject.destroy();
                    this.arrayOwn[i] = null;
                }
            }
        }
    }

    enemyRender() {
        for (let i = 0; i < this.arrayEnemy.length; i++) {
            if (this.arrayEnemy[i] != null) {
                if (this.arrayEnemy[i].link == null) {
                    this.spawnTroop(i, TypesObjects.TEAM_ENEMY);
                }
                else {
                    this.arrayEnemy[i].link.nodeObject.destroy();
                    this.spawnTroop(i, TypesObjects.TEAM_ENEMY);
                }
                if (this.arrayEnemy[i].hp <= 0) {
                    this.arrayEnemy[i].link.nodeObject.destroy();
                    this.arrayEnemy[i] = null;
                }
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
                let config = ConfigStorage.instance.getConfigByTypeAndLevel(unit.type, unit.level);
                this.arrayOwn[i] = new Unit(config.hp, config.damage, TypesAttack.HORIZON, config.attackType, i, unit.type, unit.level);
                if (unit.quantity > 1) {
                    unit.quantity--;
                }
                else {
                    this.arrayCards.splice(customEventData, 1);
                    this.arrayCards.push(null);
                }
                this.ownRender();
                this.cardsRender();
                break;
            }
        }
    }

    spawnTroop(i: number, team: string) {
        let coords;
        let units;
        if (team == TypesObjects.TEAM_OWN) {
            coords = BattleMap.instance.coordsOwn;
            units = this.arrayOwn;
        }
        else if (team == TypesObjects.TEAM_ENEMY) {
            coords = BattleMap.instance.coordsEnemy;
            units = this.arrayEnemy;
        }
        let gameObject = instantiate(this.troop);
        gameObject.setParent(coords[i]);
        units[i].link = gameObject.getComponent(TroopRender);
        units[i].link.index = units[i].index;
        units[i].link.team = team;
    }

    clickTroop(index: number) {
        let unit = this.arrayOwn[index];
        this.returnUnitInFreeArray(unit)
        this.arrayOwn[index] = null;
        this.ownRender();
    }

    returnUnitInFreeArray(unit: Unit) {
        for (let x = 0; x < this.arrayCards.length; x++) {
            if (this.arrayCards[x] != undefined && this.arrayCards[x].type == unit.type && this.arrayCards[x].level == unit.level) {
                this.arrayCards[x].quantity += 1;
                this.sortedArrayCards()
                return;
            }
        }
        for (let x = 0; x < this.arrayCards.length; x++) {
            if (this.arrayCards[x] == null) {
                this.arrayCards[x] = new FreeUnit(unit.type, unit.level, 1, unit.hp);
                this.sortedArrayCards()
                return;
            }
        }
    }

    sortedArrayCards() {
        this.arrayCards.sort((a, b) => {
            if (a != null && b != null) {
                if (a.level < b.level) {
                    return 1
                }
                if (a.level > b.level) {
                    return -1
                }
            }
            return 0
        })//может сортировать в другую сторону
        this.cardsRender();
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
                    return;
                }
            }
        }
    }

    attack() {
        let units_1;
        let units_2;
        if (this.attackingTeam == 0) {
            units_1 = this.arrayEnemy.slice(0);
            units_2 = this.arrayOwn.slice(0);
        }
        else if (this.attackingTeam == 1) {
            units_1 = this.arrayOwn.slice(0);
            units_2 = this.arrayEnemy.slice(0);
        }
        for (let i = 0; i < units_1.length; i++) {
            if (i == 0 && this.attackingTeam == 0) {
                this.attackNumber++;
            }
            if (units_1[i] != null) {
                if (units_1[i].attackNumber < this.attackNumber) {
                    let config = ConfigStorage.instance.getConfigByTypeAndLevel(units_1[i].type, units_1[i].level);
                    let units = this.goalSelection(units_1[i].link.team, units_1[i].type, TypesAttack.HORIZON, config.attackType);
                    if (units.length > 0) {
                        for (let j = 0; j < units.length; j++) {
                            units_2[units[j]].hp -= units_1[i].damage;
                            console.log(units_1[i].level + "|" + units_1[i].hp + "|" + units_1[i].damage + " > " + units_2[units[j]].level + "|" + units_2[units[j]].hp + "|" + units_2[units[j]].damage);
                        }
                    }
                    this.ownRender();
                    units_1[i].attackNumber = this.attackNumber;
                }
            }
            if (i == units_1.length - 1) {
                if (this.attackingTeam == 0) {
                    this.attackingTeam = 1;
                }
                else if (this.attackingTeam == 1) {
                    this.attackingTeam = 0;
                }

                setTimeout(() => {
                    this.enemyRender();
                    this.ownRender();
                    if (this.troopAlive()) {
                        console.log("---------------")
                        this.attack();
                    }
                    else {
                        this.endScreen.active = true;
                    }
                }, 1000);
            }
        }
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
                let index = Math.floor(Math.random() * arrayUnits.length);
                conclusion.push(arrayUnits[index]);
                arrayUnits.splice(index, 1)
            }
        }
        return conclusion;
    }
}

export class Unit {
    hp: number;
    damage: number;
    typeAttack: string;
    typeShot: string;
    index: number;
    type: string;
    level: number;
    attackNumber: number = 0;
    link: TroopRender;

    constructor(hp: number, damage: number, typeAttack: string, typeShot: string, index: number, type: string, level: number) {
        this.hp = hp
        this.damage = damage;
        this.typeAttack = typeAttack;
        this.typeShot = typeShot;
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
// бафы персонажей 
// количество воинов на ячейке
// выстрелы
// быстрая расстановка