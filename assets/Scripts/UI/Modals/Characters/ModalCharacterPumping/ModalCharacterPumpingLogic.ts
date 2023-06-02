import { _decorator, Component, Node } from 'cc';
import { ControllerCharactrerStorage } from '../../../../Storage/Controllers/ControllerCharactrerStorage';
import { ControllerInventoryStorage } from '../../../../Storage/Controllers/ControllerInventoryStorage';
import { CharactersStorage } from '../../../../Storage/CharactersStorage';
import { TypesCharacters } from '../../../../Static/TypesCharacters';
import { ModalCharacterPumpingInterface } from './ModalCharacterPumpingInterface';
import { CharacterInfo } from '../../../../Structures/CharacterInfo';
import { ModalCharacterInfoIntarface } from '../ModalCharacterInfo/ModalCharacterInfoInterface';
import { TypesItems } from '../../../../Static/TypesItems';
const { ccclass, property } = _decorator;

@ccclass('ModalCharacterPumpingLogic')
export class ModalCharacterPumpingLogic extends Component {

    public static instance: ModalCharacterPumpingLogic;

    public characterIndex: number;

    onLoad() {
        ModalCharacterPumpingLogic.instance = this;
    }

    pushBook(event, customEventData) {
        let exp = 0;
        switch (customEventData) {
            case "0":
                if (ControllerInventoryStorage.getQuantityByType(TypesItems.BOOK_EXPERIENCE_WHITE) > 0) {
                    exp = 300;
                    ControllerInventoryStorage.reduceItem(TypesItems.BOOK_EXPERIENCE_WHITE, 1);
                }
                break;
            case "1":
                if (ControllerInventoryStorage.getQuantityByType(TypesItems.BOOK_EXPERIENCE_GREEN) > 0) {
                    exp = 1000;
                    ControllerInventoryStorage.reduceItem(TypesItems.BOOK_EXPERIENCE_GREEN, 1);
                }
                break;
            case "2":
                if (ControllerInventoryStorage.getQuantityByType(TypesItems.BOOK_EXPERIENCE_BLUE) > 0) {
                    exp = 3000;
                    ControllerInventoryStorage.reduceItem(TypesItems.BOOK_EXPERIENCE_BLUE, 1);
                }
                break;
            case "3":
                if (ControllerInventoryStorage.getQuantityByType(TypesItems.BOOK_EXPERIENCE_PURPLE) > 0) {
                    exp = 10000;
                    ControllerInventoryStorage.reduceItem(TypesItems.BOOK_EXPERIENCE_PURPLE, 1);
                }
                break;
            case "4":
                if (ControllerInventoryStorage.getQuantityByType(TypesItems.BOOK_EXPERIENCE_ORANGE) > 0) {
                    exp = 30000;
                    ControllerInventoryStorage.reduceItem(TypesItems.BOOK_EXPERIENCE_ORANGE, 1);
                }
                break;
        }
        this.spendBooks(exp);
    }

    spendBooks(quantity: number) {
        ControllerCharactrerStorage.addExperience(quantity, this.characterIndex);
    }

    upgradeStars() {
        let character = CharactersStorage.instance.characters[this.characterIndex];
        let typeFragment = this.getTypeFragment(character);
        if (ControllerInventoryStorage.getQuantityByType(typeFragment) > 4) {
            character.stars++;
            ControllerInventoryStorage.reduceItem(typeFragment, 4);
            CharactersStorage.instance.recalculationCharacter(this.characterIndex);
            ModalCharacterInfoIntarface.instance.renderCharacter(this.characterIndex);
            ModalCharacterPumpingInterface.instance.renderModalPumpingStars();
            ControllerCharactrerStorage.updateCharactrerStorage();
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