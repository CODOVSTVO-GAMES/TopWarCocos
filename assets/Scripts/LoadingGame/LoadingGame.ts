import { _decorator, Component } from 'cc';
import { OkConnector } from '../Librarys/OkConnector';
import { SessionService } from '../Plugins/SessionService';
import { TypesModels } from '../Static/TypesModels';
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
        // getSession вызывается после получения данных в колбеке
        OkConnector.initPlugin()
    }

    static getUser() {
        UserService.getUser(UserPresenter.getUserId())
    }

    static getSession() {
        // getStorages вызывается после получения данных в колбеке
        SessionService.getStartSessionData()
    }

    static getStorages() {
        let arrayActiveStorage = [
            TypesModels.GAME_MODEL,
            TypesModels.HOME_MAP_MODEL,
            TypesModels.BACKPACK_MODEL,
            TypesModels.CHARACTERS_MODEL,
            TypesModels.COMMAND_POST_MODEL,
            TypesModels.RADAR_MODEL,
            TypesModels.AUTOCOMBINE_MODEL,
            TypesModels.BARRACKS_MODEL,
            TypesModels.TASKS_GAME_MODEL
        ]
        // redirectToHomeMap вызывается после получения данных в колбеке
        DataStorageService.getData(arrayActiveStorage)
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

