import { Vec2 } from "cc";
import { Building, GlobalMapStorage } from "../GlobalMapStorage";

export class ControllerGlobalMap {

    static getChunkString(): string {
        return this.vectorToString(GlobalMapStorage.instance.chunk)
    }

    static getChunk(): Vec2 {
        return GlobalMapStorage.instance.chunk
    }

    static getZone() {
        return GlobalMapStorage.instance.zone
    }

    static getCoordsChunk(): string {
        return GlobalMapStorage.instance.zone + ':' + GlobalMapStorage.instance.chunk.x + ',' + GlobalMapStorage.instance.chunk.y
    }

    static setCoordsChunk(str: string) {
        str = str.substring(0, str.length - 1)
        GlobalMapStorage.instance.zone = this.parseZone(str)
        GlobalMapStorage.instance.chunk = this.stringToVector2(this.parseChunk(str))
        //переписать так же как аккаунтс айди на массивы
    }

    static buildingsHandler(buildings: object[]) {
        for (let i = 0; i < buildings.length; i++) {
            const id = buildings[i]['id']
            const type = buildings[i]['type']
            const chunk = this.stringToVector2(buildings[i]['chunk'])
            const coords = this.stringToVector2(buildings[i]['coords'])
            this.addBuildings([new Building(id, type, coords, chunk)])
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

    private static stringToVector2(str: string): Vec2 {
        let arr = str.split(',', 2)
        return new Vec2(parseInt(arr[0]), parseInt(arr[1]))
    }

    private static vectorToString(vector: Vec2): string {
        return vector[0] + ',' + vector[1]
    }

    private static parseZone(str: string): string {
        return str.split(':')[0]
    }

    private static parseChunk(str: string): string {
        return str.split(':')[1]
    }
}