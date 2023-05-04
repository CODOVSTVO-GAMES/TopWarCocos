import { _decorator, Node, Vec3, Color } from 'cc';
import { MapStorage } from '../Storage/MapStorage';
import { ObjectParameters } from '../ObjectParameters';
import { TypesObjects } from '../Static/TypesObjects';
import { IndexsObject } from '../Static/IndexsObject';

export class MapController {

    static setParent(object: Node, index: number) {
        object.parent = MapStorage.instance.coords[index];
    }

    static setObjectParameter(objectParameters: ObjectParameters, type: string, index: number) {
        let arrayIndexs: number[] = this.getArrayIndexs(type);
        for (let i = 0; i < arrayIndexs.length; i++) {
            MapStorage.instance.arrayObjectParameters[index - arrayIndexs[i]] = objectParameters;
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

    static getArrayIndexs(type: string): number[] {
        if (type == TypesObjects.TROOP_OVERLAND) {
            return IndexsObject.object1x1;
        }
        else if (
            type == TypesObjects.TROOP_AIR ||
            type == TypesObjects.BARRACKS_AIR ||
            type == TypesObjects.BARRACKS_MARINE ||
            type == TypesObjects.BARRACKS_OVERLAND ||
            type == TypesObjects.GOLD_MINE ||
            type == TypesObjects.BANK ||
            type == TypesObjects.AUTOCOMBINE ||
            type == TypesObjects.RADAR ||
            type == TypesObjects.TREASURES ||
            type == TypesObjects.MANIPULATOR ||
            type == TypesObjects.REPAIR_SHOP ||
            type == TypesObjects.LOBBY_WARS ||
            type == TypesObjects.WALL ||
            type == TypesObjects.BATTLE
        ) {
            return IndexsObject.object2x2;
        }
        else if (type == TypesObjects.TROOP_MARINE) {
            return IndexsObject.object3x2;
        }
        else if (type == TypesObjects.TOWN_HALL) {
            return IndexsObject.object3x3;
        }
    }

    static openCellFree() {
        for (let i = 0; i < MapStorage.instance.mapSize; i++) {
            if (this.getObjectParameter(i) == null) {
                MapStorage.instance.cellFree[i].active = true;
            }
        }
    }

    static openCellSelected(type: string, pos: Vec3) {
        let minDistance: number = 1000000;
        let indexObject: number;
        let arrayIndexs: number[] = this.getArrayIndexs(type);
        for (let j = 0; j < MapController.getMapSize(); j++) {
            let currentDistance = Vec3.distance(pos, this.getCoordPosition(j));
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
}