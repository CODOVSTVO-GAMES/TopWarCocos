import { _decorator, Component, Node } from 'cc';
import { CharactersStorage } from '../../../../Storage/CharactersStorage';
const { ccclass, property } = _decorator;

@ccclass('ModalCharacterPumpingLogic')
export class ModalCharacterPumpingLogic extends Component {

    public static instance: ModalCharacterPumpingLogic;

    public characterIndex: number;

    onLoad() {
        ModalCharacterPumpingLogic.instance = this;
    }

    saveCharacter(index: number) {
        this.characterIndex = index;
    }

    spendBooks(quantity: number, typeBook: number) {
        // CharactersStorage.instance.characters[this.characterIndex].
        
    }
}