import { _decorator, Component } from 'cc';
import { RedirectionToScene } from '../Other/RedirectionToScene';
import { SceneNames } from '../Static/SceneNames';
const { ccclass } = _decorator;

@ccclass('LoadingGame')
export class LoadingGame extends Component {

    start() {
        setTimeout(() => {
            RedirectionToScene.redirect(SceneNames.HOME_MAP);
        }, 1000);
    }
}

