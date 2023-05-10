import { _decorator, Component } from 'cc';
import { ObjectParameters } from '../../ObjectParameters';
import { ControllerGameStorage } from '../../Storage/Controllers/ControllerGameStorage';
import { ConfigStorage } from '../../Storage/ConfigStorage';
const { ccclass, property } = _decorator;

@ccclass('GoldMineLogic')
export class GoldMineLogic extends Component {

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    start() {
        this.collect();
    }

    collect() {
        if (this.node) {
            setTimeout(() => {
                ControllerGameStorage.addCoins(ConfigStorage.instance.getProductionInTimeMineByLevel(this.objectParameters.level));
                return this.collect();
            }, 60000);
        }
    }
}

