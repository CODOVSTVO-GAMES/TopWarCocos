import { _decorator, Component, Node } from 'cc';
import { ControllerInventoryStorage } from '../../../Storage/Controllers/ControllerInventoryStorage';
import { TypesItems } from '../../../Static/TypesItems';
import { ControllerGameStorage } from '../../../Storage/Controllers/ControllerGameStorage';
import { ControllerRadarStorage } from '../../../Storage/Controllers/ControllerRadarStorage';
import { ModalRadarLogic } from '../ModalRadar/ModalRadarLogic';
import { RadarStorage } from '../../../Storage/RadarStorage';
const { ccclass, property } = _decorator;

@ccclass('ModalRadarRewardLogic')
export class ModalRadarRewardLogic extends Component {

    public static instance: ModalRadarRewardLogic;

    onLoad() {
        ModalRadarRewardLogic.instance = this;
    }

    giveReward() {
        for (let i = 0; i < RadarStorage.instance.task.rewards.length; i++) {
            if (RadarStorage.instance.task.rewards[i].type != TypesItems.EXPERIENCE) {
                ControllerInventoryStorage.addItem(RadarStorage.instance.task.rewards[i].type, RadarStorage.instance.task.rewards[i].quantity);
            }
            else {
                ControllerGameStorage.addExperience(RadarStorage.instance.task.rewards[i].quantity);
            }
        }
        ControllerRadarStorage.addRadarExperience(1);
        ControllerRadarStorage.reduceRadarTask(RadarStorage.instance.task);
        ModalRadarLogic.instance.spawnNewTasks();
    }
}