import { _decorator, Component, Node } from 'cc';
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
}