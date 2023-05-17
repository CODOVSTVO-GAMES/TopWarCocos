import { _decorator, Component, Node } from 'cc';
import { ModalCharacterPumpingInterface } from '../ModalCharacterPumping/ModalCharacterPumpingInterface';
import { ModalCharacterInfoIntarface } from './ModalCharacterInfoInterface';
import { TypesModalPumping } from '../../../../Static/TypesModalPumping';
import { ModalCharacterPumpingLogic } from '../ModalCharacterPumping/ModalCharacterPumpingLogic';
import { ModalCharacterGridInterface } from '../ModalCharactersGridInterface';
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
        ModalCharacterGridInterface.instance.renderCharacters();
        ModalCharacterInfoIntarface.instance.renderCharacter(this.characterIndex);
        this.modal.active = false;
    }

    modalParametersOpen() {
        ModalCharacterPumpingLogic.instance.characterIndex = this.characterIndex;
        ModalCharacterPumpingInterface.instance.renderModalPumping(TypesModalPumping.PARAMETERS);
        this.modalPumping.active = true;
    }

    modalPumpingLevelOpen() {
        ModalCharacterPumpingLogic.instance.characterIndex = this.characterIndex;
        ModalCharacterPumpingInterface.instance.renderModalPumping(TypesModalPumping.PUMPING_LEVEL);
        this.modalPumping.active = true;
    }

    modalPumpingStarsOpen() {
        ModalCharacterPumpingLogic.instance.characterIndex = this.characterIndex;
        ModalCharacterPumpingInterface.instance.renderModalPumping(TypesModalPumping.PUMPING_STARS);
        this.modalPumping.active = true;
    }

    modalPumpingClose() {
        this.modalPumping.active = false;
    }
}