import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { CharactersStorage } from '../../../../Storage/CharactersStorage';
const { ccclass, property } = _decorator;

@ccclass('ModalCharacterInfoIntarface')
export class ModalCharacterInfoIntarface extends Component {

    public static instance: ModalCharacterInfoIntarface;

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

    onLoad() {
        ModalCharacterInfoIntarface.instance = this;
    }

    renderCharacter(index: number): boolean {

        let character = CharactersStorage.instance.characters[index];
        if (character != null) {
            this.heroName.string = character.codeName;
            this.heroType.string = character.type;
            this.heroLevel.string = character.level.toString();
            this.damage.string = character.damage.toString();
            this.defense.string = character.defense.toString();
            this.leadership.string = character.leadership.toString();
            this.experience.string = character.exp.toString();
            this.combatPower.string = "210";

            return true;
        }
        return false;
    }
}