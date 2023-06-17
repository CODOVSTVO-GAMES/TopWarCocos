import { _decorator, director } from 'cc';
import { SceneNames } from '../Static/SceneNames';
import { HomeMapStorageController } from '../Controllers/HomeMapStorageController';
import { HomeMapStorage } from '../Storage/HomeMapStorage';

export class RedirectionToScene {

    static redirect(name: string) {
        if (name == SceneNames.LOADING_GAME) {
            director.loadScene("LoadingGame");
        }
        else if (name == SceneNames.HOME_MAP) {
            HomeMapStorageController.assigningSaveValuesLocal(HomeMapStorage.instance.temporaryLocalStorage);
            director.loadScene("HomeMap");
        }
        else if (name == SceneNames.GLOBAL_MAP) {
            HomeMapStorageController.saveStorageLocal();
            director.loadScene("GlobalMap");
        }
        else if (name == SceneNames.BATTLE) {
            HomeMapStorageController.saveStorageLocal();
            director.loadScene("Battle");
        }
    }

    static getSceneName() {
        return director.getScene().name
    }
}

