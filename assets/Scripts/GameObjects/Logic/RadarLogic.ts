import { _decorator, Component, Node } from 'cc';
import { SecondaryInterface } from '../../UI/SecondaryInterface';
import { TypesModals } from '../../Static/TypesModals';
import { ControllerRadarStorage } from '../../Storage/Controllers/ControllerRadarStorage';
const { ccclass, property } = _decorator;

@ccclass('RadarLogic')
export class RadarLogic extends Component {

    start() {
        ControllerRadarStorage.updateRadarAnimation();
    }

    clickRadar() {
        SecondaryInterface.instance.openModal(TypesModals.RADAR);
    }
}