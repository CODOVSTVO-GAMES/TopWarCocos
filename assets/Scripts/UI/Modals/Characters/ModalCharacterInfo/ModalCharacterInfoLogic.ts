import { _decorator, Component, Node, Animation } from 'cc';
import { ModalCharacterPumpingInterface } from '../ModalCharacterPumping/ModalCharacterPumpingInterface';
import { ModalCharacterInfoIntarface } from './ModalCharacterInfoInterface';
import { TypesModalPumping } from '../../../../Static/TypesModalPumping';
import { ModalCharacterPumpingLogic } from '../ModalCharacterPumping/ModalCharacterPumpingLogic';
import { ModalCharacterGridInterface } from '../ModalCharactersGridInterface';
import { TypesAnimation } from '../../../../Static/TypesAnimation';
const { ccclass, property } = _decorator;

@ccclass('ModalCharacterInfoLogic')
export class ModalCharacterInfoLogic extends Component {

    @property({ type: Node })
    public modal: Node;

    @property({ type: Node })
    public modalPumping: Node;

    @property({ type: Animation })
    public modalPumpingAnimation: Animation;

    public characterIndex: number;

    start() {
        this.modal.active = false;
        this.modalPumping.active = false;
    }

    modalOpen(event, customEventData) {
        // this.characterIndex = customEventData;
        // this.modal.active = ModalCharacterInfoIntarface.instance.renderCharacter(this.characterIndex);
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
        this.modalPumpingAnimation.play(TypesAnimation.OPEN_MODAL);
    }

    modalPumpingLevelOpen() {
        ModalCharacterPumpingLogic.instance.characterIndex = this.characterIndex;
        ModalCharacterPumpingInterface.instance.renderModalPumping(TypesModalPumping.PUMPING_LEVEL);
        this.modalPumping.active = true;
        this.modalPumpingAnimation.play(TypesAnimation.OPEN_MODAL);
    }

    modalPumpingStarsOpen() {
        ModalCharacterPumpingLogic.instance.characterIndex = this.characterIndex;
        ModalCharacterPumpingInterface.instance.renderModalPumping(TypesModalPumping.PUMPING_STARS);
        this.modalPumping.active = true;
        this.modalPumpingAnimation.play(TypesAnimation.OPEN_MODAL);
    }

    modalPumpingClose() {
        this.modalPumpingAnimation.play(TypesAnimation.CLOSE_MODAL);
        setTimeout(() => this.modalPumping.active = false, 85);
    }
}