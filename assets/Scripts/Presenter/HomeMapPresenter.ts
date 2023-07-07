import { Node, Vec3, Sprite } from 'cc';
import { HomeMapModel } from "../Model/HomeMapModel"
import { ObjectParameters } from "../ObjectParameters"
import { IndexesObject } from "../Static/IndexesObject"
import { TypesObjects } from "../Static/TypesObjects"

export class HomeMapPresenter {

    public static setParent(object: Node, index: number) {
        object.parent = HomeMapModel.instance.coords[index]
    }

    public static setObjectParameter(objectParameters: ObjectParameters, type: string, index: number) {
        let arrayIndexes: number[] = this.getArrayObject(type)
        for (let i = 0; i < arrayIndexes.length; i++) {
            HomeMapModel.instance.arrayObjectParameters[index - arrayIndexes[i]] = objectParameters
        }
    }

    public static setCoord(coord: Node, index: number, pos: Vec3) {
        HomeMapModel.instance.coords[index] = coord
        HomeMapModel.instance.coords[index].position = pos
    }

    public static setSpriteCoord(spriteCoord: Sprite, index: number) {
        HomeMapModel.instance.spriteCoords[index] = spriteCoord
    }

    public static setSelectObject(objectParameters: ObjectParameters) {
        HomeMapModel.instance.selectedObject = objectParameters
    }

    public static getSelectObject(): ObjectParameters {
        return HomeMapModel.instance.selectedObject
    }

    public static putSelectObject() {
        if (HomeMapModel.instance.selectedObject) {
            if (HomeMapModel.instance.selectedObject.getArrowGameObject()) {
                HomeMapModel.instance.selectedObject.getArrowGameObject().deactiveArrow()
            }
            if (HomeMapModel.instance.selectedObject.getObjectView()) {
                HomeMapModel.instance.selectedObject.getObjectView().closeInterface()
            }
            HomeMapModel.instance.selectedObject.nodeObject.setParent(HomeMapModel.instance.coords[HomeMapModel.instance.selectedObject.index])
            HomeMapModel.instance.selectedObject.nodeObject.position = Vec3.ZERO
            HomeMapModel.instance.selectedObject = null
        }
    }

    public static upgradeLevelObject(index: number) {
        HomeMapModel.instance.arrayObjectParameters[index].level += 1
        HomeMapModel.instance.arrayObjectParameters[index].updateSprite()
    }

    public static onTransparencyObjects(type: string, level: number) {
        for (let i = 0; i < HomeMapModel.instance.mapSize; i++) {
            if (HomeMapModel.instance.arrayObjectParameters[i] == null) continue
            if (HomeMapModel.instance.arrayObjectParameters[i].index != i) continue
            if (HomeMapModel.instance.arrayObjectParameters[i].type == type && HomeMapModel.instance.arrayObjectParameters[i].level == level) continue
            HomeMapModel.instance.arrayObjectParameters[i].onTransparencyObject()
        }
    }

    public static offTransparencyObjects() {
        for (let i = 0; i < HomeMapModel.instance.mapSize; i++) {
            if (HomeMapModel.instance.arrayObjectParameters[i] == null) continue
            if (HomeMapModel.instance.arrayObjectParameters[i].index != i) continue
            HomeMapModel.instance.arrayObjectParameters[i].offTransparencyObject()
        }
    }

    public static getMapSize(): number {
        return HomeMapModel.instance.mapSize
    }

    public static getParentObject(): Node {
        return HomeMapModel.instance.parentSelectObject
    }

    public static getCoord(index: number): Node {
        return HomeMapModel.instance.coords[index]
    }

    public static getCoordPosition(index: number): Vec3 {
        return HomeMapModel.instance.coords[index].position
    }

    public static getCoordWorldPosition(index: number): Vec3 {
        return HomeMapModel.instance.coords[index].getWorldPosition()
    }

    public static getObjectParameter(index: number): ObjectParameters {
        return HomeMapModel.instance.arrayObjectParameters[index]
    }

