import { _decorator, Component } from 'cc';
import { SpawnObjects } from '../../../SpawnObjects';
import { TypesObjects } from '../../../Static/TypesObjects';
import { TypesLocation } from '../../../Static/TypesLocation';
import { ControllerCommandPostStorage } from '../../../Storage/Controllers/ControllerCommandPostStorage';
const { ccclass, property } = _decorator;

@ccclass('ModalShopObjectLogic')
export class ModalShopObjectLogic extends Component {

    buyObject(event, customEventData) {
        if (Number(customEventData) == 0) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.BARRACKS_OVERLAND, TypesLocation.EARTH, ControllerCommandPostStorage.getLevelBuildBarracksAir(), 720);
        }
        else if (Number(customEventData) == 1) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.GOLD_MINE, TypesLocation.EARTH, ControllerCommandPostStorage.getLevelBuildBarracksMarine(), 720);
        }
        else if (Number(customEventData) == 2) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.BARRACKS_MARINE, TypesLocation.WATER, ControllerCommandPostStorage.getLevelBuildBarracksOverland(), 720);
        }
        else if (Number(customEventData) == 3) {
            SpawnObjects.spawnObjectsNearby(TypesObjects.BARRACKS_AIR, TypesLocation.EARTH, ControllerCommandPostStorage.getLevelBuildGoldMine(), 720);
        }
    }
}

