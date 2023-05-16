import { _decorator, Component, Node } from 'cc';
import { CharactersStorage } from '../../../../Storage/CharactersStorage';
import { ControllerCharactrerStorage } from '../../../../Storage/Controllers/ControllerCharactrerStorage';
import { ControllerInventoryStorage } from '../../../../Storage/Controllers/ControllerInventoryStorage';
import { TypesInventory } from '../../../../Static/TypesInventory';
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
}