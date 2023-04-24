import { _decorator, Node, Vec3, } from 'cc';
import { MapStorage } from './Storage/MapStorage';
import { ObjectParameters } from './ObjectParameters';

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
}

