import { ConfigStorageController } from "../Controllers/StorageControllers/ConfigStorageController"
import { SpawnObjectsOnHomeMap } from "./SpawnObjectsOnHomeMap"
import { CommandPostModel } from "../Model/CommandPostModel"
import { GameModel } from "../Model/GameModel"
import { TypesLocation } from "../Static/TypesLocation"
import { TypesObjects } from "../Static/TypesObjects"
import { TypesTasksGame } from "../Static/TypesTasksGame"
import { TasksGamePresenter } from "./TasksGamePresenter"

export class ShopObjectPresenter {

    public static processingBuyBarrackOverland() {
        let levelObject = CommandPostModel.instance.levelBuildBarracksOverland
        let typeObject = TypesObjects.BARRACKS_OVERLAND
        let price = ConfigStorageController.getPriceBuyBuildingSpawnByTypeAndLevel(typeObject, levelObject)
        let typeLocation = TypesLocation.EARTH

        GameModel.instance.coins -= price
        SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapNearby(typeObject, typeLocation, levelObject, 1532)
        TasksGamePresenter.checkTask(TypesTasksGame.MERGE_BARRACK_OVERLAND, levelObject, 1)
    }

    public static processingBuyBarrackMarine() {
        let levelObject = CommandPostModel.instance.levelBuildBarracksMarine
        let typeObject = TypesObjects.BARRACKS_MARINE
        let price = ConfigStorageController.getPriceBuyBuildingSpawnByTypeAndLevel(typeObject, levelObject)
        let typeLocation = TypesLocation.WATER

        GameModel.instance.coins -= price
        SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapNearby(typeObject, typeLocation, levelObject, 1532)
        TasksGamePresenter.checkTask(TypesTasksGame.MERGE_BARRACK_MARINE, levelObject, 1)
    }

    public static processingBuyBarrackAir() {
        let levelObject = CommandPostModel.instance.levelBuildBarracksAir
        let typeObject = TypesObjects.BARRACKS_AIR
        let price = ConfigStorageController.getPriceBuyBuildingSpawnByTypeAndLevel(typeObject, levelObject)
        let typeLocation = TypesLocation.EARTH

        GameModel.instance.coins -= price
        SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapNearby(typeObject, typeLocation, levelObject, 1532)
        TasksGamePresenter.checkTask(TypesTasksGame.MERGE_BARRACK_AIR, levelObject, 1)
    }

    public static processingBuyGoldMine() {
        let levelObject = CommandPostModel.instance.levelBuildGoldMine
        let typeObject = TypesObjects.GOLD_MINE
        let price = ConfigStorageController.getPriceBuyBuildingSpawnByTypeAndLevel(typeObject, levelObject)
        let typeLocation = TypesLocation.EARTH

        GameModel.instance.coins -= price
        SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapNearby(TypesObjects.GOLD_MINE, typeLocation, levelObject, 1532)
        TasksGamePresenter.checkTask(TypesTasksGame.MERGE_GOLD_MINE, levelObject, 1)
    }
}