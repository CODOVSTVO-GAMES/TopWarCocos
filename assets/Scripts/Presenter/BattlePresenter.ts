import { _decorator, Node } from 'cc';
import { BattleModel } from "../Model/BattleModel"
import { ConfigModel } from "../Model/ConfigModel"
import { GameModel } from "../Model/GameModel"
import { HomeMapModel } from "../Model/HomeMapModel"
import { RedirectionToScene } from "../Other/RedirectionToScene"
import { HomeMapStructure } from "../Static/HomeMapStructure"
import { SceneNames } from "../Static/SceneNames"
import { TypesObjects } from "../Static/TypesObjects"
import { TypesTeam } from "../Static/TypesTeam"
import { TroopBattle } from "../Structures/TroopBattle"
import { BattleView } from "../View/BattleView"
import { ConfigPresenter } from "./ConfigPresenter"

export class BattlePresenter {

    public static processingRedirectToHomeMap() {
        BattleModel.instance.myTroopsBattle = []
        BattleModel.instance.myAvailableTroops = []
        BattleModel.instance.enemyTroopsBattle = []

        BattleModel.instance.myTroopsBattleOnMap = []
        BattleModel.instance.enemyTroopsBattleOnMap = []
        BattleModel.instance.itemsMyAvailableTroops = []

        BattleModel.instance.minimumQuantityFreeCoords = 0
        BattleModel.instance.additionalQuantityFreeCoords = 0
        BattleModel.instance.totalQuantityFreeCoords = 0
        BattleModel.instance.remainedQuantityFreePlaces = 0
        BattleModel.instance.activeQuantityTroopsOnCoords = []
        BattleModel.instance.maximumQuantityTroopsOnCoords = []


        BattleModel.instance.isPreparation = false
        BattleModel.instance.isBattle = false
        BattleModel.instance.isEnd = false

        RedirectionToScene.redirect(SceneNames.HOME_MAP)
    }

    public static processingStartBattle() {
        BattleModel.instance.isPreparation = false
        BattleModel.instance.isBattle = true
        console.log("START BATTLE")
    }

    public static processingAutomaticPlacement() {

    }

    public static processingClickOnTroop(troopBattle: TroopBattle, nodeObject: Node) {
        if (troopBattle.teamTroop == TypesTeam.TEAM_OWN && BattleModel.instance.isBattle == false) {
            for (let i = 0; i < BattleModel.instance.myAvailableTroops.length; i++) {
                if (troopBattle.typeTroop == BattleModel.instance.myAvailableTroops[i].typeTroop && troopBattle.levelTroop == BattleModel.instance.myAvailableTroops[i].levelTroop) {
                    BattleModel.instance.myAvailableTroops[i].quantityTroop += troopBattle.quantityTroop
                    BattleModel.instance.myTroopsBattle[troopBattle.indexTroop] = null
                    BattleModel.instance.remainedQuantityFreePlaces -= troopBattle.quantityTroop
                    BattleModel.instance.activeQuantityTroopsOnCoords[troopBattle.indexTroop] -= troopBattle.quantityTroop
                    nodeObject.destroy()
                    this.sortMyAvailableTroops()
                    BattleView.instance.renderItemMyAvailableTroops()
                    BattleView.instance.renderMyTroopsBattle()
                    BattleView.instance.renderMyCoords()
                    return
                }
            }
            BattleModel.instance.myAvailableTroops.push(new TroopBattle(troopBattle.teamTroop, troopBattle.typeTroop, troopBattle.levelTroop, troopBattle.indexTroop, troopBattle.quantityTroop, troopBattle.damageTroop, troopBattle.typeAttack, troopBattle.activeHp, troopBattle.availableHp))
            BattleModel.instance.remainedQuantityFreePlaces -= troopBattle.quantityTroop
            BattleModel.instance.activeQuantityTroopsOnCoords[troopBattle.indexTroop] -= troopBattle.quantityTroop
            nodeObject.destroy()
            this.sortMyAvailableTroops()
            BattleView.instance.renderItemMyAvailableTroops()
            BattleView.instance.renderMyTroopsBattle()
            BattleView.instance.renderMyCoords()
        }
    }

