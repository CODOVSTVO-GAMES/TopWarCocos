import { _decorator, Component } from 'cc';
import { SpawnObjectsOnHomeMap } from '../../Logic/SpawnObjectsOnHomeMap';
import { ObjectParameters } from '../../ObjectParameters';
import { TypesObjects } from '../../Static/TypesObjects';
import { TypesLocation } from '../../Static/TypesLocation';
const { ccclass, property } = _decorator;

@ccclass('WallLogic')
export class WallLogic extends Component {

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    public click() {
        SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapPos(TypesObjects.BATTLE, TypesLocation.EARTH, 1, this.objectParameters.index);
        this.node.destroy();
    }
}
