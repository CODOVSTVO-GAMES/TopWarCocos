import { ConfigPresenter } from "./ConfigPresenter"
import { AutocombineModel } from "../Model/AutocombineModel"
import { ObjectParameters } from "../ObjectParameters"
import { TypesObjects } from "../Static/TypesObjects"
import { Autocombine } from "../Structures/Autocombine"
import { HomeMapPresenter } from "./HomeMapPresenter"

export class AutocombinePresenter {

    public static assigningSaveValues(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj[i]))
            if (i == 0) {
                AutocombineModel.instance.allProfit = json.allProfit
                AutocombineModel.instance.quantityWorkGoldMine = json.quantityWorkGoldMine
                AutocombineModel.instance.quantityProfit = json.quantityProfit
                AutocombineModel.instance.quantityCollect = json.quantityCollect
                AutocombineModel.instance.isActiveAutocombine = json.isActiveAutocombine
            }
            else {
                AutocombineModel.instance.indexes.push(new Autocombine(json.level, json.index, json.time))
            }
        }
    }

    public static TEST() {
        for (let i = 0; i < AutocombineModel.instance.indexes.length; i++) {
            AutocombineModel.instance.indexes[i].timeProfit -= 1
            if (HomeMapPresenter.getObjectParameter(AutocombineModel.instance.indexes[i].indexGoldMine)) {
                if (HomeMapPresenter.getObjectParameter(AutocombineModel.instance.indexes[i].indexGoldMine).getGoldMineInterface()) {
                    let time = -(1 - (((AutocombineModel.instance.indexes[i].timeProfit * 100) / 60) * 0.01))
                    HomeMapPresenter.getObjectParameter(AutocombineModel.instance.indexes[i].indexGoldMine).getGoldMineInterface().renderFillProgress(time)
                }
            }
            if (AutocombineModel.instance.indexes[i].timeProfit <= 0) {
                AutocombineModel.instance.indexes[i].timeProfit = 60
                AutocombineModel.instance.allProfit += ConfigPresenter.getProdictionInTimeGoldMineByLevel(AutocombineModel.instance.indexes[i].levelGoldMine)
            }
        }
    }

    public static updateIndexGoldMine(oldIndex: number, newIndex: number) {
        for (let i = 0; i < AutocombineModel.instance.indexes.length; i++) {
            if (AutocombineModel.instance.indexes[i].indexGoldMine == oldIndex) {
                AutocombineModel.instance.indexes[i].indexGoldMine = newIndex
                break
            }
        }
    }

    public static deleteGoldMine(index: number) {
        AutocombineModel.instance.indexes.slice(index, 1)
    }

    public static getTimeGoldMine(index: number): number {
        for (let i = 0; i < AutocombineModel.instance.indexes.length; i++) {
            if (AutocombineModel.instance.indexes[i].indexGoldMine == index) {
                return AutocombineModel.instance.indexes[i].timeProfit
            }
        }
    }

    public static alo(objectParameters: ObjectParameters) {
        if (AutocombineModel.instance.indexes.length < 10) {
            let check = false
            for (let i = 0; i < AutocombineModel.instance.indexes.length; i++) {
                if (AutocombineModel.instance.indexes[i].indexGoldMine == objectParameters.index) {
                    objectParameters.getGoldMineInterface().openMessage()
                    check = true
                }
            }
            if (!check) {
                objectParameters.getGoldMineInterface().openMessage();
                AutocombineModel.instance.indexes.push(new Autocombine(objectParameters.level, objectParameters.index, 60))
            }
            AutocombineModel.instance.quantityProfit = 0;
            for (let i = 0; i < AutocombineModel.instance.indexes.length; i++) {
                AutocombineModel.instance.quantityProfit += ConfigPresenter.getProdictionInTimeGoldMineByLevel(AutocombineModel.instance.indexes[i].levelGoldMine)
            }
        }
        else {
            for (let i = 0; i < AutocombineModel.instance.indexes.length; i++) {
                if (AutocombineModel.instance.indexes[i].indexGoldMine == objectParameters.index) {
                    objectParameters.getGoldMineInterface().openMessage()
                    return
                }
            }
            objectParameters.getGoldMineInterface().closeMessage();
        }
    }

    public static initQuantityWorkGoldMine() {
        AutocombineModel.instance.quantityWorkGoldMine = 0
        for (let i = 0; i < HomeMapPresenter.getMapSize(); i++) {
            if (HomeMapPresenter.getObjectParameter(i) == null) continue
            if (HomeMapPresenter.getObjectParameter(i).index != i) continue
            if (HomeMapPresenter.getObjectParameter(i).type != TypesObjects.GOLD_MINE) continue
            AutocombineModel.instance.quantityWorkGoldMine += 1
        }
    }

    public static clearAllProfit() {
        AutocombineModel.instance.allProfit = 0
    }

    public static getAllProfit(): number {
        return AutocombineModel.instance.allProfit
    }

    public static getQuantityWorkGoldMine(): number {
        return AutocombineModel.instance.quantityWorkGoldMine
    }

    public static getQuantityProfit(): number {
        return AutocombineModel.instance.quantityProfit
    }

    public static getQuantityCollect(): number {
        return AutocombineModel.instance.quantityCollect
    }

    public static getIsActiveAutocombine(): boolean {
        return AutocombineModel.instance.isActiveAutocombine
    }
}