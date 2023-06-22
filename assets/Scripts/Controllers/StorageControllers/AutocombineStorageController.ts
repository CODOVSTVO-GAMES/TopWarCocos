import { _decorator } from 'cc';
import { AutocombineStorage } from '../../Storage/AutocombineStorage';
import { HomeMapStorageController } from './HomeMapStorageController';
import { TypesObjects } from '../../Static/TypesObjects';
import { ObjectParameters } from '../../ObjectParameters';
import { Autocombine } from '../../Structures/Autocombine';
import { BufferStorageController } from './BufferStorageController';
import { TypesStorages } from '../../Static/TypesStorages';
import { ConfigStorageController } from './ConfigStorageController';

export class AutocombineStorageController {

    public static assignStartingValues() {
        AutocombineStorage.instance.allProfit = 0
        AutocombineStorage.instance.quantityWorkGoldMine = 0
        AutocombineStorage.instance.quantityProfit = 0
        AutocombineStorage.instance.quantityCollect = 0
        AutocombineStorage.instance.isActiveAutocombine = true
    }

    public static assigningSaveValues(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj[i]))
            if (i == 0) {
                AutocombineStorage.instance.allProfit = json.allProfit
                AutocombineStorage.instance.quantityWorkGoldMine = json.quantityWorkGoldMine
                AutocombineStorage.instance.quantityProfit = json.quantityProfit
                AutocombineStorage.instance.quantityCollect = json.quantityCollect
                AutocombineStorage.instance.isActiveAutocombine = json.isActiveAutocombine
            }
            else {
                AutocombineStorage.instance.indexes.push(new Autocombine(json.level, json.index, json.time))
            }
        }
    }

    public static TEST() {
        setTimeout(() => {
            for (let i = 0; i < AutocombineStorage.instance.indexes.length; i++) {
                AutocombineStorage.instance.indexes[i].timeProfit -= 1
                if (HomeMapStorageController.getObjectParameter(AutocombineStorage.instance.indexes[i].indexGoldMine)) {
                    if (HomeMapStorageController.getObjectParameter(AutocombineStorage.instance.indexes[i].indexGoldMine).getGoldMineInterface()) {
                        let time = -(1 - (((AutocombineStorage.instance.indexes[i].timeProfit * 100) / 60) * 0.01))
                        HomeMapStorageController.getObjectParameter(AutocombineStorage.instance.indexes[i].indexGoldMine).getGoldMineInterface().render(time);
                    }
                }
                if (AutocombineStorage.instance.indexes[i].timeProfit <= 0) {
                    AutocombineStorage.instance.indexes[i].timeProfit = 60;
                    AutocombineStorage.instance.allProfit += ConfigStorageController.getProdictionInTimeGoldMineByLevel(AutocombineStorage.instance.indexes[i].levelGoldMine);
                }
            }
            this.TEST();
        }, 1000)
    }

    public static updateIndexGoldMine(oldIndex: number, newIndex: number) {
        for (let i = 0; i < AutocombineStorage.instance.indexes.length; i++) {
            if (AutocombineStorage.instance.indexes[i].indexGoldMine == oldIndex) {
                AutocombineStorage.instance.indexes[i].indexGoldMine = newIndex
                break
            }
        }
    }

    public static deleteGoldMine(index: number) {
        AutocombineStorage.instance.indexes.slice(index, 1)
    }

    public static getTimeGoldMine(index: number): number {
        for (let i = 0; i < AutocombineStorage.instance.indexes.length; i++) {
            if (AutocombineStorage.instance.indexes[i].indexGoldMine == index) {
                return AutocombineStorage.instance.indexes[i].timeProfit
            }
        }
    }

    public static alo(objectParameters: ObjectParameters) {
        if (AutocombineStorage.instance.indexes.length < 10) {
            let check = false
            for (let i = 0; i < AutocombineStorage.instance.indexes.length; i++) {
                if (AutocombineStorage.instance.indexes[i].indexGoldMine == objectParameters.index) {
                    objectParameters.getGoldMineInterface().openMessage()
                    check = true
                }
            }
            if (!check) {
                objectParameters.getGoldMineInterface().openMessage();
                AutocombineStorage.instance.indexes.push(new Autocombine(objectParameters.level, objectParameters.index, 60))
            }
            AutocombineStorage.instance.quantityProfit = 0;
            for (let i = 0; i < AutocombineStorage.instance.indexes.length; i++) {
                AutocombineStorage.instance.quantityProfit += ConfigStorageController.getProdictionInTimeGoldMineByLevel(AutocombineStorage.instance.indexes[i].levelGoldMine)
            }
        }
        else {
            for (let i = 0; i < AutocombineStorage.instance.indexes.length; i++) {
                if (AutocombineStorage.instance.indexes[i].indexGoldMine == objectParameters.index) {
                    objectParameters.getGoldMineInterface().openMessage()
                    return
                }
            }
            objectParameters.getGoldMineInterface().closeMessage();
        }
        this.saveStorage()
    }

    public static initQuantityWorkGoldMine() {
        AutocombineStorage.instance.quantityWorkGoldMine = 0
        for (let i = 0; i < HomeMapStorageController.getMapSize(); i++) {
            if (HomeMapStorageController.getObjectParameter(i) == null) continue
            if (HomeMapStorageController.getObjectParameter(i).index != i) continue
            if (HomeMapStorageController.getObjectParameter(i).type != TypesObjects.GOLD_MINE) continue
            AutocombineStorage.instance.quantityWorkGoldMine += 1
        }
    }

    public static clearAllProfit() {
        AutocombineStorage.instance.allProfit = 0
    }

    public static getAllProfit(): number {
        return AutocombineStorage.instance.allProfit
    }

    public static getQuantityWorkGoldMine(): number {
        return AutocombineStorage.instance.quantityWorkGoldMine
    }

    public static getQuantityProfit(): number {
        return AutocombineStorage.instance.quantityProfit
    }

    public static getQuantityCollect(): number {
        return AutocombineStorage.instance.quantityCollect
    }

    public static getIsActiveAutocombine(): boolean {
        return AutocombineStorage.instance.isActiveAutocombine
    }

    public static saveStorage() {
        let obj: Object[] = []
        obj.push({
            allProfit: AutocombineStorage.instance.allProfit,
            quantityWorkGoldMine: AutocombineStorage.instance.quantityWorkGoldMine,
            quantityProfit: AutocombineStorage.instance.quantityProfit,
            quantityCollect: AutocombineStorage.instance.quantityCollect,
            isActiveAutocombine: AutocombineStorage.instance.isActiveAutocombine

        })
        for (let i = 0; i < AutocombineStorage.instance.indexes.length; i++) {
            obj.push({
                level: AutocombineStorage.instance.indexes[i].levelGoldMine,
                index: AutocombineStorage.instance.indexes[i].indexGoldMine,
                time: AutocombineStorage.instance.indexes[i].timeProfit
            })
        }
        BufferStorageController.addItem(TypesStorages.AUTOCOMBINE_STORAGE, obj)
    }
}       