import { _decorator, Node, } from 'cc';
import { MapStorage } from './Storage/MapStorage';
import { ObjectParameters } from './ObjectParameters';

export class MapController {

    static setObjectParameter(objectParameters: ObjectParameters, index: number) {
        MapStorage.instance.arrayObjectParameters[index] = objectParameters;
    }

    static getMapSize(): number {
        return MapStorage.instance.mapSize;
    }

    static getParent(object: Node, index: number) {
        object.parent = MapStorage.instance.coords[index];
    }

    static getObjectParameter(index: number): ObjectParameters {
        return MapStorage.instance.arrayObjectParameters[index];
    }

    static getCoords(index: number): Node {
        return MapStorage.instance.coords[index];
    }
}

