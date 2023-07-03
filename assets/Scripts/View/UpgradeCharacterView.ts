import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { TypesModalPumping } from '../Static/TypesModalPumping';
import { CharactersModel } from '../Model/CharactersModel';
import { ConfigPresenter } from '../Presenter/ConfigPresenter';
import { BackpackPresenter } from '../Presenter/BackpackPresenter';
import { TypesItems } from '../Static/TypesItems';
import { TypesCharacters } from '../Static/TypesCharacters';
import { CharacterInfo } from '../Structures/CharacterInfo';
import { CharactersPresenter } from '../Presenter/CharactersPresenter';
import { CharacterParameters } from './CharacterParameters';
const { ccclass, property } = _decorator;

@ccclass('UpgradeCharacterView')
export class UpgradeCharacterView extends Component {

    public static instance: UpgradeCharacterView

    @property({ type: Node })
    public tabs: Node[] = []

    @property({ type: Label })
    public level: Label

    @property({ type: Label })
    public experience: Label

    @property({ type: Label })
    public starTitle: Label

    @property({ type: Sprite })
    public slider: Sprite

    @property({ type: Sprite })
    public sliderStars: Sprite

    @property({ type: Node })
    public stars: Node[] = []

    @property({ type: Label })
    public quantity: Label[] = []

    @property({ type: Sprite })
    public flags: Sprite[] = []

    public characterIndex: number

    protected onLoad(): void {
        UpgradeCharacterView.instance = this

        for (let i = 0; i < this.tabs.length; i++) {
            this.tabs[i].active = false
        }
    }

    pushBook(event, customEventData) {
        let experience = 0

        if (customEventData == "0") {
            if (BackpackPresenter.getQuantityItemByType(TypesItems.BOOK_EXPERIENCE_WHITE) > 0) {
                experience = 300
                BackpackPresenter.reduceItemBackpack(TypesItems.BOOK_EXPERIENCE_WHITE, 1);
            }
        }
        else if (customEventData == "1") {
            if (BackpackPresenter.getQuantityItemByType(TypesItems.BOOK_EXPERIENCE_GREEN) > 0) {
                experience = 1000
                BackpackPresenter.reduceItemBackpack(TypesItems.BOOK_EXPERIENCE_GREEN, 1)
            }
        }
        else if (customEventData == "2") {
            if (BackpackPresenter.getQuantityItemByType(TypesItems.BOOK_EXPERIENCE_BLUE) > 0) {
                experience = 3000
                BackpackPresenter.reduceItemBackpack(TypesItems.BOOK_EXPERIENCE_BLUE, 1)
            }
        }
        else if (customEventData == "3") {
            if (BackpackPresenter.getQuantityItemByType(TypesItems.BOOK_EXPERIENCE_PURPLE) > 0) {
                experience = 10000
                BackpackPresenter.reduceItemBackpack(TypesItems.BOOK_EXPERIENCE_PURPLE, 1)
            }
        }
        else if (customEventData == "4") {
            if (BackpackPresenter.getQuantityItemByType(TypesItems.BOOK_EXPERIENCE_ORANGE) > 0) {
                experience = 30000
                BackpackPresenter.reduceItemBackpack(TypesItems.BOOK_EXPERIENCE_ORANGE, 1)
            }
        }
        this.spendBooks(experience)
    }

    spendBooks(quantity: number) {
        CharactersPresenter.addExperience(quantity, this.characterIndex)
    }

    upgradeStars() {
        let character = CharactersModel.instance.characters[this.characterIndex]
        let typeFragment = this.getTypeFragment(character)
        let inventoryQuantity = BackpackPresenter.getQuantityItemByType(typeFragment)

        if (inventoryQuantity > 4) {
            character.stars += 1
            BackpackPresenter.reduceItemBackpack(typeFragment, 4)
            CharactersModel.instance.recalculationCharacter(this.characterIndex)
            CharacterParameters.instance.renderCharacter(this.characterIndex)
            this.renderModalPumpingStars();
            // CharactrerStorageController.saveStorage();
        }
    }

