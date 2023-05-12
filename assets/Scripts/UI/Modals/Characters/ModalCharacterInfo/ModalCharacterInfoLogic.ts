import { _decorator, Component, Node } from 'cc';
import { ModalCharacterPumpingInterface } from '../ModalCharacterPumping/ModalCharacterPumpingInterface';
import { ModalCharacterInfoIntarface } from './ModalCharacterInfoInterface';
import { TypesModalPumping } from '../../../../Static/TypesModalPumping';
const { ccclass, property } = _decorator;

@ccclass('ModalCharacterInfoLogic')
export class ModalCharacterInfoLogic extends Component {

    @property({ type: Node })
    public modal: Node;

    @property({ type: Node })
    public modalPumping: Node;

    modalOpen(event, customEventData) {
        this.modal.active = ModalCharacterInfoIntarface.instance.renderCharacter(customEventData);
    }

    modalClose() {
        this.modal.active = false;
    }

    modalPumpingOpen() {
        ModalCharacterPumpingInterface.instance.renderModalPumping(TypesModalPumping.PUMPING_LEVEL);
        this.modalPumping.active = true;
    }

    modalPumpingClose() {
        this.modalPumping.active = false;
    }
}