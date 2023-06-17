import { UserStorageController } from "../../Controllers/StorageControllers/UserStorageController"
import { ServerApi } from "../Other/ServerApi"
import { MapDTO } from "../DTO/MapDTO"
import { GlobalMapController } from "../../Controllers/StorageControllers/GlobalMapController";
import { GameStorageController } from "../../Controllers/StorageControllers/GameStorageController";
import { RadarStorageController } from "../../Controllers/StorageControllers/RadarStorageController";
import { ConfigStorageController } from "../../Controllers/StorageControllers/ConfigStorageController";

export class MapService {

    static getMap() {
        ServerApi.get('map', new MapDTO(UserStorageController.getAccountId(), GlobalMapController.getZone(), GlobalMapController.getXBace(), GlobalMapController.getYBace(), GameStorageController.getLevel()), MapService.parseDataStorageGetResponce);
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

        ServerApi.get('map/enemy', new MapDTO(UserStorageController.getAccountId(), GlobalMapController.getZone(), GlobalMapController.getXBace(), GlobalMapController.getYBace(), GameStorageController.getLevel(), battlesNumber), MapService.parseDataStorageGetResponce);
    }

}