import { _decorator, Component, instantiate, Label, Node, Prefab, Sprite } from 'cc';
import { TypesObjects } from '../Static/TypesObjects';
import { TroopRender } from './TroopRender';
import { SpriteStorage } from '../Storage/SpriteStorage';
import { BattleMap } from './BattleMap';
import { TypesAttack } from '../Static/TypesAttack';
import { RedirectionToScene } from '../Other/RedirectionToScene';
import { SceneNames } from '../Static/SceneNames';
import { TypesTeam } from '../Static/TypesTeam';
import { ControllerConfigStorage } from '../Storage/Controllers/ControllerConfigStorage';
import { CharacterInfo } from '../Structures/CharacterInfo';
import { ControllerCharactrerStorage } from '../Storage/Controllers/ControllerCharactrerStorage';
import { FreeUnit } from '../Structures/FreeUnit';
import { Unit } from '../Structures/Unit';
import { BattleStorage } from '../Storage/BattleStorage';
import { UnitsCongig } from '../Structures/ConfigUnits';
const { ccclass, property } = _decorator;

@ccclass('Battle')
export class Battle extends Component {

    /**
     * получить союзные свободные войска
     * получить вражеские свободные войска
     * 
     * получить доступное количество ячеек союзных войск[1,1,6,10,16,30,40,50,70]
     * получить сколько юнитов встанет в одну ячейку
     * 
     */

    public static instance: Battle;

    @property({ type: Prefab })
    public troopOwn: Prefab;

    @property({ type: Prefab })
    public troopEnemy: Prefab;

    @property({ type: Node })
    public inBattleBtn: Node;

    @property({ type: Node })
    public quickPlacementBtn: Node;

    @property({ type: Node })
    public cards: Node[] = [];

    @property({ type: Sprite })
    public sprites: Sprite[] = [];

    @property({ type: Label })
    public texts: Label[] = [];

    @property({ type: Label })
    public quantity: Label[] = [];

    @property({ type: Label })
    public mapQuantity: Label[] = [];

    onLoad() {
        Battle.instance = this;
        BattleStorage.instance.arrayOwn = new Array(6);
        BattleStorage.instance.quantityPlaces = new Array(6).fill(1);
        BattleStorage.instance.quantityPlaces[5] = 0;

        BattleStorage.instance.arrayEnemy = this.genEnemyUnits();
        BattleStorage.instance.arrayCards = this.getFreeUnits();
        this.characterSelection();
        this.enemyRender();
        this.cardsRender();
        this.sortedArrayCards();
    }

    getFreeUnits(): FreeUnit[] {
        //получение наших свободных войск
        let array = new Array(13);
        for (let i = 0; i < 5; i++) {
            array[i] = new FreeUnit(TypesObjects.TROOP_OVERLAND, i + 10, i + 1, 10);
        }
        return array;
    }

