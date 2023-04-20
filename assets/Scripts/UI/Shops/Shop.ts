import { _decorator, Component, Node } from 'cc';
import { SpawnObjects } from '../../SpawnObjects';
import { TypesObjects } from '../../Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('Shop')
export class Shop extends Component {

    buyitem(event, customEventData) {
        if (Number(customEventData) == 0) {
            SpawnObjects.instance.spawnObjectsNearbyRandom(TypesObjects.BUILD_0);
        }
        else if (Number(customEventData) == 1) {
            SpawnObjects.instance.spawnObjectsNearbyRandom(TypesObjects.BUILD_1);
        }
        else if (Number(customEventData) == 2) {
            SpawnObjects.instance.spawnObjectsNearbyRandom(TypesObjects.BUILD_2);
        }
    }
}

