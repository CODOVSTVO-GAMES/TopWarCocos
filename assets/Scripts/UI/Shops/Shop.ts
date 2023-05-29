import { _decorator, Component } from 'cc';
import { SpawnObjects } from '../../SpawnObjects';
import { TypesObjects } from '../../Static/TypesObjects';
import { ControllerCommandPostStorage } from '../../Storage/Controllers/ControllerCommandPostStorage';
const { ccclass } = _decorator;

@ccclass('Shop')
export class Shop extends Component {

    buyitem(event, customEventData) {
        if (Number(customEventData) == 0) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.BARRACKS_AIR, ControllerCommandPostStorage.getLevelBuildBarracksAir(), 720);
        }
        else if (Number(customEventData) == 1) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.BARRACKS_MARINE, ControllerCommandPostStorage.getLevelBuildBarracksMarine(), 720);
        }
        else if (Number(customEventData) == 2) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.BARRACKS_OVERLAND, ControllerCommandPostStorage.getLevelBuildBarracksOverland(), 720);
        }
        else if (Number(customEventData) == 3) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.GOLD_MINE, ControllerCommandPostStorage.getLevelBuildGoldMine(), 720);
        }
    }
}

