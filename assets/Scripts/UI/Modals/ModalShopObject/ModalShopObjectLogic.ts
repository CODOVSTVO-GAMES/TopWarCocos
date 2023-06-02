import { _decorator, Component } from 'cc';
import { SpawnObjects } from '../../../SpawnObjects';
import { TypesObjects } from '../../../Static/TypesObjects';
import { TypesLocation } from '../../../Static/TypesLocation';
import { ControllerCommandPostStorage } from '../../../Storage/Controllers/ControllerCommandPostStorage';
import { ControllerGameStorage } from '../../../Storage/Controllers/ControllerGameStorage';
import { ControllerConfigStorage } from '../../../Storage/Controllers/ControllerConfigStorage';
const { ccclass } = _decorator;

@ccclass('ModalShopObjectLogic')
export class ModalShopObjectLogic extends Component {

    buyObject(event, customEventData) {
        if (Number(customEventData) == 0) {
            ControllerGameStorage.reduceCoins(
                ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND,
                    ControllerCommandPostStorage.getLevelBuildBarracksOverland()
                ));
            SpawnObjects.spawnObjectsNearby(TypesObjects.BARRACKS_OVERLAND, TypesLocation.EARTH, ControllerCommandPostStorage.getLevelBuildBarracksOverland(), 720);
        }
        else if (Number(customEventData) == 1) {
            ControllerGameStorage.reduceCoins(
                ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE,
                    ControllerCommandPostStorage.getLevelBuildGoldMine()
                ))
            SpawnObjects.spawnObjectsNearby(TypesObjects.GOLD_MINE, TypesLocation.EARTH, ControllerCommandPostStorage.getLevelBuildGoldMine(), 720);
        }
        else if (Number(customEventData) == 2) {
            ControllerGameStorage.reduceCoins(
                ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE,
                    ControllerCommandPostStorage.getLevelBuildBarracksMarine()
                ))
            SpawnObjects.spawnObjectsNearby(TypesObjects.BARRACKS_MARINE, TypesLocation.WATER, ControllerCommandPostStorage.getLevelBuildBarracksMarine(), 720);
        }
        else if (Number(customEventData) == 3) {
            ControllerGameStorage.reduceCoins(
                ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR,
                    ControllerCommandPostStorage.getLevelBuildBarracksAir()
                ))
            SpawnObjects.spawnObjectsNearby(TypesObjects.BARRACKS_AIR, TypesLocation.EARTH, ControllerCommandPostStorage.getLevelBuildBarracksAir(), 720);
        }
    }
}
