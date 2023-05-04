import { _decorator } from 'cc';
import { MapStorage } from '../Storage/MapStorage';
import { Cell } from './Cell';

export class HighlightBaseMap {

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

