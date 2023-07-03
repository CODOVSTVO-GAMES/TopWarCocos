import { UserStorageController } from "../StorageControllers/UserStorageController"
import { ServerApi } from "./ServerApi"
import { TypesStorages } from "../../Static/TypesStorages"
import { LoadingGame } from "../../LoadingGame/LoadingGame"
import { DataStorageDTO } from "../../Structures/DTO/DataStorageDTO"
import { DataStorageResponseDTO } from "../../Structures/DTO/DataStorageResponseDTO"

export class DataStorageService {

    static saveData(data: object[]) {
        ServerApi.post('data-storage', new DataStorageDTO(UserStorageController.getAccountId(), UserStorageController.getSessionId(), data), DataStorageService.parseDataStoragePostResponce)
    }

    static getData(keys: Array<string>) {
        const strKeys = JSON.parse(JSON.stringify(keys))
        ServerApi.get('data-storage', new DataStorageDTO(UserStorageController.getAccountId(), UserStorageController.getSessionId(), strKeys), DataStorageService.parseDataStorageGetResponce)
    }

    static parseDataStorageGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get data error")
        else {
            const dataStorageJson = JSON.parse(JSON.stringify(data))
            const dataStorageResponseDTO = new DataStorageResponseDTO(dataStorageJson.objects)
            DataStorageService.dataRecipient(dataStorageResponseDTO.dataObjects)
        }
    }

    static dataRecipient(objects: object[]) {
        if (UserStorageController.getIsNewUser()) {
            LoadingGame.getPostData()
            return;
        }

        if (objects == null) {
            throw 'Пришел пустой обьект'
        }

        for (let i = 0; i < objects.length; i++) {
            const json = objects[i]
            let jsonValue = json['value']
            if (json['key'] == TypesStorages.GAME_STORAGE) {
                // GameStorageController.assigningSaveValues(jsonValue)
            }
            else if (json['key'] == TypesStorages.HOME_MAP_STORAGE) {
                // HomeMapStorageController.assigningSaveValuesServer(jsonValue)
            }
            else if (json['key'] == TypesStorages.BACKPACK_STORAGE) {
                // BackpackStorageController.assigningSaveValues(jsonValue)
            }
            else if (json['key'] == TypesStorages.CHARACTER_STORAGE) {
                // CharactrerStorageController.assigningSaveValues(jsonValue)
            }
            else if (json['key'] == TypesStorages.COMMAND_POST_STORAGE) {
                // CommandPostStorageController.assigningSaveValues(jsonValue)
            }
            else if (json['key'] == TypesStorages.RADAR_STORAGE) {
                // RadarStorageController.assigningSaveValues(jsonValue)
            }
            else if (json['key'] == TypesStorages.AUTOCOMBINE_STORAGE) {
                // AutocombineStorageController.assigningSaveValues(jsonValue)
            }
            else if (json['key'] == TypesStorages.BARRACKS_STORAGE) {
                // BarracksStorageController.assigningSaveValues(jsonValue)
            }
            else if (json['key'] == TypesStorages.BARRACKS_STORAGE) {
                // BarracksStorageController.assigningSaveValues(jsonValue)
            }
            else if (json['key'] == TypesStorages.TASKS_GAME_STORAGE) {
                // TasksGameStorageController.assigningSaveValues(jsonValue)
            }
        }
        LoadingGame.getPostData()
    }

    static parseDataStoragePostResponce(data: any, isDone: boolean) {
        if (!isDone) {
            console.log("Ошибка запроса дата сторадж пост")
        }
    }
}