import { _decorator } from 'cc';
import { BattleStorage } from '../Storage/BattleStorage';
import { HomeMapStorage } from '../Storage/HomeMapStorage';
import { ObjectParameters } from '../ObjectParameters';
import { TypesObjects } from '../Static/TypesObjects';
const { ccclass } = _decorator;

@ccclass('InitRewardAfterBattle')
export class InitRewardAfterBattle {

    public static victory() {
        let indexObjectBattle: number;

        HomeMapStorage.instance.numberOpenZones += 1

        for (let i = 0; i < HomeMapStorage.instance.temporaryLocalStorage.length; i++) {
            if (HomeMapStorage.instance.temporaryLocalStorage[i].index == BattleStorage.instance.indexObjectBattle) {
                indexObjectBattle = i
                break
            }
        }

        if (BattleStorage.instance.numberBattle == 1) {
            let objectParameters = new ObjectParameters
            objectParameters.type = TypesObjects.WALL_2X2
            objectParameters.level = 1
            objectParameters.index = 1383
            HomeMapStorage.instance.temporaryLocalStorage[indexObjectBattle].type = TypesObjects.PADDED_MANIPULATOR
            HomeMapStorage.instance.temporaryLocalStorage.push(objectParameters)
        }
        else if (BattleStorage.instance.numberBattle == 2) {
            let objectParameters = new ObjectParameters
            objectParameters.type = TypesObjects.WALL_8X8
            objectParameters.level = 1
            objectParameters.index = 1279
            HomeMapStorage.instance.temporaryLocalStorage[indexObjectBattle].type = TypesObjects.TREASURES
            HomeMapStorage.instance.temporaryLocalStorage.push(objectParameters)
        }
        else if (BattleStorage.instance.numberBattle == 3) {
            let objectParameters = new ObjectParameters
            objectParameters.type = TypesObjects.WALL_2X2
            objectParameters.level = 1
            objectParameters.index = 1379
            HomeMapStorage.instance.temporaryLocalStorage[indexObjectBattle].type = TypesObjects.TREASURES
            HomeMapStorage.instance.temporaryLocalStorage.push(objectParameters)
        }
        else if (BattleStorage.instance.numberBattle == 4) {
            let objectParameters = new ObjectParameters
            objectParameters.type = TypesObjects.WALL_2X2
            objectParameters.level = 1
            objectParameters.index = 1277
            HomeMapStorage.instance.temporaryLocalStorage[indexObjectBattle].type = TypesObjects.TREASURES
            HomeMapStorage.instance.temporaryLocalStorage.push(objectParameters)
        }
        else if (BattleStorage.instance.numberBattle == 5) {
            let objectParameters = new ObjectParameters
            objectParameters.type = TypesObjects.WALL_2X2
            objectParameters.level = 1
            objectParameters.index = 1385
            HomeMapStorage.instance.temporaryLocalStorage[indexObjectBattle].type = TypesObjects.TREASURES
            HomeMapStorage.instance.temporaryLocalStorage.push(objectParameters)
        }
        else if (BattleStorage.instance.numberBattle == 6) {
            let objectParameters = new ObjectParameters
            objectParameters.type = TypesObjects.WALL_2X2
            objectParameters.level = 1
            objectParameters.index = 1285
            HomeMapStorage.instance.temporaryLocalStorage[indexObjectBattle].type = TypesObjects.TREASURES
            HomeMapStorage.instance.temporaryLocalStorage.push(objectParameters)
        }
    }
}