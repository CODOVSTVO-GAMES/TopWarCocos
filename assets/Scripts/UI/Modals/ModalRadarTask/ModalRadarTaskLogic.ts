import { _decorator, Component, Node } from 'cc';
import { RadarTask } from '../../../Structures/RadarTask';
import { BuferTasks } from '../../../Radar/BuferTasks';
import { ModalRadarTaskInterface } from './ModalRadarTaskInterface';
import { TypesRadar } from '../../../Static/TypesRadar';
import { SecondaryInterface } from '../../SecondaryInterface';
import { ModalRadarLogic } from '../ModalRadar/ModalRadarLogic';
const { ccclass, property } = _decorator;

@ccclass('ModalRadarTaskLogic')
export class ModalRadarTaskLogic extends Component {

    public static instance: ModalRadarTaskLogic;

    public task: RadarTask;

    onLoad() {
        ModalRadarTaskLogic.instance = this;
    }

    pushButton() {
        console.log(this.task);
        if (this.task.type == TypesRadar.TASK_SALVATION) {
            if (this.task.status < 1) {
                BuferTasks.instance.addTaskSalvation(this.task);
                ModalRadarTaskInterface.instance.updateInterface(this.task);
            }
        }
        else if (this.task.type == TypesRadar.TASK_DARK_LEGION) {
            if (this.task.status < 1) {
                BuferTasks.instance.addTaskDarkLegion(this.task);
                ModalRadarTaskInterface.instance.updateInterface(this.task);
            }
        }
        else if (this.task.type == TypesRadar.TASK_PERSONAL) {
            BuferTasks.instance.addTaskPersonal(this.task);
            ModalRadarLogic.instance.closeRadarTask();
            SecondaryInterface.instance.closeAllModals();
            let random = Math.floor(Math.random() * 100);
            if (random < 25) {
                SecondaryInterface.instance.openWireCut();
            }
            else if (random < 50) {
                SecondaryInterface.instance.openBombDisposal();
            }
            else if (random < 75) {
                SecondaryInterface.instance.openQuestion();
            }
            else {
                SecondaryInterface.instance.openSwith();
            }
        }
    }
}