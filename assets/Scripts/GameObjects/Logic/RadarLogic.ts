import { _decorator, Component, Node } from 'cc';
import { SecondaryInterface } from '../../UI/SecondaryInterface';
import { TypesModals } from '../../Static/TypesModals';
const { ccclass, property } = _decorator;

@ccclass('RadarLogic')
export class RadarLogic extends Component {

    clickRadar() {
        SecondaryInterface.instance.openModal(TypesModals.RADAR);
    }
}