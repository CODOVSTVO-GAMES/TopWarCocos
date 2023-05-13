import { ControllerUserStorage } from "../../Storage/Controllers/ControllerUserStorage"
import { ClientService } from "../other/ClientService"
import { DataStorageDTO } from "../DTO/DataStorageDTO"
import { DataStorageResponseDTO } from "../DTO/DataStorageResponseDTO"
import { NetworkClient } from "../NetworkClient"

export class DataStorageService {

    static saveData(data: string) {
        console.log('save data request')
        ClientService.post('data-storage', new DataStorageDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionId(), data), DataStorageService.parseDataStoragePostResponce)
    }

    static getData(keys: Array<string>) {
        console.log('get data request')
        const strKeys = JSON.parse(JSON.stringify(keys))
        ClientService.get('data-storage', new DataStorageDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionId(), strKeys), DataStorageService.parseDataStorageGetResponce)
    }

    static parseDataStorageGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("Ошибка запроса дата сторадж гет")
        const dataStorageJson = JSON.parse(JSON.stringify(data))
        const dataStorageResponseDTO = new DataStorageResponseDTO(dataStorageJson.objects)
        NetworkClient.instance.dataRecipient(dataStorageResponseDTO.dataObjects)
    }

    static parseDataStoragePostResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("Ошибка запроса дата сторадж пост")
        console.log('post DS done')
    }
}