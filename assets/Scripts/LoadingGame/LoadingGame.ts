import { _decorator, Component } from 'cc';
import { OkConnector } from '../Librarys/OkConnector';
import { SessionService } from '../Plugins/SessionService';
import { TypesStorages } from '../Static/TypesStorages';
import { DataStorageService } from '../Plugins/DataStorageService';
import { UserService } from '../Plugins/UserService';
import { UserPresenter } from '../Presenter/UserPresenter';
import { ConfigService } from '../Plugins/ConfigService';
import { MapService } from '../Plugins/MapService';
import { PaymentsService } from '../Plugins/PaymentsService';
import { RedirectionToScene } from '../Other/RedirectionToScene';
import { SceneNames } from '../Static/SceneNames';
const { ccclass } = _decorator;

@ccclass('LoadingGame')
export class LoadingGame extends Component {

    public start() {
        LoadingGame.initSDKAndGetUserInfo()
    }

    static initSDKAndGetUserInfo() {
        OkConnector.initPlugin() //getSession вызывается после получения данных в колбеке
    }

    static getUser() {
        UserService.getUser(UserPresenter.getUserId())
    }

    static getSession() {
        SessionService.getStartSessionData()//getStorages вызывается после получения данных в колбеке
    }

    static getStorages() {
        let arrayActiveStorage = [
            TypesStorages.GAME_STORAGE,
            TypesStorages.HOME_MAP_STORAGE,
            TypesStorages.BACKPACK_STORAGE,
            TypesStorages.CHARACTER_STORAGE,
            TypesStorages.COMMAND_POST_STORAGE,
            TypesStorages.RADAR_STORAGE,
            TypesStorages.AUTOCOMBINE_STORAGE,
            TypesStorages.BARRACKS_STORAGE,
            TypesStorages.TASKS_GAME_STORAGE
        ]
        DataStorageService.getData(arrayActiveStorage)//redirectToHomeMap вызывается после получения данных в колбеке
    }

    static getPostData() {
        ConfigService.getStartConfig()
        MapService.getMap()
        PaymentsService.getProducts()
    }

    static redirectToHomeMap() {
        RedirectionToScene.redirect(SceneNames.HOME_MAP)
    }
}

