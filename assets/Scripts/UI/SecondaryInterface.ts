import { _decorator, Component, Node } from 'cc';
import { RenderCharactersGrid } from '../Characters/RenderCharactersGrid';
import { ModalExperienceInerface } from './Modals/ModalExperience/ModalExperienceInerface';
import { ModalPowerInterface } from './Modals/ModalPower/ModalPowerInterface';
import { TypesModals } from '../Static/TypesModals';
const { ccclass, property } = _decorator;

@ccclass('SecondaryInterface')
export class SecondaryInterface extends Component {

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

    public listOpeningModals: string[] = [];

    start() {
        this.backgraund.active = false;
        this.profile.active = false;
        this.experience.active = false;
        this.powar.active = false;
        this.characters.active = false;
    }

    openModal(type: string) {
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
    }

    openProfile() { this.openModal(TypesModals.PROFILE); }

    openShopCoins() { this.openModal(TypesModals.SHOP_COINS); }

    openShopGems() { this.openModal(TypesModals.SHOP_GEMS); }

    openExperience() { this.openModal(TypesModals.EXPERIENCE); }

    openPower() { this.openModal(TypesModals.POWER); }

    closeAllModals() {
        this.backgraund.active = false;
        this.profile.active = false;
        this.experience.active = false;
        this.powar.active = false;
        this.characters.active = false;
    }

    charactersOpen() {
        RenderCharactersGrid.instance.renderCharacters();
        this.backgraund.active = true;
        this.characters.active = true;
    }

    charactersClose() {
        this.backgraund.active = false;
        this.characters.active = false;
    }


}