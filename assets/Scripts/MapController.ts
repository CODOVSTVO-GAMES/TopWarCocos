import { _decorator, Node, Vec3, Color } from 'cc';
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

    static upgradeLevel(index: number) {
        MapStorage.instance.arrayObjectParameters[index].level += 1;
        MapStorage.instance.arrayObjectParameters[index].updateSprite();
    }

    static TEST() {
        for (let i = 0; i < MapStorage.instance.mapSize; i++) {
            if (MapStorage.instance.arrayObjectParameters[i] != null) {
                MapStorage.instance.arrayObjectParameters[i].spriteObject.color = new Color(255, 255, 255, 140);
                MapStorage.instance.arrayObjectParameters[i].backgraundObject.color = new Color(255, 255, 255, 140);
            }
        }
    }

    static ALO() {
        for (let i = 0; i < MapStorage.instance.mapSize; i++) {
            if (MapStorage.instance.arrayObjectParameters[i] != null) {
                MapStorage.instance.arrayObjectParameters[i].spriteObject.color = new Color(255, 255, 255, 255);
                MapStorage.instance.arrayObjectParameters[i].backgraundObject.color = new Color(255, 255, 255, 255);
            }
        }
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
                // if (MapController.getObjectParameter(j) == null) {
                    minDistance = currentDistance;
                    indexObject = j;
                // }
            }
        }
        MapStorage.instance.cellSelected[indexObject].active = true;
        if (type == TypesObjects.BARRACKS_OVERLAND || type == TypesObjects.GOLD_MINE) {
            MapStorage.instance.cellSelected[indexObject - 1].active = true;
            MapStorage.instance.cellSelected[indexObject - 6].active = true;
            MapStorage.instance.cellSelected[indexObject - 7].active = true;
        }
        else if (type == TypesObjects.TOWN_HALL) {
            MapStorage.instance.cellSelected[indexObject - 1].active = true;
            MapStorage.instance.cellSelected[indexObject - 2].active = true;
            MapStorage.instance.cellSelected[indexObject - 6].active = true;
            MapStorage.instance.cellSelected[indexObject - 7].active = true;
            MapStorage.instance.cellSelected[indexObject - 8].active = true;
            MapStorage.instance.cellSelected[indexObject - 12].active = true;
            MapStorage.instance.cellSelected[indexObject - 13].active = true;
            MapStorage.instance.cellSelected[indexObject - 14].active = true;
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
}

