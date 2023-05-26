import { _decorator, Component, Node } from 'cc';
import { RadarTask } from '../../../Structures/RadarTask';
import { BuferTasks } from '../../../Radar/BuferTasks';
import { ModalRadarTaskInterface } from './ModalRadarTaskInterface';
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
        ModalRadarTaskInterface.instance.updateInterface(this.task);
    }
}