import { _decorator, Component } from 'cc';
import { RedirectionToScene } from '../Other/RedirectionToScene';
import { SceneNames } from '../Static/SceneNames';
import { OkConnector } from '../Network/OkConnector';
import { SessionService } from '../Network/services/SessionService';
import { TypesStorages } from '../Static/TypesStorages';
import { DataStorageService } from '../Network/services/DataStorageService';
import { TechnicalConfig } from '../Static/TechnicalConfig';
const { ccclass } = _decorator;

@ccclass('LoadingGame')
export class LoadingGame extends Component {

    start() {
        // setTimeout(() => {
        //     RedirectionToScene.redirect(SceneNames.HOME_MAP);
        // }, 1000);
        // LoadingGame.getSession()
        LoadingGame.initSDKAndGetUserInfo()
    }

    static initSDKAndGetUserInfo() {
        OkConnector.initPlugin() //getSession вызывается после получения данных в колбеке
    }

    static getSession() {
        SessionService.getStartSessionData()//getStorages вызывается после получения данных в колбеке
    }

    static getStorages() {
        let myArr = [TypesStorages.GAME_STORAGE]
        DataStorageService.getData(myArr)//redirectToHomeMap вызывается после получения данных в колбеке
    }

    static redirectToHomeMap() {
        console.log('redirect scene')
        RedirectionToScene.redirect(SceneNames.HOME_MAP);
    }

}

