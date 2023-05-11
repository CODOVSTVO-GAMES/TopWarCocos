import { _decorator } from 'cc';
import { GameStorage } from '../GameStorage';
import { MainInterface } from '../../UI/MainInterface';
import { ControllerConfigStorage } from './ControllerConfigStorage';
import { Test } from '../../Test';
import { ControllerBufferStorage } from './ControllerBufferStorage';
import { TypesStorages } from '../../Static/TypesStorages';

export class ControllerGameStorage {

    // =================================================================

    static equateCoins(value: number) {
        GameStorage.instance.coins == value;
    }

    static addCoins(value: number) {
        if (value == 0) return;
        GameStorage.instance.coins += value;
        MainInterface.instance.updateAmountCoins();
        this.updateGameStorage();
    }

    static reduceCoins(value: number) {
        if (value == 0) return;
        GameStorage.instance.coins -= value;
        MainInterface.instance.updateAmountCoins();
        this.updateGameStorage();
    }

    static getCoins(): number {
        return GameStorage.instance.coins;
    }

    // =================================================================

    static equateGems(value: number) {
        GameStorage.instance.gems == value;
    }

    static addGems(value: number) {
        if (value == 0) return;
        GameStorage.instance.gems += value;
        MainInterface.instance.updateAmountGems();
        this.updateGameStorage();
    }

    static reduceGems(value: number) {
        if (value == 0) return;
        GameStorage.instance.gems -= value;
        MainInterface.instance.updateAmountGems();
        this.updateGameStorage();
    }

    static getGems(): number {
        return GameStorage.instance.gems;
    }

    // =================================================================

    static equateEnergy(value: number) {
        GameStorage.instance.energy == value;
    }

    static addEnergy(value: number) {
        if (value == 0) return;
        GameStorage.instance.energy += value;
        this.updateGameStorage();
    }

    static reduceEnergy(value: number) {
        if (value == 0) return;
        GameStorage.instance.energy -= value;
        this.updateGameStorage();
    }

    static getEnergy(): number {
        return GameStorage.instance.energy;
    }

    // =================================================================

    static equateExperience(value: number) {
        GameStorage.instance.experience == value;
    }

    static addExperience(value: number) {
        if (value == 0) return;
        GameStorage.instance.experience += value;
        if (this.getExperience() > ControllerConfigStorage.getLevelExpirienceByLevel(this.getLevel())) {
            GameStorage.instance.level = ControllerConfigStorage.getLevelByExpirience(this.getExperience());
            MainInterface.instance.updateCountLevel();
        }
        this.updateGameStorage();
    }

    static getExperience(): number {
        return GameStorage.instance.experience;
    }

    static getExpirienceForNextLevel() {
        return ControllerConfigStorage.getLevelExpirienceByLevel(this.getLevel() + 1);
    }

    static getRemainingExpirienceForNextLevel() {
        return ControllerConfigStorage.getLevelExpirienceByLevel(this.getLevel() + 1) - this.getExperience();
    }

    // =================================================================

    static equateLevel(value: number) {
        GameStorage.instance.level == value;
    }

    static addLevel(value: number) {
        if (value == 0) return;
        GameStorage.instance.level += value;
        MainInterface.instance.updateCountLevel();
        this.updateGameStorage();
    }

    static getLevel(): number {
        return GameStorage.instance.level;
    }

    // =================================================================

    static equateMaxPower(value: number) {
        GameStorage.instance.maxPower == value;
    }

    static equateTerritoryPower(value: number) {
        GameStorage.instance.territoryPower == value;
    }

    static equateTechnoPower(value: number) {
        GameStorage.instance.technoPower == value;
    }

    static equateHeroPower(value: number) {
        GameStorage.instance.heroPower == value;
    }

    static equateArsenalPower(value: number) {
        GameStorage.instance.arsenalPower == value;
    }

    static equateProfessionPower(value: number) {
        GameStorage.instance.professionPower == value;
    }

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
        this.updateMaxPower();
        this.updateGameStorage();
    }

    static addTechnoPower(value: number) {
        if (value == 0) return
        GameStorage.instance.technoPower += value;
        this.updateMaxPower();
        this.updateGameStorage();
    }

    static addHeroPower(value: number) {
        if (value == 0) return
        GameStorage.instance.heroPower += value;
        this.updateMaxPower();
        this.updateGameStorage();
    }

    static addArsenalPower(value: number) {
        if (value == 0) return
        GameStorage.instance.arsenalPower += value;
        this.updateMaxPower();
        this.updateGameStorage();
    }

    static addProfessionPower(value: number) {
        if (value == 0) return
        GameStorage.instance.professionPower += value;
        this.updateMaxPower();
        this.updateGameStorage();
    }

    static addFormationPower(value: number) {
        if (value == 0) return
        GameStorage.instance.formationPower += value;
        this.updateMaxPower();
        this.updateGameStorage();
    }

    static updateMaxPower() {
        if (this.getPower() > this.getMaxPower()) {
            GameStorage.instance.maxPower = this.getPower();
            this.updateGameStorage();
        }
    }

    // =================================================================

    static updateGameStorage() {
        let obj = {
            coins: GameStorage.instance.coins,
            coinsInTime: GameStorage.instance.coinsInTime,
            gems: GameStorage.instance.gems,
            energy: GameStorage.instance.energy,
            experience: GameStorage.instance.experience,
            level: GameStorage.instance.level,
            maxPower: GameStorage.instance.maxPower,
            territoryPower: GameStorage.instance.territoryPower,
            technoPower: GameStorage.instance.technoPower,
            heroPower: GameStorage.instance.heroPower,
            arsenalPower: GameStorage.instance.arsenalPower,
            professionPower: GameStorage.instance.professionPower,
        };
        ControllerBufferStorage.addItem(TypesStorages.GAME_STORAGE, obj);
        console.log("updateGameStorage");
    }
}