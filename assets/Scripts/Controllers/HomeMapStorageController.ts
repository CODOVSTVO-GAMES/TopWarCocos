import { _decorator, Node, Sprite, Vec3 } from 'cc';
import { HomeMapStorage } from '../Storage/HomeMapStorage';
import { ObjectParameters } from '../ObjectParameters';
import { TypesObjects } from '../Static/TypesObjects';
import { IndexesObject } from '../Static/IndexesObject';
import { BufferStorageController } from './BufferStorageController';
import { TypesStorages } from '../Static/TypesStorages';
import { SpawnObjectsOnHomeMap } from '../Logic/SpawnObjectsOnHomeMap';
import { TypesLocation } from '../Static/TypesLocation';

export class HomeMapStorageController {

    static assignStartingValues() {
        setTimeout(() => {
            SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapPos(TypesObjects.BANK, TypesLocation.EARTH, 1, 717);
            SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapPos(TypesObjects.AUTOCOMBINE, TypesLocation.EARTH, 1, 719);
            SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapPos(TypesObjects.RADAR, TypesLocation.EARTH, 1, 721);
            SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapPos(TypesObjects.REPAIR_SHOP, TypesLocation.EARTH, 1, 723);
            SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapPos(TypesObjects.COMMAND_POST, TypesLocation.EARTH, 1, 920);

            SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapPos(TypesObjects.WALL, TypesLocation.EARTH, 1, 1118);
            SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapPos(TypesObjects.WALL, TypesLocation.EARTH, 1, 1120);
            SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapPos(TypesObjects.WALL, TypesLocation.EARTH, 1, 1218);
            SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapPos(TypesObjects.WALL, TypesLocation.EARTH, 1, 1220);
        }, 2000);
    }

    static assigningSaveValuesServer(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj[i]));
            let objParam = new ObjectParameters;
            objParam.type = json.type;
            objParam.level = json.level;
            objParam.index = json.index;
            this.setObjectParameter(objParam, objParam.type, objParam.index);
        }
    }

    static assigningSaveValuesLocal(obj: Object[]) {
        for (let i = 0; i < HomeMapStorage.instance.temporaryLocalStorage.length; i++) {
            this.setObjectParameter(HomeMapStorage.instance.temporaryLocalStorage[i], HomeMapStorage.instance.temporaryLocalStorage[i].type, HomeMapStorage.instance.temporaryLocalStorage[i].index);
        }
        HomeMapStorage.instance.temporaryLocalStorage = new Array<ObjectParameters>;
    }

    static setParent(object: Node, index: number) {
        object.parent = HomeMapStorage.instance.coords[index];
    }

    static setObjectParameter(objectParameters: ObjectParameters, type: string, index: number) {
        let arrayIndexes: number[] = this.getArrayObject(type);
        for (let i = 0; i < arrayIndexes.length; i++) {
            HomeMapStorage.instance.arrayObjectParameters[index - arrayIndexes[i]] = objectParameters;
        }
        this.saveStorageServer();
    }

    static setCoord(coord: Node, index: number, pos: Vec3) {
        HomeMapStorage.instance.coords[index] = coord;
        HomeMapStorage.instance.coords[index].position = pos;
    }

    static setSpriteCoord(spriteCoord: Sprite, index: number) {
        HomeMapStorage.instance.spriteCoords[index] = spriteCoord;
    }

    static setSelectObject(objectParameters: ObjectParameters) {
        HomeMapStorage.instance.selectedObject = objectParameters;
    }

    static getSelectObject(): ObjectParameters {
        return HomeMapStorage.instance.selectedObject;
    }

    static putSelectObject() {
        if (HomeMapStorage.instance.selectedObject) {
            if (HomeMapStorage.instance.selectedObject.getArrowGameObject()) {
                HomeMapStorage.instance.selectedObject.getArrowGameObject().deactiveArrow();
            }
            if (HomeMapStorage.instance.selectedObject.getObjectInterface()) {
                HomeMapStorage.instance.selectedObject.getObjectInterface().closeInterface();
            }
            if (HomeMapStorage.instance.selectedObject.getBarracksLogic()) {
                HomeMapStorage.instance.selectedObject.getBarracksLogic().closeMessage();
            }
            HomeMapStorage.instance.selectedObject.nodeObject.setParent(HomeMapStorage.instance.coords[HomeMapStorage.instance.selectedObject.index]);
            HomeMapStorage.instance.selectedObject.nodeObject.position = Vec3.ZERO;
            HomeMapStorage.instance.selectedObject = null;
        }
    }

    static upgradeLevelObject(index: number) {
        HomeMapStorage.instance.arrayObjectParameters[index].level += 1;
        HomeMapStorage.instance.arrayObjectParameters[index].updateSprite();
        this.saveStorageServer();
    }

    static onTransparencyObjects(type: string, level: number) {
        for (let i = 0; i < HomeMapStorage.instance.mapSize; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] == null) continue;
            if (HomeMapStorage.instance.arrayObjectParameters[i].type == type && HomeMapStorage.instance.arrayObjectParameters[i].level == level) continue;
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

    static getQuantityCoordFree(): number {
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
            if (HomeMapStorage.instance.arrayObjectParameters[i].level != level) continue;
            quantity += 1;
        }
        return quantity;
    }

    static getObjectParametersByType(type: string): ObjectParameters {
        for (let i = 0; i < HomeMapStorage.instance.mapSize; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] == null) continue;
            if (HomeMapStorage.instance.arrayObjectParameters[i].index != i) continue;
            if (HomeMapStorage.instance.arrayObjectParameters[i].type != type) continue;
            return HomeMapStorage.instance.arrayObjectParameters[i];
        }
    }

    static getObjectParametersByTypeAndLevel(type: string, level: number): ObjectParameters {
        for (let i = 0; i < HomeMapStorage.instance.mapSize; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] == null) continue;
            if (HomeMapStorage.instance.arrayObjectParameters[i].index != i) continue;
            if (HomeMapStorage.instance.arrayObjectParameters[i].type != type) continue;
            if (HomeMapStorage.instance.arrayObjectParameters[i].level != level) continue;
            return HomeMapStorage.instance.arrayObjectParameters[i];
        }
    }

    static saveStorageServer() {
        let obj: Object[] = [];
        for (let i = 0; i < HomeMapStorage.instance.mapSize; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] == null) continue;
            if (HomeMapStorage.instance.arrayObjectParameters[i].index != i) continue;
            obj.push({
                type: HomeMapStorage.instance.arrayObjectParameters[i].type,
                level: HomeMapStorage.instance.arrayObjectParameters[i].level,
                index: HomeMapStorage.instance.arrayObjectParameters[i].index
            });
        }
        BufferStorageController.addItem(TypesStorages.HOME_MAP_STORAGE, obj);
    }

    static saveStorageLocal() {
        for (let i = 0; i < HomeMapStorage.instance.mapSize; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] == null) continue;
            if (HomeMapStorage.instance.arrayObjectParameters[i].index != i) continue;
            let objParam: ObjectParameters = new ObjectParameters;
            objParam.type = HomeMapStorage.instance.arrayObjectParameters[i].type;
            objParam.level = HomeMapStorage.instance.arrayObjectParameters[i].level;
            objParam.index = HomeMapStorage.instance.arrayObjectParameters[i].index;
            HomeMapStorage.instance.temporaryLocalStorage.push(objParam);
        }
    }
}