import { _decorator, Vec3 } from 'cc';
import { MapStorage } from '../Storage/MapStorage';
import { MapController } from './MapController';
import { Cell } from './Cell';

export class HighlightHomeMap {

    static initCellFree() {
        for (let i = 0; i < MapStorage.instance.mapSize; i++) {
            MapStorage.instance.cellFree[i] = MapStorage.instance.coords[i].getComponent(Cell).cellFree;
        }
        this.closeCellFree();
    }

    static initCellSelected() {
        for (let i = 0; i < MapStorage.instance.mapSize; i++) {
            MapStorage.instance.cellSelected[i] = MapStorage.instance.coords[i].getComponent(Cell).cellSelected;
        }
        this.closeCellSelected();
    }

    static initCellBlock() {
        for (let i = 0; i < MapStorage.instance.mapSize; i++) {
            MapStorage.instance.cellBlock[i] = MapStorage.instance.coords[i].getComponent(Cell).cellBlock;
        }
        this.closeCellBlock();
    }

    static openCellFree() {
        for (let i = 0; i < MapStorage.instance.mapSize; i++) {
            if (MapStorage.instance.arrayObjectParameters[i] == null) {
                MapStorage.instance.cellFree[i].active = true;
            }
        }
    }

    static openCellSelected(type: string, pos: Vec3) {
        let minDistance: number = 1000000;
        let indexObject: number;
        let arrayIndexs: number[] = MapController.getArrayIndexs(type);
        for (let j = 0; j < MapController.getMapSize(); j++) {
            let currentDistance = Vec3.distance(pos, MapController.getCoordPosition(j));
            if (currentDistance < minDistance) {
                minDistance = currentDistance;
                indexObject = j;
            }
        }
        for (let i = 0; i < arrayIndexs.length; i++) {
            if (MapStorage.instance.arrayObjectParameters[indexObject - arrayIndexs[i]] == null) {
                MapStorage.instance.cellSelected[indexObject - arrayIndexs[i]].active = true;
            }
            else {
                if (MapStorage.instance.arrayObjectParameters[indexObject - arrayIndexs[i]].type == type) {
                    MapStorage.instance.cellSelected[indexObject - arrayIndexs[i]].active = true;
                }
                else {
                    MapStorage.instance.cellBlock[indexObject - arrayIndexs[i]].active = true;
                }
            }
        }
    }

    static closeCellFree() {
        for (let i = 0; i < MapStorage.instance.mapSize; i++) {
            MapStorage.instance.cellFree[i].active = false;
        }
    }

    static closeCellSelected() {
        for (let i = 0; i < MapStorage.instance.mapSize; i++) {
            MapStorage.instance.cellSelected[i].active = false;
        }
    }

    static closeCellBlock() {
        for (let i = 0; i < MapStorage.instance.mapSize; i++) {
            MapStorage.instance.cellBlock[i].active = false;
        }
    }
}

