import { _decorator, Component, Node } from 'cc';
import { MapController } from '../../MapController';
import { ObjectParameters } from '../../ObjectParameters';
const { ccclass, property } = _decorator;

@ccclass('BattleLogic')
export class BattleLogic extends Component {

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    public click() {
        MapController.setObjectParameter(null, this.objectParameters.type, this.objectParameters.index);
        this.node.destroy();
    }
}

