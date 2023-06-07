import { _decorator, Component, Node } from 'cc';
import { TypesModalPumping } from '../../../../Static/TypesModalPumping';
import { SecondaryInterface } from '../../../SecondaryInterface';
const { ccclass, property } = _decorator;

@ccclass('ModalCharacterInfoLogic')
export class ModalCharacterInfoLogic extends Component {

    modalParametersOpen() {
        SecondaryInterface.instance.openCharacterPumping({ type: TypesModalPumping.PARAMETERS });
    }

    modalPumpingLevelOpen() {
        SecondaryInterface.instance.openCharacterPumping({ type: TypesModalPumping.PUMPING_LEVEL });
    }

    modalPumpingStarsOpen() {
        SecondaryInterface.instance.openCharacterPumping({ type: TypesModalPumping.PUMPING_STARS });
    }
}