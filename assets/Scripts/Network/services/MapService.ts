import { ControllerUserStorage } from "../../Storage/Controllers/ControllerUserStorage"
import { ClientService } from "../other/ClientService"
import { MapDTO } from "../DTO/MapDTO"
import { ControllerGlobalMap } from "../../Storage/Controllers/ControllerGlobalMap";
import { ControllerGameStorage } from "../../Storage/Controllers/ControllerGameStorage";
import { ControllerRadarStorage } from "../../Storage/Controllers/ControllerRadarStorage";
import { ControllerConfigStorage } from "../../Storage/Controllers/ControllerConfigStorage";

export class MapService {

    static getMap() {
        ClientService.get('map', new MapDTO(ControllerUserStorage.getAccountId(), ControllerGlobalMap.getZone(), ControllerGlobalMap.getXBace(), ControllerGlobalMap.getYBace(), ControllerGameStorage.getLevel()), MapService.parseDataStorageGetResponce);
    }

    static parseDataStorageGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get map error")
        else {
            ControllerGlobalMap.buildingsHandler(data)
        }
    }

    static getEnemy() {
        let level = ControllerRadarStorage.getRadarLevel()
        let config = ControllerConfigStorage.getRadarConfigByLevel(level)
        let battlesNumber = config.displayedTasks

        ClientService.get('map/enemy', new MapDTO(ControllerUserStorage.getAccountId(), ControllerGlobalMap.getZone(), ControllerGlobalMap.getXBace(), ControllerGlobalMap.getYBace(), ControllerGameStorage.getLevel(), battlesNumber), MapService.parseDataStorageGetResponce);
    }

}