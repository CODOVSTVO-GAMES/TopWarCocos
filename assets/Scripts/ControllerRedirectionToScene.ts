import { _decorator, Component, Node } from 'cc';
import { RedirectionToScene } from './Other/RedirectionToScene';
import { SceneNames } from './Static/SceneNames';
const { ccclass, property } = _decorator;

@ccclass('ControllerRedirectionToScene')
export class ControllerRedirectionToScene extends Component {
    start() {

    }

    radirectHome() {
        RedirectionToScene.redirect(SceneNames.HOME_MAP);
    }
}