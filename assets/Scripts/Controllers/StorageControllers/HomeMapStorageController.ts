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

        let radar = new ObjectParameters
        radar.type = TypesObjects.RADAR
        radar.level = 1
        radar.index = 1580
        this.setObjectParameter(radar, radar.type, radar.index)

        let wall_1 = new ObjectParameters
        wall_1.type = TypesObjects.WHOLE_MANIPULATOR
        wall_1.level = 1
        wall_1.index = 1381
        this.setObjectParameter(wall_1, wall_1.type, wall_1.index)

        let troop_1 = new ObjectParameters
        troop_1.type = TypesObjects.TROOP_OVERLAND
        troop_1.level = 1
        troop_1.index = 1481
        this.setObjectParameter(troop_1, troop_1.type, troop_1.index)

        let troop_2 = new ObjectParameters
        troop_2.type = TypesObjects.TROOP_OVERLAND
        troop_2.level = 1
        troop_2.index = 1482
        this.setObjectParameter(troop_2, troop_2.type, troop_2.index)

        let troop_3 = new ObjectParameters
        troop_3.type = TypesObjects.TROOP_OVERLAND
        troop_3.level = 1
        troop_3.index = 1531
        this.setObjectParameter(troop_3, troop_3.type, troop_3.index)

        let troop_4 = new ObjectParameters
        troop_4.type = TypesObjects.TROOP_OVERLAND
        troop_4.level = 1
        troop_4.index = 1532
        this.setObjectParameter(troop_4, troop_4.type, troop_4.index)

        let troop_5 = new ObjectParameters
        troop_5.type = TypesObjects.TROOP_OVERLAND
        troop_5.level = 1
        troop_5.index = 1582
        this.setObjectParameter(troop_5, troop_5.type, troop_5.index)
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
        if (type == TypesObjects.TROOP_OVERLAND) {
            return IndexesObject.object1x1
        }
        else if (type == TypesObjects.TROOP_MARINE) {
            return IndexesObject.object3x2
        }
        else if (type == TypesObjects.COMMAND_POST) {
            return IndexesObject.object3x3
        }
        else {
            return IndexesObject.object2x2
        }
    }

    public static getArratRegionObject(type: string): number[] {
        if (type == TypesObjects.TROOP_OVERLAND) {
            return IndexesObject.regionObject1x1
        }
        else if (type == TypesObjects.TROOP_MARINE) {
            return IndexesObject.regionObject3x2
        }
        else if (type == TypesObjects.COMMAND_POST) {
            return IndexesObject.regionObject3x3
        }
        else {
            return IndexesObject.regionObject2x2
        }
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