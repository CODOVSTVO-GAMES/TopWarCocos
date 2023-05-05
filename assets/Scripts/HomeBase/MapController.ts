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
                MapStorage.instance.arrayObjectParameters[i].onTransparencyObject();
            }
        }
    }

    static offTransparencyObjects() {
        for (let i = 0; i < MapStorage.instance.mapSize; i++) {
            if (MapStorage.instance.arrayObjectParameters[i] != null) {
                MapStorage.instance.arrayObjectParameters[i].offTransparencyObject();
            }
        }
    }

    static getMapSize(): number {
        return MapStorage.instance.mapSize;
    }

    static getParentObject(): Node {
        return MapStorage.instance.parentSelectObject;
    }

    static getCoord(index: number): Node {
        return MapStorage.instance.coords[index];
    }

    static getCoordPosition(index: number): Vec3 {
        return MapStorage.instance.coords[index].position;
    }

    static getCoordWorldPosition(index: number): Vec3 {
        return MapStorage.instance.coords[index].worldPosition;
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

    static closeInterface() {
        if (MapStorage.instance.selectedObject) {
            if (MapStorage.instance.selectedObject.getObjectInterface()) {
                MapStorage.instance.selectedObject.getObjectInterface().closeInterface();
            }
        }
    }
}