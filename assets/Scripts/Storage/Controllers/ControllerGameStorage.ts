import { _decorator } from 'cc';
import { GameStorage } from '../GameStorage';
import { MainInterface } from '../../UI/MainInterface';
import { ControllerConfigStorage } from './ControllerConfigStorage';

export class ControllerGameStorage {

    // Coins
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

    //Gems
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

    //Energy
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

    //Experience
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
        return ControllerConfigStorage.getLevelExpirienceByLevel(this.getLevel() + 1) - this.getExperience();
    }

    //Level
    static addLevel(value: number) {
        if (value == 0) return;
        GameStorage.instance.level += value;
        MainInterface.instance.updateCountLevel();
        this.updateGameStorage();
    }

    static getLevel(): number {
        return GameStorage.instance.level;
    }

    //Power
    static getPowerMax(): number {
        return GameStorage.instance.maxPower;
    }

    static getPower(): number {
        return GameStorage.instance.territoryPower +
            GameStorage.instance.technoPower +
            GameStorage.instance.heroPower +
            GameStorage.instance.arsenalPower +
            GameStorage.instance.professionPower;
    }

    static addPowerTerritory(value: number) {
        if (value == 0) return;
        GameStorage.instance.territoryPower += value
        this.updateMaxPower()
        this.updateGameStorage();
    }

    static addPowerTechno(value: number) {
        if (value == 0) return
        GameStorage.instance.technoPower += value
        this.updateMaxPower()
        this.updateGameStorage();
    }

    static updateMaxPower() {
        if (this.getPower() > this.getPowerMax()) {
            GameStorage.instance.maxPower = this.getPower()
            this.updateGameStorage();
        }
    }

    static updateGameStorage() {
        console.log("updateGameStorage");
    }
}