import { _decorator } from 'cc';
import { AutocombineStorage } from '../AutocombineStorage';
import { ControllerHomeMapStorage } from './ControllerHomeMapStorage';
import { TypesObjects } from '../../Static/TypesObjects';
import { ObjectParameters } from '../../ObjectParameters';
import { Aut } from '../../Structures/Aut';
import { ControllerBufferStorage } from './ControllerBufferStorage';
import { TypesStorages } from '../../Static/TypesStorages';
import { ControllerConfigStorage } from './ControllerConfigStorage';

export class ControllerAutocombineStorage {

    static assignStartingValues() {
        AutocombineStorage.instance.allProfit = 0;
        AutocombineStorage.instance.quantityWorkGoldMine = 0;
        AutocombineStorage.instance.quantityProfit = 0;
        AutocombineStorage.instance.quantityCollect = 0;
        AutocombineStorage.instance.isActiveAutocombine = true;
    }

    static assigningSaveValues(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj[i]));
            if (i == 0) {
                AutocombineStorage.instance.allProfit = json.allProfit;
                AutocombineStorage.instance.quantityWorkGoldMine = json.quantityWorkGoldMine;
                AutocombineStorage.instance.quantityProfit = json.quantityProfit;
                AutocombineStorage.instance.quantityCollect = json.quantityCollect;
                AutocombineStorage.instance.isActiveAutocombine = json.isActiveAutocombine;
            }
            else {
                AutocombineStorage.instance.indexes.push(new Aut(json.level, json.index, json.time));
            }
        }
    }

    static TEST() {
        setTimeout(() => {
            for (let i = 0; i < AutocombineStorage.instance.indexes.length; i++) {
                AutocombineStorage.instance.indexes[i].time -= 1;
                if (ControllerHomeMapStorage.getObjectParameter(AutocombineStorage.instance.indexes[i].index)) {
                    if (ControllerHomeMapStorage.getObjectParameter(AutocombineStorage.instance.indexes[i].index).getGoldMineInterface()) {
                        let time = -(1 - (((AutocombineStorage.instance.indexes[i].time * 100) / 60) * 0.01));;
                        ControllerHomeMapStorage.getObjectParameter(AutocombineStorage.instance.indexes[i].index).getGoldMineInterface().render(time);
                    }
                }
                if (AutocombineStorage.instance.indexes[i].time <= 0) {
                    AutocombineStorage.instance.indexes[i].time = 60;
                    AutocombineStorage.instance.allProfit += ControllerConfigStorage.getProdictionInTimeGoldMineByLevel(AutocombineStorage.instance.indexes[i].level);
                }
            }
            this.TEST();
        }, 1000)
    }

    static updateIndexGoldMine(oldIndex: number, newIndex: number) {
        for (let i = 0; i < AutocombineStorage.instance.indexes.length; i++) {
            if (AutocombineStorage.instance.indexes[i].index == oldIndex) {
                AutocombineStorage.instance.indexes[i].index = newIndex;
            }
        }
    }

    static deleteGoldMine(index: number) {
        AutocombineStorage.instance.indexes.slice(index, 1);
    }

    static getTimeGoldMine(index: number): number {
        for (let i = 0; i < AutocombineStorage.instance.indexes.length; i++) {
            if (AutocombineStorage.instance.indexes[i].index == index) {
                return AutocombineStorage.instance.indexes[i].time;
            }
        }
    }

    static alo(objectParameters: ObjectParameters) {
        if (AutocombineStorage.instance.indexes.length < 10) {
            let check = false;
            for (let i = 0; i < AutocombineStorage.instance.indexes.length; i++) {
                if (AutocombineStorage.instance.indexes[i].index == objectParameters.index) {
                    objectParameters.getGoldMineInterface().openMessage();
                    check = true;
                }
            }
            if (!check) {
                objectParameters.getGoldMineInterface().openMessage();
                AutocombineStorage.instance.indexes.push(
                    new Aut(objectParameters.level, objectParameters.index, 60)
                );
            }
            AutocombineStorage.instance.quantityProfit = 0;
            for (let i = 0; i < AutocombineStorage.instance.indexes.length; i++) {
                AutocombineStorage.instance.quantityProfit += ControllerConfigStorage.getProdictionInTimeGoldMineByLevel(AutocombineStorage.instance.indexes[i].level);
            }
        }
        else {
            for (let i = 0; i < AutocombineStorage.instance.indexes.length; i++) {
                if (AutocombineStorage.instance.indexes[i].index == objectParameters.index) {
                    objectParameters.getGoldMineInterface().openMessage();
                    return;
                }
            }
            objectParameters.getGoldMineInterface().closeMessage();
        }
        this.saveStorage();
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

    static clearAllProfit() {
        AutocombineStorage.instance.allProfit = 0;
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

    static getIsActiveAutocombine(): boolean {
        return AutocombineStorage.instance.isActiveAutocombine;
    }

    static saveStorage() {
        let obj: Object[] = [];
        obj.push({
            allProfit: AutocombineStorage.instance.allProfit,
            quantityWorkGoldMine: AutocombineStorage.instance.quantityWorkGoldMine,
            quantityProfit: AutocombineStorage.instance.quantityProfit,
            quantityCollect: AutocombineStorage.instance.quantityCollect,
            isActiveAutocombine: AutocombineStorage.instance.isActiveAutocombine

        });
        for (let i = 0; i < AutocombineStorage.instance.indexes.length; i++) {
            obj.push({
                level: AutocombineStorage.instance.indexes[i].level,
                index: AutocombineStorage.instance.indexes[i].index,
                time: AutocombineStorage.instance.indexes[i].time
            });
        }
        ControllerBufferStorage.addItem(TypesStorages.AUTOCOMBINE_STORAGE, obj);
    }
}       