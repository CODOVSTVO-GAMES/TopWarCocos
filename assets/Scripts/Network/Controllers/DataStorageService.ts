import { UserStorageController } from "../../Controllers/StorageControllers/UserStorageController"
import { ServerApi } from "../Other/ServerApi"
import { DataStorageDTO } from "../DTO/DataStorageDTO"
import { DataStorageResponseDTO } from "../DTO/DataStorageResponseDTO"
import { NetworkClient } from "../NetworkClient"

export class DataStorageService {

    static saveData(data: object[]) {
        ServerApi.post('data-storage', new DataStorageDTO(UserStorageController.getAccountId(), UserStorageController.getSessionId(), data), DataStorageService.parseDataStoragePostResponce);
    }

    static getData(keys: Array<string>) {
        const strKeys = JSON.parse(JSON.stringify(keys));
        ServerApi.get('data-storage', new DataStorageDTO(UserStorageController.getAccountId(), UserStorageController.getSessionId(), strKeys), DataStorageService.parseDataStorageGetResponce);
    }

    static parseDataStorageGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get data error");
        else {
            const dataStorageJson = JSON.parse(JSON.stringify(data));
            const dataStorageResponseDTO = new DataStorageResponseDTO(dataStorageJson.objects);
            NetworkClient.instance.dataRecipient(dataStorageResponseDTO.dataObjects);
        }
    }

    static parseDataStoragePostResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("Ошибка запроса дата сторадж пост");
        // console.log('save data done')
    }
}