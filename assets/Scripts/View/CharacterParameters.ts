import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { CharactersModel } from '../Model/CharactersModel';
import { ConfigPresenter } from '../Presenter/ConfigPresenter';
import { SecondaryInterface } from '../UI/SecondaryInterface';
import { TypesModalPumping } from '../Static/TypesModalPumping';
const { ccclass, property } = _decorator;

@ccclass('CharacterParameters')
export class CharacterParameters extends Component {

    public static instance: CharacterParameters

    @property({ type: Label })
    public heroName: Label

    @property({ type: Label })
    public heroType: Label

    @property({ type: Label })
    public heroLevel: Label

    @property({ type: Label })
    public damage: Label

    @property({ type: Label })
    public defense: Label

    @property({ type: Label })
    public leadership: Label

    @property({ type: Label })
    public experience: Label

    @property({ type: Label })
    public combatPower: Label

    @property({ type: Sprite })
    public sliderLevel: Sprite

    @property({ type: Sprite })
    public sliderStars: Sprite

    @property({ type: Node })
    public stars: Node[] = []

    protected onLoad(): void {
        CharacterParameters.instance = this
    }

    modalParametersOpen() {
        SecondaryInterface.instance.openCharacterPumping({ type: TypesModalPumping.PARAMETERS })
    }

    modalPumpingLevelOpen() {
        SecondaryInterface.instance.openCharacterPumping({ type: TypesModalPumping.PUMPING_LEVEL })
    }

    modalPumpingStarsOpen() {
        SecondaryInterface.instance.openCharacterPumping({ type: TypesModalPumping.PUMPING_STARS })
    }

    renderCharacter(index: number): boolean {
        let character = CharactersModel.instance.characters[index]
        let chatacterLvlExp = ConfigPresenter.getHeroLevelExpirienceByTypeAndLevel(character.type, character.level + 1)
        if (character != null) {
            this.heroName.string = character.codeName
            this.heroType.string = character.type
            this.heroLevel.string = character.level.toString()
            this.damage.string = character.damage.toString()
            this.defense.string = character.defense.toString()
            this.leadership.string = character.leadership.toString()
            this.experience.string = character.experience.toString()
            this.combatPower.string = "210"
            this.sliderLevel.fillRange = character.experience / chatacterLvlExp
            this.sliderStars.fillRange = character.stars % 5 / 5
            for (let i = 0; i < this.stars.length; i++) {
                this.stars[i].active = character.stars / 5 > i ? true : false
            }
            return true
        }
        return false
    }
}