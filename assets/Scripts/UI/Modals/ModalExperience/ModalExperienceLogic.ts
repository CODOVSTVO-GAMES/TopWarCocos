import { _decorator, Component } from 'cc';
import { SecondaryInterface } from '../../SecondaryInterface';
const { ccclass, property } = _decorator;

@ccclass('ModalExperienceLogic')
export class ModalExperienceLogic extends Component {

    touchOnLearnTechnology() {
        SecondaryInterface.instance.closeAllModals();

    }

    touchOnRadarAssignment() {
        SecondaryInterface.instance.closeAllModals();

    }

    touchOnBuildingConstruction() {
        SecondaryInterface.instance.closeAllModals();

    }

    touchOnUnitTraining() {
        SecondaryInterface.instance.closeAllModals();

    }
}

