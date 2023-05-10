import { _decorator } from 'cc';
import { GameStorage } from '../GameStorage';
import { MainInterface } from '../../UI/MainInterface';
import { ControllerConfigStorage } from './ControllerConfigStorage';

export class ControllerGameStorage {

    // Coins
    static addCoins(value: number) {
        GameStorage.instance.coins += value;
        MainInterface.instance.updateAmountCoins();
    }

    static reduceCoins(value: number) {
        GameStorage.instance.coins -= value;
        MainInterface.instance.updateAmountCoins();
    }

    static getCoins(): number {
        return GameStorage.instance.coins;
    }

    //Gems
    static addGems(value: number) {
        GameStorage.instance.gems += value;
        MainInterface.instance.updateAmountGems();
    }

    static reduceGems(value: number) {
        GameStorage.instance.gems -= value;
        MainInterface.instance.updateAmountGems();
    }

    static getGems(): number {
        return GameStorage.instance.gems;
    }

    //Energy
    static addEnergy(value: number) {
        GameStorage.instance.energy += value;
    }

    static reduceEnergy(value: number) {
        GameStorage.instance.energy -= value;
    }

    static getEnergy(): number {
        return GameStorage.instance.energy;
    }

    //Experience
    static addExperience(value: number) {
        GameStorage.instance.experience += value;
        //точнее будет работать при установке уровня по опыту а не +1
        if (this.getExperience() > ControllerConfigStorage.getLevelExpirienceByLevel(this.getLevel())) {
            GameStorage.instance.level = ControllerConfigStorage.getLevelByExpirience(this.getExperience());
        }
        MainInterface.instance.updateCountLevel();
    }

    static getExperience(): number {
        return GameStorage.instance.experience;
    }

    static getExpirienceForNextLevel() {
        return ControllerConfigStorage.getLevelExpirienceByLevel(this.getLevel() + 1) - this.getExperience();
    }

    //Level
    static addLevel(value: number) {
        GameStorage.instance.level += value;
        MainInterface.instance.updateCountLevel();
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

    static addPowerTerritory(power: number) {
        GameStorage.instance.territoryPower += power
        this.updateMaxPower()
    }

    static addPowerTechno(power: number) {
        GameStorage.instance.technoPower += power
        this.updateMaxPower()
    }

    static updateMaxPower() {
        if (this.getPower() > this.getPowerMax()) {
            GameStorage.instance.maxPower = this.getPower()
        }
    }
}