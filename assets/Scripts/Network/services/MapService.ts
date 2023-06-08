import { ControllerUserStorage } from "../../Storage/Controllers/ControllerUserStorage"
import { ClientService } from "../other/ClientService"
import { MapDTO } from "../DTO/MapDTO"
import { ControllerGlobalMap } from "../../Storage/Controllers/ControllerGlobalMap";

export class MapService {
    static getMap() {
        ClientService.get('map', new MapDTO(ControllerUserStorage.getAccountId(), ControllerGlobalMap.getZone(), ControllerGlobalMap.getXBace(), ControllerGlobalMap.getYBace()), MapService.parseDataStorageGetResponce);
    }

    static parseDataStorageGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get map error");
        else {
            ControllerGlobalMap.buildingsHandler(data)
        }
    }

}