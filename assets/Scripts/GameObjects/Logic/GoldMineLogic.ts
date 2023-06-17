import { _decorator, Component } from 'cc';
import { ObjectParameters } from '../../ObjectParameters';
import { GameStorageController } from '../../Controllers/StorageControllers/GameStorageController';
import { ConfigStorageController } from '../../Controllers/StorageControllers/ConfigStorageController';
import { AutocombineStorageController } from '../../Controllers/StorageControllers/AutocombineStorageController';
const { ccclass, property } = _decorator;

@ccclass('GoldMineLogic')
export class GoldMineLogic extends Component {

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    collect() {
        if (AutocombineStorageController.getTimeGoldMine(this.objectParameters.index) == 0) {
            GameStorageController.addCoins(ConfigStorageController.getProdictionInTimeGoldMineByLevel(this.objectParameters.level));
        }
    }
}
