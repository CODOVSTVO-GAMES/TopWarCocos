import { _decorator } from 'cc';
import { BattleStorage } from '../Storage/BattleStorage';
import { HomeMapStorage } from '../Storage/HomeMapStorage';
import { ObjectParameters } from '../ObjectParameters';
import { TypesObjects } from '../Static/TypesObjects';
import { salam } from '../Static/salam';
const { ccclass } = _decorator;

@ccclass('InitRewardAfterBattle')
export class InitRewardAfterBattle {

    public static arrayRewardObject: salam[] = []

    public static victory() {
        HomeMapStorage.instance.numberOpenZones += 1

        console.log(HomeMapStorage.instance.temporaryLocalStorage)

        for (let i = 0; i < HomeMapStorage.instance.temporaryLocalStorage.length; i++) {
            if (HomeMapStorage.instance.temporaryLocalStorage[i].index == BattleStorage.instance.indexObjectBattle) {
                HomeMapStorage.instance.temporaryLocalStorage.splice(i, 1)
                console.log(BattleStorage.instance.indexObjectBattle)
                break
            }
        }

        if (BattleStorage.instance.numberBattle == 1) {
            // Победа на зоне 1
            this.arrayRewardObject.push(new salam(TypesObjects.PADDED_MANIPULATOR, 1, 1381))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1383))
        }
        else if (BattleStorage.instance.numberBattle == 2) {
            // Победа на зоне 2
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1383))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_4X4, 1, 1283))
        }
        else if (BattleStorage.instance.numberBattle == 3) {
            // Победа на зоне 3
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1283))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1379))
        }
        else if (BattleStorage.instance.numberBattle == 4) {
            // Победа на зоне 4
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1379))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_8X8, 1, 1377))
        }
        else if (BattleStorage.instance.numberBattle == 5) {
            // Победа на зоне 5
            this.arrayRewardObject.push(new salam(TypesObjects.COMMAND_POST, 1, 1226))
            this.arrayRewardObject.push(new salam(TypesObjects.BARRACKS_OVERLAND, 1, 1079))
            this.arrayRewardObject.push(new salam(TypesObjects.BARRACKS_OVERLAND, 1, 1179))
            this.arrayRewardObject.push(new salam(TypesObjects.BARRACKS_OVERLAND, 1, 1279))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1385))
        }
        else if (BattleStorage.instance.numberBattle == 6) {
            // Победа на зоне 6
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1385))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1285))
        }
        else if (BattleStorage.instance.numberBattle == 7) {
            // Победа на зоне 7
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 8) {
            // Победа на зоне 8
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 9) {
            // Победа на зоне 9
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 10) {
            // Победа на зоне 10
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 11) {
            // Победа на зоне 11
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 12) {
            // Победа на зоне 12
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 13) {
            // Победа на зоне 13
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 14) {
            // Победа на зоне 14
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }

        for (let i = 0; i < this.arrayRewardObject.length; i++) {
            console.log(this.arrayRewardObject[i].type)
            let objParam: ObjectParameters = new ObjectParameters
            objParam.type = this.arrayRewardObject[i].type
            objParam.level = this.arrayRewardObject[i].level
            objParam.index = this.arrayRewardObject[i].index
            HomeMapStorage.instance.temporaryLocalStorage.push(objParam)
        }

        console.log(HomeMapStorage.instance.temporaryLocalStorage)

        this.arrayRewardObject = new Array
    }
}