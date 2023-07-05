import { _decorator, director } from 'cc';
import { SceneNames } from '../Static/SceneNames';
import { HomeMapPresenter } from '../Presenter/HomeMapPresenter';
import { DataStorageService } from '../Plugins/DataStorageService';
import { BufferPresenter } from '../Presenter/BufferPresenter';

export class RedirectionToScene {

    public static redirect(name: string) {
        if (name == SceneNames.LOADING_GAME) {
            director.loadScene("LoadingGame")
        }
        else if (name == SceneNames.HOME_MAP) {
            DataStorageService.setHomeMapModelFromLocal()
            director.loadScene("HomeMap")
        }
        else if (name == SceneNames.GLOBAL_MAP) {
            BufferPresenter.preparationHomeMapModelForLocal()
            director.loadScene("GlobalMap")
        }
        else if (name == SceneNames.BATTLE) {
            BufferPresenter.preparationHomeMapModelForLocal()
            director.loadScene("Battle")
        }
    }

    public static getSceneName() {
        return director.getScene().name
    }
}