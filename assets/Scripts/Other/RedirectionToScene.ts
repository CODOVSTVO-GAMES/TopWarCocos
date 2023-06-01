import { _decorator, director } from 'cc';
import { SceneNames } from '../Static/SceneNames';
import { ControllerHomeMapStorage } from '../Storage/Controllers/ControllerHomeMapStorage';
import { DataStorageService } from '../Network/services/DataStorageService';

export class RedirectionToScene {

    static redirect(name: string) {
        if (name == SceneNames.LOADING_GAME) {
            director.loadScene("LoadingGame");
        }
        else if (name == SceneNames.HOME_MAP) {
            // DataStorageService.getData(new String["homeMapStorage"]);
            director.loadScene("HomeMap");
        }
        else if (name == SceneNames.GLOBAL_MAP) {
            // ControllerHomeMapStorage.updateHomeMapStorage();
            director.loadScene("GlobalMap");
        }
        else if (name == SceneNames.BATTLE) {
            // ControllerHomeMapStorage.updateHomeMapStorage();
            director.loadScene("Battle");
        }
    }
}

