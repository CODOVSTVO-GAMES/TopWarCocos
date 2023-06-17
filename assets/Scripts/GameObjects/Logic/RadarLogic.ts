import { _decorator, Component, Node } from 'cc';
import { SecondaryInterface } from '../../UI/SecondaryInterface';
import { TypesModals } from '../../Static/TypesModals';
import { RadarStorageController } from '../../Controllers/StorageControllers/RadarStorageController';
const { ccclass, property } = _decorator;

@ccclass('RadarLogic')
export class RadarLogic extends Component {

    start() {
        RadarStorageController.updateRadarAnimation();
    }

    clickRadar() {
        SecondaryInterface.instance.openFirstModal(TypesModals.RADAR);
    }
}