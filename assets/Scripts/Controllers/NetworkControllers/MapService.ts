import { UserStorageController } from "../StorageControllers/UserStorageController"
import { ServerApi } from "./ServerApi"
import { MapDTO } from "../../Structures/DTO/MapDTO"
import { GlobalMapStorageController } from "../StorageControllers/GlobalMapStorageController";
import { GameStorageController } from "../StorageControllers/GameStorageController";
import { RadarStorageController } from "../StorageControllers/RadarStorageController";
import { ConfigStorageController } from "../StorageControllers/ConfigStorageController";

export class MapService {

    static getMap(x = GlobalMapStorageController.getXBace(), y = GlobalMapStorageController.getYBace()) {
        ServerApi.get('map', new MapDTO(UserStorageController.getAccountId(), GlobalMapStorageController.getZone(), x, y, GameStorageController.getLevel()), MapService.parseMapGetResponce);
    }

    static parseMapGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get map error")
        else {
            GlobalMapStorageController.buildingsHandler(data)
        }
    }


    static getEnemy() {
        // let level = RadarStorageController.getRadarLevel()
        // let config = ConfigStorageController.getRadarConfigByLevel(level)
        // let battlesNumber = config.displayedTasks
        ServerApi.get('map/enemy', new MapDTO(UserStorageController.getAccountId(), GlobalMapStorageController.getZone(), GlobalMapStorageController.getXBace(), GlobalMapStorageController.getYBace(), GameStorageController.getLevel(), 0, 2), MapService.parseEnemyGetResponce);
    }

    static parseEnemyGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get enemy error")
        else {
            // console.log(data)
            GlobalMapStorageController.buildingsHandler(data)
            // console.log('---')
            RadarStorageController.taskResponcer(data)
        }
    }


    static attackStatus(taskId: number, status: number) {
        ServerApi.post('map/enemy', new MapDTO(UserStorageController.getAccountId(), GlobalMapStorageController.getZone(), GlobalMapStorageController.getXBace(), GlobalMapStorageController.getYBace(), GameStorageController.getLevel(), status, 0, taskId), MapService.parseAttackResponse)
    }


    static parseAttackResponse(data: any, isDone: boolean) {
        if (!isDone) console.log("attack error")
        // console.log("----------")
        // console.log("--" + JSON.stringify(data))
        // GlobalMapStorageController.buildingsHandler(data)
        // RadarStorageController.taskResponcer(data)
    }

}