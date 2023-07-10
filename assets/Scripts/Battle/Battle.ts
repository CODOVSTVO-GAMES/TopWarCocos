import { _decorator, Component, instantiate, Label, Node, Prefab } from 'cc';
import { TypesObjects } from '../Static/TypesObjects';
import { TroopRender } from './TroopRender';
import { BattleMap } from './BattleMap';
import { TypesAttack } from '../Static/TypesAttack';
import { TypesTeam } from '../Static/TypesTeam';
import { ConfigPresenter } from '../Presenter/ConfigPresenter';
import { CharacterInfo } from '../Structures/CharacterInfo';
import { FreeUnit } from '../Structures/FreeUnit';
import { Unit } from '../Structures/Unit';
import { CardTroopRender } from './CardTroopRender';
import { RedirectionToScene } from '../Other/RedirectionToScene';
import { SceneNames } from '../Static/SceneNames';
import { HomeMapPresenter } from '../Presenter/HomeMapPresenter';
import { GameModel } from '../Model/GameModel';
import { CharactersPresenter } from '../Presenter/CharactersPresenter';
import { BattleModel } from '../Model/BattleModel';
import { OpenHomeMapPresenter } from '../Presenter/OpenHomeMapPresenter';
import { MapEnemyBattle } from '../Structures/MapEnemyUnits';
const { ccclass, property } = _decorator;

@ccclass('Battle')
export class Battle extends Component {

    public static instance: Battle

    @property({ type: Prefab })
    public troop: Prefab

    @property({ type: Prefab })
    public cardTroop: Prefab

    @property({ type: Node })
    public parentCards: Node

    @property({ type: Node })
    public inBattleBtn: Node

    @property({ type: Node })
    public quickPlacementBtn: Node

    @property({ type: Node })
    public endModal: Node

    @property({ type: Label })
    public endText: Label

    @property({ type: Label })
    public mapQuantity: Label[] = []

    private waves: number
    private currentWave: number

    public onLoad() {
        Battle.instance = this

        this.getTroopOwn()
        this.getTroopEnemy()
        this.getQuantityAvailableFreeCoords()
    }

    getCommands(mapNumber: number): MapEnemyBattle {
        for (let i = 0; i < BattleModel.instance.mapEnemyArr.length; i++) {
            if (BattleModel.instance.mapEnemyArr[i].mapNumber == mapNumber) {
                return BattleModel.instance.mapEnemyArr[i]
            }
        }
        console.log('Не найдена такая команда. Запросите с сервера')
    }

    addEnemyCommand(mapEnemyUnits: MapEnemyBattle) {
        for (let l = 0; l < BattleModel.instance.mapEnemyArr.length; l++) {
            if (mapEnemyUnits.mapNumber == BattleModel.instance.mapEnemyArr[l].mapNumber) {
                console.log('такой новер команы уже существует')
                return
            }
        }
        BattleModel.instance.mapEnemyArr.push(mapEnemyUnits)
    }

    redirectToHomeMap() {
        RedirectionToScene.redirect(SceneNames.HOME_MAP)
    }

    getTroopOwn() {
        let sizeTroopAir = HomeMapPresenter.getSizeTroopAir()
        let sizeTroopMarine = HomeMapPresenter.getSizeTroopMarine()
        let sizeTroopOverland = HomeMapPresenter.getSizeTroopOverland()

        for (let i = 0; i < sizeTroopAir.length; i++) {
            if (sizeTroopAir[i] == 0) continue
            BattleModel.instance.arrayCards.push(new FreeUnit(TypesObjects.TROOP_AIR, i + 1, sizeTroopAir[i], 10))
        }
        for (let i = 0; i < sizeTroopMarine.length; i++) {
            if (sizeTroopMarine[i] == 0) continue
            BattleModel.instance.arrayCards.push(new FreeUnit(TypesObjects.TROOP_MARINE, i + 1, sizeTroopMarine[i], 10))
        }
        for (let i = 0; i < sizeTroopOverland.length; i++) {
            if (sizeTroopOverland[i] == 0) continue
            BattleModel.instance.arrayCards.push(new FreeUnit(TypesObjects.TROOP_OVERLAND, i + 1, sizeTroopOverland[i], 10))
        }
        this.spawnCards()
    }

    getTroopEnemy() {
        let troopsEnemy = this.getCommands(BattleModel.instance.numberBattle)

        for (let i = 0; i < troopsEnemy.units1.length; i++) {
            BattleModel.instance.arrayEnemy.push(troopsEnemy.units1[i])
            BattleModel.instance.arrayEnemy[i].index = i
            this.spawnTroop(TypesTeam.TEAM_ENEMY, BattleModel.instance.arrayEnemy[BattleModel.instance.arrayEnemy.length - 1])
        }
    }

