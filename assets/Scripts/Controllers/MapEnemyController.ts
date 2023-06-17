import { MapEnemyBattle } from "../Structures/MapEnemyUnits";
import { MapEnemyStorage } from "../Storage/MapEnemyStorage";

export class MapEnemyController {

    static getCommands(mapNumber: number) {
        for (let l = 0; l < MapEnemyStorage.instance.mapEnemyArr.length; l++) {
            if (MapEnemyStorage.instance.mapEnemyArr[l].mapNumber == mapNumber) {
                return MapEnemyStorage.instance.mapEnemyArr[l]
            }
        }
        console.log('Не найдена такая команда. Запросите с сервера')
    }

    static addEnemyCommand(mapEnemyUnits: MapEnemyBattle) {
        for (let l = 0; l < MapEnemyStorage.instance.mapEnemyArr.length; l++) {
            if (mapEnemyUnits.mapNumber == MapEnemyStorage.instance.mapEnemyArr[l].mapNumber) {
                console.log('такой новер команы уже существует')
                return
            }
        }
        MapEnemyStorage.instance.mapEnemyArr.push(mapEnemyUnits)
    }

}