    genEnemyUnits(): Unit[] {
        //получение вражеских войск
        let array = new Array(6);
        for (let i = 0; i < 5; i++) {
            let config = ControllerConfigStorage.getConfigUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, i + 1);
            array[i] = new Unit(config.hp, config.hp, config.damage, i, config.level, 1, TypesAttack.HORIZON, config.attackType, config.type);
        }
        return array;
    }

    ownRender() {
        for (let i = 0; i < BattleStorage.instance.arrayOwn.length; i++) {
            let own = BattleStorage.instance.arrayOwn[i];
            if (own == null) continue;

            BattleStorage.instance.arrayOwn[i] = this.oneUnitRender(own, TypesTeam.TEAM_OWN)
        }
    }

    enemyRender() {
        for (let i = 0; i < BattleStorage.instance.arrayEnemy.length; i++) {
            let enemy = BattleStorage.instance.arrayEnemy[i];
            if (enemy == null) continue

            BattleStorage.instance.arrayEnemy[i] = this.oneUnitRender(enemy, TypesTeam.TEAM_ENEMY)
        }
    }

    private oneUnitRender(unit: Unit, team: string) {
        let config = ControllerConfigStorage.getConfigUnitsByTypeAndLevel(unit.type, unit.level);
        if (unit.link == null) {
            unit = this.spawnTroop(unit, team);
        } else {
            unit = this.rerenderUnit(unit, config)
        }

        if (unit.hp <= 0) {
            unit = this.deleteUnit(unit, config)
        }

        return unit
    }

    private rerenderUnit(unit: Unit, config: UnitsCongig): Unit {
        if (!BattleStorage.instance.isBattle) {
            let sum = this.characterSum();
            unit.hp = config.hp + sum.defense;
            unit.availableHp = config.hp + sum.defense;
            unit.damage = config.damage + sum.damage;
        }
        unit.link.renderInfo();
        return unit
    }

    private deleteUnit(unit: Unit, config: UnitsCongig): Unit {
        if (unit.quantity > 1) {
            unit.quantity--;
            unit.hp = config.hp + unit.hp;
        } else {
            unit.link.nodeObject.destroy();
            unit = null;
        }
        return unit
    }

    cardsRender() {
        for (let i = 0; i < BattleStorage.instance.arrayCards.length; i++) {

            if (BattleStorage.instance.arrayCards[i] == null) {
                this.cards[i].active = false;
                continue
            }

            let cardLevel = BattleStorage.instance.arrayCards[i].level;
            let cardQuantity = BattleStorage.instance.arrayCards[i].quantity.toString()
            let cardsSprite = SpriteStorage.instance.getObjectSprite(BattleStorage.instance.arrayCards[i].type, BattleStorage.instance.arrayCards[i].level);
            let level = "Ур. " + cardLevel;

            this.cards[i].active = true;
            this.texts[i].string = level
            this.quantity[i].string = cardQuantity
            this.sprites[i].spriteFrame = cardsSprite;

        }
    }

    quantityRender() {
        for (let i = 0; i < BattleStorage.instance.quantityPlaces.length; i++) {
            let available = 0;
            let result: string;
            let quantityPlaces = BattleStorage.instance.quantityPlaces[i];
            let own = BattleStorage.instance.arrayOwn[i];

            if (own != null) {
                available = own.quantity;
            }

            if (quantityPlaces > 0) {
                result = available + "/" + quantityPlaces;
            } else {
                result = "";
            }

            this.mapQuantity[i].string = result;
        }
    }

    getAccessedPosittions() {
        let magicNumber = 5// увеличивается в зависимости от лвл, дописать
        BattleStorage.instance.quantityPlaces = new Array(9).fill(1);
        BattleStorage.instance.quantityPlaces[5] = 0;
        BattleStorage.instance.quantityPlaces[6] = 0;
        BattleStorage.instance.quantityPlaces[7] = 0;
        BattleStorage.instance.quantityPlaces[8] = 0;
    }

    private getAdditionalCells() {
        /**
         * показывает сколько ячеек добавить на карте, за лидерство персонажей
         */
        let leaderRate = 100
        return this.characterSum().leadership / leaderRate;
    }



    characterSelection() {
        let count = this.getAdditionalCells()

        while (count > 0) {
            for (let i = 0; i < BattleStorage.instance.quantityPlaces.length; i++) {
                if (BattleStorage.instance.quantityPlaces[i] > 0 && count > 0) {
                    BattleStorage.instance.quantityPlaces[i]++;
                    count--;
                }
            }
        }
        this.quantityRender();
    }

    clickCard(event, customEventData) {
        for (let i = 0; i < BattleStorage.instance.arrayOwn.length; i++) {
            let quantityPlaces = BattleStorage.instance.quantityPlaces[i];
            if (BattleStorage.instance.arrayOwn[i] != null || quantityPlaces <= 0) {
                continue
            }

            let quantity = 0;
            let unit = BattleStorage.instance.arrayCards[customEventData];
            let config = ControllerConfigStorage.getConfigUnitsByTypeAndLevel(unit.type, unit.level);

            if (quantityPlaces > unit.quantity) {
                quantity = unit.quantity;
            } else {
                quantity = quantityPlaces;
            }

            let sum = this.characterSum();
            BattleStorage.instance.arrayOwn[i] = new Unit(config.hp + sum.defense, config.hp + sum.defense, config.damage + sum.damage, i, unit.level, quantity, TypesAttack.HORIZON, config.attackType, unit.type);

            if (unit.quantity > quantity) {
                unit.quantity -= quantity;
            } else {
                BattleStorage.instance.arrayCards.splice(customEventData, 1);
                BattleStorage.instance.arrayCards.push(null);
            }

            this.ownRender();
            this.cardsRender();
            this.quantityRender();
            break;
        }
    }

    spawnTroop(unit: Unit, team: string): Unit {
        let coords;
        let troop;
        let gameObject

        if (team == TypesTeam.TEAM_OWN) {
            coords = BattleMap.instance.coordsOwn;
            troop = this.troopOwn;
        } else if (team == TypesTeam.TEAM_ENEMY) {
            coords = BattleMap.instance.coordsEnemy;
            troop = this.troopEnemy;
        }

        gameObject = instantiate(troop);
        gameObject.setParent(coords[unit.index]);

        unit.link = gameObject.getComponent(TroopRender);
        unit.link.index = unit.index;
        unit.link.team = team;
        return unit
    }

    clickTroop(index: number) {
        let unit = BattleStorage.instance.arrayOwn[index];
        this.returnUnitInFreeArray(unit);
        unit = null;
        this.ownRender();
        this.quantityRender();
    }

    returnUnitInFreeArray(unit: Unit) {
        let arrayCards = BattleStorage.instance.arrayCards

        for (let i = 0; i < arrayCards.length; i++) {
            let card = arrayCards[i];

            if (card == null) continue
            if (card.type != unit.type || card.level != unit.level) continue

            card.quantity += unit.quantity;
            this.sortedArrayCards();
            return;
        }

        for (let i = 0; i < arrayCards.length; i++) {
            let card = arrayCards[i];
            if (card != null) continue

            card = new FreeUnit(unit.type, unit.level, unit.quantity, unit.hp);
            this.sortedArrayCards();
            return;
        }
    }

    sortedArrayCards() {
        BattleStorage.instance.arrayCards.sort((a, b) => {
            if (a == null || b == null) return 0

            if (a.level < b.level) {
                return 1;
            }
            else if (a.level > b.level) {
                return -1;
            }
            else {
                return 0;
            }
        })
        this.cardsRender();
    }

    inBattle() {
        if (BattleStorage.instance.isBattle) return

        for (let i = 0; i < BattleStorage.instance.arrayOwn.length; i++) {
            if (BattleStorage.instance.arrayOwn[i] == null) continue
            this.changeTriggers()
            return
        }
    }

    private changeTriggers() {
        BattleStorage.instance.isBattle = true;
        this.inBattleBtn.active = false;
        this.quickPlacementBtn.active = false;

        for (let i = 0; i < this.cards.length; i++) {
            this.cards[i].active = false;
        }

        this.attack();
    }

    private getAttackUnits() {
        console.log('11 ' + BattleStorage.instance.arrayOwn.length)
        console.log('1221 ' + BattleStorage.instance.arrayEnemy.length)
        if (BattleStorage.instance.attackingTeam == 0) {
            return BattleStorage.instance.arrayEnemy.slice(0);
        }
        else if (BattleStorage.instance.attackingTeam == 1) {
            return BattleStorage.instance.arrayOwn.slice(0);
        }
    }

    private getDefendingUnits() {

        console.log('1w3rt341 ' + BattleStorage.instance.arrayOwn.length)
        console.log('14t34t4221 ' + BattleStorage.instance.arrayEnemy.length)
        if (BattleStorage.instance.attackingTeam == 0) {
            return BattleStorage.instance.arrayOwn.slice(0);
        }
        else if (BattleStorage.instance.attackingTeam == 1) {
            return BattleStorage.instance.arrayEnemy.slice(0);
        }
    }

    attack() {
        let attackUnits = this.getAttackUnits()
        let defendingUnits = this.getDefendingUnits()
        let countBullet = 0;

        for (let i = 0; i < attackUnits.length; i++) {
            let attackUnit = attackUnits[i]
            if (i == 0 && BattleStorage.instance.attackingTeam == 0) {
                BattleStorage.instance.attackNumber++;
            }

            if (attackUnit != null) {
                if (attackUnit.attackNumber < BattleStorage.instance.attackNumber) {
                    let config = ControllerConfigStorage.getConfigUnitsByTypeAndLevel(attackUnit.type, attackUnit.level);
                    let units = this.goalSelection(attackUnits, attackUnit.type, config.attackType);
                    for (let j = 0; j < units.length; j++) {
                        countBullet++;
                        this.troopAttackInvoke(i, j, units, attackUnits, defendingUnits, countBullet);
                    }
                    attackUnit.attackNumber = BattleStorage.instance.attackNumber;
                }
            }

            if (i == attackUnits.length - 1) {
                BattleStorage.instance.attackingTeam = BattleStorage.instance.attackingTeam == 0 ? 1 : 0;
                setTimeout(() => this.rerenderPostShot(), countBullet * 1000 + 1000);
            }
        }
    }

    private rerenderPostShot() {
        console.log('postShot')
        this.enemyRender();
        this.ownRender();
        this.quantityRender();
        if (this.troopAlive()) {
            this.attack();
        }
        else {
            RedirectionToScene.redirect(SceneNames.HOME_MAP);
        }
    }

    troopAttackInvoke(indexAttackUnit: number, j: number, units: number[], units_1: Unit[], units_2: Unit[], countBullet: number) {
        setTimeout(() => units_1[indexAttackUnit].link.shotRender(), countBullet * 1000 - 1000);
        setTimeout(() => this.troopAttack(indexAttackUnit, j, units, units_1, units_2), countBullet * 1000);
    }

    troopAttack(i: number, j: number, units: number[], units_1: Unit[], units_2: Unit[]) {
        console.log(units_2[units[j]].hp + '   ' + units_1[i].damage)
        units_2[units[j]].hp -= units_1[i].damage;
        this.enemyRender();
        this.ownRender();
        this.quantityRender();
    }

    troopAlive(): boolean {
        return this.howManyAliveOwn() > 0 && this.howManyAliveEnemy() > 0;
    }

    howManyAliveOwn(): number {
        let quantityAlive = 0;
        for (let i = 0; i < BattleStorage.instance.arrayOwn.length; i++) {
            let own = BattleStorage.instance.arrayOwn[i];
            if (own != null) {
                if (own.hp > 0) {
                    quantityAlive++;
                }
            }
        }
        return quantityAlive;
    }

    howManyAliveEnemy(): number {
        let quantityAlive = 0;
        for (let i = 0; i < BattleStorage.instance.arrayEnemy.length; i++) {
            let enemy = BattleStorage.instance.arrayEnemy[i];
            if (enemy != null) {
                if (enemy.hp > 0) {
                    quantityAlive++;
                }
            }
        }
        return quantityAlive;
    }

    goalSelection(units: Unit[], type: string, typeAttack: string): number[] {
        let quantity;
        let arrayUnits = [];

        for (let i = 0; i < units.length; i++) {
            if (units[i] == null) continue
            arrayUnits.push(i);
        }

        let conclusion = [];

        if (units[arrayUnits[0]].typeShot == TypesAttack.ONE) {
            quantity = 1;
        }
        else if (units[arrayUnits[0]].typeShot == TypesAttack.TWO) {
            quantity = 2;
        }
        else if (units[arrayUnits[0]].typeShot == TypesAttack.THREE) {
            quantity = 3;
        }
        //дописать горизонтальную и вертикальную атаку

        for (let i = 0; i < quantity; i++) {
            if (arrayUnits.length <= 0) continue

            let index = Math.floor(Math.random() * arrayUnits.length);
            conclusion.push(arrayUnits[index]);
            arrayUnits.splice(index, 1)
        }
        return conclusion;
    }

    quickPlacement() {
        this.clearMap()
        this.fillMap()

        this.ownRender();
        this.cardsRender();
        this.quantityRender();
    }

    private clearMap() {
        for (let i = 0; i < BattleStorage.instance.arrayOwn.length; i++) {
            let unit = BattleStorage.instance.arrayOwn[i];
            if (unit == null) continue

            this.returnUnitInFreeArray(unit);
            unit.link.nodeObject.destroy();
            unit = null;
            this.ownRender();
            this.quantityRender();

        }
    }

    private fillMap() {
        for (let i = 0; i < BattleStorage.instance.arrayOwn.length; i++) {
            let unit = BattleStorage.instance.arrayCards[0];
            let quantityPlaces = BattleStorage.instance.quantityPlaces[i];
            if (unit == null || quantityPlaces <= 0) continue

            let quantity = 0;
            let config = ControllerConfigStorage.getConfigUnitsByTypeAndLevel(unit.type, unit.level);
            if (quantityPlaces > unit.quantity) {
                quantity = unit.quantity;
            }
            else {
                quantity = quantityPlaces;
            }
            let sum = this.characterSum();
            BattleStorage.instance.arrayOwn[i] = new Unit(config.hp + sum.defense, config.hp + sum.defense, config.damage + sum.damage, i, unit.level, quantity, TypesAttack.HORIZON, config.attackType, unit.type);
            if (unit.quantity > quantity) {
                unit.quantity -= quantity;
            }
            else {
                BattleStorage.instance.arrayCards.splice(0, 1);
                BattleStorage.instance.arrayCards.push(null);
            }

        }
    }

    characterSum(): CharacterInfo {
        let exp = 0;
        let stars = 0;
        let attack = 0;
        let protection = 0;
        let leadership = 0;
        let characters = ControllerCharactrerStorage.getCharacters();

        for (let i = 0; i < characters.length; i++) {
            let character = characters[i]
            if (character == null) continue

            attack += character.damage;
            protection += character.defense;
            leadership += character.leadership;

        }
        return new CharacterInfo(0, exp, stars, attack, protection, leadership, "sum", "sum", "sum");
    }
}