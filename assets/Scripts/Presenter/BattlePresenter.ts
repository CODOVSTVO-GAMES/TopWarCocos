import { BattleModel } from "../Model/BattleModel"
import { MapEnemyBattle } from "../Structures/MapEnemyUnits"

export class BattlePresenter {

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