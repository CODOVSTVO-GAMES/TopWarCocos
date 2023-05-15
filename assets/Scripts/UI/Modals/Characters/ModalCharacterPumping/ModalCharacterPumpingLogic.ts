import { _decorator, Component, Node } from 'cc';
import { CharactersStorage } from '../../../../Storage/CharactersStorage';
import { ControllerCharactrerStorage } from '../../../../Storage/Controllers/ControllerCharactrerStorage';
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
                exp = 300;
                break;
            case "1":
                exp = 1000;
                break;
            case "2":
                exp = 3000;
                break;
            case "3":
                exp = 10000;
                break;
            case "4":
                exp = 30000;
                break;
        }
        this.spendBooks(exp);
    }

    spendBooks(quantity: number) {
        ControllerCharactrerStorage.addExperience(quantity, this.characterIndex);
    }
}