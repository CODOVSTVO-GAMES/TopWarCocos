import { UserStorageController } from "../StorageControllers/UserStorageController"
import { ServerApi } from "./ServerApi"
import { MapDTO } from "../../Structures/DTO/MapDTO"
import { GlobalMapStorageController } from "../StorageControllers/GlobalMapStorageController";
import { GameModel } from "../../Model/GameModel";
import { RadarPresenter } from "../../Presenter/RadarPresenter";

export class MapService {

    public static getMap(x = GlobalMapStorageController.getXBace(), y = GlobalMapStorageController.getYBace()) {
        ServerApi.get('map', new MapDTO(UserStorageController.getAccountId(), GlobalMapStorageController.getZone(), x, y, GameModel.instance.level), MapService.parseMapGetResponce);
    }

    public static parseMapGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get map error")
        else {
            GlobalMapStorageController.buildingsHandler(data)
        }
    }

    public static getEnemy() {
        ServerApi.get('map/enemy', new MapDTO(UserStorageController.getAccountId(), GlobalMapStorageController.getZone(), GlobalMapStorageController.getXBace(), GlobalMapStorageController.getYBace(), GameModel.instance.level, 0, 2), MapService.parseEnemyGetResponce);
    }

    public static parseEnemyGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get enemy error")
        else {
            GlobalMapStorageController.buildingsHandler(data)
            RadarPresenter.taskResponcer(data)
        }
    }


    public static attackStatus(taskId: number, status: number) {
        ServerApi.post('map/enemy', new MapDTO(UserStorageController.getAccountId(), GlobalMapStorageController.getZone(), GlobalMapStorageController.getXBace(), GlobalMapStorageController.getYBace(), GameModel.instance.level, status, 0, taskId), MapService.parseAttackResponse)
    }


    public static parseAttackResponse(data: any, isDone: boolean) {
        if (!isDone) console.log("attack error")
    }
}