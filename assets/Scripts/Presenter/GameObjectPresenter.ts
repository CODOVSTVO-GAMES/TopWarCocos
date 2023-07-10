import { ConfigPresenter } from "./ConfigPresenter"
import { BattleModel } from "../Model/BattleModel"
import { ObjectParameters } from "../ObjectParameters"
import { RedirectionToScene } from "../Other/RedirectionToScene"
import { HomeMapStructure } from "../Static/HomeMapStructure"
import { SceneNames } from "../Static/SceneNames"
import { TypesLocation } from "../Static/TypesLocation"
import { TypesModals } from "../Static/TypesModals"
import { TypesObjects } from "../Static/TypesObjects"
import { SecondaryInterface } from "../UI/SecondaryInterface"
import { AutocombinePresenter } from "./AutocombinePresenter"
import { GamePresenter } from "./GamePresenter"
import { HomeMapPresenter } from "./HomeMapPresenter"
import { SpawnObjectsOnHomeMap } from "./SpawnObjectsOnHomeMap"
import { BarracksPresenter } from "./BarracksPresenter"
import { GameModel } from "../Model/GameModel"
import { GameRewardPresenter } from "./GameRewardPresenter"

export class GameObjectPresenter {

    public static processingClickOnMessage(objectParameters: ObjectParameters) {
        if (objectParameters == null) {
            return console.log("object Parameters not found")
        }

        if (objectParameters.type == TypesObjects.BARRACKS_AIR) {
            this.processingBarrackAir(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.BARRACKS_MARINE) {
            this.processingBarrackMarine(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.BARRACKS_OVERLAND) {
            this.processingBarrackOverland(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.COMMAND_POST) {
            this.processingCommandPost()
        }
        else if (objectParameters.type == TypesObjects.GOLD_MINE) {
            this.processingGoldMine(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.BANK) {
            this.processingBank()
        }
        else if (objectParameters.type == TypesObjects.AUTOCOMBINE) {
            this.processingAutocombine()
        }
        else if (objectParameters.type == TypesObjects.RADAR) {
            this.processingRadar()
        }
        else if (objectParameters.type == TypesObjects.TREASURES) {
            this.processingTreasures(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.WHOLE_MANIPULATOR) {
            this.processingBattle(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.PADDED_MANIPULATOR) {
            this.processingPaddedManipulator(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.REPAIR_SHOP) {
            this.processingRepairShop()
        }
        else if (objectParameters.type == TypesObjects.WALL_2X2) {
            this.processingWall2x2(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.WALL_4X4) {
            this.processingWall4x4(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.WALL_8X8) {
            this.processingWall8x8(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.BATTLE_2X2) {
            this.processingBattle(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.BATTLE_4X4) {
            this.processingBattle(objectParameters)
        }
        else if (objectParameters.type == TypesObjects.BATTLE_8X8) {
            this.processingBattle(objectParameters)
        }
    }

    public static prepClickOnGameObejct(objectParameters: ObjectParameters) {
        // подготовка выполнения нажатия на обьект 

        if (objectParameters == null) {
            return console.log("object Parameters not found")
        }

        if (objectParameters.type == TypesObjects.TREASURES) {
            this.processingTreasures(objectParameters)
        }
    }

    // ===============================================================================

    private static processingBarrackAir(objectParameters: ObjectParameters) {
        let typeObject = TypesObjects.TROOP_AIR
        let levelObject = objectParameters.level
        let indexObject = objectParameters.index

        BarracksPresenter.addTroop(typeObject, levelObject, indexObject)
    }

    private static processingBarrackMarine(objectParameters: ObjectParameters) {
        let typeObject = TypesObjects.TROOP_MARINE
        let levelObject = objectParameters.level
        let indexObject = objectParameters.index

        BarracksPresenter.addTroop(typeObject, levelObject, indexObject)
    }

    private static processingBarrackOverland(objectParameters: ObjectParameters) {
        let typeObject = TypesObjects.TROOP_OVERLAND
        let levelObject = objectParameters.level
        let indexObject = objectParameters.index

        BarracksPresenter.addTroop(typeObject, levelObject, indexObject)
    }

    private static processingCommandPost() {
        let typeModal = TypesModals.COMMAND_POST

        SecondaryInterface.instance.openFirstModal(typeModal)
    }

    private static processingGoldMine(objectParameters: ObjectParameters) {
        if (AutocombinePresenter.getTimeGoldMine(objectParameters.index) == 0) {
            GamePresenter.addCoins(ConfigPresenter.getProdictionInTimeGoldMineByLevel(objectParameters.level))
        }
    }

    private static processingBank() {
        let typeModal = TypesModals.BANK

        SecondaryInterface.instance.openFirstModal(typeModal)
    }

    private static processingAutocombine() {
        if (AutocombinePresenter.getAllProfit() > 0) {
            GamePresenter.addCoins(AutocombinePresenter.getAllProfit())
            AutocombinePresenter.clearAllProfit()
        }
        else {
            let typeModal = TypesModals.AUTOCOMBINE

            SecondaryInterface.instance.openFirstModal(typeModal)
        }
    }

    private static processingRadar() {
        let typeModal = TypesModals.RADAR

        SecondaryInterface.instance.openFirstModal(typeModal)
    }

    private static processingTreasures(objectParameters: ObjectParameters) {

        GameRewardPresenter.initReward(BattleModel.instance.mapEnemyArr[0].reward)

        SecondaryInterface.instance.openSecondModal(TypesModals.GAME_REWARD)
    }

    private static processingPaddedManipulator(objectParameters: ObjectParameters) {
        HomeMapPresenter.setObjectParameter(null, objectParameters.type, objectParameters.index)
        objectParameters.nodeObject.destroy()
    }

    private static processingRepairShop() {
        let typeModal = TypesModals.REPAIR_SHOP

        SecondaryInterface.instance.openFirstModal(typeModal)
    }

    private static processingWall2x2(objectParameters: ObjectParameters) {
        let numberBattle = HomeMapStructure.structure[objectParameters.index].numberBattle
        let priceBattle = BattleModel.instance.mapEnemyArr[numberBattle - 1].power

        if (GameModel.instance.coins >= priceBattle) {
            let typeObject = TypesObjects.BATTLE_2X2
            let typeLocation = TypesLocation.EARTH
            let levelObject = 1
            let indexObject = objectParameters.index

            GamePresenter.reduceCoins(priceBattle)
            SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapPos(typeObject, typeLocation, levelObject, indexObject)
            objectParameters.node.destroy()

            setTimeout(() => {
                //дописать условие
                this.processingBattle(objectParameters)
            }, 1000)
        }
    }

    private static processingWall4x4(objectParameters: ObjectParameters) {
        let numberBattle = HomeMapStructure.structure[objectParameters.index].numberBattle
        let priceBattle = BattleModel.instance.mapEnemyArr[numberBattle - 1].power

        if (GameModel.instance.coins >= priceBattle) {
            let typeObject = TypesObjects.BATTLE_4X4
            let typeLocation = TypesLocation.EARTH
            let levelObject = 1
            let indexObject = objectParameters.index

            GamePresenter.reduceCoins(priceBattle)
            SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapPos(typeObject, typeLocation, levelObject, indexObject)
            objectParameters.node.destroy()

            setTimeout(() => {
                //дописать условие
                this.processingBattle(objectParameters)
            }, 1000)
        }
    }

    private static processingWall8x8(objectParameters: ObjectParameters) {
        let numberBattle = HomeMapStructure.structure[objectParameters.index].numberBattle
        let priceBattle = BattleModel.instance.mapEnemyArr[numberBattle - 1].power

        if (GameModel.instance.coins >= priceBattle) {
            let typeObject = TypesObjects.BATTLE_8X8
            let typeLocation = TypesLocation.EARTH
            let levelObject = 1
            let indexObject = objectParameters.index

            GamePresenter.reduceCoins(priceBattle)
            SpawnObjectsOnHomeMap.SpawnObjectsOnHomeMapPos(typeObject, typeLocation, levelObject, indexObject)
            objectParameters.node.destroy()

            setTimeout(() => {
                //дописать условие
                this.processingBattle(objectParameters)
            }, 1000)
        }
    }

    private static processingBattle(objectParameters: ObjectParameters) {
        BattleModel.instance.numberBattle = HomeMapStructure.structure[objectParameters.index].numberBattle
        BattleModel.instance.indexObjectBattle = objectParameters.index

        RedirectionToScene.redirect(SceneNames.BATTLE)
    }
} 