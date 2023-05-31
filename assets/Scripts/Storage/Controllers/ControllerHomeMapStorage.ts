import { _decorator, Node, Vec3 } from 'cc';
import { HomeMapStorage } from '../HomeMapStorage';
import { ObjectParameters } from '../../ObjectParameters';
import { TypesObjects } from '../../Static/TypesObjects';
import { IndexesObject } from '../../Static/IndexesObject';
import { ControllerBufferStorage } from './ControllerBufferStorage';
import { TypesStorages } from '../../Static/TypesStorages';
import { SpawnObjects } from '../../SpawnObjects';

export class ControllerHomeMapStorage {

    static assignStartingValues() {
        setTimeout(() => {
            SpawnObjects.spawnObjectsPos(TypesObjects.BANK, 1, 717);
            SpawnObjects.spawnObjectsPos(TypesObjects.AUTOCOMBINE, 1, 719);
            SpawnObjects.spawnObjectsPos(TypesObjects.RADAR, 1, 721);
            SpawnObjects.spawnObjectsPos(TypesObjects.REPAIR_SHOP, 1, 723);
            SpawnObjects.spawnObjectsPos(TypesObjects.COMMAND_POST, 1, 920);

            SpawnObjects.spawnObjectsPos(TypesObjects.WALL, 1, 1118);
            SpawnObjects.spawnObjectsPos(TypesObjects.WALL, 1, 1120);
            SpawnObjects.spawnObjectsPos(TypesObjects.WALL, 1, 1218);
            SpawnObjects.spawnObjectsPos(TypesObjects.WALL, 1, 1220);
        }, 2000);
    }

    static assigningSaveValues(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj[i]));
            let objParam = new ObjectParameters;
            objParam.type = json.type;
            objParam.level = json.level;
            objParam.index = json.index;
            this.setObjectParameter(objParam, objParam.type, objParam.index);
        }
    }

    static setParent(object: Node, index: number) {
        object.parent = HomeMapStorage.instance.coords[index];
    }

    static setObjectParameter(objectParameters: ObjectParameters, type: string, index: number) {
        let arrayIndexes: number[] = this.getArrayObject(type);
        for (let i = 0; i < arrayIndexes.length; i++) {
            HomeMapStorage.instance.arrayObjectParameters[index - arrayIndexes[i]] = objectParameters;
        }
        this.updateHomeMapStorage();
    }

    static setSelectObject(objectParameters: ObjectParameters) {
        HomeMapStorage.instance.selectedObject = objectParameters;
    }

    static getSelectObject(): ObjectParameters {
        return HomeMapStorage.instance.selectedObject;
    }

    static upgradeLevel(index: number) {
        HomeMapStorage.instance.arrayObjectParameters[index].level += 1;
        HomeMapStorage.instance.arrayObjectParameters[index].updateSprite();
        this.updateHomeMapStorage();
    }

    static onTransparencyObjects() {
        for (let i = 0; i < HomeMapStorage.instance.mapSize; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] == null) continue;
            HomeMapStorage.instance.arrayObjectParameters[i].onTransparencyObject();
        }
    }

    static offTransparencyObjects() {
        for (let i = 0; i < HomeMapStorage.instance.mapSize; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] == null) continue;
            HomeMapStorage.instance.arrayObjectParameters[i].offTransparencyObject();
        }
    }

    static getMapSize(): number {
        return HomeMapStorage.instance.mapSize;
    }

    static getParentObject(): Node {
        return HomeMapStorage.instance.parentSelectObject;
    }

    static getCoord(index: number): Node {
        return HomeMapStorage.instance.coords[index];
    }

    static getCoordPosition(index: number): Vec3 {
        return HomeMapStorage.instance.coords[index].position;
    }

    static getCoordWorldPosition(index: number): Vec3 {
        return HomeMapStorage.instance.coords[index].getWorldPosition();
    }

    static getObjectParameter(index: number): ObjectParameters {
        return HomeMapStorage.instance.arrayObjectParameters[index];
    }

    static getFreeCell(): number {
        let quantity: number;
        for (let i = 0; i < HomeMapStorage.instance.mapSize; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] != null) {
                quantity += 1;
            }
        }
        return quantity;
    }

    static getArrayObject(type: string): number[] {
        if (type == TypesObjects.TROOP_OVERLAND) return IndexesObject.object1x1;
        else if (type == TypesObjects.BULLETIN_BOARD) return IndexesObject.object1x2;
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
        ) return IndexesObject.object2x2;
        else if (type == TypesObjects.TROOP_MARINE) return IndexesObject.object3x2;
        else if (type == TypesObjects.COMMAND_POST) return IndexesObject.object3x3;
    }

    static getArratRegionObject(type: string): number[] {
        if (type == TypesObjects.TROOP_OVERLAND) return IndexesObject.regionObject1x1;
        else if (type == TypesObjects.BULLETIN_BOARD) return IndexesObject.regionObject1x2;
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
        ) return IndexesObject.regionObject2x2;
        else if (type == TypesObjects.TROOP_MARINE) return IndexesObject.regionObject3x2;
        else if (type == TypesObjects.COMMAND_POST) return IndexesObject.regionObject3x3;
    }

    static getQuantityObjectsByType(type: string): number {
        let quantity = 0;
        for (let i = 0; i < HomeMapStorage.instance.mapSize; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] == null) continue;
            if (HomeMapStorage.instance.arrayObjectParameters[i].index != i) continue;
            if (HomeMapStorage.instance.arrayObjectParameters[i].type != type) continue;
            quantity += 1;
        }
        return quantity;
    }

    static getQuantityObjectsByTypeAndLevel(type: string, level: number): number {
        let quantity = 0;
        for (let i = 0; i < HomeMapStorage.instance.mapSize; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] == null) continue;
            if (HomeMapStorage.instance.arrayObjectParameters[i].index != i) continue;
            if (HomeMapStorage.instance.arrayObjectParameters[i].type != type) continue;
            if (HomeMapStorage.instance.arrayObjectParameters[i].level == level) continue;
            quantity += 1;
        }
        return quantity;
    }

    static closeInterface() {
        if (HomeMapStorage.instance.selectedObject) {
            if (HomeMapStorage.instance.selectedObject.getObjectInterface()) {
                HomeMapStorage.instance.selectedObject.getObjectInterface().closeInterface();
            }
        }
    }

    static updateHomeMapStorage() {
        let obj: Object[] = [];
        for (let i = 0; i < HomeMapStorage.instance.arrayObjectParameters.length; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] == null) continue;
            if (HomeMapStorage.instance.arrayObjectParameters[i].index != i) continue;
            obj.push({
                type: HomeMapStorage.instance.arrayObjectParameters[i].type,
                level: HomeMapStorage.instance.arrayObjectParameters[i].level,
                index: HomeMapStorage.instance.arrayObjectParameters[i].index
            });
        }
        ControllerBufferStorage.addItem(TypesStorages.HOME_MAP_STORAGE, obj);
    }
}