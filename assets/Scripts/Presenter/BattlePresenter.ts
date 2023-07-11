import { BattleModel } from "../Model/BattleModel"
import { HomeMapModel } from "../Model/HomeMapModel"
import { RedirectionToScene } from "../Other/RedirectionToScene"
import { HomeMapStructure } from "../Static/HomeMapStructure"
import { SceneNames } from "../Static/SceneNames"
import { TypesObjects } from "../Static/TypesObjects"
import { TypesTeam } from "../Static/TypesTeam"
import { MapEnemyBattle } from "../Structures/MapEnemyUnits"
import { TroopBattle } from "../Structures/TroopBattle"

export class BattlePresenter {

    public static processingRedirectToHomeMap() {
        BattleModel.instance.myTroopsBattle = []
        BattleModel.instance.myAvailableTroops = []
        BattleModel.instance.enemyTroopsBattle = []

        BattleModel.instance.itemsMyAvailableTroops = []

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

    public static initBattle(indexObjectBattle: number) {
        BattleModel.instance.indexObjectBattle = indexObjectBattle
        BattleModel.instance.numberBattle = HomeMapStructure.structure[indexObjectBattle].numberBattle

        this.getMyAvailableTroops()
        this.getEnemyTroopsBattle()
    }

    private static getMyAvailableTroops() {
        for (let i = 0; i < HomeMapModel.instance.arrayObjectParameters.length; i++) {
            if (HomeMapModel.instance.arrayObjectParameters[i] == null) continue
            if (HomeMapModel.instance.arrayObjectParameters[i].index != i) continue

            let typeObject = HomeMapModel.instance.arrayObjectParameters[i].type
            let levelObject = HomeMapModel.instance.arrayObjectParameters[i].level

            main: if (typeObject == TypesObjects.TROOP_AIR || typeObject == TypesObjects.TROOP_MARINE || typeObject == TypesObjects.TROOP_OVERLAND) {
                for (let j = 0; j < BattleModel.instance.myAvailableTroops.length; j++) {
                    if (typeObject == BattleModel.instance.myAvailableTroops[j].typeTroop && levelObject == BattleModel.instance.myAvailableTroops[j].levelTroop) {
                        BattleModel.instance.myAvailableTroops[j].quantityTroop += 1
                        break main
                    }
                }
                let typeTroop: string = typeObject
                let levelTroop: number = levelObject
                let quantityTroop: number = 1
                let damageTroop: number = 1
                let typeAttack: string = ""
                let typeShot: string = ""
                let activeHp: number = 1
                let availableHp: number = 1
                let attackNumber: number = 1

                BattleModel.instance.myAvailableTroops.push(new TroopBattle(typeTroop, levelTroop, quantityTroop, damageTroop, typeAttack, typeShot, activeHp, availableHp, attackNumber))
            }
        }
        this.sortMyAvailableTroops()
    }

    private static getEnemyTroopsBattle() {
        for (let i = 0; i < BattleModel.instance.mapEnemyArr.length; i++) {
            if (BattleModel.instance.mapEnemyArr[i].numberBattle == BattleModel.instance.numberBattle) {
                let enemyTroops = BattleModel.instance.mapEnemyArr[i].units1

                for (let j = 0; j < enemyTroops.length; j++) {
                    let typeTroop: string = enemyTroops[j].type
                    let levelTroop: number = enemyTroops[j].level
                    let quantityTroop: number = enemyTroops[j].quantity
                    let damageTroop: number = enemyTroops[j].damage
                    let typeAttack: string = enemyTroops[j].typeAttack
                    let typeShot: string = enemyTroops[j].typeShot
                    let activeHp: number = enemyTroops[j].hp
                    let availableHp: number = enemyTroops[j].availableHp
                    let attackNumber: number = enemyTroops[j].attackNumber

                    BattleModel.instance.enemyTroopsBattle.push(new TroopBattle(typeTroop, levelTroop, quantityTroop, damageTroop, typeAttack, typeShot, activeHp, availableHp, attackNumber))
                }
            }
        }
    }

    private static sortMyAvailableTroops() {
        BattleModel.instance.myAvailableTroops.sort((a, b) => {
            if (a == null || b == null) return 0

            if (a.levelTroop < b.levelTroop) {
                return 1
            }
            else if (a.levelTroop > b.levelTroop) {
                return -1
            }
            else {
                return 0
            }
        })
    }































    public static addEnemyCommand(mapEnemyUnits: MapEnemyBattle) {
        for (let i = 0; i < BattleModel.instance.mapEnemyArr.length; i++) {
            if (mapEnemyUnits.numberBattle == BattleModel.instance.mapEnemyArr[i].numberBattle) {
                return console.log('такой новер команы уже существует')
            }
        }
        BattleModel.instance.mapEnemyArr.push(mapEnemyUnits)
    }
}