import { _decorator, Node, Vec3, } from 'cc';
import { MapStorage } from './Storage/MapStorage';
import { ObjectParameters } from './ObjectParameters';
import { Cell } from './Cell';
import { TypesObjects } from './Static/TypesObjects';

export class MapController {

    static setParent(object: Node, index: number) {
        object.parent = MapStorage.instance.coords[index];
    }

    static setObjectParameter(objectParameters: ObjectParameters, index: number) {
        MapStorage.instance.arrayObjectParameters[index] = objectParameters;
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

    static openCellFree() {
        for (let i = 0; i < MapStorage.instance.mapSize; i++) {
            if (this.getObjectParameter(i) == null) {
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
            MapStorage.instance.cellSelected[indexObject].active = true;
            MapStorage.instance.cellSelected[indexObject - 1].active = true;
            MapStorage.instance.cellSelected[indexObject - 5].active = true;
            MapStorage.instance.cellSelected[indexObject - 6].active = true;
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
}

