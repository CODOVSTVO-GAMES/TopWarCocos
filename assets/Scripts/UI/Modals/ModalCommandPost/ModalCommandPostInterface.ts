import { _decorator, Component, Node, Label } from 'cc';
import { ControllerGameStorage } from '../../../Storage/Controllers/ControllerGameStorage';
import { ConvertLargeNumber } from '../../../Other/ConvertLargeNumber';
const { ccclass, property } = _decorator;

@ccclass('ModalCommandPostInterface')
export class ModalCommandPostInterface extends Component {

    public static instance: ModalCommandPostInterface;

    @property({ type: Label })
    public level: Label;

    @property({ type: Label })
    public coins: Label;

    @property({ type: Label })
    public gems: Label;

    onLoad() {
        ModalCommandPostInterface.instance = this;
    }

    updateInterface() {
        this.level.string = "Ур. " + ControllerGameStorage.getLevel().toString();
        this.coins.string = ConvertLargeNumber.convert(ControllerGameStorage.getCoins());
        this.gems.string = ConvertLargeNumber.convert(ControllerGameStorage.getGems());
    }
}

