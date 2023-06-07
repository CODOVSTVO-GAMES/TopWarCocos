import { _decorator, Component } from 'cc';
import { ObjectParameters } from '../../ObjectParameters';
import { ControllerGameStorage } from '../../Storage/Controllers/ControllerGameStorage';
import { ControllerConfigStorage } from '../../Storage/Controllers/ControllerConfigStorage';
const { ccclass, property } = _decorator;

@ccclass('GoldMineLogic')
export class GoldMineLogic extends Component {

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    public time: number = 0;

    start() {
        this.work();
    }

    work() {
        if (this.node) {
            setTimeout(() => {
                this.time -= 0.0002;
                if (this.objectParameters.getGoldMineInterface()) {
                    this.objectParameters.getGoldMineInterface().render(this.time);
                }
                if (this.time <= -1) {
                    return;
                }
                this.work();
            }, 10);
        }
    }

    collect() {
        if (this.time <= -1) {
            this.time = 0;
            ControllerGameStorage.addCoins(ControllerConfigStorage.getProdictionInTimeGoldMineByLevel(this.objectParameters.level));
            this.work();
        }
    }
}

