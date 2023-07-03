import { _decorator, Component } from 'cc';
import { TypesCharacters } from '../../../../Static/TypesCharacters';
import { ModalCharacterPumpingInterface } from './ModalCharacterPumpingInterface';
import { CharacterInfo } from '../../../../Structures/CharacterInfo';
import { ModalCharacterInfoIntarface } from '../ModalCharacterInfo/ModalCharacterInfoInterface';
import { TypesItems } from '../../../../Static/TypesItems';
import { BackpackPresenter } from '../../../../Presenter/BackpackPresenter';
import { CharactersPresenter } from '../../../../Presenter/CharactersPresenter';
import { CharactersModel } from '../../../../Model/CharactersModel';
const { ccclass, property } = _decorator;

@ccclass('ModalCharacterPumpingLogic')
export class ModalCharacterPumpingLogic extends Component {

    public static instance: ModalCharacterPumpingLogic;

    public characterIndex: number;

    onLoad() {
        ModalCharacterPumpingLogic.instance = this;
    }

    /**
     * при нажатии на книжку к персонажу добавляется опыт
     * при нажатии на поднять зв. если фрагментов достаточно то прокачается звездность персонажа
     */

    pushBook(event, customEventData) {
        let exp = 0;
        switch (customEventData) {
            case "0":
                if (BackpackPresenter.getQuantityItemByType(TypesItems.BOOK_EXPERIENCE_WHITE) > 0) {
                    exp = 300;
                    BackpackPresenter.reduceItemBackpack(TypesItems.BOOK_EXPERIENCE_WHITE, 1);
                }
                break;
            case "1":
                if (BackpackPresenter.getQuantityItemByType(TypesItems.BOOK_EXPERIENCE_GREEN) > 0) {
                    exp = 1000;
                    BackpackPresenter.reduceItemBackpack(TypesItems.BOOK_EXPERIENCE_GREEN, 1);
                }
                break;
            case "2":
                if (BackpackPresenter.getQuantityItemByType(TypesItems.BOOK_EXPERIENCE_BLUE) > 0) {
                    exp = 3000;
                    BackpackPresenter.reduceItemBackpack(TypesItems.BOOK_EXPERIENCE_BLUE, 1);
                }
                break;
            case "3":
                if (BackpackPresenter.getQuantityItemByType(TypesItems.BOOK_EXPERIENCE_PURPLE) > 0) {
                    exp = 10000;
                    BackpackPresenter.reduceItemBackpack(TypesItems.BOOK_EXPERIENCE_PURPLE, 1);
                }
                break;
            case "4":
                if (BackpackPresenter.getQuantityItemByType(TypesItems.BOOK_EXPERIENCE_ORANGE) > 0) {
                    exp = 30000;
                    BackpackPresenter.reduceItemBackpack(TypesItems.BOOK_EXPERIENCE_ORANGE, 1);
                }
                break;
        }
        this.spendBooks(exp);
    }

    spendBooks(quantity: number) {
        CharactersPresenter.addExperience(quantity, this.characterIndex);
    }

    upgradeStars() {
        let character = CharactersModel.instance.characters[this.characterIndex];
        let typeFragment = this.getTypeFragment(character);
        let inventoryQuantity = BackpackPresenter.getQuantityItemByType(typeFragment);
        if (inventoryQuantity > 4) {
            character.stars++;
            BackpackPresenter.reduceItemBackpack(typeFragment, 4);
            CharactersModel.instance.recalculationCharacter(this.characterIndex);
            ModalCharacterInfoIntarface.instance.renderCharacter(this.characterIndex);
            ModalCharacterPumpingInterface.instance.renderModalPumpingStars();
            // CharactrerStorageController.saveStorage();
        }
    }

    getTypeFragment(character: CharacterInfo): string {
        switch (character.codeName) {
            case TypesCharacters.BLACK_WIDOW:
                return TypesItems.FRAGMENT_BLACK_WIDOW;
            case TypesCharacters.CHARACTER_1:
                return TypesItems.FRAGMENT_CHARACTER_1;
            case TypesCharacters.CHARACTER_2:
                return TypesItems.FRAGMENT_CHARACTER_2;
            case TypesCharacters.CHARACTER_3:
                return TypesItems.FRAGMENT_CHARACTER_3;
            case TypesCharacters.CHARACTER_4:
                return TypesItems.FRAGMENT_CHARACTER_4;
            case TypesCharacters.CHARACTER_5:
                return TypesItems.FRAGMENT_CHARACTER_5;
            case TypesCharacters.CHARACTER_6:
                return TypesItems.FRAGMENT_CHARACTER_6;
            case TypesCharacters.CHARACTER_7:
                return TypesItems.FRAGMENT_CHARACTER_7;
            case TypesCharacters.CHARACTER_8:
                return TypesItems.FRAGMENT_CHARACTER_8;
            case TypesCharacters.CHARACTER_9:
                return TypesItems.FRAGMENT_CHARACTER_9;
            case TypesCharacters.CHARACTER_10:
                return TypesItems.FRAGMENT_CHARACTER_10;
            case TypesCharacters.CHARACTER_11:
                return TypesItems.FRAGMENT_CHARACTER_11;
            case TypesCharacters.CHARACTER_12:
                return TypesItems.FRAGMENT_CHARACTER_12;
            case TypesCharacters.CHARACTER_13:
                return TypesItems.FRAGMENT_CHARACTER_13;
            case TypesCharacters.CHARACTER_14:
                return TypesItems.FRAGMENT_CHARACTER_14;
        }
    }
}