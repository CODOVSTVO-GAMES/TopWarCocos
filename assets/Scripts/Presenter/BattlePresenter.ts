import { BattleModel } from "../Model/BattleModel"
import { ConfigModel } from "../Model/ConfigModel"
import { HomeMapModel } from "../Model/HomeMapModel"
import { RedirectionToScene } from "../Other/RedirectionToScene"
import { HomeMapStructure } from "../Static/HomeMapStructure"
import { SceneNames } from "../Static/SceneNames"
import { TypesObjects } from "../Static/TypesObjects"
import { TypesTeam } from "../Static/TypesTeam"
import { TroopBattle } from "../Structures/TroopBattle"

export class BattlePresenter {

    public static processingRedirectToHomeMap() {
        BattleModel.instance.myTroopsBattle = []
        BattleModel.instance.myAvailableTroops = []
        BattleModel.instance.enemyTroopsBattle = []

        BattleModel.instance.itemsMyAvailableTroops = []

        BattleModel.instance.isPreparation = false
        BattleModel.instance.isBattle = false
        BattleModel.instance.isEnd = false

        RedirectionToScene.redirect(SceneNames.HOME_MAP)
    }

    public static processingStartBattle() {
        BattleModel.instance.isPreparation = false
        BattleModel.instance.isBattle = true
    }

    public static processingAutomaticPlacement() {

    }

    public static processingClickOnTroop(teamTroop: string, indexTroop: number) {
        console.log("click on troop")
        if (teamTroop == TypesTeam.TEAM_OWN && BattleModel.instance.isBattle == false) {

        }
    }

    public static processingClickOnItemMyAvailableTroop(typeTroop: string, levelTroop: number) {

    }

    public static initBattle(indexObjectBattle: number) {
        BattleModel.instance.indexObjectBattle = indexObjectBattle
        BattleModel.instance.numberBattle = HomeMapStructure.structure[indexObjectBattle].numberBattle

        BattleModel.instance.isPreparation = true

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
                let teamTroop = TypesTeam.TEAM_OWN
                let typeTroop = typeObject
                let levelTroop = levelObject
                let quantityTroop = 1
                let damageTroop: number = 1
                let typeAttack: string = ""
                let typeShot: string = ""
                let activeHp: number = 1
                let availableHp: number = 1

                BattleModel.instance.myAvailableTroops.push(new TroopBattle(teamTroop, typeTroop, levelTroop, quantityTroop, damageTroop, typeAttack, typeShot, activeHp, availableHp))
            }
        }
        this.sortMyAvailableTroops()
    }

    private static getEnemyTroopsBattle() {
        for (let i = 0; i < ConfigModel.instance.mapEnemyBattle.length; i++) {
            if (ConfigModel.instance.mapEnemyBattle[i].numberBattle == BattleModel.instance.numberBattle) {
                let enemyTroops = ConfigModel.instance.mapEnemyBattle[i].units1

                for (let j = 0; j < enemyTroops.length; j++) {
                    let teamTroop = TypesTeam.TEAM_ENEMY
                    let typeTroop = enemyTroops[j].type
                    let levelTroop = enemyTroops[j].level
                    let quantityTroop = enemyTroops[j].quantity
                    let damageTroop = enemyTroops[j].damage
                    let typeAttack = enemyTroops[j].typeAttack
                    let typeShot = enemyTroops[j].typeShot
                    let activeHp = enemyTroops[j].hp
                    let availableHp = enemyTroops[j].availableHp

                    BattleModel.instance.enemyTroopsBattle.push(new TroopBattle(teamTroop, typeTroop, levelTroop, quantityTroop, damageTroop, typeAttack, typeShot, activeHp, availableHp))
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
}