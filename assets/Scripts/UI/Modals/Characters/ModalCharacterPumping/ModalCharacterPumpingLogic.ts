import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ModalCharacterPumpingLogic')
export class ModalCharacterPumpingLogic extends Component {

    public characterIndex: number;

    saveCharacter(index: number) {
        this.characterIndex = index;
    }
}