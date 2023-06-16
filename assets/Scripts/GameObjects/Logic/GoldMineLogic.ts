import { _decorator, Component } from 'cc';
import { ObjectParameters } from '../../ObjectParameters';
import { ControllerGameStorage } from '../../Storage/Controllers/ControllerGameStorage';
import { ControllerConfigStorage } from '../../Storage/Controllers/ControllerConfigStorage';
import { ControllerAutocombineStorage } from '../../Storage/Controllers/ControllerAutocombineStorage';
const { ccclass, property } = _decorator;

@ccclass('GoldMineLogic')
export class GoldMineLogic extends Component {

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    collect() {
        if (ControllerAutocombineStorage.getTimeGoldMine(this.objectParameters.index) == 0) {
            ControllerGameStorage.addCoins(ControllerConfigStorage.getProdictionInTimeGoldMineByLevel(this.objectParameters.level));
        }
    }
}
