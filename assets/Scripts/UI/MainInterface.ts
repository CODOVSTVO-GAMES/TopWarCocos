import { _decorator, Component, Label } from 'cc';
import { Storage } from '../Storage/Storage';
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
        this.amountCoins.string = Storage.instance.getCoins().toString();
    }

    updateAmountGems() {
        this.amountGems.string = Storage.instance.getGems().toString();
    }

    updateCountLevel() {
        this.countLevel.string = Storage.instance.getLevel().toString();
    }

    updateCountPower() {
        this.countPower.string = Storage.instance.getPower().toString();
    }
}