    getQuantityAvailableFreeCoords() {
        let a = [1, 1, 6, 10, 16, 30, 40, 50, 70];
        for (let i = 0; i < a.length; i++) {
            if (GameModel.instance.level >= a[i]) {
                BattleModel.instance.quantityAvailableFreeCoords += 1;
            }
            else {
                break;
            }
        }
        this.addArrays();
        this.renderAvailableCoords();
    }

    getQuantityTroopsOfCoord() {
        for (let i = 0; i < BattleModel.instance.quantityAvailableFreeCoords; i++) {
            BattleModel.instance.quantityPlaces[i] += 1;
        }
    }

    renderAvailableCoords() {
        let index = 0;
        for (let i = 0; i < BattleMap.instance.coordsOwn.length; i++) {
            BattleMap.instance.coordsOwn[i].active = false;
        }
        for (let i = 0; i < BattleModel.instance.quantityAvailableFreeCoords; i++) {
            BattleMap.instance.coordsOwn[i].active = true;
            this.mapQuantity[index + 1].string = "1/1";
            index = i;
        }
        if (index < 9) {
            BattleMap.instance.coordsOwn[index + 1].active = true;
            this.mapQuantity[index + 1].string = "-";
        }
    }

    spawnTroop(team: string, unit: Unit) {
        let coords;
        let gameObject;

        if (team == TypesTeam.TEAM_OWN) {
            coords = BattleMap.instance.coordsOwn;
        } else if (team == TypesTeam.TEAM_ENEMY) {
            coords = BattleMap.instance.coordsEnemy;
        }

        gameObject = instantiate(this.troop);
        gameObject.setParent(coords[unit.index]);

        unit.link = gameObject.getComponent(TroopRender);
        unit.link.index = unit.index;
        unit.link.team = team;
    }

    processingOneShot(unit: Unit, damage: number) {
        if (unit == null) return;
        unit.hp -= damage;
        this.renderTroopsParametrs(unit);
    }

    renderTroopsParametrs(unit: Unit) {
        if (unit.link == null) return;
        unit.link.renderInfo();
    }

    addArrays() {
        BattleModel.instance.arrayOwn = new Array(BattleModel.instance.quantityAvailableFreeCoords);
    }

    spawnCards() {
        for (let i = 0; i < BattleModel.instance.arrayCards.length; i++) {
            if (BattleModel.instance.arrayCards[i].quantity <= 0) {
                if (BattleModel.instance.arrayCards[i].linkToCardTroopRender != null) {
                    BattleModel.instance.arrayCards[i].linkToCardTroopRender.nodeObject.destroy()
                }
                BattleModel.instance.arrayCards.splice(i, 1);
            }


            if (BattleModel.instance.arrayCards[i]) {
                if (BattleModel.instance.arrayCards[i].linkToCardTroopRender != null) {
                    BattleModel.instance.arrayCards[i].linkToCardTroopRender.nodeObject.destroy()
                }
            }
        }

        this.sortedArrayCards();

        for (let i = 0; i < BattleModel.instance.arrayCards.length; i++) {
            let arrayCard = BattleModel.instance.arrayCards[i]
            let card = instantiate(this.cardTroop)
            let cardTroopRender = card.getComponent(CardTroopRender)
            cardTroopRender.level = arrayCard.level
            cardTroopRender.quantity = arrayCard.quantity
            cardTroopRender.type = arrayCard.type
            cardTroopRender.index = i
            arrayCard.linkToCardTroopRender = cardTroopRender
            card.setParent(this.parentCards)
        }
    }

    clickOnCard(index: number) {
        for (let i = 0; i < BattleModel.instance.arrayOwn.length; i++) {
            if (BattleModel.instance.arrayOwn[i] != null || BattleModel.instance.quantityAvailableFreeCoords <= i) continue;

            let unit = BattleModel.instance.arrayCards[index];
            let config = ConfigPresenter.getConfigUnitsByTypeAndLevel(unit.type, unit.level);
            BattleModel.instance.arrayOwn[i] = new Unit(config.hp, config.hp, config.damage, i, unit.level, 1, TypesAttack.HORIZON, config.attackType, unit.type);
            unit.quantity--;

            this.spawnTroop(TypesTeam.TEAM_OWN, BattleModel.instance.arrayOwn[i]);

            this.spawnCards();
            this.renderAvailableCoords();
            break;
        }
    }

