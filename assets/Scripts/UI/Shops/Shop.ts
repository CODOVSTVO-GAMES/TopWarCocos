import { _decorator, Component } from 'cc';
import { SpawnObjects } from '../../SpawnObjects';
import { TypesObjects } from '../../Static/TypesObjects';
import { ControllerCommandPostStorage } from '../../Storage/Controllers/ControllerCommandPostStorage';
const { ccclass } = _decorator;

@ccclass('Shop')
export class Shop extends Component {

    buyitem(event, customEventData) {
        if (Number(customEventData) == 0) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelBuildBarracksAir(), 14);
        }
        else if (Number(customEventData) == 1) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelBuildBarracksMarine(), 14);
        }
        else if (Number(customEventData) == 2) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelBuildBarracksOverland(), 14);
        }
        else if (Number(customEventData) == 3) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelBuildGoldMine(), 14);
        }
        else if (Number(customEventData) == 4) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.AUTOCOMBINE, 1, 14);
        }
        else if (Number(customEventData) == 5) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.REPAIR_SHOP, 1, 14);
        }
        else if (Number(customEventData) == 6) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.BANK, 1, 14);
        }
    }
}

