import { _decorator, Component, instantiate, Label, Node, Prefab, Sprite } from 'cc';
import { TypesObjects } from '../Static/TypesObjects';
import { TroopRender } from './TroopRender';
import { BattleMap } from './BattleMap';
import { TypesAttack } from '../Static/TypesAttack';
import { TypesTeam } from '../Static/TypesTeam';
import { ConfigStorageController } from '../Controllers/StorageControllers/ConfigStorageController';
import { CharacterInfo } from '../Structures/CharacterInfo';
import { CharactrerStorageController } from '../Controllers/StorageControllers/CharactrerStorageController';
import { FreeUnit } from '../Structures/FreeUnit';
import { Unit } from '../Structures/Unit';
import { BattleStorage } from '../Storage/BattleStorage';
import { TroopStorageController } from '../Controllers/StorageControllers/TroopStorageController';
import { GameStorageController } from '../Controllers/StorageControllers/GameStorageController';
import { CardTroopRender } from './CardTroopRender';
import { RedirectionToScene } from '../Other/RedirectionToScene';
import { SceneNames } from '../Static/SceneNames';
const { ccclass, property } = _decorator;

@ccclass('Battle')
export class Battle extends Component {

    /**
     * +++ получить союзные свободные войска
     * +++ получить вражеские свободные войска
     * 
     * +++ получить доступное количество ячеек союзных войск[1,1,6,10,16,30,40,50,70]
     * +++ получить сколько юнитов встанет в одну ячейку
     * 
     * +++ отрисовать доступные по ЛВЛу ячейки + одну не доступную
     * +++ создать массив для своих войск по кол-ву доступных ячеек по лвлу
     * 
     * +++ при старте игры записать вражеских юнитов в массив и отрисовать их на карте
     * +++ при атаке на вражеские войска рендер их параметров
     * 
     * +++ при нажатии на корточку, поставить одного воина
     * +++ при нажатии на кнопку автматическая расстановка, возврат выставленных своих войск в карточки, расставить свои войска автоматически
     * 
     * при смене героев возврат выставленных своих войск в карточки, перерасчитывается количество мест на ячейках, ихменяется ХП юнитов в карточках
     * 
     * +++ при нажатии на юнита возврат его в карточку
     * 
     * -------------------------------------------------------
     * 
     * +++ получить тип атакующей команды
     * 
     * +++при каждой атаке юнита выплнять это {
        * +++ получение параметров атакующего юнита
        * +++ получить атакуемых юнитов
        * +++ включить анимацию выстрела, списать ХП
        * +++ после анимации запустить анимацию списания ХП и перерендерить воина
     * }
     * 
     *                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        после окончания атаки первой команды проверить жива ли вторая
     * 
     * если одна из команд померла то открываем модалку конца боя
     * 
     */

    public static instance: Battle;

    @property({ type: Prefab })
    public troop: Prefab;

    @property({ type: Prefab })
    public cardTroop: Prefab;

    @property({ type: Node })
    public parentCards: Node;

    @property({ type: Node })
    public inBattleBtn: Node;

    @property({ type: Node })
    public quickPlacementBtn: Node;

    @property({ type: Node })
    public endModal: Node;

    @property({ type: Label })
    public endText: Label;

    @property({ type: Label })
    public mapQuantity: Label[] = [];

    private waves: number;
    private currentWave: number;

    onLoad() {
        Battle.instance = this;

        this.getTroopOwn();
        this.getTroopEnemy();
        this.getQuantityAvailableFreeCoords();
    }

    getTroopOwn() {
        let sizeTroopAir = TroopStorageController.getSizeTroopAir();
        let sizeTroopMarine = TroopStorageController.getSizeTroopMarine();
        let sizeTroopOverland = TroopStorageController.getSizeTroopOverland();
        for (let i = 0; i < sizeTroopAir.length; i++) {
            if (sizeTroopAir[i] == 0) continue;
            BattleStorage.instance.arrayCards.push(new FreeUnit(TypesObjects.TROOP_AIR, i + 1, sizeTroopAir[i], 10));
        }
        for (let i = 0; i < sizeTroopMarine.length; i++) {
            if (sizeTroopMarine[i] == 0) continue;
            BattleStorage.instance.arrayCards.push(new FreeUnit(TypesObjects.TROOP_MARINE, i + 1, sizeTroopMarine[i], 10));
        }
        for (let i = 0; i < sizeTroopOverland.length; i++) {
            if (sizeTroopOverland[i] == 0) continue;
            BattleStorage.instance.arrayCards.push(new FreeUnit(TypesObjects.TROOP_OVERLAND, i + 1, sizeTroopOverland[i], 10));
        }
        this.spawnCards();
    }

