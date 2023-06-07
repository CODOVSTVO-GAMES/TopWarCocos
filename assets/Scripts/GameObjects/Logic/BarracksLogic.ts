import { _decorator, Component, Node } from 'cc';
import { SpawnObjects } from '../../SpawnObjects';
import { TypesObjects } from '../../Static/TypesObjects';
import { ObjectParameters } from '../../ObjectParameters';
import { TypesLocation } from '../../Static/TypesLocation';
const { ccclass, property } = _decorator;

@ccclass('BarracksLogic')
export class BarracksLogic extends Component {

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    @property({ type: Node })
    public message: Node;

    @property({ type: Node })
    public backgraundObject: Node;

    public typesTroop: string[] = [];

    public check: boolean = false;

    start() {
        if (this.objectParameters.type == TypesObjects.BARRACKS_MARINE) {
            this.backgraundObject.active = false;
        }
    }

    public createTroop() {
        if (this.objectParameters.type == TypesObjects.BARRACKS_AIR) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.TROOP_AIR, TypesLocation.EARTH, this.objectParameters.level, this.getComponent(ObjectParameters).index);
        }
        else if (this.objectParameters.type == TypesObjects.BARRACKS_MARINE) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.TROOP_MARINE, TypesLocation.WATER, this.objectParameters.level, this.getComponent(ObjectParameters).index);
        }
        else if (this.objectParameters.type == TypesObjects.BARRACKS_OVERLAND) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.TROOP_OVERLAND, TypesLocation.EARTH, this.objectParameters.level, this.getComponent(ObjectParameters).index);
        }
    }

    wokr() {

    }

    openMessage() {
        this.message.active = true;
    }

    closeMessage() {
        this.message.active = false;
    }
}
