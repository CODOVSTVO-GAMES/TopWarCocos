import { ConfigStorage } from "../../Storage/ConfigStorage"
import { ConfigDTO } from "../DTO/ConfigDTO"
import { ClientService } from "../other/ClientService"

export class ConfigService {

    static getStartConfig() {
        ClientService.get('config', new ConfigDTO(3), ConfigService.parseDataStorageGetResponce)
    }

    static parseDataStorageGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get config error")
        else {
            // console.log("get config done")
            ConfigStorage.instance.configRecipient(data['objects'])
        }
    }
}