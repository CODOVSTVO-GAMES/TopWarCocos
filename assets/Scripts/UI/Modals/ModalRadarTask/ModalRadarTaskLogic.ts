import { _decorator, Component, Node } from 'cc';
import { RadarTask } from '../../../Structures/RadarTask';
import { RedirectionToScene } from '../../../Other/RedirectionToScene';
import { SceneNames } from '../../../Static/SceneNames';
import { BuferTasks } from '../../../Radar/BuferTasks';
const { ccclass, property } = _decorator;

@ccclass('ModalRadarTaskLogic')
export class ModalRadarTaskLogic extends Component {

    public static instance: ModalRadarTaskLogic;

    public task: RadarTask;

    onLoad() {
        ModalRadarTaskLogic.instance = this;
    }

    pushButton() {
        BuferTasks.instance.addTask(this.task);
        RedirectionToScene.redirect(SceneNames.GLOBAL_MAP);
    }
}