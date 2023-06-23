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

        for (let i = 0; i < HomeMapStorage.instance.temporaryLocalStorage.length; i++) {
            if (HomeMapStorage.instance.temporaryLocalStorage[i].index == BattleStorage.instance.indexObjectBattle) {
                HomeMapStorage.instance.temporaryLocalStorage.splice(i, 1)
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
        else if (BattleStorage.instance.numberBattle == 15) {
            // Победа на зоне 15
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 16) {
            // Победа на зоне 16
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 17) {
            // Победа на зоне 17
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 18) {
            // Победа на зоне 18
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 19) {
            // Победа на зоне 19
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 20) {
            // Победа на зоне 20
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 21) {
            // Победа на зоне 21
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 22) {
            // Победа на зоне 22
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 23) {
            // Победа на зоне 23
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 24) {
            // Победа на зоне 24
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 25) {
            // Победа на зоне 25
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 26) {
            // Победа на зоне 26
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 27) {
            // Победа на зоне 27
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 28) {
            // Победа на зоне 28
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 29) {
            // Победа на зоне 29
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 30) {
            // Победа на зоне 30
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 31) {
            // Победа на зоне 31
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 32) {
            // Победа на зоне 32
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 33) {
            // Победа на зоне 33
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 34) {
            // Победа на зоне 34
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 35) {
            // Победа на зоне 35
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 36) {
            // Победа на зоне 36
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 37) {
            // Победа на зоне 37
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 38) {
            // Победа на зоне 38
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 39) {
            // Победа на зоне 39
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 40) {
            // Победа на зоне 40
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 41) {
            // Победа на зоне 41
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 42) {
            // Победа на зоне 42
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 43) {
            // Победа на зоне 43
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 44) {
            // Победа на зоне 44
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 45) {
            // Победа на зоне 45
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 46) {
            // Победа на зоне 46
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }
        else if (BattleStorage.instance.numberBattle == 47) {
            // Победа на зоне 47
            this.arrayRewardObject.push(new salam(TypesObjects.TREASURES, 1, 1))
            this.arrayRewardObject.push(new salam(TypesObjects.WALL_2X2, 1, 1))
        }

        for (let i = 0; i < this.arrayRewardObject.length; i++) {
            let objParam: ObjectParameters = new ObjectParameters
            objParam.type = this.arrayRewardObject[i].type
            objParam.level = this.arrayRewardObject[i].level
            objParam.index = this.arrayRewardObject[i].index
            HomeMapStorage.instance.temporaryLocalStorage.push(objParam)
        }

        this.arrayRewardObject = new Array
    }
}