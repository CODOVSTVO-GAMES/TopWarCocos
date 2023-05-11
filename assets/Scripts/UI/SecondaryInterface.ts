import { _decorator, Component, Node } from 'cc';
import { RenderCharactersGrid } from '../Characters/RenderCharactersGrid';
import { ModalExperienceInerface } from './Modals/ModalExperience/ModalExperienceInerface';
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
    public characters: Node;

    public listOpeningModals: string[] = [];

    start() {
        this.backgraund.active = false;
        this.experience.active = false;
        this.characters.active = false;
    }

    expOpen() {
        ModalExperienceInerface.instance.updateInterface();
        this.backgraund.active = true;
        this.experience.active = true;
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

    closeAllModals() {
        this.backgraund.active = false;
        this.experience.active = false;
        this.characters.active = false;
    }
}