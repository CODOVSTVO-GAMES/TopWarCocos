import { _decorator } from 'cc';
import { GameStorage } from '../../Storage/GameStorage';
import { MainInterface } from '../../UI/MainInterface';
import { ConfigStorageController } from '../ConfigStorageController';
import { BufferStorageController } from '../BufferStorageController';
import { TypesStorages } from '../../Static/TypesStorages';

export class GameStorageController {

    // =================================================================

    static assignStartingValues() {
        GameStorage.instance.coins = 100000000;
        GameStorage.instance.coinsInTime = 0;
        GameStorage.instance.gems = 70;
        GameStorage.instance.energy = 75;
        GameStorage.instance.maxEnergy = 75;
        GameStorage.instance.experience = 0;
        GameStorage.instance.level = 1;
        GameStorage.instance.maxPower = 0;
        GameStorage.instance.territoryPower = 0;
        GameStorage.instance.technoPower = 0;
        GameStorage.instance.heroPower = 0;
        GameStorage.instance.arsenalPower = 0;
        GameStorage.instance.professionPower = 0;
        GameStorage.instance.formationPower = 0;
        this.saveStorage();
    }

    static assigningSaveValues(obj: Object) {
        let json = JSON.parse(JSON.stringify(obj));
        GameStorage.instance.coins = json.coins;
        GameStorage.instance.coinsInTime = json.coinsInTime;
        GameStorage.instance.gems = json.gems;
        GameStorage.instance.energy = json.energy;
        GameStorage.instance.maxEnergy = json.maxEnergy;
        GameStorage.instance.experience = json.experience;
        GameStorage.instance.level = json.level;
        GameStorage.instance.maxPower = json.maxPower;
        GameStorage.instance.territoryPower = json.territoryPower;
        GameStorage.instance.technoPower = json.technoPower;
        GameStorage.instance.heroPower = json.heroPower;
        GameStorage.instance.arsenalPower = json.arsenalPower;
        GameStorage.instance.professionPower = json.professionPower;
        GameStorage.instance.formationPower = json.formationPower;
    }

    // =================================================================

    static addCoins(value: number) {
        if (value == 0) return;
        GameStorage.instance.coins += value;
        MainInterface.instance.updateAmountCoins();
        this.saveStorage();
    }

    static reduceCoins(value: number) {
        if (value == 0) return;
        GameStorage.instance.coins -= value;
        MainInterface.instance.updateAmountCoins();
        this.saveStorage();
    }

    static getCoins(): number {
        return GameStorage.instance.coins;
    }

    // =================================================================

    static addGems(value: number) {
        if (value == 0) return;
        GameStorage.instance.gems += value;
        MainInterface.instance.updateAmountGems();
        this.saveStorage();
    }

    static reduceGems(value: number) {
        if (value == 0) return;
        GameStorage.instance.gems -= value;
        MainInterface.instance.updateAmountGems();
        this.saveStorage();
    }

    static getGems(): number {
        return GameStorage.instance.gems;
    }

    // =================================================================

    static addEnergy(value: number) {
        if (value == 0) return;
        GameStorage.instance.energy += value;
        this.saveStorage();
    }

    static reduceEnergy(value: number) {
        if (value == 0) return;
        GameStorage.instance.energy -= value;
        this.saveStorage();
    }

    static getEnergy(): number {
        return GameStorage.instance.maxEnergy;
    }

    static addMaxEnergy(value: number) {
        if (value == 0) return;
        GameStorage.instance.maxEnergy += value;
        this.saveStorage();
    }

    static getMaxEnergy(): number {
        return GameStorage.instance.maxEnergy;
    }

    // =================================================================

    static addExperience(value: number) {
        if (value == 0) return;
        GameStorage.instance.experience += value;
        if (this.getExperience() > ConfigStorageController.getLevelExpirienceByLevel(this.getLevel())) {
            GameStorage.instance.level = ConfigStorageController.getLevelByExpirience(this.getExperience());
            MainInterface.instance.updateCountLevel();
        }
        this.saveStorage();
    }

