import { _decorator, Component, Node } from 'cc';
import { ModalRadarRewardInterface } from './ModalRadarRewardInterface';
import { RadarTask } from '../../../Structures/RadarTask';
import { ModalRadarTaskLogic } from '../ModalRadarTask/ModalRadarTaskLogic';
import { ControllerInventoryStorage } from '../../../Storage/Controllers/ControllerInventoryStorage';
import { TypesItems } from '../../../Static/TypesItems';
import { ControllerGameStorage } from '../../../Storage/Controllers/ControllerGameStorage';
import { ControllerRadarStorage } from '../../../Storage/Controllers/ControllerRadarStorage';
import { ModalRadarLogic } from '../ModalRadar/ModalRadarLogic';
const { ccclass, property } = _decorator;

@ccclass('ModalRadarRewardLogic')
export class ModalRadarRewardLogic extends Component {

    public static instance: ModalRadarRewardLogic;

    @property({ type: Node })
    public modalRadarReward: Node;

    public task: RadarTask;

    onLoad() {
        ModalRadarRewardLogic.instance = this;
    }

    openModalReward(task: RadarTask) {
        this.task = task;
        this.modalRadarReward.active = true;
        ModalRadarRewardInterface.instance.updateInterface(task);
    }

    closeModalReward() {
        this.modalRadarReward.active = false;
        for (let i = 0; i < this.task.rewards.length; i++) {
            if (this.task.rewards[i].type != TypesItems.EXPERIENCE) {
                ControllerInventoryStorage.addItem(this.task.rewards[i].type, this.task.rewards[i].quantity);
            }
            else {
                ControllerGameStorage.addExperience(this.task.rewards[i].quantity);
            }
        }
        ControllerRadarStorage.addRadarExperience(1);
        ControllerRadarStorage.reduceRadarTask(this.task);
        ModalRadarLogic.instance.endTask();
    }
}