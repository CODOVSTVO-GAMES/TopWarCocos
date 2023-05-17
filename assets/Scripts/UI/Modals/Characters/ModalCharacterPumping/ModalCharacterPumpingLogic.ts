import { _decorator, Component, Node } from 'cc';
import { ControllerCharactrerStorage } from '../../../../Storage/Controllers/ControllerCharactrerStorage';
import { ControllerInventoryStorage } from '../../../../Storage/Controllers/ControllerInventoryStorage';
import { TypesInventory } from '../../../../Static/TypesInventory';
import { CharactersStorage } from '../../../../Storage/CharactersStorage';
import { TypesCharacters } from '../../../../Static/TypesCharacters';
import { ModalCharacterPumpingInterface } from './ModalCharacterPumpingInterface';
import { CharacterInfo } from '../../../../Structures/CharacterInfo';
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
                if (ControllerInventoryStorage.getQuantityByType(TypesInventory.WHITE_BOOK_EXPERIENCE) > 0) {
                    exp = 300;
                    ControllerInventoryStorage.reduceItem(TypesInventory.WHITE_BOOK_EXPERIENCE, 1);
                }
                break;
            case "1":
                if (ControllerInventoryStorage.getQuantityByType(TypesInventory.GREEN_BOOK_EXPERIENCE) > 0) {
                    exp = 1000;
                    ControllerInventoryStorage.reduceItem(TypesInventory.GREEN_BOOK_EXPERIENCE, 1);
                }
                break;
            case "2":
                if (ControllerInventoryStorage.getQuantityByType(TypesInventory.BLUE_BOOK_EXPERIENCE) > 0) {
                    exp = 3000;
                    ControllerInventoryStorage.reduceItem(TypesInventory.BLUE_BOOK_EXPERIENCE, 1);
                }
                break;
            case "3":
                if (ControllerInventoryStorage.getQuantityByType(TypesInventory.PURPLE_BOOK_EXPERIENCE) > 0) {
                    exp = 10000;
                    ControllerInventoryStorage.reduceItem(TypesInventory.PURPLE_BOOK_EXPERIENCE, 1);
                }
                break;
            case "4":
                if (ControllerInventoryStorage.getQuantityByType(TypesInventory.ORANGE_BOOK_EXPERIENCE) > 0) {
                    exp = 30000;
                    ControllerInventoryStorage.reduceItem(TypesInventory.ORANGE_BOOK_EXPERIENCE, 1);
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
            ModalCharacterPumpingInterface.instance.renderModalPumpingStars();
        }
    }

    getTypeFragment(character: CharacterInfo): string {
        switch (character.codeName) {
            case TypesCharacters.BLACK_WIDOW:
                return TypesInventory.FRAGMENT_BLACK_WIDOW;
            case TypesCharacters.CHARACTER_1:
                return TypesInventory.FRAGMENT_CHARACTER_1;
            case TypesCharacters.CHARACTER_2:
                return TypesInventory.FRAGMENT_CHARACTER_2;
            case TypesCharacters.CHARACTER_3:
                return TypesInventory.FRAGMENT_CHARACTER_3;
            case TypesCharacters.CHARACTER_4:
                return TypesInventory.FRAGMENT_CHARACTER_4;
            case TypesCharacters.CHARACTER_5:
                return TypesInventory.FRAGMENT_CHARACTER_5;
            case TypesCharacters.CHARACTER_6:
                return TypesInventory.FRAGMENT_CHARACTER_6;
            case TypesCharacters.CHARACTER_7:
                return TypesInventory.FRAGMENT_CHARACTER_7;
            case TypesCharacters.CHARACTER_8:
                return TypesInventory.FRAGMENT_CHARACTER_8;
            case TypesCharacters.CHARACTER_9:
                return TypesInventory.FRAGMENT_CHARACTER_9;
            case TypesCharacters.CHARACTER_10:
                return TypesInventory.FRAGMENT_CHARACTER_10;
            case TypesCharacters.CHARACTER_11:
                return TypesInventory.FRAGMENT_CHARACTER_11;
            case TypesCharacters.CHARACTER_12:
                return TypesInventory.FRAGMENT_CHARACTER_12;
            case TypesCharacters.CHARACTER_13:
                return TypesInventory.FRAGMENT_CHARACTER_13;
            case TypesCharacters.CHARACTER_14:
                return TypesInventory.FRAGMENT_CHARACTER_14;
        }
    }
}