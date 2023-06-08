import { Vec2 } from "cc";
import { Building, GlobalMapStorage } from "../GlobalMapStorage";

export class ControllerGlobalMap {

    private static widthCell = 100
    private static lengthCell = 100

    static setZone(zone: string) {
        GlobalMapStorage.instance.zone = zone
    }

    static getZone() {
        return GlobalMapStorage.instance.zone
    }

    static getXBace(): number {
        return GlobalMapStorage.instance.xBaceCoord
    }

    static getYBace(): number {
        return GlobalMapStorage.instance.yBaceCoord
    }

    static getCoordinatesByChunkAndCoords(chunk: Vec2, coords: Vec2): Vec2 {
        let x = this.getZeroCoordChunk(chunk).x + this.getCoordBuilding(coords).x
        let y = this.getZeroCoordChunk(chunk).y + this.getCoordBuilding(coords).y
        return new Vec2(x, y)
    }

    static buildingsHandler(buildings: object[]) {
        for (let i = 0; i < buildings.length; i++) {
            const id = buildings[i]['id']
            const type = buildings[i]['type']
            const x = buildings[i]['x']
            const y = buildings[i]['y']
            const accountId = buildings[i]['accountId']
            this.addBuildings([new Building(id, type, x, y, accountId)])
        }
        console.log('проверено обьектов: ' + GlobalMapStorage.instance.buildings.length)
    }

    static addBuildings(arr: Building[]) {
        for (let a = 0; a < arr.length; a++) {
            for (let l = 0; l < GlobalMapStorage.instance.buildings.length; l++) {
                if (arr[a].id == GlobalMapStorage.instance.buildings[l].id) {
                    //абдейтнуть обьект
                    continue
                }
            }
            GlobalMapStorage.instance.buildings.push(arr[a])
        }
    }

    private static getZeroCoordChunk(chunkCoord: Vec2): Vec2 {
        let x = chunkCoord.x * this.widthCell * 64
        let y = chunkCoord.y * this.lengthCell * 64
        return new Vec2(x, y)
    }

    private static getCoordBuilding(buildingCoord: Vec2): Vec2 {
        let x = buildingCoord.x * this.widthCell
        let y = buildingCoord.y * this.lengthCell
        return new Vec2(x, y)
    }
}