    getTroopEnemy() {
        for (let i = 0; i < 5; i++) {
            let config = ConfigStorageController.getConfigUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, i + 1);
            BattleStorage.instance.arrayEnemy.push(new Unit(config.hp, config.hp, config.damage, i, config.level, 1, TypesAttack.HORIZON, config.attackType, config.type));
            this.spawnTroop(TypesTeam.TEAM_ENEMY, BattleStorage.instance.arrayEnemy[BattleStorage.instance.arrayEnemy.length - 1]);
        }
    }

    getQuantityAvailableFreeCoords() {
        let a = [1, 1, 6, 10, 16, 30, 40, 50, 70];
        for (let i = 0; i < a.length; i++) {
            if (GameStorageController.getLevel() >= a[i]) {
                BattleStorage.instance.quantityAvailableFreeCoords += 1;
            }
            else {
                break;
            }
        }
        this.addArrays();
        this.renderAvailableCoords();
    }

    getQuantityTroopsOfCoord() {
        for (let i = 0; i < BattleStorage.instance.quantityAvailableFreeCoords; i++) {
            BattleStorage.instance.quantityPlaces[i] += 1;
        }
    }

    renderAvailableCoords() {
        let index = 0;
        for (let i = 0; i < BattleMap.instance.coordsOwn.length; i++) {
            BattleMap.instance.coordsOwn[i].active = false;
        }
        for (let i = 0; i < BattleStorage.instance.quantityAvailableFreeCoords; i++) {
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
        BattleStorage.instance.arrayOwn = new Array(BattleStorage.instance.quantityAvailableFreeCoords);
    }

    spawnCards() {
        for (let i = 0; i < BattleStorage.instance.arrayCards.length; i++) {
            if (BattleStorage.instance.arrayCards[i].quantity <= 0) {
                if (BattleStorage.instance.arrayCards[i].linkToCardTroopRender != null) {
                    BattleStorage.instance.arrayCards[i].linkToCardTroopRender.nodeObject.destroy();
                }
                BattleStorage.instance.arrayCards.splice(i, 1);
            }
            if (BattleStorage.instance.arrayCards[i].linkToCardTroopRender != null) {
                BattleStorage.instance.arrayCards[i].linkToCardTroopRender.nodeObject.destroy();
            }
        }
        this.sortedArrayCards();
        for (let i = 0; i < BattleStorage.instance.arrayCards.length; i++) {
            let arrayCard = BattleStorage.instance.arrayCards[i];
            let card = instantiate(this.cardTroop);
            let cardTroopRender = card.getComponent(CardTroopRender);
            cardTroopRender.level = arrayCard.level;
            cardTroopRender.quantity = arrayCard.quantity;
            cardTroopRender.type = arrayCard.type;
            cardTroopRender.index = i;
            arrayCard.linkToCardTroopRender = cardTroopRender;
            card.setParent(this.parentCards);
        }
    }

    clickOnCard(index: number) {
        for (let i = 0; i < BattleStorage.instance.arrayOwn.length; i++) {
            if (BattleStorage.instance.arrayOwn[i] != null || BattleStorage.instance.quantityAvailableFreeCoords <= i) continue;

            let unit = BattleStorage.instance.arrayCards[index];
            let config = ConfigStorageController.getConfigUnitsByTypeAndLevel(unit.type, unit.level);
            BattleStorage.instance.arrayOwn[i] = new Unit(config.hp, config.hp, config.damage, i, unit.level, 1, TypesAttack.HORIZON, config.attackType, unit.type);
            unit.quantity--;

            this.spawnTroop(TypesTeam.TEAM_OWN, BattleStorage.instance.arrayOwn[i]);

            this.spawnCards();
            this.renderAvailableCoords();
            break;
        }
    }

    retutnUnitOnCard(index: number) {
        if (this.addQuantityTroops(index)) {
            BattleStorage.instance.arrayCards.push(new FreeUnit(BattleStorage.instance.arrayOwn[index].type, BattleStorage.instance.arrayOwn[index].level, BattleStorage.instance.arrayOwn[index].quantity, BattleStorage.instance.arrayOwn[index].hp));
            this.spawnCards();
        }

        if (BattleStorage.instance.arrayOwn[index].link != null) {
            BattleStorage.instance.arrayOwn[index].link.nodeObject.destroy();
        }
        BattleStorage.instance.arrayOwn[index] = null;

        this.renderAvailableCoords();
    }

    addQuantityTroops(index: number): boolean {
        for (let i = 0; i < BattleStorage.instance.arrayCards.length; i++) {
            if (BattleStorage.instance.arrayCards[i] == null) continue;
            if (BattleStorage.instance.arrayCards[i].type != BattleStorage.instance.arrayOwn[index].type || BattleStorage.instance.arrayCards[i].level != BattleStorage.instance.arrayOwn[index].level) continue;

            BattleStorage.instance.arrayCards[i].quantity += BattleStorage.instance.arrayOwn[index].quantity;
            this.spawnCards();
            return false;
        }
        return true;
    }

    quickPlacement() {
        for (let i = 0; i < BattleStorage.instance.arrayOwn.length; i++) {
            if (BattleStorage.instance.arrayOwn[i] == null) continue;

            this.retutnUnitOnCard(i);
            this.renderAvailableCoords();
        }

        for (let i = 0; i < BattleStorage.instance.arrayOwn.length; i++) {
            let unit = BattleStorage.instance.arrayCards[0];
            if (unit == null || BattleStorage.instance.quantityAvailableFreeCoords <= i) continue;

            let config = ConfigStorageController.getConfigUnitsByTypeAndLevel(unit.type, unit.level);
            BattleStorage.instance.arrayOwn[i] = new Unit(config.hp, config.hp, config.damage, i, unit.level, 1, TypesAttack.HORIZON, config.attackType, unit.type);
            unit.quantity--;
            this.spawnTroop(TypesTeam.TEAM_OWN, BattleStorage.instance.arrayOwn[i]);
            this.spawnCards();
        }
    }

    sortedArrayCards() {
        // сортировка карточек
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
    }

    inBattle() {
        for (let i = 0; i < BattleStorage.instance.arrayOwn.length; i++) {
            if (BattleStorage.instance.arrayOwn[i] == null) continue;
            BattleStorage.instance.isBattle = true;
            BattleStorage.instance.attackingTeam = 0;
            this.inBattleBtn.active = false;
            this.quickPlacementBtn.active = false;

            for (let j = 0; j < BattleStorage.instance.arrayCards.length; j++) {
                if (BattleStorage.instance.arrayCards[j] != null) {
                    BattleStorage.instance.arrayCards[j].linkToCardTroopRender.nodeObject.destroy();
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
        if (BattleStorage.instance.attackingTeam == 0) {
            return BattleStorage.instance.arrayOwn.slice(0);
        }
        else if (BattleStorage.instance.attackingTeam == 1) {
            return BattleStorage.instance.arrayEnemy.slice(0);
        }
    }

    private getDefendingUnits(): Unit[] {
        if (BattleStorage.instance.attackingTeam == 0) {
            return BattleStorage.instance.arrayEnemy.slice(0);
        }
        else if (BattleStorage.instance.attackingTeam == 1) {
            return BattleStorage.instance.arrayOwn.slice(0);
        }
    }

    attackController() {

        if (this.troopAlive() || (this.currentWave < this.waves && this.howManyAliveOwn() > 0)) {
            if (this.howManyAliveEnemy() <= 0) {
                this.currentWave++;
            }

            let time = this.attack();
            setTimeout(() => {
                BattleStorage.instance.attackingTeam = BattleStorage.instance.attackingTeam == 0 ? 1 : 0;
                this.attackController();
            }, time * 750);
        }
        else {
            if (this.howManyAliveOwn() <= 0) {
                this.endText.string = "ПАРАЖЕНЕ";
            } else if (this.howManyAliveEnemy() <= 0) {
                this.endText.string = "ВЫИГРЫШ";
            }
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
        console.log(attackUnit);
        if (attackUnit.typeAttack == TypesAttack.HORIZON || attackUnit.typeAttack == TypesAttack.VERTICAL) {
            return this.lineGoalSelection(attackUnit, defendingUnits);
        }
        else {
            return this.randomGoalSelection(attackUnit, defendingUnits);
        }
    }

    randomGoalSelection(attackUnit: Unit, defendingUnits: Unit[]): Unit[] {
        let copyDefendingUnits;
        let selectionUnits;
        let quantityAttacks;

        if (attackUnit.typeAttack == TypesAttack.ONE) {
            quantityAttacks = 1;
        }
        else if (attackUnit.typeAttack == TypesAttack.TWO) {
            quantityAttacks = 2;
        }
        else if (attackUnit.typeAttack == TypesAttack.THREE) {
            quantityAttacks = 3;
        }

        for (let i = 0; i < defendingUnits.length; i++) {
            if (defendingUnits[i] != null) {
                copyDefendingUnits.push(defendingUnits[i]);
            }
        }

        for (let i = 0; i < quantityAttacks; i++) {
            selectionUnits.push(copyDefendingUnits[Math.floor(Math.random() * copyDefendingUnits.length)]);
        }

        return selectionUnits;
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

    characterSum(): CharacterInfo {
        /**
         * эта функция суммирует все характеристики двух персонажей в одного для простоты дальнейшего буста юнитов
         */
        let exp = 0;
        let stars = 0;
        let attack = 0;
        let protection = 0;
        let leadership = 0;
        let characters = CharactrerStorageController.getCharacters();

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