import { UserStorageController } from "../StorageControllers/UserStorageController"
import { ServerApi } from "./ServerApi"
import { MapDTO } from "../../Structures/DTO/MapDTO"
import { GlobalMapStorageController } from "../StorageControllers/GlobalMapStorageController";
import { GameStorageController } from "../StorageControllers/GameStorageController";
import { RadarStorageController } from "../StorageControllers/RadarStorageController";
import { ConfigStorageController } from "../StorageControllers/ConfigStorageController";

export class MapService {

    static getMap() {
        ServerApi.get('map', new MapDTO(UserStorageController.getAccountId(), GlobalMapStorageController.getZone(), GlobalMapStorageController.getXBace(), GlobalMapStorageController.getYBace(), GameStorageController.getLevel()), MapService.parseDataStorageGetResponce);
    }

    static parseDataStorageGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get map error")
        else {
            GlobalMapStorageController.buildingsHandler(data)
        }
    }

    static getEnemy() {
        let level = RadarStorageController.getRadarLevel()
        let config = ConfigStorageController.getRadarConfigByLevel(level)
        let battlesNumber = config.displayedTasks

        ServerApi.get('map/enemy', new MapDTO(UserStorageController.getAccountId(), GlobalMapStorageController.getZone(), GlobalMapStorageController.getXBace(), GlobalMapStorageController.getYBace(), GameStorageController.getLevel(), battlesNumber), MapService.parseDataStorageGetResponce);
    }

}