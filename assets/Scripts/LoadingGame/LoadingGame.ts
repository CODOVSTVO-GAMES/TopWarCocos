import { _decorator, Component } from 'cc';
import { OkConnector } from '../Network/OkConnector';
import { SessionService } from '../Network/services/SessionService';
import { TypesStorages } from '../Static/TypesStorages';
import { DataStorageService } from '../Network/services/DataStorageService';
import { UserService } from '../Network/services/UserService';
import { ControllerUserStorage } from '../Storage/Controllers/ControllerUserStorage';
import { ConfigService } from '../Network/services/ConfigService';
import { MapService } from '../Network/services/MapService';
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
        UserService.getUser(ControllerUserStorage.getUserId())
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

