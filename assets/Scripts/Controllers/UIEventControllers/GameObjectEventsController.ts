import { SpawnObjectsOnHomeMap } from "../../Logic/SpawnObjectsOnHomeMap";
import { ObjectParameters } from "../../ObjectParameters";
import { RedirectionToScene } from "../../Other/RedirectionToScene";
import { HomeMapStructure } from "../../Static/HomeMapStructure";
import { SceneNames } from "../../Static/SceneNames";
import { TypesLocation } from "../../Static/TypesLocation";
import { TypesModals } from "../../Static/TypesModals";
import { TypesObjects } from "../../Static/TypesObjects";
import { BattleStorage } from "../../Storage/BattleStorage";
import { SecondaryInterface } from "../../UI/SecondaryInterface";
import { AutocombineStorageController } from "../StorageControllers/AutocombineStorageController";
import { ConfigStorageController } from "../StorageControllers/ConfigStorageController";
import { GameStorageController } from "../StorageControllers/GameStorageController";
import { HomeMapStorageController } from "../StorageControllers/HomeMapStorageController";
import { TroopStorageController } from "../StorageControllers/TroopStorageController";

export class GameObjectEventsController {

    public static prepClickOnMessage(objectParameters: ObjectParameters) {
        // подготовка выполнения нажатия на сообщение сверху обьекта

        if (objectParameters == null) {
            return console.log("object Parameters not found")
        }

        if (objectParameters.type == TypesObjects.BARRACKS_AIR) {
            this.processingBarrackAir(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.BARRACKS_MARINE) {
            this.processingBarrackMarine(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.BARRACKS_OVERLAND) {
            this.processingBarrackOverland(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.COMMAND_POST) {
            this.processingCommandPost()
        }
        else if (objectParameters.type == TypesObjects.GOLD_MINE) {
            this.processingGoldMine(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.BANK) {
            this.processingBank()
        }
        else if (objectParameters.type == TypesObjects.AUTOCOMBINE) {
            this.processingAutocombine()
        }
        else if (objectParameters.type == TypesObjects.RADAR) {
            this.processingRadar(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.WHOLE_MANIPULATOR) {
            this.processingWholeManipulator(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.PADDED_MANIPULATOR) {
            this.processingPaddedManipulator(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.REPAIR_SHOP) {
            this.processingRepairShop()
            SecondaryInterface.instance.openFirstModal(TypesModals.REPAIR_SHOP)
        }
        else if (objectParameters.type == TypesObjects.WALL) {
            this.processingWall(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.BATTLE) {
            this.processingBattle(objectParameters)
        }
    }

    public static prepClickOnGameObejct(objectParameters: ObjectParameters) {
        // подготовка выполнения нажатия на обьект 

        if (objectParameters == null) {
            return console.log("object Parameters not found")
        }

        if (objectParameters.type == TypesObjects.TREASURES) {
            this.processingTreasures(objectParameters)
        }
    }

    // ===============================================================================

    private static processingBarrackAir(objectParameters: ObjectParameters) {
        let typeObject = TypesObjects.TROOP_AIR
        let typeLocation = TypesLocation.EARTH
        let levelObject = objectParameters.level
        let indexObject = objectParameters.index

        SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapNearby(typeObject, typeLocation, levelObject, indexObject)
    }

    private static processingBarrackMarine(objectParameters: ObjectParameters) {
        let typeObject = TypesObjects.TROOP_MARINE
        let typeLocation = TypesLocation.WATER
        let levelObject = objectParameters.level
        let indexObject = objectParameters.index

        SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapNearby(typeObject, typeLocation, levelObject, indexObject)
    }

    private static processingBarrackOverland(objectParameters: ObjectParameters) {
        let typeObject = TypesObjects.TROOP_OVERLAND
        let typeLocation = TypesLocation.EARTH
        let levelObject = objectParameters.level
        let indexObject = objectParameters.index

        SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapNearby(typeObject, typeLocation, levelObject, indexObject)
    }

    private static processingCommandPost() {
        let typeModal = TypesModals.COMMAND_POST

        SecondaryInterface.instance.openFirstModal(typeModal)
    }

    private static processingGoldMine(objectParameters: ObjectParameters) {
        if (AutocombineStorageController.getTimeGoldMine(objectParameters.index) == 0) {
            GameStorageController.addCoins(ConfigStorageController.getProdictionInTimeGoldMineByLevel(objectParameters.level))
        }
    }

    private static processingBank() {
        let typeModal = TypesModals.BANK

        SecondaryInterface.instance.openFirstModal(typeModal)
    }

    private static processingAutocombine() {
        if (AutocombineStorageController.getAllProfit() > 0) {
            GameStorageController.addCoins(AutocombineStorageController.getAllProfit())
            AutocombineStorageController.clearAllProfit()
        }
        else {
            let typeModal = TypesModals.AUTOCOMBINE

            SecondaryInterface.instance.openFirstModal(typeModal)
        }
    }

    private static processingTreasures(objectParameters: ObjectParameters) {
        HomeMapStorageController.setObjectParameter(null, objectParameters.type, objectParameters.index)
        objectParameters.nodeObject.destroy()
    }

    private static processingRadar(objectParameters: ObjectParameters) {
        let typeModal = TypesModals.RADAR

        SecondaryInterface.instance.openFirstModal(typeModal)
    }

    private static processingWholeManipulator(objectParameters: ObjectParameters) {
        BattleStorage.instance.numberBattle = HomeMapStructure.structure[objectParameters.index].numberBattle
        BattleStorage.instance.indexObjectBattle = objectParameters.index

        TroopStorageController.setTroopStorage()
        HomeMapStorageController.saveStorageServer()
        RedirectionToScene.redirect(SceneNames.BATTLE)
    }

    private static processingPaddedManipulator(objectParameters: ObjectParameters) {
        HomeMapStorageController.setObjectParameter(null, objectParameters.type, objectParameters.index)
        objectParameters.nodeObject.destroy()
    }

    private static processingRepairShop() {
        let typeModal = TypesModals.REPAIR_SHOP

        SecondaryInterface.instance.openFirstModal(typeModal)
    }

    private static processingWall(objectParameters: ObjectParameters) {
        SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapPos(TypesObjects.BATTLE, TypesLocation.EARTH, 1, objectParameters.index)
        objectParameters.node.destroy()
    }

    private static processingBattle(objectParameters: ObjectParameters) {
        BattleStorage.instance.numberBattle = HomeMapStructure.structure[objectParameters.index].numberBattle
        BattleStorage.instance.indexObjectBattle = objectParameters.index

        TroopStorageController.setTroopStorage()
        HomeMapStorageController.saveStorageServer()
        RedirectionToScene.redirect(SceneNames.BATTLE)
    }
} 