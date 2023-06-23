import { _decorator, Component, Node } from 'cc';
import { BackpackStorageController } from '../../../Controllers/StorageControllers/BackpackStorageController';
import { TypesItems } from '../../../Static/TypesItems';
import { GameStorageController } from '../../../Controllers/StorageControllers/GameStorageController';
import { RadarStorage } from '../../../Storage/RadarStorage';
const { ccclass, property } = _decorator;

@ccclass('ModalRadarRewardLogic')
export class ModalRadarRewardLogic extends Component {

    public static instance: ModalRadarRewardLogic;

    onLoad() {
        ModalRadarRewardLogic.instance = this;
    }

    /**
     * при закрытии модалки выдачи награды, начисляются награды
     */

    giveReward() {
        for (let i = 0; i < RadarStorage.instance.task.rewards.length; i++) {
            if (RadarStorage.instance.task.rewards[i].type != TypesItems.EXPERIENCE) {
                BackpackStorageController.addItem(RadarStorage.instance.task.rewards[i].type, RadarStorage.instance.task.rewards[i].quantity);
            }
            else {
                GameStorageController.addExperience(RadarStorage.instance.task.rewards[i].quantity);
            }
        }

        // RadarStorageController.addRadarExperience(1);
        // RadarStorageController.reduceRadarTask(RadarStorage.instance.task);

        // RadarStorageController.reduceRadarAvailableMissions(1); //добавить при победе в миссии
    }

}