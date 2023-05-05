import { _decorator, Vec3 } from 'cc';
import { HomeMapStorage } from '../Storage/HomeMapStorage';
import { Cell } from './Cell';
import { ControllerHomeMapStorage } from '../Storage/Controllers/ControllerHomeMapStorage';

export class HighlightHomeMap {

    static initCellFree() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            HomeMapStorage.instance.cellFree[i] = ControllerHomeMapStorage.getCoord(i).getComponent(Cell).cellFree;
        }
        this.closeCellFree();
    }

    static initCellSelected() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            HomeMapStorage.instance.cellSelected[i] = ControllerHomeMapStorage.getCoord(i).getComponent(Cell).cellSelected;
        }
        this.closeCellSelected();
    }

    static initCellBlock() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            HomeMapStorage.instance.cellBlock[i] = ControllerHomeMapStorage.getCoord(i).getComponent(Cell).cellBlock;
        }
        this.closeCellBlock();
    }

    static openCellFree() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            if (ControllerHomeMapStorage.getObjectParameter(i) == null) {
                HomeMapStorage.instance.cellFree[i].active = true;
            }
        }
    }

    static openCellSelected(type: string, pos: Vec3) {
        let minDistance: number = 1000000;
        let indexObject: number;
        let arrayIndexs: number[] = ControllerHomeMapStorage.getArrayIndexs(type);
        for (let j = 0; j < ControllerHomeMapStorage.getMapSize(); j++) {
            let currentDistance = Vec3.distance(ControllerHomeMapStorage.getCoordWorldPosition(j), pos);
            if (currentDistance < minDistance) {
                minDistance = currentDistance;
                indexObject = j;
            }
        }
        for (let i = 0; i < arrayIndexs.length; i++) {
            if (ControllerHomeMapStorage.getObjectParameter(indexObject - arrayIndexs[i]) == null) {
                HomeMapStorage.instance.cellSelected[indexObject - arrayIndexs[i]].active = true;
            }
            else {
                if (ControllerHomeMapStorage.getObjectParameter(indexObject - arrayIndexs[i]).type == type) {
                    HomeMapStorage.instance.cellSelected[indexObject - arrayIndexs[i]].active = true;
                }
                else {
                    HomeMapStorage.instance.cellBlock[indexObject - arrayIndexs[i]].active = true;
                }
            }
        }
    }

    static closeCellFree() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            HomeMapStorage.instance.cellFree[i].active = false;
        }
    }

    static closeCellSelected() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            HomeMapStorage.instance.cellSelected[i].active = false;
        }
    }

    static closeCellBlock() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            HomeMapStorage.instance.cellBlock[i].active = false;
        }
    }
}

