import { Vec2 } from "cc";
import { Building, GlobalMapModel } from "../Model/GlobalMapModel";
import { UserPresenter } from "./UserPresenter";
import { SpawnObjectsOnGlobalMap } from "./SpawnObjectOnGlobalMap";
import { RedirectionToScene } from "../Other/RedirectionToScene";

export class GlobalMapPresenter {

    public static widthCell = 100
    public static lengthCell = 100

    public static mapSize = 512
    public static chunksInMap = 32

    static getChunksPixels() {
        return this.mapSize / this.chunksInMap * this.widthCell
    }

    static getChunksCells() {
        return this.mapSize / this.chunksInMap
    }

    static getCellsInChunk() {
        return this.mapSize / this.chunksInMap
    }

    static setZone(zone: string) {
        GlobalMapModel.instance.zone = zone
    }

    static getZone() {
        return GlobalMapModel.instance.zone
    }

    static getXBace(): number {
        return GlobalMapModel.instance.xBaceCoord
    }

    static getYBace(): number {
        return GlobalMapModel.instance.yBaceCoord
    }

    static getCoordinatesBuilding(building: Building): Vec2 {
        let xCoord = building.x * this.widthCell
        let yCoord = building.y * this.lengthCell
        return new Vec2(xCoord, yCoord)
    }

    static getBaseCoordinates(): Vec2 {
        let x = GlobalMapModel.instance.xBaceCoord * this.widthCell
        let y = GlobalMapModel.instance.yBaceCoord * this.lengthCell
        return new Vec2(x, y)
    }


    static buildingsHandler(buildings: object[]) {
        for (let i = 0; i < buildings.length; i++) {
            const id = buildings[i]['id']
            const type = buildings[i]['type']
            const x = buildings[i]['x']
            const y = buildings[i]['y']
            const accountId = buildings[i]['accountId']
            const level = buildings[i]['level']
            this.addBuildings([new Building(id, type, x, y, accountId, level)])
            if (accountId == UserPresenter.getAccountId()) {
                GlobalMapModel.instance.xBaceCoord = x
                GlobalMapModel.instance.yBaceCoord = y
            }
        }

        // console.log('Обьектов в массиве карты: ' + (GlobalMapModel.instance.buildings.length + 1))

        if (RedirectionToScene.getSceneName() == "GlobalMap") {
            SpawnObjectsOnGlobalMap.instance.massSpawn()
        }
    }

    static getBuildings(): Building[] {
        return GlobalMapModel.instance.buildings
    }

    static addBuildings(arr: Building[]) {
        for (let a = 0; a < arr.length; a++) {
            if (this.isObjectExists(arr[a])) {
                //обновляем обьект
            } else {
                //добавляем обьект
                GlobalMapModel.instance.buildings.push(arr[a])
            }
        }
    }

    static isObjectExists(obj: Building) {
        for (let l = 0; l < GlobalMapModel.instance.buildings.length; l++) {
            if (obj.id == GlobalMapModel.instance.buildings[l].id) {
                return true
            }
        }
        return false
    }
}