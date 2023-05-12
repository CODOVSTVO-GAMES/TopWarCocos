import { _decorator, Component, Node } from 'cc';
import { ModalCharacterPumpingInterface } from '../ModalCharacterPumping/ModalCharacterPumpingInterface';
import { ModalCharacterInfoIntarface } from './ModalCharacterInfoInterface';
import { TypesModalPumping } from '../../../../Static/TypesModalPumping';
import { ModalCharacterPumpingLogic } from '../ModalCharacterPumping/ModalCharacterPumpingLogic';
const { ccclass, property } = _decorator;

@ccclass('ModalCharacterInfoLogic')
export class ModalCharacterInfoLogic extends Component {

    @property({ type: Node })
    public modal: Node;

    @property({ type: Node })
    public modalPumping: Node;

    public characterIndex: number;

    start() {
        this.modal.active = false;
        this.modalPumping.active = false;
    }

    modalOpen(event, customEventData) {
        this.characterIndex = customEventData;
        this.modal.active = ModalCharacterInfoIntarface.instance.renderCharacter(customEventData);
    }

    modalClose() {
        this.modal.active = false;
    }

    modalParametersOpen() {
        ModalCharacterPumpingInterface.instance.renderModalPumping(TypesModalPumping.PARAMETERS);
        ModalCharacterPumpingLogic.instance.characterIndex = this.characterIndex;
        this.modalPumping.active = true;
    }

    modalPumpingLevelOpen() {
        ModalCharacterPumpingInterface.instance.renderModalPumping(TypesModalPumping.PUMPING_LEVEL);
        ModalCharacterPumpingLogic.instance.characterIndex = this.characterIndex;
        this.modalPumping.active = true;
    }

    modalPumpingStarsOpen() {
        ModalCharacterPumpingInterface.instance.renderModalPumping(TypesModalPumping.PUMPING_STARS);
        ModalCharacterPumpingLogic.instance.characterIndex = this.characterIndex;
        this.modalPumping.active = true;
    }

    modalPumpingClose() {
        this.modalPumping.active = false;
    }
}