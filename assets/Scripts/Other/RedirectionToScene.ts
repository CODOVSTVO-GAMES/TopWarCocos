import { _decorator, director } from 'cc';
import { SceneNames } from '../Static/SceneNames';
import { ControllerHomeMapStorage } from '../Storage/Controllers/ControllerHomeMapStorage';
import { HomeMapStorage } from '../Storage/HomeMapStorage';

export class RedirectionToScene {

    static redirect(name: string) {
        if (name == SceneNames.LOADING_GAME) {
            director.loadScene("LoadingGame");
        }
        else if (name == SceneNames.HOME_MAP) {
            ControllerHomeMapStorage.assigningSaveValuesLocal(HomeMapStorage.instance.temporaryLocalStorage);
            director.loadScene("HomeMap");
        }
        else if (name == SceneNames.GLOBAL_MAP) {
            ControllerHomeMapStorage.saveStorageLocal();
            director.loadScene("GlobalMap");
        }
        else if (name == SceneNames.BATTLE) {
            ControllerHomeMapStorage.saveStorageLocal();
            director.loadScene("Battle");
        }
    }

    static getSceneName() {
        return director.getScene().name
    }
}

