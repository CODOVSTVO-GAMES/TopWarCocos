import { _decorator, Vec3 } from 'cc';
import { HomeMapStorage } from '../Storage/HomeMapStorage';
import { Cell } from './Cell';
import { ControllerHomeMapStorage } from '../Storage/Controllers/ControllerHomeMapStorage';

export class HighlightHomeMap {

    static initCellFree() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            HomeMapStorage.instance.cellBackgraund[i] = ControllerHomeMapStorage.getCoord(i).getComponent(Cell).cellBackground;
        }
        this.closeCellFree();
    }

    static openCellFree() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            if (ControllerHomeMapStorage.getObjectParameter(i) == null) {
                HomeMapStorage.instance.cellBackgraund[i].active = true;
            }
        }
    }

    static openCellSelected(type: string, pos: Vec3) {
        let minDistance: number = 1000000;
        let indexObject: number;
        let arrayIndexs: number[] = ControllerHomeMapStorage.getArrayIndexs(type);
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            let currentDistance = Vec3.distance(ControllerHomeMapStorage.getCoordWorldPosition(i), pos);
            if (currentDistance < minDistance) {
                minDistance = currentDistance;
                indexObject = i;
            }
        }
        for (let i = 0; i < arrayIndexs.length; i++) {
            try {
                let tempIndex = indexObject - arrayIndexs[i]
                if (ControllerHomeMapStorage.getObjectParameter(tempIndex) == null) {
                    // HomeMapStorage.instance.cellHint[tempIndex].active = false;
                    // HomeMapStorage.instance.cellSelected[tempIndex].active = true;
                }
                else {
                    if (ControllerHomeMapStorage.getObjectParameter(tempIndex).type == type) {
                        // HomeMapStorage.instance.cellHint[tempIndex].active = false;
                        // HomeMapStorage.instance.cellSelected[tempIndex].active = true;
                    }
                    else {
                        // HomeMapStorage.instance.cellBlock[tempIndex].active = true;
                    }
                }
            }
            catch
            {
                console.log("error");
            }
        }
    }

    static openCellHint(type: string, level: number) {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            if (ControllerHomeMapStorage.getObjectParameter(i)) {
                if (ControllerHomeMapStorage.getObjectParameter(i).type == type) {
                    if (ControllerHomeMapStorage.getObjectParameter(i).level == level) {
                        HomeMapStorage.instance.cellBackgraund[i].active = false;
                        // HomeMapStorage.instance.cellHint[i].active = true;
                    }
                }
            }
        }
    }

    static closeCellFree() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            HomeMapStorage.instance.cellBackgraund[i].active = false;
        }
    }

    static closeCellSelected() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            // HomeMapStorage.instance.cellSelected[i].active = false;
        }
    }

    static closeCellBlock() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            // HomeMapStorage.instance.cellBlock[i].active = false;
        }
    }

    static closeCellHint() {
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            // HomeMapStorage.instance.cellHint[i].active = false;
        }
    }
}

