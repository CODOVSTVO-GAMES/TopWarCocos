import { _decorator, Component } from 'cc';
import { OkConnector } from '../Library/OkConnector';
import { SessionService } from '../Controllers/NetworkControllers/SessionService';
import { TypesStorages } from '../Static/TypesStorages';
import { DataStorageService } from '../Controllers/NetworkControllers/DataStorageService';
import { UserService } from '../Controllers/NetworkControllers/UserService';
import { UserStorageController } from '../Controllers/StorageControllers/UserStorageController';
import { ConfigService } from '../Controllers/NetworkControllers/ConfigService';
import { MapService } from '../Controllers/NetworkControllers/MapService';
const { ccclass } = _decorator;

@ccclass('LoadingGame')
export class LoadingGame extends Component {

    start() {
        LoadingGame.initSDKAndGetUserInfo()
    }

    static initSDKAndGetUserInfo() {
        OkConnector.initPlugin() //getSession вызывается после получения данных в колбеке
    }

    static getUser() {
        UserService.getUser(UserStorageController.getUserId())
    }

    static getSession() {
        SessionService.getStartSessionData()//getStorages вызывается после получения данных в колбеке
    }

    static getStorages() {
        let arrayActiveStorage = [
            TypesStorages.GAME_STORAGE,
            TypesStorages.HOME_MAP_STORAGE,
            TypesStorages.INVENTORY_STORAGE,
            TypesStorages.CHARACTER_STORAGE,
            TypesStorages.COMMAND_POST_STORAGE,
            TypesStorages.RADAR_STORAGE,
            TypesStorages.AUTOCOMBINE_STORAGE
        ];
        DataStorageService.getData(arrayActiveStorage)//redirectToHomeMap вызывается после получения данных в колбеке
        ConfigService.getStartConfig()
        MapService.getMap()
    }
}

