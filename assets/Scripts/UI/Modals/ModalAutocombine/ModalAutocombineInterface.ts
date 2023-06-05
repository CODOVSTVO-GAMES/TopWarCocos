import { _decorator, Component, Label } from 'cc';
import { ControllerHomeMapStorage } from '../../../Storage/Controllers/ControllerHomeMapStorage';
import { TypesObjects } from '../../../Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('ModalAutocombineInterface')
export class ModalAutocombineInterface extends Component {

    public static instance: ModalAutocombineInterface;

    @property({ type: Label })
    public quantityWorkGoldMine: Label;

    @property({ type: Label })
    public la: Label;

    onLoad() {
        ModalAutocombineInterface.instance = this;
    }

    updateInterface() {
        this.quantityWorkGoldMine.string = ControllerHomeMapStorage.getQuantityObjectsByType(TypesObjects.GOLD_MINE).toString() + "/10";
        // this.la.string = ":dadadadada";
    }
}

