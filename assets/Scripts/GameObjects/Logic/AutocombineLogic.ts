import { _decorator, Component } from 'cc';
import { SecondaryInterface } from '../../UI/SecondaryInterface';
import { TypesModals } from '../../Static/TypesModals';
import { AutocombineStorageController } from '../../Controllers/StorageControllers/AutocombineStorageController';
import { GameStorageController } from '../../Controllers/StorageControllers/GameStorageController';
const { ccclass, property } = _decorator;

@ccclass('AutocombineLogic')
export class AutocombineLogic extends Component {

    clickAutocombine() {
        if (AutocombineStorageController.getAllProfit() > 0) {
            GameStorageController.addCoins(AutocombineStorageController.getAllProfit());
            AutocombineStorageController.clearAllProfit();
        }
        else {
            SecondaryInterface.instance.openFirstModal(TypesModals.AUTOCOMBINE);
        }
    }
}
