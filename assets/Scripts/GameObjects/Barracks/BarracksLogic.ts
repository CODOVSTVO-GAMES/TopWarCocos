import { _decorator, Component, Node } from 'cc';
import { ObjectParameters } from '../../ObjectParameters';
import { SpawnObjects } from '../../SpawnObjects';
import { TypesObjects } from '../../Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('BarracksLogic')
export class BarracksLogic extends Component {

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    public createTroop() {
        console.log("createTroop");
        SpawnObjects.instance.spawnObjectsPos(TypesObjects.TROOP_OVERLAND, 1, 0);
    }
}

