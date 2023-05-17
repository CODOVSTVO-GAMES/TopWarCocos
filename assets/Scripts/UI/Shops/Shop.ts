import { _decorator, Component } from 'cc';
import { SpawnObjects } from '../../SpawnObjects';
import { TypesObjects } from '../../Static/TypesObjects';
import { ControllerCommandPostStorage } from '../../Storage/Controllers/ControllerCommandPostStorage';
const { ccclass } = _decorator;

@ccclass('Shop')
export class Shop extends Component {

    buyitem(event, customEventData) {
        if (Number(customEventData) == 0) {
            SpawnObjects.instance.spawnObjectsNearby(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelBuildBarracksAir(), 14);
        }
        else if (Number(customEventData) == 1) {
            SpawnObjects.instance.spawnObjectsNearby(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelBuildBarracksMarine(), 14);
        }
        else if (Number(customEventData) == 2) {
            SpawnObjects.instance.spawnObjectsNearby(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelBuildBarracksOverland(), 14);
        }
        else if (Number(customEventData) == 3) {
            SpawnObjects.instance.spawnObjectsNearby(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelBuildGoldMine(), 14);
        }
        else if (Number(customEventData) == 4) {
            SpawnObjects.instance.spawnObjectsNearby(TypesObjects.AUTOCOMBINE, 1, 14);
        }
    }
}