    static getExperience(): number {
        return GameStorage.instance.experience;
    }

    static getExpirienceForNextLevel() {
        return ConfigStorageController.getLevelExpirienceByLevel(this.getLevel() + 1);
    }

    static getRemainingExpirienceForNextLevel() {
        return ConfigStorageController.getLevelExpirienceByLevel(this.getLevel() + 1) - this.getExperience();
    }

    // =================================================================

    static addLevel() {
        GameStorage.instance.level += 1;
        MainInterface.instance.updateCountLevel();
        this.saveStorage();
    }

    static getLevel(): number {
        return GameStorage.instance.level;
    }

    // =================================================================


    static getPower(): number {
        return GameStorage.instance.territoryPower +
            GameStorage.instance.technoPower +
            GameStorage.instance.heroPower +
            GameStorage.instance.arsenalPower +
            GameStorage.instance.professionPower +
            GameStorage.instance.formationPower;
    }

    static getMaxPower(): number {
        return GameStorage.instance.maxPower;
    }

    static getTerritoryPower(): number {
        return GameStorage.instance.territoryPower;
    }

    static getTechnoPower(): number {
        return GameStorage.instance.technoPower;
    }

    static getHeroPower(): number {
        return GameStorage.instance.heroPower;
    }

    static getArsenalPower(): number {
        return GameStorage.instance.arsenalPower;
    }

    static getProfessionPower(): number {
        return GameStorage.instance.professionPower;
    }

    static getFormationPower(): number {
        return GameStorage.instance.formationPower;
    }

    static addTerritoryPower(value: number) {
        if (value == 0) return;
        GameStorage.instance.territoryPower += value;
        MainInterface.instance.updateCountPower();
        this.updateMaxPower();
        this.saveStorage();
    }

    static addTechnoPower(value: number) {
        if (value == 0) return
        GameStorage.instance.technoPower += value;
        MainInterface.instance.updateCountPower();
        this.updateMaxPower();
        this.saveStorage();
    }

    static addHeroPower(value: number) {
        if (value == 0) return
        GameStorage.instance.heroPower += value;
        MainInterface.instance.updateCountPower();
        this.updateMaxPower();
        this.saveStorage();
    }

    static addArsenalPower(value: number) {
        if (value == 0) return
        GameStorage.instance.arsenalPower += value;
        MainInterface.instance.updateCountPower();
        this.updateMaxPower();
        this.saveStorage();
    }

    static addProfessionPower(value: number) {
        if (value == 0) return
        GameStorage.instance.professionPower += value;
        MainInterface.instance.updateCountPower();
        this.updateMaxPower();
        this.saveStorage();
    }

    static addFormationPower(value: number) {
        if (value == 0) return
        GameStorage.instance.formationPower += value;
        MainInterface.instance.updateCountPower();
        this.updateMaxPower();
        this.saveStorage();
    }

    static updateMaxPower() {
        if (this.getPower() > this.getMaxPower()) {
            GameStorage.instance.maxPower = this.getPower();
            this.saveStorage();
        }
    }

    // =================================================================

    static saveStorage() {
        let obj = {
            coins: GameStorage.instance.coins,
            coinsInTime: GameStorage.instance.coinsInTime,
            gems: GameStorage.instance.gems,
            energy: GameStorage.instance.energy,
            maxEnergy: GameStorage.instance.maxEnergy,
            experience: GameStorage.instance.experience,
            level: GameStorage.instance.level,
            maxPower: GameStorage.instance.maxPower,
            territoryPower: GameStorage.instance.territoryPower,
            technoPower: GameStorage.instance.technoPower,
            heroPower: GameStorage.instance.heroPower,
            arsenalPower: GameStorage.instance.arsenalPower,
            professionPower: GameStorage.instance.professionPower,
            formationPower: GameStorage.instance.formationPower
        };
        BufferStorageController.addItem(TypesStorages.GAME_STORAGE, obj);
    }
}