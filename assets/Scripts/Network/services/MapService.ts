import { UserStorageController } from "../../Controllers/UserStorageController"
import { ClientService } from "../other/ClientService"
import { MapDTO } from "../DTO/MapDTO"
import { GlobalMapController } from "../../Controllers/GlobalMapController";
import { GameStorageController } from "../../Controllers/GameStorageController";
import { RadarStorageController } from "../../Controllers/RadarStorageController";
import { ConfigStorageController } from "../../Controllers/ConfigStorageController";

export class MapService {

    static getMap() {
        ClientService.get('map', new MapDTO(UserStorageController.getAccountId(), GlobalMapController.getZone(), GlobalMapController.getXBace(), GlobalMapController.getYBace(), GameStorageController.getLevel()), MapService.parseDataStorageGetResponce);
    }

    static parseDataStorageGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get map error")
        else {
            GlobalMapController.buildingsHandler(data)
        }
    }

    static getEnemy() {
        let level = RadarStorageController.getRadarLevel()
        let config = ConfigStorageController.getRadarConfigByLevel(level)
        let battlesNumber = config.displayedTasks

        ClientService.get('map/enemy', new MapDTO(UserStorageController.getAccountId(), GlobalMapController.getZone(), GlobalMapController.getXBace(), GlobalMapController.getYBace(), GameStorageController.getLevel(), battlesNumber), MapService.parseDataStorageGetResponce);
    }

}