import { ControllerUserStorage } from "../../Storage/Controllers/ControllerUserStorage"
import { ClientService } from "../other/ClientService"
import { MapDTO } from "../DTO/MapDTO"

export class MapService {

    static getMap() {
        ClientService.get('map', new MapDTO(ControllerUserStorage.getAccountId(), ControllerUserStorage.getZoneId() + ':' + ControllerUserStorage.getChunk()), MapService.parseDataStorageGetResponce);
    }

    static parseDataStorageGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get map error");
        else {
            // const dataStorageJson = JSON.parse(JSON.stringify(data));
            console.log(data)
        }
    }

}