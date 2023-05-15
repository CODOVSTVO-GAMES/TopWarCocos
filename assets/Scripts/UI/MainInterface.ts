import { _decorator, Component, Label } from 'cc';
import { ControllerGameStorage } from '../Storage/Controllers/ControllerGameStorage';
import { ConvertLargeNumber } from '../Other/ConvertLargeNumber';
const { ccclass, property } = _decorator;

@ccclass('MainInterface')
export class MainInterface extends Component {

    public static instance: MainInterface;

    @property({ type: Label })
    public amountCoins: Label;

    @property({ type: Label })
    public amountGems: Label;

    @property({ type: Label })
    public countLevel: Label;

    @property({ type: Label })
    public countPower: Label;

    onLoad() {
        MainInterface.instance = this;
    }

    start() {
        this.updateAmountCoins();
        this.updateAmountGems();
        this.updateCountLevel();
        this.updateCountPower();
    }

    updateAmountCoins() {
        this.amountCoins.string = ConvertLargeNumber.convert(ControllerGameStorage.getCoins());
    }

    updateAmountGems() {
        this.amountGems.string = ConvertLargeNumber.convert(ControllerGameStorage.getGems());
    }

    updateCountLevel() {
        this.countLevel.string = "Ур. " + ControllerGameStorage.getLevel().toString();
    }

    updateCountPower() {
        this.countPower.string = ControllerGameStorage.getPower().toString();
    }
}


