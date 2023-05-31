import { _decorator, director } from 'cc';
import { SceneNames } from '../Static/SceneNames';

export class RedirectionToScene {

    static redirect(name: string) {
        if (name == SceneNames.LOADING_GAME) {
            director.loadScene("LoadingGame");
        }
        else if (name == SceneNames.HOME_MAP) {
            director.loadScene("HomeMap");
        }
        else if (name == SceneNames.GLOBAL_MAP) {
            director.loadScene("GlobalMap");
        }
        else if (name == SceneNames.BATTLE) {
            director.loadScene("Battle");
        }
    }
}

