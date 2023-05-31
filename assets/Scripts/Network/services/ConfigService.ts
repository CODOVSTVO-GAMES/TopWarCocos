import { ControllerUserStorage } from "../../Storage/Controllers/ControllerUserStorage"
import { ConfigDTO } from "../DTO/ConfigDTO"
import { ClientService } from "../other/ClientService"

export class ConfigService {

    static getStartConfig() {
        ClientService.get('config', new ConfigDTO(3), ConfigService.parseDataStorageGetResponce)
    }

    static parseDataStorageGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get data error")
        else {
            console.log("get config done")
            // console.log(data)
            // const dataStorageJson = JSON.parse(JSON.stringify(data))
            // const dataStorageResponseDTO = new DataStorageResponseDTO(dataStorageJson.objects)
            // NetworkClient.instance.dataRecipient(dataStorageResponseDTO.dataObjects)
        }
    }

}