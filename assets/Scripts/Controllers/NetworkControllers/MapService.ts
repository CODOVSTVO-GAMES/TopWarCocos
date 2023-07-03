import { UserPresenter } from "../../Presenter/UserPresenter"
import { ServerApi } from "./ServerApi"
import { MapDTO } from "../../Structures/DTO/MapDTO"
import { GameModel } from "../../Model/GameModel";
import { RadarPresenter } from "../../Presenter/RadarPresenter";
import { GlobalMapPresenter } from "../../Presenter/GlobalMapPresenter";

export class MapService {

    public static getMap(x = GlobalMapPresenter.getXBace(), y = GlobalMapPresenter.getYBace()) {
        ServerApi.get('map', new MapDTO(UserPresenter.getAccountId(), GlobalMapPresenter.getZone(), x, y, GameModel.instance.level), MapService.parseMapGetResponce);
    }

    public static parseMapGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get map error")
        else {
            GlobalMapPresenter.buildingsHandler(data)
        }
    }

    public static getEnemy() {
        ServerApi.get('map/enemy', new MapDTO(UserPresenter.getAccountId(), GlobalMapPresenter.getZone(), GlobalMapPresenter.getXBace(), GlobalMapPresenter.getYBace(), GameModel.instance.level, 0, 2), MapService.parseEnemyGetResponce);
    }

    public static parseEnemyGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get enemy error")
        else {
            GlobalMapPresenter.buildingsHandler(data)
            RadarPresenter.taskResponcer(data)
        }
    }


    public static attackStatus(taskId: number, status: number) {
        ServerApi.post('map/enemy', new MapDTO(UserPresenter.getAccountId(), GlobalMapPresenter.getZone(), GlobalMapPresenter.getXBace(), GlobalMapPresenter.getYBace(), GameModel.instance.level, status, 0, taskId), MapService.parseAttackResponse)
    }


    public static parseAttackResponse(data: any, isDone: boolean) {
        if (!isDone) console.log("attack error")
    }
}