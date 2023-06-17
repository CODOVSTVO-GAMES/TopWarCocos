import { _decorator, Component } from 'cc';
import { SpawnObjectsOnHomeMap } from '../../../Logic/SpawnObjectsOnHomeMap';
import { TypesObjects } from '../../../Static/TypesObjects';
import { TypesLocation } from '../../../Static/TypesLocation';
import { CommandPostStorageController } from '../../../Controllers/StorageControllers/CommandPostStorageController';
import { GameStorageController } from '../../../Controllers/StorageControllers/GameStorageController';
import { ConfigStorageController } from '../../../Controllers/StorageControllers/ConfigStorageController';
const { ccclass } = _decorator;

@ccclass('ModalShopObjectLogic')
export class ModalShopObjectLogic extends Component {

    buyObject(event, customEventData) {
        if (Number(customEventData) == 0) {
            this.buyBarrackOverland();
        }
        else if (Number(customEventData) == 1) {
            this.buyGoldMine();
        }
        else if (Number(customEventData) == 2) {
            this.buyBarrackMarine();
        }
        else if (Number(customEventData) == 3) {
            this.buyBarrackAir();
        }
    }

    private buyBarrackOverland() {
        let barrackLevel = CommandPostStorageController.getLevelBuildBarracksOverland();
        let typeObject = TypesObjects.BARRACKS_OVERLAND;
        let price = ConfigStorageController.getPriceBuyBuildingSpawnByTypeAndLevel(typeObject, barrackLevel);
        let typeLocation = TypesLocation.EARTH;

        GameStorageController.reduceCoins(price);
        SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapNearby(typeObject, typeLocation, barrackLevel, 720);
    }

    private buyBarrackMarine() {
        let barrackLevel = CommandPostStorageController.getLevelBuildBarracksMarine();
        let typeObject = TypesObjects.BARRACKS_MARINE;
        let price = ConfigStorageController.getPriceBuyBuildingSpawnByTypeAndLevel(typeObject, barrackLevel);
        let typeLocation = TypesLocation.WATER;

        GameStorageController.reduceCoins(price);
        SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapNearby(typeObject, typeLocation, barrackLevel, 720);
    }

    private buyBarrackAir() {
        let barrackLevel = CommandPostStorageController.getLevelBuildBarracksAir();
        let typeObject = TypesObjects.BARRACKS_AIR;
        let price = ConfigStorageController.getPriceBuyBuildingSpawnByTypeAndLevel(typeObject, barrackLevel);
        let typeLocation = TypesLocation.EARTH;

        GameStorageController.reduceCoins(price);
        SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapNearby(typeObject, typeLocation, barrackLevel, 720);
    }

    private buyGoldMine() {
        let mineLevel = CommandPostStorageController.getLevelBuildGoldMine();
        let typeObject = TypesObjects.GOLD_MINE;
        let price = ConfigStorageController.getPriceBuyBuildingSpawnByTypeAndLevel(typeObject, mineLevel);
        let typeLocation = TypesLocation.EARTH;

        GameStorageController.reduceCoins(price);
        SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapNearby(TypesObjects.GOLD_MINE, typeLocation, mineLevel, 720);
    }

}
