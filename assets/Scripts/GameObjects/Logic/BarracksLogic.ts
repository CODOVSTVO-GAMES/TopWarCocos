import { _decorator, Component } from 'cc';
import { SpawnObjects } from '../../SpawnObjects';
import { TypesObjects } from '../../Static/TypesObjects';
import { ObjectParameters } from '../../ObjectParameters';
const { ccclass, property } = _decorator;

@ccclass('BarracksLogic')
export class BarracksLogic extends Component {

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    public createTroop() {
        if (this.objectParameters.type == TypesObjects.BARRACKS_AIR) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.TROOP_AIR, this.objectParameters.level, this.getComponent(ObjectParameters).index);
        }
        else if (this.objectParameters.type == TypesObjects.BARRACKS_MARINE) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.TROOP_MARINE, this.objectParameters.level, this.getComponent(ObjectParameters).index);
        }
        else if (this.objectParameters.type == TypesObjects.BARRACKS_OVERLAND) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.TROOP_OVERLAND, this.objectParameters.level, this.getComponent(ObjectParameters).index);
        }
    }

    wokr() {
        
    }
}
