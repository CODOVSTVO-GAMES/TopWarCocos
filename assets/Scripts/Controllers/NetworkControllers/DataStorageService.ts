import { UserStorageController } from "../StorageControllers/UserStorageController"
import { ServerApi } from "./ServerApi"
import { DataStorageDTO } from "../../Structures/DTO/DataStorageDTO"
import { DataStorageResponseDTO } from "../../Structures/DTO/DataStorageResponseDTO"
import { NetworkClient } from "../../Network/NetworkClient"
import { GameStorageController } from "../StorageControllers/GameStorageController"
import { HomeMapStorageController } from "../StorageControllers/HomeMapStorageController"
import { InventoryStorageController } from "../StorageControllers/InventoryStorageController"
import { CharactrerStorageController } from "../StorageControllers/CharactrerStorageController"
import { CommandPostStorageController } from "../StorageControllers/CommandPostStorageController"
import { RadarStorageController } from "../StorageControllers/RadarStorageController"
import { AutocombineStorageController } from "../StorageControllers/AutocombineStorageController"
import { RedirectionToScene } from "../../Other/RedirectionToScene"
import { SceneNames } from "../../Static/SceneNames"
import { TypesStorages } from "../../Static/TypesStorages"
import { PaymentsService } from "./PaymentsService"

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
            DataStorageService.dataRecipient(dataStorageResponseDTO.dataObjects);
        }
    }

    static dataRecipient(objects: object[]) {
        if (UserStorageController.getIsNewUser()) {
            GameStorageController.assignStartingValues();
            HomeMapStorageController.assignStartingValues();
            InventoryStorageController.assignStartingValues();
            CharactrerStorageController.assignStartingValues();
            CommandPostStorageController.assignStartingValues();
            RadarStorageController.assignStartingValues();
            AutocombineStorageController.assignStartingValues();
            RedirectionToScene.redirect(SceneNames.HOME_MAP);
            return;
        }

        if (objects == null) throw 'Пришел пустой обьект';

        for (let i = 0; i < objects.length; i++) {
            const json = objects[i];
            let jsonValue = json['value'];
            if (json['key'] == TypesStorages.GAME_STORAGE) {
                GameStorageController.assigningSaveValues(jsonValue);
            }
            else if (json['key'] == TypesStorages.HOME_MAP_STORAGE) {
                HomeMapStorageController.assigningSaveValuesServer(jsonValue);
            }
            else if (json['key'] == TypesStorages.INVENTORY_STORAGE) {
                InventoryStorageController.assigningSaveValues(jsonValue);
            }
            else if (json['key'] == TypesStorages.CHARACTER_STORAGE) {
                CharactrerStorageController.assigningSaveValues(jsonValue);
            }
            else if (json['key'] == TypesStorages.COMMAND_POST_STORAGE) {
                CommandPostStorageController.assigningSaveValues(jsonValue);
            }
            else if (json['key'] == TypesStorages.RADAR_STORAGE) {
                RadarStorageController.assigningSaveValues(jsonValue);
            }
            else if (json['key'] == TypesStorages.AUTOCOMBINE_STORAGE) {
                AutocombineStorageController.assigningSaveValues(jsonValue);
            }
        }
        PaymentsService.getProducts();
        RedirectionToScene.redirect(SceneNames.HOME_MAP);
    }

    static parseDataStoragePostResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("Ошибка запроса дата сторадж пост");
        // console.log('save data done')
    }
}