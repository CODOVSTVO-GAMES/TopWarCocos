import { _decorator, director } from 'cc';
import { SceneNames } from '../Static/SceneNames';

export class RedirectionToScene {

    static redirect(name: string) {
        switch (name) {
            case SceneNames.BASE_MAP:
                director.loadScene("Home");
                break;
            case SceneNames.GLOBAL_MAP:
                director.loadScene("GlobalMap");
                break;
            case SceneNames.BATTLE:
                director.loadScene("Battle");
                break;
        }
    }
}

