import { _decorator, Node, Sprite, Vec3 } from 'cc';
import { HomeMapStorage } from '../../Storage/HomeMapStorage';
import { ObjectParameters } from '../../ObjectParameters';
import { TypesObjects } from '../../Static/TypesObjects';
import { IndexesObject } from '../../Static/IndexesObject';
import { BufferStorageController } from './BufferStorageController';
import { TypesStorages } from '../../Static/TypesStorages';

export class HomeMapStorageController {

    public static assignStartingValues() {
        HomeMapStorage.instance.numberOpenZones = 0

        let wall_1 = new ObjectParameters
        wall_1.type = TypesObjects.WALL
        wall_1.level = 1
        wall_1.index = 1381
        this.setObjectParameter(wall_1, wall_1.type, wall_1.index)

        let wall_2 = new ObjectParameters
        wall_2.type = TypesObjects.WALL
        wall_2.level = 1
        wall_2.index = 1383
        this.setObjectParameter(wall_2, wall_2.type, wall_2.index)

        let wall_3 = new ObjectParameters
        wall_3.type = TypesObjects.WALL
        wall_3.level = 1
        wall_3.index = 1283
        this.setObjectParameter(wall_3, wall_3.type, wall_3.index)

        let wall_4 = new ObjectParameters
        wall_4.type = TypesObjects.WALL
        wall_4.level = 1
        wall_4.index = 1379
        this.setObjectParameter(wall_4, wall_4.type, wall_4.index)

        let wall_5 = new ObjectParameters
        wall_5.type = TypesObjects.WALL
        wall_5.level = 1
        wall_5.index = 1277
        this.setObjectParameter(wall_5, wall_5.type, wall_5.index)

        let wall_6 = new ObjectParameters
        wall_6.type = TypesObjects.WALL
        wall_6.level = 1
        wall_6.index = 1385
        this.setObjectParameter(wall_6, wall_6.type, wall_6.index)

        let wall_7 = new ObjectParameters
        wall_7.type = TypesObjects.WALL
        wall_7.level = 1
        wall_7.index = 1285
        this.setObjectParameter(wall_7, wall_7.type, wall_7.index)

        let wall_8 = new ObjectParameters
        wall_8.type = TypesObjects.WALL
        wall_8.level = 1
        wall_8.index = 1185
        this.setObjectParameter(wall_8, wall_8.type, wall_8.index)

        let wall_9 = new ObjectParameters
        wall_9.type = TypesObjects.WALL
        wall_9.level = 1
        wall_9.index = 1081
        this.setObjectParameter(wall_9, wall_9.type, wall_9.index)

        let wall_10 = new ObjectParameters
        wall_10.type = TypesObjects.WALL
        wall_10.level = 1
        wall_10.index = 1083
        this.setObjectParameter(wall_10, wall_10.type, wall_10.index)

        let wall_11 = new ObjectParameters
        wall_11.type = TypesObjects.WALL
        wall_11.level = 1
        wall_11.index = 1085
        this.setObjectParameter(wall_11, wall_11.type, wall_11.index)
    }

