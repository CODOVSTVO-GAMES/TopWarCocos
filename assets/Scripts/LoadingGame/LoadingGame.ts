import { _decorator, Component } from 'cc';
import { RedirectionToScene } from '../Other/RedirectionToScene';
import { SceneNames } from '../Static/SceneNames';
import { OkConnector } from '../Network/OkConnector';
import { SessionService } from '../Network/services/SessionService';
import { TypesStorages } from '../Static/TypesStorages';
import { DataStorageService } from '../Network/services/DataStorageService';
import { UserService } from '../Network/services/UserService';
import { ControllerUserStorage } from '../Storage/Controllers/ControllerUserStorage';
import { PaymentsService } from '../Network/services/PaymentsService';
import { ConfigService } from '../Network/services/ConfigService';
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
        let myArr = [
            TypesStorages.GAME_STORAGE,
            TypesStorages.HOME_MAP_STORAGE,
            TypesStorages.INVENTORY_STORAGE,
            TypesStorages.CHARACTER_STORAGE,
            TypesStorages.COMMAND_POST_STORAGE,
            TypesStorages.RADAR_STORAGE
        ];
        DataStorageService.getData(myArr)//redirectToHomeMap вызывается после получения данных в колбеке
    }

    static redirectToHomeMap() {
        console.log('redirect scene')
        PaymentsService.getProducts()
        ConfigService.getStartConfig()
        // OkConnector.showPayment('title', 'description', '1', 1)
        RedirectionToScene.redirect(SceneNames.HOME_MAP);
    }

}

