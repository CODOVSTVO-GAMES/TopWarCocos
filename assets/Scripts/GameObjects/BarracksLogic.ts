import { _decorator, Component, Node } from 'cc';
import { SpawnObjects } from '../SpawnObjects';
import { TypesObjects } from '../Static/TypesObjects';
import { ObjectParameters } from '../ObjectParameters';
const { ccclass, property } = _decorator;

@ccclass('BarracksLogic')
export class BarracksLogic extends Component {

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    public createTroop() {
        SpawnObjects.instance.spawnObjectsNearby(TypesObjects.TROOP_OVERLAND, 1, this.getComponent(ObjectParameters).index, 2);
    }
}
