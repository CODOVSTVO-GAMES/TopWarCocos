import { _decorator, Component } from 'cc';
import { SpawnObjects } from '../../SpawnObjects';
import { TypesObjects } from '../../Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('Shop')
export class Shop extends Component {

    buyitem(event, customEventData) {
        if (Number(customEventData) == 0) {
            SpawnObjects.instance.spawnObjectsRandom(TypesObjects.BARTACK_OVERLAND, 1);
        }
        else if (Number(customEventData) == 1) {
            SpawnObjects.instance.spawnObjectsRandom(TypesObjects.GOLD_MINE, 1);
        }
    }
}