    public static processingClickOnItemMyAvailableTroop(troopBattle: TroopBattle) {
        if (BattleModel.instance.remainedQuantityFreePlaces == 0) return

        for (let i = 0; i < BattleModel.instance.totalQuantityFreeCoords; i++) {
            let activeQuantityTroopsOnCoord = BattleModel.instance.activeQuantityTroopsOnCoords[i]
            let maximumQuantityTroopsOnCoord = BattleModel.instance.maximumQuantityTroopsOnCoords[i]

            if (activeQuantityTroopsOnCoord == 0) {

                let difference = maximumQuantityTroopsOnCoord - activeQuantityTroopsOnCoord

                if (troopBattle.quantityTroop == difference) {
                    BattleModel.instance.myAvailableTroops.splice(i, 1)
                    BattleModel.instance.myTroopsBattle[i] = new TroopBattle(troopBattle.teamTroop, troopBattle.typeTroop, troopBattle.levelTroop, i, difference, troopBattle.damageTroop, troopBattle.typeAttack, troopBattle.activeHp, troopBattle.availableHp)
                    BattleModel.instance.remainedQuantityFreePlaces += difference
                    BattleModel.instance.activeQuantityTroopsOnCoords[i] += difference
                    this.sortMyAvailableTroops()
                    BattleView.instance.renderItemMyAvailableTroops()
                    BattleView.instance.renderMyTroopsBattle()
                    BattleView.instance.renderMyCoords()
                    return
                }
                else if (troopBattle.quantityTroop > difference) {
                    troopBattle.quantityTroop -= difference
                    BattleModel.instance.myTroopsBattle[i] = new TroopBattle(troopBattle.teamTroop, troopBattle.typeTroop, troopBattle.levelTroop, i, difference, troopBattle.damageTroop, troopBattle.typeAttack, troopBattle.activeHp, troopBattle.availableHp)
                    BattleModel.instance.remainedQuantityFreePlaces += difference
                    BattleModel.instance.activeQuantityTroopsOnCoords[i] += difference
                    this.sortMyAvailableTroops()
                    BattleView.instance.renderItemMyAvailableTroops()
                    BattleView.instance.renderMyTroopsBattle()
                    BattleView.instance.renderMyCoords()
                    return
                }
                else if (troopBattle.quantityTroop < difference) {
                    BattleModel.instance.myAvailableTroops.splice(i, 1)
                    BattleModel.instance.myTroopsBattle[i] = new TroopBattle(troopBattle.teamTroop, troopBattle.typeTroop, troopBattle.levelTroop, i, troopBattle.quantityTroop, troopBattle.damageTroop, troopBattle.typeAttack, troopBattle.activeHp, troopBattle.availableHp)
                    BattleModel.instance.remainedQuantityFreePlaces += troopBattle.quantityTroop
                    BattleModel.instance.activeQuantityTroopsOnCoords[i] += troopBattle.quantityTroop
                    this.sortMyAvailableTroops()
                    BattleView.instance.renderItemMyAvailableTroops()
                    BattleView.instance.renderMyTroopsBattle()
                    BattleView.instance.renderMyCoords()
                    return
                }
            }
        }
    }

    public static initBattle(indexObjectBattle: number) {
        BattleModel.instance.indexObjectBattle = indexObjectBattle
        BattleModel.instance.numberBattle = HomeMapStructure.structure[indexObjectBattle].numberBattle

        BattleModel.instance.isPreparation = true

        this.getMyAvailableTroops()
        this.getEnemyTroopsBattle()
        this.getTotalQuantityFreeCoords()
        this.getQuantityTroopsOnCoords()

        let totalQuantityFreeCoords = BattleModel.instance.totalQuantityFreeCoords
        BattleModel.instance.myTroopsBattle = new Array(totalQuantityFreeCoords).fill(null)
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

                let config = ConfigPresenter.getConfigUnitsByTypeAndLevel(typeObject, levelObject)

                let teamTroop = TypesTeam.TEAM_OWN
                let typeTroop = typeObject
                let levelTroop = levelObject
                let indexTroop = BattleModel.instance.myAvailableTroops.length
                let quantityTroop = 1
                let damageTroop = config.damageTroop
                let typeAttack = config.typeAttack
                let activeHp = config.activeHp
                let availableHp = config.activeHp

                BattleModel.instance.myAvailableTroops.push(new TroopBattle(teamTroop, typeTroop, levelTroop, indexTroop, quantityTroop, damageTroop, typeAttack, activeHp, availableHp))
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
                    let indexTroop = i
                    let quantityTroop = enemyTroops[j].quantity
                    let damageTroop = enemyTroops[j].damage
                    let typeAttack = enemyTroops[j].typeAttack
                    let activeHp = enemyTroops[j].hp
                    let availableHp = enemyTroops[j].availableHp

                    BattleModel.instance.enemyTroopsBattle.push(new TroopBattle(teamTroop, typeTroop, levelTroop, indexTroop, quantityTroop, damageTroop, typeAttack, activeHp, availableHp))
                }
            }
        }
    }

    private static getTotalQuantityFreeCoords() {
        let gameLevelsTrigger = [1, 1, 6, 10, 16, 30, 40, 50, 70]
        for (let i = 0; i < gameLevelsTrigger.length; i++) {
            if (GameModel.instance.level >= gameLevelsTrigger[i]) {
                BattleModel.instance.minimumQuantityFreeCoords += 1
            }
            else {
                break
            }
        }
        BattleModel.instance.additionalQuantityFreeCoords = 0
        BattleModel.instance.totalQuantityFreeCoords =
            BattleModel.instance.minimumQuantityFreeCoords +
            BattleModel.instance.additionalQuantityFreeCoords
    }

    private static getQuantityTroopsOnCoords() {
        for (let i = 0; i < BattleModel.instance.totalQuantityFreeCoords; i++) {
            let maximumQuantityTroopsOnCoord = 2

            BattleModel.instance.remainedQuantityFreePlaces += maximumQuantityTroopsOnCoord
            BattleModel.instance.activeQuantityTroopsOnCoords.push(0)
            BattleModel.instance.maximumQuantityTroopsOnCoords.push(maximumQuantityTroopsOnCoord)
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