    retutnUnitOnCard(index: number) {
        if (this.addQuantityTroops(index)) {
            BattleModel.instance.arrayCards.push(new FreeUnit(BattleModel.instance.arrayOwn[index].type, BattleModel.instance.arrayOwn[index].level, BattleModel.instance.arrayOwn[index].quantity, BattleModel.instance.arrayOwn[index].hp));
            this.spawnCards();
        }

        if (BattleModel.instance.arrayOwn[index].link != null) {
            BattleModel.instance.arrayOwn[index].link.nodeObject.destroy();
        }
        BattleModel.instance.arrayOwn[index] = null;

        this.renderAvailableCoords();
    }

    addQuantityTroops(index: number): boolean {
        for (let i = 0; i < BattleModel.instance.arrayCards.length; i++) {
            if (BattleModel.instance.arrayCards[i] == null) continue;
            if (BattleModel.instance.arrayCards[i].type != BattleModel.instance.arrayOwn[index].type || BattleModel.instance.arrayCards[i].level != BattleModel.instance.arrayOwn[index].level) continue;

            BattleModel.instance.arrayCards[i].quantity += BattleModel.instance.arrayOwn[index].quantity;
            this.spawnCards();
            return false;
        }
        return true;
    }

    quickPlacement() {
        for (let i = 0; i < BattleModel.instance.arrayOwn.length; i++) {
            if (BattleModel.instance.arrayOwn[i] == null) continue;

            this.retutnUnitOnCard(i);
            this.renderAvailableCoords();
        }

        for (let i = 0; i < BattleModel.instance.arrayOwn.length; i++) {
            let unit = BattleModel.instance.arrayCards[0];
            if (unit == null || BattleModel.instance.quantityAvailableFreeCoords <= i) continue;

            let config = ConfigPresenter.getConfigUnitsByTypeAndLevel(unit.type, unit.level);
            BattleModel.instance.arrayOwn[i] = new Unit(config.hp, config.hp, config.damage, i, unit.level, 1, TypesAttack.HORIZON, config.attackType, unit.type);
            unit.quantity--;
            this.spawnTroop(TypesTeam.TEAM_OWN, BattleModel.instance.arrayOwn[i]);
            this.spawnCards();
        }
    }

