import { BattleModel } from "../Model/BattleModel"
import { RedirectionToScene } from "../Other/RedirectionToScene"
import { SceneNames } from "../Static/SceneNames"
import { TypesTeam } from "../Static/TypesTeam"
import { MapEnemyBattle } from "../Structures/MapEnemyUnits"

export class BattlePresenter {

    public static processingRedirectToHomeMap() {
        RedirectionToScene.redirect(SceneNames.HOME_MAP)
    }

    public static processingStartBattle() {

    }

    public static processingAutomaticPlacement() {

    }

    public static processingClickOnTroop(teamTroop: string, indexTroop: number) {
        if (teamTroop == TypesTeam.TEAM_OWN && BattleModel.instance.isBattle == false) {
            
        }
    }







    public static getEnemyCommand(mapNumber: number) {
        for (let i = 0; i < BattleModel.instance.mapEnemyArr.length; i++) {
            if (BattleModel.instance.mapEnemyArr[i].mapNumber == mapNumber) {
                return BattleModel.instance.mapEnemyArr[i]
            }
        }
        console.log('Не найдена такая команда. Запросите с сервера')
    }

    public static addEnemyCommand(mapEnemyUnits: MapEnemyBattle) {
        for (let i = 0; i < BattleModel.instance.mapEnemyArr.length; i++) {
            if (mapEnemyUnits.mapNumber == BattleModel.instance.mapEnemyArr[i].mapNumber) {
                return console.log('такой новер команы уже существует')
            }
        }
        BattleModel.instance.mapEnemyArr.push(mapEnemyUnits)
    }
}