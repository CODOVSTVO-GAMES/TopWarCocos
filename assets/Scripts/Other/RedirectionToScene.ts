import { _decorator, director } from 'cc';
import { SceneNames } from '../Static/SceneNames';
import { HomeMapPresenter } from '../Presenter/HomeMapPresenter';

export class RedirectionToScene {

    public static redirect(name: string) {
        if (name == SceneNames.LOADING_GAME) {
            director.loadScene("LoadingGame")
        }
        else if (name == SceneNames.HOME_MAP) {
            // HomeMapPresenter.assigningSaveValuesLocal()
            director.loadScene("HomeMap")
        }
        else if (name == SceneNames.GLOBAL_MAP) {
            HomeMapPresenter.saveStorageLocal()
            director.loadScene("GlobalMap")
        }
        else if (name == SceneNames.BATTLE) {
            HomeMapPresenter.saveStorageLocal()
            director.loadScene("Battle")
        }
    }

    public static getSceneName() {
        return director.getScene().name
    }
}