    sortedArrayCards() {
        // сортировка карточек
        BattleModel.instance.arrayCards.sort((a, b) => {
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
    }

    inBattle() {
        for (let i = 0; i < BattleModel.instance.arrayOwn.length; i++) {
            if (BattleModel.instance.arrayOwn[i] == null) continue;
            BattleModel.instance.isBattle = true;
            BattleModel.instance.attackingTeam = 0;
            this.inBattleBtn.active = false;
            this.quickPlacementBtn.active = false;

            for (let j = 0; j < BattleModel.instance.arrayCards.length; j++) {
                if (BattleModel.instance.arrayCards[j] != null) {
                    BattleModel.instance.arrayCards[j].linkToCardTroopRender.nodeObject.destroy();
                }
            }
            this.attackController();
            return;
        }
    }

    redirectionToHome() {
        RedirectionToScene.redirect(SceneNames.HOME_MAP);
    }

    private getAttackUnits(): Unit[] {
        if (BattleModel.instance.attackingTeam == 0) {
            return BattleModel.instance.arrayOwn.slice(0);
        }
        else if (BattleModel.instance.attackingTeam == 1) {
            return BattleModel.instance.arrayEnemy.slice(0);
        }
    }

    private getDefendingUnits(): Unit[] {
        if (BattleModel.instance.attackingTeam == 0) {
            return BattleModel.instance.arrayEnemy.slice(0);
        }
        else if (BattleModel.instance.attackingTeam == 1) {
            return BattleModel.instance.arrayOwn.slice(0);
        }
    }

    attackController() {
        if (this.troopAlive() || (this.currentWave < this.waves && this.howManyAliveOwn() > 0)) {
            if (this.howManyAliveEnemy() <= 0) {
                this.currentWave++;
            }

            let time = this.attack();
            setTimeout(() => {
                BattleModel.instance.attackingTeam = BattleModel.instance.attackingTeam == 0 ? 1 : 0;
                this.attackController();
            }, time * 750);
        }
        else {
            if (this.howManyAliveOwn() <= 0) {
                this.endText.string = "ПАРАЖЕНЕ"
            }
            else if (this.howManyAliveEnemy() <= 0) {
                this.endText.string = "ВЫИГРЫШ"
                OpenHomeMapPresenter.victory()
            }
            BattleModel.instance.arrayOwn = new Array
            BattleModel.instance.arrayEnemy = new Array
            BattleModel.instance.arrayCards = new Array
            BattleModel.instance.quantityPlaces = new Array
            BattleModel.instance.isBattle = false
            BattleModel.instance.quantityAvailableFreeCoords = 0
            BattleModel.instance.attackingTeam = 0
            BattleModel.instance.attackNumber = 0

            this.endModal.active = true;
        }
    }

    attack(): number {
        let attackUnits = this.getAttackUnits();
        let defendingUnits = this.getDefendingUnits();

        let delay = 0;
        for (let i = 0; i < attackUnits.length; i++) {
            if (attackUnits[i] != null) {
                let targetUnits = this.goalSelection(attackUnits[i], defendingUnits);

                for (let j = 0; j < targetUnits.length; j++) {
                    delay++;
                    this.initPromise((i + delay) * 750, () => {
                        attackUnits[i].link.renderShot();
                    });
                    this.initPromise((i + delay) * 750 + 750, () => {
                        targetUnits[j].hp -= attackUnits[i].damage;
                        if (targetUnits[j].hp > 0) {
                            targetUnits[j].link.renderInfo();
                        } else {
                            targetUnits[j].link.renderDead();
                            defendingUnits[targetUnits[j].index] = null;
                        }
                    });
                }
            }
        }
        return delay + attackUnits.length;
    }

    async initPromise(delay: number, code: any) {
        const x = await this.delay(delay);
        code();
    }

    delay(time: number): Promise<string> {
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve("return");
            }, time)
        })
    }

    goalSelection(attackUnit: Unit, defendingUnits: Unit[]): Unit[] {
        if (attackUnit.typeAttack == TypesAttack.HORIZON || attackUnit.typeAttack == TypesAttack.VERTICAL) {
            return this.lineGoalSelection(attackUnit, defendingUnits);
        }
        else {
            return this.randomGoalSelection(attackUnit, defendingUnits);
        }
    }

    randomGoalSelection(attackUnit: Unit, defendingUnits: Unit[]): Unit[] {
        let copyDefendingUnits = new Array<Unit>
        let selectionUnits = new Array<Unit>
        let quantityAttacks

        if (attackUnit.typeAttack == TypesAttack.ONE) {
            quantityAttacks = 1
        }
        else if (attackUnit.typeAttack == TypesAttack.TWO) {
            quantityAttacks = 2
        }
        else if (attackUnit.typeAttack == TypesAttack.THREE) {
            quantityAttacks = 3
        }

        for (let i = 0; i < defendingUnits.length; i++) {
            if (defendingUnits[i] != null) {
                copyDefendingUnits.push(defendingUnits[i])
            }
        }

        for (let i = 0; i < quantityAttacks; i++) {
            selectionUnits.push(copyDefendingUnits[Math.floor(Math.random() * copyDefendingUnits.length)])
        }

        return selectionUnits
    }

    lineGoalSelection(attackUnit: Unit, defendingUnits: Unit[]): Unit[] {
        let horizon = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
        let vertical = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];

        let selectionUnits;
        let indexes = [];

        while (true) {
            selectionUnits = [];

            if (attackUnit.typeAttack == TypesAttack.HORIZON) {
                indexes = horizon[Math.floor(Math.random() * horizon.length)];
            } else if (attackUnit.typeAttack == TypesAttack.VERTICAL) {
                indexes = vertical[Math.floor(Math.random() * vertical.length)];
            }
            for (let i = 0; i < indexes.length; i++) {
                if (defendingUnits[indexes[i]] == null) continue;
                selectionUnits.push(defendingUnits[indexes[i]]);
            }

            if (selectionUnits.length != 0) {
                break;
            }
        }
        return selectionUnits;
    }

    troopAlive(): boolean {
        return this.howManyAliveOwn() > 0 && this.howManyAliveEnemy() > 0;
    }

    howManyAliveOwn(): number {
        let quantityAlive = 0;
        for (let i = 0; i < BattleModel.instance.arrayOwn.length; i++) {
            let own = BattleModel.instance.arrayOwn[i];
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
        for (let i = 0; i < BattleModel.instance.arrayEnemy.length; i++) {
            let enemy = BattleModel.instance.arrayEnemy[i];
            if (enemy != null) {
                if (enemy.hp > 0) {
                    quantityAlive++;
                }
            }
        }
        return quantityAlive;
    }

    characterSum(): CharacterInfo {
        /**
         * эта функция суммирует все характеристики двух персонажей в одного для простоты дальнейшего буста юнитов
         */
        let exp = 0;
        let stars = 0;
        let attack = 0;
        let protection = 0;
        let leadership = 0;
        let characters = CharactersPresenter.getCharacters();

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