    public static assigningSaveValuesServer(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            if (i == 0) {
                let json = JSON.parse(JSON.stringify(obj[i]))
                HomeMapStorage.instance.numberOpenZones = json.numberOpenZones
            }
            else {
                let json = JSON.parse(JSON.stringify(obj[i]))
                let objParam = new ObjectParameters
                objParam.type = json.type
                objParam.level = json.level
                objParam.index = json.index
                this.setObjectParameter(objParam, objParam.type, objParam.index)
            }
        }
    }

    public static assigningSaveValuesLocal() {
        for (let i = 0; i < HomeMapStorage.instance.temporaryLocalStorage.length; i++) {
            this.setObjectParameter(HomeMapStorage.instance.temporaryLocalStorage[i], HomeMapStorage.instance.temporaryLocalStorage[i].type, HomeMapStorage.instance.temporaryLocalStorage[i].index)
        }
        HomeMapStorage.instance.temporaryLocalStorage = new Array<ObjectParameters>
    }

    public static setParent(object: Node, index: number) {
        object.parent = HomeMapStorage.instance.coords[index]
    }

    public static setObjectParameter(objectParameters: ObjectParameters, type: string, index: number) {
        let arrayIndexes: number[] = this.getArrayObject(type)
        for (let i = 0; i < arrayIndexes.length; i++) {
            HomeMapStorage.instance.arrayObjectParameters[index - arrayIndexes[i]] = objectParameters
        }
        this.saveStorageServer();
    }

    public static setCoord(coord: Node, index: number, pos: Vec3) {
        HomeMapStorage.instance.coords[index] = coord
        HomeMapStorage.instance.coords[index].position = pos
    }

    public static setSpriteCoord(spriteCoord: Sprite, index: number) {
        HomeMapStorage.instance.spriteCoords[index] = spriteCoord
    }

    public static setSelectObject(objectParameters: ObjectParameters) {
        HomeMapStorage.instance.selectedObject = objectParameters
    }

    public static getSelectObject(): ObjectParameters {
        return HomeMapStorage.instance.selectedObject
    }

    public static putSelectObject() {
        if (HomeMapStorage.instance.selectedObject) {
            if (HomeMapStorage.instance.selectedObject.getArrowGameObject()) {
                HomeMapStorage.instance.selectedObject.getArrowGameObject().deactiveArrow()
            }
            if (HomeMapStorage.instance.selectedObject.getObjectInterface()) {
                HomeMapStorage.instance.selectedObject.getObjectInterface().closeInterface()
            }
            HomeMapStorage.instance.selectedObject.nodeObject.setParent(HomeMapStorage.instance.coords[HomeMapStorage.instance.selectedObject.index])
            HomeMapStorage.instance.selectedObject.nodeObject.position = Vec3.ZERO
            HomeMapStorage.instance.selectedObject = null
        }
    }

    public static upgradeLevelObject(index: number) {
        HomeMapStorage.instance.arrayObjectParameters[index].level += 1
        HomeMapStorage.instance.arrayObjectParameters[index].updateSprite()
        this.saveStorageServer()
    }

    public static onTransparencyObjects(type: string, level: number) {
        for (let i = 0; i < HomeMapStorage.instance.mapSize; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] == null) continue
            if (HomeMapStorage.instance.arrayObjectParameters[i].type == type && HomeMapStorage.instance.arrayObjectParameters[i].level == level) continue
            HomeMapStorage.instance.arrayObjectParameters[i].onTransparencyObject()
        }
    }

    public static offTransparencyObjects() {
        for (let i = 0; i < HomeMapStorage.instance.mapSize; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] == null) continue
            HomeMapStorage.instance.arrayObjectParameters[i].offTransparencyObject()
        }
    }

    public static getMapSize(): number {
        return HomeMapStorage.instance.mapSize
    }

    public static getParentObject(): Node {
        return HomeMapStorage.instance.parentSelectObject
    }

    public static getCoord(index: number): Node {
        return HomeMapStorage.instance.coords[index]
    }

    public static getCoordPosition(index: number): Vec3 {
        return HomeMapStorage.instance.coords[index].position
    }

    public static getCoordWorldPosition(index: number): Vec3 {
        return HomeMapStorage.instance.coords[index].getWorldPosition()
    }

    public static getObjectParameter(index: number): ObjectParameters {
        return HomeMapStorage.instance.arrayObjectParameters[index]
    }

    public static getQuantityCoordFree(): number {
        let quantity: number
        for (let i = 0; i < HomeMapStorage.instance.mapSize; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] != null) {
                quantity += 1
            }
        }
        return quantity
    }

    public static getArrayObject(type: string): number[] {
        if (type == TypesObjects.TROOP_OVERLAND) return IndexesObject.object1x1
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
        ) return IndexesObject.object2x2
        else if (type == TypesObjects.TROOP_MARINE) return IndexesObject.object3x2
        else if (type == TypesObjects.COMMAND_POST) return IndexesObject.object3x3
    }

    public static getArratRegionObject(type: string): number[] {
        if (type == TypesObjects.TROOP_OVERLAND) return IndexesObject.regionObject1x1
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
        ) return IndexesObject.regionObject2x2
        else if (type == TypesObjects.TROOP_MARINE) return IndexesObject.regionObject3x2
        else if (type == TypesObjects.COMMAND_POST) return IndexesObject.regionObject3x3
    }

    public static getQuantityObjectsByType(type: string): number {
        let quantity = 0
        for (let i = 0; i < HomeMapStorage.instance.mapSize; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] == null) continue
            if (HomeMapStorage.instance.arrayObjectParameters[i].index != i) continue
            if (HomeMapStorage.instance.arrayObjectParameters[i].type != type) continue
            quantity += 1
        }
        return quantity
    }

    public static getQuantityObjectsByTypeAndLevel(type: string, level: number): number {
        let quantity = 0;
        for (let i = 0; i < HomeMapStorage.instance.mapSize; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] == null) continue
            if (HomeMapStorage.instance.arrayObjectParameters[i].index != i) continue
            if (HomeMapStorage.instance.arrayObjectParameters[i].type != type) continue
            if (HomeMapStorage.instance.arrayObjectParameters[i].level != level) continue
            quantity += 1
        }
        return quantity
    }

    public static getObjectParametersByType(type: string): ObjectParameters {
        for (let i = 0; i < HomeMapStorage.instance.mapSize; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] == null) continue
            if (HomeMapStorage.instance.arrayObjectParameters[i].index != i) continue
            if (HomeMapStorage.instance.arrayObjectParameters[i].type != type) continue
            return HomeMapStorage.instance.arrayObjectParameters[i]
        }
    }

    public static getObjectParametersByTypeAndLevel(type: string, level: number): ObjectParameters {
        for (let i = 0; i < HomeMapStorage.instance.mapSize; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] == null) continue
            if (HomeMapStorage.instance.arrayObjectParameters[i].index != i) continue
            if (HomeMapStorage.instance.arrayObjectParameters[i].type != type) continue
            if (HomeMapStorage.instance.arrayObjectParameters[i].level != level) continue
            return HomeMapStorage.instance.arrayObjectParameters[i]
        }
    }

    public static saveStorageServer() {
        let obj: Object[] = []

        obj.push({ numberOpenZones: HomeMapStorage.instance.numberOpenZones })

        for (let i = 0; i < HomeMapStorage.instance.mapSize; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] == null) continue
            if (HomeMapStorage.instance.arrayObjectParameters[i].index != i) continue
            obj.push({
                type: HomeMapStorage.instance.arrayObjectParameters[i].type,
                level: HomeMapStorage.instance.arrayObjectParameters[i].level,
                index: HomeMapStorage.instance.arrayObjectParameters[i].index
            });
        }
        BufferStorageController.addItem(TypesStorages.HOME_MAP_STORAGE, obj)
    }

    public static saveStorageLocal() {
        for (let i = 0; i < HomeMapStorage.instance.mapSize; i++) {
            if (HomeMapStorage.instance.arrayObjectParameters[i] == null) continue
            if (HomeMapStorage.instance.arrayObjectParameters[i].index != i) continue
            let objParam: ObjectParameters = new ObjectParameters
            objParam.type = HomeMapStorage.instance.arrayObjectParameters[i].type
            objParam.level = HomeMapStorage.instance.arrayObjectParameters[i].level
            objParam.index = HomeMapStorage.instance.arrayObjectParameters[i].index
            HomeMapStorage.instance.temporaryLocalStorage.push(objParam)
        }
    }
}