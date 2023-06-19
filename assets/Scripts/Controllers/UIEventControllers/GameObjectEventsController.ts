import { SpawnObjectsOnHomeMap } from "../../Logic/SpawnObjectsOnHomeMap";
import { ObjectParameters } from "../../ObjectParameters";
import { RedirectionToScene } from "../../Other/RedirectionToScene";
import { SceneNames } from "../../Static/SceneNames";
import { TypesLocation } from "../../Static/TypesLocation";
import { TypesModals } from "../../Static/TypesModals";
import { TypesObjects } from "../../Static/TypesObjects";
import { HomeMapStorage } from "../../Storage/HomeMapStorage";
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

        // подумать как переписать (возможно раскидать на несколько методов)
        if (objectParameters.type == TypesObjects.BARRACKS_AIR) {
            SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapNearby(TypesObjects.TROOP_AIR, TypesLocation.EARTH, objectParameters.level, objectParameters.index);
        }
        else if (objectParameters.type == TypesObjects.BARRACKS_MARINE) {
            SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapNearby(TypesObjects.TROOP_MARINE, TypesLocation.EARTH, objectParameters.level, objectParameters.index);
        }
        else if (objectParameters.type == TypesObjects.BARRACKS_OVERLAND) {
            SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapNearby(TypesObjects.TROOP_OVERLAND, TypesLocation.EARTH, objectParameters.level, objectParameters.index);
        }
        else if (objectParameters.type == TypesObjects.COMMAND_POST) {
            SecondaryInterface.instance.openFirstModal(TypesModals.COMMAND_POST);
        }
        else if (objectParameters.type == TypesObjects.GOLD_MINE) {
            if (AutocombineStorageController.getTimeGoldMine(objectParameters.index) == 0) {
                GameStorageController.addCoins(ConfigStorageController.getProdictionInTimeGoldMineByLevel(objectParameters.level))
            }
        }
        else if (objectParameters.type == TypesObjects.BANK) {
            SecondaryInterface.instance.openFirstModal(TypesModals.BANK);
        }
        else if (objectParameters.type == TypesObjects.AUTOCOMBINE) {
            if (AutocombineStorageController.getAllProfit() > 0) {
                GameStorageController.addCoins(AutocombineStorageController.getAllProfit())
                AutocombineStorageController.clearAllProfit()
            }
            else {
                SecondaryInterface.instance.openFirstModal(TypesModals.AUTOCOMBINE);
            }
        }
        else if (objectParameters.type == TypesObjects.RADAR) {
            SecondaryInterface.instance.openFirstModal(TypesModals.RADAR)
        }
        else if (objectParameters.type == TypesObjects.REPAIR_SHOP) {
            SecondaryInterface.instance.openFirstModal(TypesModals.REPAIR_SHOP)
        }
        else if (objectParameters.type == TypesObjects.WALL) {
            SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapPos(TypesObjects.BATTLE, TypesLocation.EARTH, 1, objectParameters.index)
            objectParameters.node.destroy()
        }
        else if (objectParameters.type == TypesObjects.BATTLE) {
            TroopStorageController.setTroopStorage()
            // HomeMapStorageController.setObjectParameter(null, objectParameters.type, objectParameters.index)
            // objectParameters.node.destroy()
            // HomeMapStorage.instance.numberOpenZones += 1
            // HomeMapStorageController.saveStorageServer()
            RedirectionToScene.redirect(SceneNames.BATTLE)
        }
    }

    public static prepClickOnGameObejct(objectParameters: ObjectParameters) {
        // подготовка выполнения нажатия на обьект 

        if (objectParameters == null) {
            return console.log("object Parameters not found")
        }

        console.log(objectParameters.type)
    }
} 