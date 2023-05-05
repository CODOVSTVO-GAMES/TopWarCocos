import { _decorator, Component } from 'cc';
import { SpawnObjects } from '../../SpawnObjects';
import { TypesObjects } from '../../Static/TypesObjects';
import { ObjectParameters } from '../../ObjectParameters';
const { ccclass, property } = _decorator;

@ccclass('BarracksLogic')
export class BarracksLogic extends Component {

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    @property({ type: ObjectParameters })
    public arrrrrrrrrr: ObjectParameters[] = [];

    public createTroop() {
        if (this.objectParameters.type == TypesObjects.BARRACKS_AIR) {
            this.arrrrrrrrrr.push(SpawnObjects.instance.spawnObjectsNearby(TypesObjects.TROOP_AIR, this.objectParameters.level, this.getComponent(ObjectParameters).index));
        }
        else if (this.objectParameters.type == TypesObjects.BARRACKS_MARINE) {
            this.arrrrrrrrrr.push(SpawnObjects.instance.spawnObjectsNearby(TypesObjects.TROOP_MARINE, this.objectParameters.level, this.getComponent(ObjectParameters).index));
        }
        else if (this.objectParameters.type == TypesObjects.BARRACKS_OVERLAND) {
            this.arrrrrrrrrr.push(SpawnObjects.instance.spawnObjectsNearby(TypesObjects.TROOP_OVERLAND, this.objectParameters.level, this.getComponent(ObjectParameters).index));
        }
        // this.delay();
    }

    // delay() {
    //     setTimeout(() => {
    //         this.arrrrrrrrrr[0].offTransparencyObject();
    //     }, 1000);
    // }
}
