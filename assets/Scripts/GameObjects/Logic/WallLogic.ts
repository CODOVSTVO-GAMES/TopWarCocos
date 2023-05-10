import { _decorator, Component, Node } from 'cc';
import { SpawnObjects } from '../../SpawnObjects';
import { ObjectParameters } from '../../ObjectParameters';
import { TypesObjects } from '../../Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('WallLogic')
export class WallLogic extends Component {

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    public click() {
        SpawnObjects.instance.spawnObjectsPos(TypesObjects.BATTLE, 1, this.objectParameters.index);
        this.node.destroy();
    }
}
