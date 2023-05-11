import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { CharactersStorage } from '../Storage/CharactersStorage';
const { ccclass, property } = _decorator;

@ccclass('RenderCharacterInfo')
export class RenderCharacterInfo extends Component {

    @property({ type: Node })
    public modal: Node;

    @property({ type: Label })
    public heroName: Label;

    @property({ type: Label })
    public heroType: Label;

    @property({ type: Label })
    public heroLevel: Label;

    @property({ type: Label })
    public damage: Label;

    @property({ type: Label })
    public defense: Label;

    @property({ type: Label })
    public leadership: Label;

    @property({ type: Label })
    public experience: Label;

    @property({ type: Label })
    public combatPower: Label;

    @property({ type: Sprite })
    public sliderLevel: Sprite;

    @property({ type: Sprite })
    public sliderStars: Sprite;

    @property({ type: Sprite })
    public stars: Sprite[] = [];

    renderCharacter(index: number) {
        console.log(CharactersStorage.instance.characters[index]);
    }

    modalOpen(event, customEventData) {
        this.modal.active = true;
    }

    modalClose() {
        this.modal.active = false;
    }
}