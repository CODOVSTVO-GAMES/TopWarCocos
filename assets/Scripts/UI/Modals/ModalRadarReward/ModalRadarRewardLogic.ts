import { _decorator, Component, Node } from 'cc';
import { InventoryStorageController } from '../../../Controllers/InventoryStorageController';
import { TypesItems } from '../../../Static/TypesItems';
import { GameStorageController } from '../../../Controllers/StorageControllers/GameStorageController';
import { RadarStorageController } from '../../../Controllers/RadarStorageController';
import { ModalRadarLogic } from '../ModalRadar/ModalRadarLogic';
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
                InventoryStorageController.addItem(RadarStorage.instance.task.rewards[i].type, RadarStorage.instance.task.rewards[i].quantity);
            }
            else {
                GameStorageController.addExperience(RadarStorage.instance.task.rewards[i].quantity);
            }
        }
        RadarStorageController.addRadarExperience(1);
        RadarStorageController.reduceRadarTask(RadarStorage.instance.task);
        ModalRadarLogic.instance.spawnNewTasks();
    }
}