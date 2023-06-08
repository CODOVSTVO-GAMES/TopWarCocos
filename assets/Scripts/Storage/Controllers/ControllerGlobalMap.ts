import { Vec2 } from "cc";
import { Building, GlobalMapStorage } from "../GlobalMapStorage";
import { ControllerUserStorage } from "./ControllerUserStorage";

export class ControllerGlobalMap {

    public static widthCell = 100
    public static lengthCell = 100

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

    static buildingsHandler(buildings: object[]) {
        for (let i = 0; i < buildings.length; i++) {
            const id = buildings[i]['id']
            const type = buildings[i]['type']
            const x = buildings[i]['x']
            const y = buildings[i]['y']
            const accountId = buildings[i]['accountId']
            this.addBuildings([new Building(id, type, x, y, accountId)])
            if (accountId == ControllerUserStorage.getAccountId()) {
                GlobalMapStorage.instance.xBaceCoord = x
                GlobalMapStorage.instance.yBaceCoord = y
            }
        }
        console.log('проверено обьектов: ' + GlobalMapStorage.instance.buildings.length)
    }

    static getBuildings(): Building[] {
        return GlobalMapStorage.instance.buildings
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
}