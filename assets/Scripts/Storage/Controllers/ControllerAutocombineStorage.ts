import { _decorator } from 'cc';
import { AutocombineStorage } from '../AutocombineStorage';
import { ControllerHomeMapStorage } from './ControllerHomeMapStorage';
import { TypesObjects } from '../../Static/TypesObjects';

export class ControllerAutocombineStorage {

    static initAllProfit() {
        AutocombineStorage.instance.allProfit = 0;
    }

    static initQuantityWorkGoldMine() {
        AutocombineStorage.instance.quantityWorkGoldMine = 0;
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            if (ControllerHomeMapStorage.getObjectParameter(i) == null) continue;
            if (ControllerHomeMapStorage.getObjectParameter(i).index != i) continue;
            if (ControllerHomeMapStorage.getObjectParameter(i).type != TypesObjects.GOLD_MINE) continue;
            AutocombineStorage.instance.quantityWorkGoldMine += 1;
        }
    }

    static initQuantityProfit() {
        AutocombineStorage.instance.quantityProfit = 0;
    }

    static addQuantityCollect() {
        AutocombineStorage.instance.quantityCollect += 1;
    }

    static getAllProfit(): number {
        return AutocombineStorage.instance.allProfit;
    }

    static getQuantityWorkGoldMine(): number {
        return AutocombineStorage.instance.quantityWorkGoldMine;
    }

    static getQuantityProfit(): number {
        return AutocombineStorage.instance.quantityProfit;
    }

    static getQuantityCollect(): number {
        return AutocombineStorage.instance.quantityCollect;
    }

    static saveStorage() {

    }
}       