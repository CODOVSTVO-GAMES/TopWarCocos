import { _decorator, Component } from 'cc';
import { SecondaryInterface } from '../../UI/SecondaryInterface';
import { TypesModals } from '../../Static/TypesModals';
import { ControllerAutocombineStorage } from '../../Storage/Controllers/ControllerAutocombineStorage';
import { ControllerGameStorage } from '../../Storage/Controllers/ControllerGameStorage';
const { ccclass, property } = _decorator;

@ccclass('AutocombineLogic')
export class AutocombineLogic extends Component {

    clickAutocombine() {
        if (ControllerAutocombineStorage.getAllProfit() > 0) {
            ControllerGameStorage.addCoins(ControllerAutocombineStorage.getAllProfit());
            ControllerAutocombineStorage.initAllProfit();
        }
        else {
            SecondaryInterface.instance.openFirstModal(TypesModals.AUTOCOMBINE);
        }
    }
}
