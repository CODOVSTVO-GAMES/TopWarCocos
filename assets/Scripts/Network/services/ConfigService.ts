import { ConfigStorage } from "../../Storage/ConfigStorage"
import { ConfigDTO } from "../DTO/ConfigDTO"
import { ServerApi } from "../other/ServerApi"

export class ConfigService {

    static getStartConfig() {
        ServerApi.get('config', new ConfigDTO(3), ConfigService.parseDataStorageGetResponce)
    }

    static parseDataStorageGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get config error")
        else {
            // console.log("get config done")
            ConfigStorage.instance.configRecipient(data['objects'])
        }
    }
}