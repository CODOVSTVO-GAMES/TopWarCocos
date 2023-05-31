import { _decorator, Component } from 'cc';
import { SecondaryInterface } from '../../SecondaryInterface';
const { ccclass } = _decorator;

@ccclass('ModalPowerLogic')
export class ModalPowerLogic extends Component {

    upgradeTerritoryPower() {
        SecondaryInterface.instance.closeAllModals();

    }

    upgradeTechnoPower() {
        SecondaryInterface.instance.closeAllModals();

    }

    upgradeHeroPower() {
        SecondaryInterface.instance.closeAllModals();

    }

    upgradeArsenalPower() {
        SecondaryInterface.instance.closeAllModals();

    }

    upgradeProfessionPower() {
        SecondaryInterface.instance.closeAllModals();

    }

    upgradeFormationPower() {
        SecondaryInterface.instance.closeAllModals();

    }
}

