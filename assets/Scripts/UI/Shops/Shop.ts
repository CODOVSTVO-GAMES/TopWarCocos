import { _decorator, Component } from 'cc';
import { SpawnObjects } from '../../SpawnObjects';
import { TypesObjects } from '../../Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('Shop')
export class Shop extends Component {

    buyitem(event, customEventData) {
        if (Number(customEventData) == 0) {
            SpawnObjects.instance.spawnObjectsNearby(TypesObjects.BARRACKS_AIR, 1, 14);
        }
        else if (Number(customEventData) == 1) {
            SpawnObjects.instance.spawnObjectsNearby(TypesObjects.BARRACKS_MARINE, 1, 14);
        }
        else if (Number(customEventData) == 2) {
            SpawnObjects.instance.spawnObjectsNearby(TypesObjects.BARRACKS_OVERLAND, 1, 14);
        }
        else if (Number(customEventData) == 3) {
            SpawnObjects.instance.spawnObjectsNearby(TypesObjects.GOLD_MINE, 1, 14);
        }
        else if (Number(customEventData) == 4) {
            SpawnObjects.instance.spawnObjectsNearby(TypesObjects.AUTOCOMBINE, 1, 14);
        }
    }
}

