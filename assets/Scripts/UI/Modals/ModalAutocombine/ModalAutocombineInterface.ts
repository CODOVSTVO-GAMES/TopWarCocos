import { _decorator, Component, Label } from 'cc';
import { ConvertLargeNumber } from '../../../Other/ConvertLargeNumber';
import { AutocombineStorageController } from '../../../Controllers/StorageControllers/AutocombineStorageController';
const { ccclass, property } = _decorator;

@ccclass('ModalAutocombineInterface')
export class ModalAutocombineInterface extends Component {

    public static instance: ModalAutocombineInterface;

    @property({ type: Label })
    public quantityWorkGoldMine: Label;

    @property({ type: Label })
    public quantityProfit: Label;

    @property({ type: Label })
    public quantityCollect: Label;

    onLoad() {
        ModalAutocombineInterface.instance = this;
    }

    updateInterface() {
        this.quantityWorkGoldMine.string = "Рабочий золотой рудник " + AutocombineStorageController.getQuantityWorkGoldMine() + "/10";
        this.quantityProfit.string = "Можете сразу получить 6 часов дохода золота: " + ConvertLargeNumber.convert(AutocombineStorageController.getQuantityProfit() * 360);
        this.quantityCollect.string = "Сегодня собрано: " + AutocombineStorageController.getQuantityCollect() + "/6";
    }
}

