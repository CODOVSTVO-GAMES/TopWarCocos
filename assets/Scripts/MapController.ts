import { _decorator, Node, Vec3, } from 'cc';
import { MapStorage } from './Storage/MapStorage';
import { ObjectParameters } from './ObjectParameters';
import { Cell } from './Cell';
import { TypesObjects } from './Static/TypesObjects';
import { BlockObject } from './BlockObject';

export class MapController {

    static setParent(object: Node, index: number) {
        object.parent = MapStorage.instance.coords[index];
    }

    static setObjectParameter(objectParameters: ObjectParameters, index: number) {
        MapStorage.instance.arrayObjectParameters[index] = objectParameters;
    }

    static setBlockObject(blockObject: BlockObject, index: number) {
        MapStorage.instance.arrayBlockObject[index] = blockObject;
    }

    static getMapSize(): number {
        return MapStorage.instance.mapSize;
    }

    static getParentObject(): Node {
        return MapStorage.instance.parentObject;
    }

    static getCoord(index: number): Node {
        return MapStorage.instance.coords[index];
    }

    static getCoordPosition(index: number): Vec3 {
        return MapStorage.instance.coords[index].position;
    }

    static getObjectParameter(index: number): ObjectParameters {
        return MapStorage.instance.arrayObjectParameters[index];
    }

    static getBlockObject(index: number): BlockObject {
        return MapStorage.instance.arrayBlockObject[index];
    }

    static openCellFree() {
        for (let i = 0; i < MapStorage.instance.mapSize; i++) {
            if (this.getObjectParameter(i) == null && this.getBlockObject(i) == null) {
                MapStorage.instance.cellFree[i].active = true;
            }
        }
    }

    static openCellSelected(type: string, pos: Vec3) {
        let minDistance = 1000000;
        let indexObject = 0;
        for (let j = 0; j < MapController.getMapSize(); j++) {
            let currentDistance = Vec3.distance(pos, MapController.getCoordPosition(j));
            if (currentDistance < minDistance) {
                if (MapController.getObjectParameter(j) == null) {
                    minDistance = currentDistance;
                    indexObject = j;
                }
            }
        }
        if (type == TypesObjects.BARRACKS_OVERLAND || type == TypesObjects.GOLD_MINE) {
            if (MapStorage.instance.arrayBlockObject[indexObject] == null) {
                MapStorage.instance.cellSelected[indexObject].active = true;
            }
            else {
                MapStorage.instance.cellBlock[indexObject].active = true;
            }

            if (MapStorage.instance.arrayBlockObject[indexObject - 1] == null) {
                MapStorage.instance.cellSelected[indexObject - 1].active = true;
            }
            else {
                MapStorage.instance.cellBlock[indexObject - 1].active = true;
            }

            if (MapStorage.instance.arrayBlockObject[indexObject - 5] == null) {
                MapStorage.instance.cellSelected[indexObject - 5].active = true;
            }
            else {
                MapStorage.instance.cellBlock[indexObject - 5].active = true;
            }

            if (MapStorage.instance.arrayBlockObject[indexObject - 6] == null) {
                MapStorage.instance.cellSelected[indexObject - 6].active = true;
            }
            else {
                MapStorage.instance.cellBlock[indexObject - 6].active = true;
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

    static initCellFree() {
        for (let i = 0; i < MapStorage.instance.mapSize; i++) {
            MapStorage.instance.cellFree[i] = this.getCoord(i).getComponent(Cell).cellFree;
        }
        this.closeCellFree();
    }

    static initCellSelected() {
        for (let i = 0; i < MapStorage.instance.mapSize; i++) {
            MapStorage.instance.cellSelected[i] = this.getCoord(i).getComponent(Cell).cellSelected;
        }
        this.closeCellSelected();
    }

    static initCellBlock() {
        for (let i = 0; i < MapStorage.instance.mapSize; i++) {
            MapStorage.instance.cellBlock[i] = this.getCoord(i).getComponent(Cell).cellBlock;
        }
        this.closeCellBlock();
    }

    static alo(index: number) {
        MapStorage.instance.arrayBlockObject[index - 1].destroy();
        MapStorage.instance.arrayBlockObject[index - 5].destroy();
        MapStorage.instance.arrayBlockObject[index - 6].destroy();
        MapStorage.instance.arrayBlockObject[index - 1] = null;
        MapStorage.instance.arrayBlockObject[index - 5] = null;
        MapStorage.instance.arrayBlockObject[index - 6] = null;
    }
}

