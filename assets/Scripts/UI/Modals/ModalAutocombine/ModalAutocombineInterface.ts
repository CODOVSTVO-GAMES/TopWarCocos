import { _decorator, Component, Label } from 'cc';
import { ControllerHomeMapStorage } from '../../../Storage/Controllers/ControllerHomeMapStorage';
import { TypesObjects } from '../../../Static/TypesObjects';
import { ControllerConfigStorage } from '../../../Storage/Controllers/ControllerConfigStorage';
import { ConvertLargeNumber } from '../../../Other/ConvertLargeNumber';
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
        this.quantityWorkGoldMine.string = "Рабочий золотой рудник " + ControllerHomeMapStorage.getQuantityObjectsByType(TypesObjects.GOLD_MINE).toString() + "/10";

        let test: number = 0;
        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            if (ControllerHomeMapStorage.getObjectParameter(i) == null) continue;
            if (ControllerHomeMapStorage.getObjectParameter(i).index != i) continue;
            if (ControllerHomeMapStorage.getObjectParameter(i).type != TypesObjects.GOLD_MINE) continue;

            // console.log("PROFIT: " + ControllerConfigStorage.getProdictionInTimeGoldMineByLevel(ControllerHomeMapStorage.getObjectParameter(i).level));

            // test += ControllerConfigStorage.getProdictionInTimeGoldMineByLevel(ControllerHomeMapStorage.getObjectParameter(i).level);
            test += ControllerConfigStorage.getProdictionInTimeGoldMineByLevel(80);



        }
        console.log(test);

        this.quantityProfit.string = "Можете сразу получить 6 часов дохода золота: " + ConvertLargeNumber.convert(test);
        this.quantityCollect.string = "Сегодня собрано: 0/6";
    }
}

