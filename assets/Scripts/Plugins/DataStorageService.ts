import { UserPresenter } from "../Presenter/UserPresenter"
import { ServerApi } from "./ServerApi"
import { TypesModels } from "../Static/TypesStorages"
import { LoadingGame } from "../LoadingGame/LoadingGame"
import { DataStorageDTO } from "../Structures/DTO/DataStorageDTO"
import { DataStorageResponseDTO } from "../Structures/DTO/DataStorageResponseDTO"
import { GameModel } from "../Model/GameModel"
import { js } from "cc"

export class DataStorageService {

    public static saveData(data: object[]) {
        ServerApi.post('data-storage', new DataStorageDTO(UserPresenter.getAccountId(), UserPresenter.getSessionId(), data), DataStorageService.parseDataStoragePostResponce)
    }

    public static getData(keys: string[]) {
        const strKeys = JSON.parse(JSON.stringify(keys))
        ServerApi.get('data-storage', new DataStorageDTO(UserPresenter.getAccountId(), UserPresenter.getSessionId(), strKeys), DataStorageService.parseDataStorageGetResponce)
    }

    public static parseDataStorageGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get data error")
        else {
            const dataStorageJson = JSON.parse(JSON.stringify(data))
            const dataStorageResponseDTO = new DataStorageResponseDTO(dataStorageJson.objects)
            DataStorageService.dataRecipient(dataStorageResponseDTO.dataObjects)
        }
    }

    public static dataRecipient(objects: object[]) {

        //
        console.log(UserPresenter.getIsNewUser())
        LoadingGame.getPostData()
        LoadingGame.redirectToHomeMap()
        //

        if (UserPresenter.getIsNewUser()) {
            LoadingGame.getPostData()
            return;
        }

        if (objects == null) {
            throw 'Пришел пустой обьект'
        }

        for (let i = 0; i < objects.length; i++) {
            const json = objects[i]
            let jsonValue = json['value']
            if (json['key'] == TypesModels.GAME_MODEL) {
                // this.aloo(jsonValue)

            }
            else if (json['key'] == TypesModels.HOME_MAP_MODEL) {


            }
            else if (json['key'] == TypesModels.BACKPACK_MODEL) {


            }
            else if (json['key'] == TypesModels.CHARACTERS_MODEL) {


            }
            else if (json['key'] == TypesModels.COMMAND_POST_MODEL) {


            }
            else if (json['key'] == TypesModels.RADAR_MODEL) {


            }
            else if (json['key'] == TypesModels.AUTOCOMBINE_MODEL) {


            }
            else if (json['key'] == TypesModels.BARRACKS_MODEL) {


            }
            else if (json['key'] == TypesModels.BARRACKS_MODEL) {


            }
            else if (json['key'] == TypesModels.TASKS_GAME_MODEL) {


            }
        }
        LoadingGame.getPostData()
    }

    // private static aloo(obj: Object) {
    //     console.log(obj)
    //     let json = JSON.parse(JSON.stringify(obj))
    //     console.log(json)
    //     console.log(json[0].gems)
    //     GameModel.instance.coins = json[0].coins
    // }

    public static parseDataStoragePostResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("Ошибка запроса дата сторадж пост")
        else {

        }
    }
}