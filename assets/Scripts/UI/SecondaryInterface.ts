import { _decorator, Component, Node } from 'cc';
import { ModalExperienceInerface } from './Modals/ModalExperience/ModalExperienceInerface';
import { ModalPowerInterface } from './Modals/ModalPower/ModalPowerInterface';
import { TypesModals } from '../Static/TypesModals';
import { ModalCharacterGridInterface } from './Modals/Characters/ModalCharactersGridInterface';
import { ModalCommandPostInterface } from './Modals/ModalCommandPost/ModalCommandPostInterface';
import { ModalAutocombineInterface } from './Modals/ModalAutocombine/ModalAutocombineInterface';
import { ModalRadarInterface } from './Modals/ModalRadar/ModalRadarInterface';
const { ccclass, property } = _decorator;

@ccclass('SecondaryInterface')
export class SecondaryInterface extends Component {

    public static instance: SecondaryInterface;

    @property({ type: Node })
    public backgraund: Node;

    @property({ type: Node })
    public profile: Node;

    @property({ type: Node })
    public shopCoins: Node;

    @property({ type: Node })
    public shopGems: Node;

    @property({ type: Node })
    public experience: Node;

    @property({ type: Node })
    public powar: Node;

    @property({ type: Node })
    public characters: Node;

    @property({ type: Node })
    public commandPost: Node;

    @property({ type: Node })
    public autocombine: Node;

    public listOpeningModals: string[] = [];

    public activeModal: string;

    onLoad() {
        SecondaryInterface.instance = this;
    }

    start() {
        this.closeAllModals();
    }

    openModal(type: string) {
        this.activeModal = type;
        if (type == TypesModals.PROFILE) {
            this.backgraund.active = true;
            this.profile.active = true;
        }
        else if (type == TypesModals.SHOP_COINS) {
            this.backgraund.active = true;
            this.shopCoins.active = true;
        }
        else if (type == TypesModals.SHOP_GEMS) {
            this.backgraund.active = true;
            this.shopGems.active = true;
        }
        else if (type == TypesModals.EXPERIENCE) {
            ModalExperienceInerface.instance.updateInterface();
            this.backgraund.active = true;
            this.experience.active = true;
        }
        else if (type == TypesModals.POWER) {
            ModalPowerInterface.instance.updateInterface();
            this.backgraund.active = true;
            this.powar.active = true;
        }
        else if (type == TypesModals.CHARACTERS) {
            ModalCharacterGridInterface.instance.renderCharacters();
            this.backgraund.active = true;
            this.characters.active = true;
        }
        else if (type == TypesModals.COMMAND_POST) {
            ModalCommandPostInterface.instance.updateInterface();
            this.backgraund.active = true;
            this.commandPost.active = true;
        }
        else if (type == TypesModals.AUTOCOMBINE) {
            ModalAutocombineInterface.instance.updateInterface();
            this.backgraund.active = true;
            this.autocombine.active = true;
        }
        else if (type == TypesModals.RADAR) {
            ModalRadarInterface.instance.updateInterface();
            this.backgraund.active = true;
            this.autocombine.active = true;
        }
    }

    openProfile() { this.openModal(TypesModals.PROFILE); }

    openShopCoins() { this.openModal(TypesModals.SHOP_COINS); }

    openShopGems() { this.openModal(TypesModals.SHOP_GEMS); }

    openExperience() { this.openModal(TypesModals.EXPERIENCE); }

    openPower() { this.openModal(TypesModals.POWER); }

    openCharacters() { this.openModal(TypesModals.CHARACTERS); }

    openCommandPost() { this.openModal(TypesModals.COMMAND_POST); }

    openAutocombine() { this.openModal(TypesModals.AUTOCOMBINE); }

    openRadar() { this.openModal(TypesModals.RADAR); }

    closeModal() {
        this.backgraund.active = false;
        if (this.activeModal == TypesModals.PROFILE) {
            this.profile.active = false;
        }
        else if (this.activeModal == TypesModals.COMMAND_POST) {
            this.commandPost.active = false;
        }
    }

    closeAllModals() {
        this.backgraund.active = false;
        this.profile.active = false;
        this.shopCoins.active = false;
        this.shopGems.active = false;
        this.experience.active = false;
        this.powar.active = false;
        this.characters.active = false;
        this.commandPost.active = false;
        this.autocombine.active = false;
    }
}