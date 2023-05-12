import { ControllerUserStorage } from "../Storage/Controllers/ControllerUserStorage"
import { ClientService } from "./ClientService"
import { DataStorageDTO } from "./DTO/DataStorageDTO"
import { DataStorageResponseDTO } from "./DTO/DataStorageResponseDTO"
import { DataStorage } from "./DataStorage"

export class DataStorageService {

    static saveData(data: string) {
        ClientService.post('data-storage', new DataStorageDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionId(), data), this.parseDataStorageResponce)
    }

    static getData(keys: Array<string>) {
        const strKeys = JSON.parse(JSON.stringify(keys))
        ClientService.get('data-storage', new DataStorageDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionId(), strKeys), this.parseDataStorageResponce)
    }

    static parseDataStorageResponce(data: any) {
        const dataStorageJson = JSON.parse(JSON.stringify(data))
        const dataStorageResponseDTO = new DataStorageResponseDTO(dataStorageJson.objects)
        DataStorage.instance.dataRecipient(dataStorageResponseDTO.dataObjects)
    }
}