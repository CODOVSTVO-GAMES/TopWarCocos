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
            this.buyBarrackOverland()
        }
        else if (Number(customEventData) == 1) {
            this.buyGoldMine()
        }
        else if (Number(customEventData) == 2) {
            this.buyBarrackMarine()
        }
        else if (Number(customEventData) == 3) {
            this.buyBarrackAir()
        }
    }

    private buyBarrackOverland() {
        let barrackLevel = ControllerCommandPostStorage.getLevelBuildBarracksOverland()
        let typeObject = TypesObjects.BARRACKS_OVERLAND
        let price = ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(typeObject, barrackLevel)
        let typeLocation = TypesLocation.EARTH

        ControllerGameStorage.reduceCoins(price);
        SpawnObjects.spawnObjectsNearby(typeObject, typeLocation, barrackLevel, 720);
    }

    private buyBarrackMarine() {
        let barrackLevel = ControllerCommandPostStorage.getLevelBuildBarracksMarine()
        let typeObject = TypesObjects.BARRACKS_MARINE
        let price = ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(typeObject, barrackLevel)
        let typeLocation = TypesLocation.WATER

        ControllerGameStorage.reduceCoins(price)
        SpawnObjects.spawnObjectsNearby(typeObject, typeLocation, barrackLevel, 720);
    }

    private buyBarrackAir() {
        let barrackLevel = ControllerCommandPostStorage.getLevelBuildBarracksAir()
        let typeObject = TypesObjects.BARRACKS_AIR
        let price = ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(typeObject, barrackLevel)
        let typeLocation = TypesLocation.EARTH

        ControllerGameStorage.reduceCoins(price)
        SpawnObjects.spawnObjectsNearby(typeObject, typeLocation, barrackLevel, 720);
    }

    private buyGoldMine() {
        let mineLevel = ControllerCommandPostStorage.getLevelBuildGoldMine()
        let typeObject = TypesObjects.GOLD_MINE
        let price = ControllerConfigStorage.getPriceBuyBuildingSpawnByTypeAndLevel(typeObject, mineLevel)
        let typeLocation = TypesLocation.EARTH

        ControllerGameStorage.reduceCoins(price)
        SpawnObjects.spawnObjectsNearby(TypesObjects.GOLD_MINE, typeLocation, mineLevel, 720);
    }

}