    getTypeFragment(character: CharacterInfo): string {
        if (character.codeName == TypesCharacters.BLACK_WIDOW) return TypesItems.FRAGMENT_BLACK_WIDOW
        else if (character.codeName == TypesCharacters.CHARACTER_1) return TypesItems.FRAGMENT_CHARACTER_1
        else if (character.codeName == TypesCharacters.CHARACTER_2) return TypesItems.FRAGMENT_CHARACTER_2
        else if (character.codeName == TypesCharacters.CHARACTER_3) return TypesItems.FRAGMENT_CHARACTER_3
        else if (character.codeName == TypesCharacters.CHARACTER_4) return TypesItems.FRAGMENT_CHARACTER_4
        else if (character.codeName == TypesCharacters.CHARACTER_5) return TypesItems.FRAGMENT_CHARACTER_5
        else if (character.codeName == TypesCharacters.CHARACTER_6) return TypesItems.FRAGMENT_CHARACTER_6
        else if (character.codeName == TypesCharacters.CHARACTER_7) return TypesItems.FRAGMENT_CHARACTER_7
        else if (character.codeName == TypesCharacters.CHARACTER_8) return TypesItems.FRAGMENT_CHARACTER_8
        else if (character.codeName == TypesCharacters.CHARACTER_9) return TypesItems.FRAGMENT_CHARACTER_9
        else if (character.codeName == TypesCharacters.CHARACTER_10) return TypesItems.FRAGMENT_CHARACTER_10
        else if (character.codeName == TypesCharacters.CHARACTER_11) return TypesItems.FRAGMENT_CHARACTER_11
        else if (character.codeName == TypesCharacters.CHARACTER_12) return TypesItems.FRAGMENT_CHARACTER_12
        else if (character.codeName == TypesCharacters.CHARACTER_13) return TypesItems.FRAGMENT_CHARACTER_13
        else if (character.codeName == TypesCharacters.CHARACTER_14) return TypesItems.FRAGMENT_CHARACTER_14
    }

    pushButtonTab(event, customEventData) {
        // по идее это должно быть в ModalCharacterPumpingLogic эта штука переключает вкладки в модалке
        if (customEventData == "0") this.renderModalPumping(TypesModalPumping.PARAMETERS)
        else if (customEventData == "1") this.renderModalPumping(TypesModalPumping.PUMPING_LEVEL);
        else if (customEventData == "2") this.renderModalPumping(TypesModalPumping.PUMPING_STARS);
    }

    renderModalPumping(tab: string) {
        if (tab == TypesModalPumping.PARAMETERS) {
            this.tabs[0].active = true
            this.tabs[1].active = false
            this.tabs[2].active = false
        }
        else if (TypesModalPumping.PUMPING_LEVEL) {
            this.tabs[0].active = false
            this.tabs[1].active = true
            this.tabs[2].active = false
            this.renderModalPumpingLevel()
        }
        else if (TypesModalPumping.PUMPING_STARS) {
            this.tabs[0].active = false
            this.tabs[1].active = false
            this.tabs[2].active = true
            this.renderModalPumpingStars()
        }
    }

    renderModalPumpingLevel() {
        let character = CharactersModel.instance.characters[this.characterIndex]
        if (character != null) {
            let targetExp = ConfigPresenter.getHeroLevelExpirienceByTypeAndLevel(character.type, character.level + 1)
            this.level.string = "Ур. " + character.level
            this.experience.string = character.experience + "/" + targetExp
            this.slider.fillRange = character.experience / targetExp
            for (let i = 0; i < this.quantity.length; i++) {
                let inventoryQuantity = BackpackPresenter.getQuantityItemByType(TypesItems.BOOKS[i])
                this.quantity[i].string = "x" + inventoryQuantity
            }
        }
    }

    renderModalPumpingStars() {
        let character = CharactersModel.instance.characters[this.characterIndex]
        if (character != null) {
            let inventoryQuantity = BackpackPresenter.getQuantityItemByType(this.getTypeFragment(character))
            this.starTitle.string = "Фрагменты для след. этапа: " + inventoryQuantity + "/4"
            this.sliderStars.fillRange = character.stars % 5 / 5
            for (let i = 0; i < this.stars.length; i++) {
                let starActive = character.stars / 5 >= i
                this.stars[i].active = starActive
            }
        }
    }
}