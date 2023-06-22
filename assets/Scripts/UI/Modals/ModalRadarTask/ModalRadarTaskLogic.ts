import { _decorator, Component, Node } from 'cc';
import { BattleTask } from '../../../Structures/BattleTask';
import { BuferTasks } from '../../../Radar/BuferTasks';
import { ModalRadarTaskInterface } from './ModalRadarTaskInterface';
import { BattleTaskTypes } from '../../../Static/BattleTaskTypes';
import { SecondaryInterface } from '../../SecondaryInterface';
import { MapService } from '../../../Controllers/NetworkControllers/MapService';
import { RadarStorageController } from '../../../Controllers/StorageControllers/RadarStorageController';
const { ccclass, property } = _decorator;

@ccclass('ModalRadarTaskLogic')
export class ModalRadarTaskLogic extends Component {

    public static instance: ModalRadarTaskLogic;

    public taskId: number;

    onLoad() {
        ModalRadarTaskLogic.instance = this;
    }

    /**
     * обработка нажатия на кнопку в модалке, открытие задания либо запуск похода
     */

    pushButton() {
        RadarStorageController.activateTask(this.taskId)
        // if (this.task.type == BattleTaskTypes.TASK_SALVATION) {
        //     if (this.task.status < 1) {

        //         BuferTasks.instance.addTaskSalvation(this.task);
        //         ModalRadarTaskInterface.instance.updateInterface(this.task);
        //     }
        // }
        // else if (this.task.type == BattleTaskTypes.TASK_PERSONAL) {
        //     MapService.attackEnemy(this.task.id)
        //     BuferTasks.instance.addTaskPersonal(this.task);
        //     SecondaryInterface.instance.closeSecondLayoutModal();
        //     SecondaryInterface.instance.closeAllModals();

        //     let random = Math.floor(Math.random() * 100);
        //     if (random < 25) {
        //         SecondaryInterface.instance.openWireCut();
        //     }
        //     else if (random < 50) {
        //         SecondaryInterface.instance.openBombDisposal();
        //     }
        //     else if (random < 75) {
        //         SecondaryInterface.instance.openQuestion();
        //     }
        //     else {
        //         SecondaryInterface.instance.openSwith();
        //     }
        // }
    }
}