    public static getQuantityCoordFree(): number {
        let quantity: number
        for (let i = 0; i < HomeMapModel.instance.mapSize; i++) {
            if (HomeMapModel.instance.arrayObjectParameters[i] != null) {
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
        else if (type == TypesObjects.WALL_4X4 || type == TypesObjects.BATTLE_4X4) {
            return IndexesObject.object4x4
        }
        else if (type == TypesObjects.WALL_8X8 || type == TypesObjects.WALL_8X8) {
            return IndexesObject.object8x8
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
        for (let i = 0; i < HomeMapModel.instance.mapSize; i++) {
            if (HomeMapModel.instance.arrayObjectParameters[i] == null) continue
            if (HomeMapModel.instance.arrayObjectParameters[i].index != i) continue
            if (HomeMapModel.instance.arrayObjectParameters[i].type != type) continue
            quantity += 1
        }
        return quantity
    }

    public static getQuantityObjectsByTypeAndLevel(type: string, level: number): number {
        let quantity = 0;
        for (let i = 0; i < HomeMapModel.instance.mapSize; i++) {
            if (HomeMapModel.instance.arrayObjectParameters[i] == null) continue
            if (HomeMapModel.instance.arrayObjectParameters[i].index != i) continue
            if (HomeMapModel.instance.arrayObjectParameters[i].type != type) continue
            if (HomeMapModel.instance.arrayObjectParameters[i].level != level) continue
            quantity += 1
        }
        return quantity
    }

    public static getObjectParametersByType(type: string): ObjectParameters {
        for (let i = 0; i < HomeMapModel.instance.mapSize; i++) {
            if (HomeMapModel.instance.arrayObjectParameters[i] == null) continue
            if (HomeMapModel.instance.arrayObjectParameters[i].index != i) continue
            if (HomeMapModel.instance.arrayObjectParameters[i].type != type) continue
            return HomeMapModel.instance.arrayObjectParameters[i]
        }
    }

    public static getObjectParametersByTypeAndLevel(type: string, level: number): ObjectParameters {
        for (let i = 0; i < HomeMapModel.instance.mapSize; i++) {
            if (HomeMapModel.instance.arrayObjectParameters[i] == null) continue
            if (HomeMapModel.instance.arrayObjectParameters[i].index != i) continue
            if (HomeMapModel.instance.arrayObjectParameters[i].type != type) continue
            if (HomeMapModel.instance.arrayObjectParameters[i].level != level) continue
            return HomeMapModel.instance.arrayObjectParameters[i]
        }
    }

    public static getSizeTroopAir(): number[] {
        let sizeTroopAir: number[] = new Array(80).fill(0)

        for (let i = 0; i < HomeMapModel.instance.temporaryLocalStorage.length; i++) {
            if (HomeMapModel.instance.temporaryLocalStorage[i] == null) continue
            if (HomeMapModel.instance.temporaryLocalStorage[i].type == TypesObjects.TROOP_AIR) {
                sizeTroopAir[HomeMapModel.instance.temporaryLocalStorage[i].level - 1] += 1
            }
        }
        return sizeTroopAir
    }

    public static getSizeTroopMarine(): number[] {
        let sizeTroopMarine: number[] = new Array(80).fill(0)

        for (let i = 0; i < HomeMapModel.instance.temporaryLocalStorage.length; i++) {
            if (HomeMapModel.instance.temporaryLocalStorage[i] == null) continue
            if (HomeMapModel.instance.temporaryLocalStorage[i].type == TypesObjects.TROOP_MARINE) {
                sizeTroopMarine[HomeMapModel.instance.temporaryLocalStorage[i].level - 1] += 1
            }
        }
        return sizeTroopMarine
    }

    public static getSizeTroopOverland(): number[] {
        let sizeTroopOverland: number[] = new Array(80).fill(0)

        for (let i = 0; i < HomeMapModel.instance.temporaryLocalStorage.length; i++) {
            if (HomeMapModel.instance.temporaryLocalStorage[i] == null) continue
            if (HomeMapModel.instance.temporaryLocalStorage[i].type == TypesObjects.TROOP_OVERLAND) {
                sizeTroopOverland[HomeMapModel.instance.temporaryLocalStorage[i].level - 1] += 1
            }
        }
        return sizeTroopOverland
    }
}