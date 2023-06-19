import { Vec2 } from "cc";
import { Building, GlobalMapStorage } from "../../Storage/GlobalMapStorage";
import { UserStorageController } from "./UserStorageController";

export class GlobalMapStorageController {

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

    static getCoordinatesBuilding(building: Building): Vec2 {
        let xCoord = building.x * this.widthCell
        let yCoord = building.y * this.lengthCell
        return new Vec2(xCoord, yCoord)
    }

    static getBaseCoordinates(): Vec2 {
        let x = GlobalMapStorage.instance.xBaceCoord * this.widthCell
        let y = GlobalMapStorage.instance.yBaceCoord * this.lengthCell
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
            if (accountId == UserStorageController.getAccountId()) {
                GlobalMapStorage.instance.xBaceCoord = x
                GlobalMapStorage.instance.yBaceCoord = y
            }
        }
        console.log('Обьектов в массиве карты: ' + GlobalMapStorage.instance.buildings.length)
    }

    static getBuildings(): Building[] {
        return GlobalMapStorage.instance.buildings
    }

    static addBuildings(arr: Building[]) {
        for (let a = 0; a < arr.length; a++) {
            if (this.isObjectExists(arr[a])) {
                //обновляем обьект
            } else {
                //добавляем обьект
                GlobalMapStorage.instance.buildings.push(arr[a])
            }
        }
    }

    static isObjectExists(obj: Building) {
        for (let l = 0; l < GlobalMapStorage.instance.buildings.length; l++) {
            if (obj.id == GlobalMapStorage.instance.buildings[l].id) {
                return true
            }
        }
        return false
    }
}