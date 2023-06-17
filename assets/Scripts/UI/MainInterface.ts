import { _decorator, Component, Label, Node, v3 } from 'cc';
import { GameStorageController } from '../Controllers/StorageControllers/GameStorageController';
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

    @property({ type: Node })
    public mainNode: Node

    onLoad() {
        MainInterface.instance = this;
        this.updateAmountCoins();
        this.updateAmountGems();
        this.updateCountLevel();
        this.updateCountPower();
    }

    resizeMainInterface(raito = 1) {
        this.mainNode.setScale(v3(raito, raito, this.mainNode.scale.z));
    }

    updateAmountCoins() {
        let coins = ConvertLargeNumber.convert(GameStorageController.getCoins());

        this.amountCoins.string = coins;
    }

    updateAmountGems() {
        let gems = ConvertLargeNumber.convert(GameStorageController.getGems());

        this.amountGems.string = gems;
    }

    updateCountLevel() {
        let level = "Ур. " + GameStorageController.getLevel().toString();

        this.countLevel.string = level;
    }

    updateCountPower() {
        let power = GameStorageController.getPower().toString();

        this.countPower.string = GameStorageController.getPower().toString();
    }
}


