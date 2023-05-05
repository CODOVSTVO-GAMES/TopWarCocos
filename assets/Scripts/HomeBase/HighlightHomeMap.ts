import { _decorator, Vec3 } from 'cc';
import { MapController } from './MapController';
import { MapStorage } from '../Storage/MapStorage';
import { Cell } from './Cell';

export class HighlightHomeMap {

    static initCellFree() {
        for (let i = 0; i < MapController.getMapSize(); i++) {
            MapStorage.instance.cellFree[i] = MapController.getCoord(i).getComponent(Cell).cellFree;
        }
        this.closeCellFree();
    }

    static initCellSelected() {
        for (let i = 0; i < MapController.getMapSize(); i++) {
            MapStorage.instance.cellSelected[i] = MapController.getCoord(i).getComponent(Cell).cellSelected;
        }
        this.closeCellSelected();
    }

    static initCellBlock() {
        for (let i = 0; i < MapController.getMapSize(); i++) {
            MapStorage.instance.cellBlock[i] = MapController.getCoord(i).getComponent(Cell).cellBlock;
        }
        this.closeCellBlock();
    }

    static openCellFree() {
        for (let i = 0; i < MapController.getMapSize(); i++) {
            if (MapController.getObjectParameter(i) == null) {
                MapStorage.instance.cellFree[i].active = true;
            }
        }
    }

    static openCellSelected(type: string, pos: Vec3) {
        let minDistance: number = 1000000;
        let indexObject: number;
        let arrayIndexs: number[] = MapController.getArrayIndexs(type);
        for (let j = 0; j < MapController.getMapSize(); j++) {
            let currentDistance = Vec3.distance(pos, MapController.getCoordWorldPosition(j));
            if (currentDistance < minDistance) {
                minDistance = currentDistance;
                indexObject = j;
            }
        }


        console.log(indexObject);

        
        for (let i = 0; i < arrayIndexs.length; i++) {
            if (MapController.getObjectParameter(indexObject - arrayIndexs[i]) == null) {
                MapStorage.instance.cellSelected[indexObject - arrayIndexs[i]].active = true;
            }
            else {
                if (MapController.getObjectParameter(indexObject - arrayIndexs[i]).type == type) {
                    MapStorage.instance.cellSelected[indexObject - arrayIndexs[i]].active = true;
                }
                else {
                    MapStorage.instance.cellBlock[indexObject - arrayIndexs[i]].active = true;
                }
            }
        }
    }

    static closeCellFree() {
        for (let i = 0; i < MapController.getMapSize(); i++) {
            MapStorage.instance.cellFree[i].active = false;
        }
    }

    static closeCellSelected() {
        for (let i = 0; i < MapController.getMapSize(); i++) {
            MapStorage.instance.cellSelected[i].active = false;
        }
    }

    static closeCellBlock() {
        for (let i = 0; i < MapController.getMapSize(); i++) {
            MapStorage.instance.cellBlock[i].active = false;
        }
    }
}

