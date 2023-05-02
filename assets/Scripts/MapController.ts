import { _decorator, Node, Vec3, Color } from 'cc';
import { MapStorage } from './Storage/MapStorage';
import { ObjectParameters } from './ObjectParameters';
import { TypesObjects } from './Static/TypesObjects';
import { Cell } from './Cell';

export class MapController {

    static setParent(object: Node, index: number) {
        object.parent = MapStorage.instance.coords[index];
    }

    static setObjectParameter(objectParameters: ObjectParameters, type: string, index: number) {

        if (type == TypesObjects.TROOP_AIR || type == TypesObjects.TROOP_MARINE || type == TypesObjects.TROOP_OVERLAND) {
            MapStorage.instance.arrayObjectParameters[index] = objectParameters;
        }
        else if (type == TypesObjects.BARRACKS_AIR || type == TypesObjects.BARRACKS_MARINE || type == TypesObjects.BARRACKS_OVERLAND || type == TypesObjects.GOLD_MINE) {
            MapStorage.instance.arrayObjectParameters[index] = objectParameters;
            MapStorage.instance.arrayObjectParameters[index - 1] = objectParameters;
            MapStorage.instance.arrayObjectParameters[index - 6] = objectParameters;
            MapStorage.instance.arrayObjectParameters[index - 7] = objectParameters;
        }
        else if (type == TypesObjects.TOWN_HALL) {
            MapStorage.instance.arrayObjectParameters[index] = objectParameters;
            MapStorage.instance.arrayObjectParameters[index - 1] = objectParameters;
            MapStorage.instance.arrayObjectParameters[index - 2] = objectParameters;
            MapStorage.instance.arrayObjectParameters[index - 6] = objectParameters;
            MapStorage.instance.arrayObjectParameters[index - 7] = objectParameters;
            MapStorage.instance.arrayObjectParameters[index - 8] = objectParameters;
            MapStorage.instance.arrayObjectParameters[index - 12] = objectParameters;
            MapStorage.instance.arrayObjectParameters[index - 13] = objectParameters;
            MapStorage.instance.arrayObjectParameters[index - 14] = objectParameters;
        }
    }

    static upgradeLevel(index: number) {
        MapStorage.instance.arrayObjectParameters[index].level += 1;
        MapStorage.instance.arrayObjectParameters[index].updateSprite();
    }

    static onTransparencyObjects() {
        for (let i = 0; i < MapStorage.instance.mapSize; i++) {
            if (MapStorage.instance.arrayObjectParameters[i] != null) {
                MapStorage.instance.arrayObjectParameters[i].spriteObject.color = new Color(255, 255, 255, 140);
                MapStorage.instance.arrayObjectParameters[i].backgraundObject.color = new Color(255, 255, 255, 140);
            }
        }
    }

    static offTransparencyObjects() {
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

    static getFreeCell(): number {
        let count: number;
        for (let i = 0; i < MapStorage.instance.mapSize; i++) {
            if (MapStorage.instance.arrayObjectParameters[i] != null) {
                count += 1;
            }
        }
        return count;
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
        let indexObject: number;
        for (let j = 0; j < MapController.getMapSize(); j++) {
            let currentDistance = Vec3.distance(pos, this.getCoordPosition(j));
            if (currentDistance < minDistance) {
                minDistance = currentDistance;
                indexObject = j;
            }
        }
        let numberIterations: number;
        let indexArray: number;
        if (type == TypesObjects.TROOP_AIR || type == TypesObjects.TROOP_MARINE || type == TypesObjects.TROOP_OVERLAND) {
            numberIterations = 1;
            indexArray = 0;
        }
        else if (type == TypesObjects.BARRACKS_AIR || type == TypesObjects.BARRACKS_MARINE || type == TypesObjects.BARRACKS_OVERLAND || type == TypesObjects.GOLD_MINE) {
            numberIterations = 4;
            indexArray = 1;
        }
        else if (type == TypesObjects.TOWN_HALL) {
            numberIterations = 9;
            indexArray = 2;
        }
        let arrayIndexShift = [[0], [0, 1, 6, 7], [0, 1, 2, 6, 7, 8, 12, 13, 14]];
        for (let i = 0; i < numberIterations; i++) {
            if (MapStorage.instance.arrayObjectParameters[indexObject - arrayIndexShift[indexArray][i]] == null) {
                MapStorage.instance.cellSelected[indexObject - arrayIndexShift[indexArray][i]].active = true;
            }
            else {
                if (MapStorage.instance.arrayObjectParameters[indexObject - arrayIndexShift[indexArray][i]].type == type) {
                    MapStorage.instance.cellSelected[indexObject - arrayIndexShift[indexArray][i]].active = true;
                }
                else {
                    MapStorage.instance.cellBlock[indexObject - arrayIndexShift[indexArray][i]].active = true;
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