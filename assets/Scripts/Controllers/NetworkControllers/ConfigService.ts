import { ConfigModel } from "../../Model/ConfigModel"
import { ConfigDTO } from "../../Structures/DTO/ConfigDTO"
import { ServerApi } from "./ServerApi"

export class ConfigService {

    static getStartConfig() {
        ServerApi.get('config', new ConfigDTO(3), ConfigService.parseDataStorageGetResponce)
    }

    static parseDataStorageGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get config error")
        else {
            // console.log("get config done")
            ConfigModel.instance.configRecipient(data['objects'])
        }
    }
}