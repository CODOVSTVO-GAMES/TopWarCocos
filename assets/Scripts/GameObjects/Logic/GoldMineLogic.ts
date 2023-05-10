import { _decorator, Component } from 'cc';
import { ObjectParameters } from '../../ObjectParameters';
import { ControllerGameStorage } from '../../Storage/Controllers/ControllerGameStorage';
import { ControllerConfigStorage } from '../../Storage/Controllers/ControllerConfigStorage';
const { ccclass, property } = _decorator;

@ccclass('GoldMineLogic')
export class GoldMineLogic extends Component {

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    public alo: number = 0;

    start() {
        this.work();
    }

    work() {
        if (this.node) {
            setTimeout(() => {
                this.alo -= 0.02;
                this.objectParameters.getGoldMineInterface().render(this.alo);
                if (this.alo <= -1) {
                    return;
                }
                this.work();
            }, 100);
        }
    }

    collect() {
        if (this.alo <= -1) {
            this.alo = 0;
            ControllerGameStorage.addCoins(ControllerConfigStorage.getProductionInTimeMineByLevel(this.objectParameters.level));
            this.work();
        }
    }
}

