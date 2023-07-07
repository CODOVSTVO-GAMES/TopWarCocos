import { AutocombineModel } from "../Model/AutocombineModel";
import { BackpackModel } from "../Model/BackpackModel";
import { BarrackModel } from "../Model/BarrackModel";
import { BufferModel } from "../Model/BufferModel";
import { CharactersModel } from "../Model/CharactersModel";
import { CommandPostModel } from "../Model/CommandPostModel";
import { GameModel } from "../Model/GameModel";
import { HomeMapModel } from "../Model/HomeMapModel";
import { TasksGameModel } from "../Model/TasksGameModel";
import { ObjectParameters } from "../ObjectParameters";
import { TypesModels } from "../Static/TypesModels";
import { Model } from "../Structures/Model";

export class BufferPresenter {

    public static preparationModels() {
        this.preparationAutocombineModel()
        this.preparationBackpackModel()
        this.preparationBarrackModel()
        this.preparationBattleModel()
        this.preparationCharactersModel()
        this.preparationCommandPostModel()
        this.preparationGameModel()
        this.preparationGlobalMapModel()
        this.preparationHomeMapModelForServer()
        this.preparationRadarModel()
        this.preparationTasksGamerModel()
    }

    private static preparationAutocombineModel() {
        let obj: Object[] = []

        obj.push({
            allProfit: AutocombineModel.instance.allProfit,
            quantityWorkGoldMine: AutocombineModel.instance.quantityWorkGoldMine,
            quantityProfit: AutocombineModel.instance.quantityProfit,
            quantityCollect: AutocombineModel.instance.quantityCollect,
            isActiveAutocombine: AutocombineModel.instance.isActiveAutocombine

        })
        for (let i = 0; i < AutocombineModel.instance.indexes.length; i++) {
            obj.push({
                level: AutocombineModel.instance.indexes[i].levelGoldMine,
                index: AutocombineModel.instance.indexes[i].indexGoldMine,
                time: AutocombineModel.instance.indexes[i].timeProfit
            })
        }
        this.addModelInBuffer(TypesModels.AUTOCOMBINE_MODEL, obj)
    }

    private static preparationBackpackModel() {
        let obj: Object[] = []

        for (let i = 0; i < BackpackModel.instance.backpack.length; i++) {
            obj.push({
                type: BackpackModel.instance.backpack[i].type,
                quantity: BackpackModel.instance.backpack[i].quantity
            })
        }
        this.addModelInBuffer(TypesModels.BACKPACK_MODEL, obj)
    }

    private static preparationBarrackModel() {
        let obj: Object[] = []

        for (let i = 0; i < BarrackModel.instance.arrayBarracks.length; i++) {
            obj.push({
                indexBarrack: BarrackModel.instance.arrayBarracks[i].indexBarrack,
                queueSpawnObject: BarrackModel.instance.arrayBarracks[i].queueSpawnObject
            })
        }
        this.addModelInBuffer(TypesModels.BARRACKS_MODEL, obj)
    }


    private static preparationBattleModel() {
        let obj: Object[] = []
    }

    private static preparationCharactersModel() {
        let obj: Object[] = []

        for (let i = 0; i < CharactersModel.instance.characters.length; i++) {
            obj.push({
                level: CharactersModel.instance.characters[i].level,
                exp: CharactersModel.instance.characters[i].experience,
                stars: CharactersModel.instance.characters[i].stars,
                codeName: CharactersModel.instance.characters[i].codeName
            })
        }
        this.addModelInBuffer(TypesModels.CHARACTERS_MODEL, obj)
    }

    private static preparationCommandPostModel() {
        let obj: Object = {
            levelCommandPost: CommandPostModel.instance.levelCommandPost,
            levelRepairShop: CommandPostModel.instance.levelRepairShop,
            levelMergeGoldMine: CommandPostModel.instance.levelMergeGoldMine,
            levelBuildGoldMine: CommandPostModel.instance.levelBuildGoldMine,
            levelMergeTroopAir: CommandPostModel.instance.levelMergeTroopAir,
            levelMergeTroopMarine: CommandPostModel.instance.levelMergeTroopMarine,
            levelMergeTroopOverland: CommandPostModel.instance.levelMergeTroopOverland,
            levelMergeBarracksAir: CommandPostModel.instance.levelMergeBarracksAir,
            levelMergeBarracksMarine: CommandPostModel.instance.levelMergeBarracksMarine,
            levelMergeBarracksOverland: CommandPostModel.instance.levelMergeBarracksOverland,
            levelBuildBarracksAir: CommandPostModel.instance.levelBuildBarracksAir,
            levelBuildBarracksMarine: CommandPostModel.instance.levelBuildBarracksMarine,
            levelBuildBarracksOverland: CommandPostModel.instance.levelBuildBarracksOverland
        }
        this.addModelInBuffer(TypesModels.COMMAND_POST_MODEL, obj)
    }

    private static preparationGameModel() {
        let obj: Object = {
            coins: GameModel.instance.coins,
            gems: GameModel.instance.gems,
            energy: GameModel.instance.energy,
            maxEnergy: GameModel.instance.maxEnergy,
            experience: GameModel.instance.experience,
            level: GameModel.instance.level,
            maxPower: GameModel.instance.maxPower,
            territoryPower: GameModel.instance.territoryPower,
            technoPower: GameModel.instance.technoPower,
            heroPower: GameModel.instance.heroPower,
            arsenalPower: GameModel.instance.arsenalPower,
            professionPower: GameModel.instance.professionPower,
            formationPower: GameModel.instance.formationPower
        }
        this.addModelInBuffer(TypesModels.GAME_MODEL, obj)
    }

    private static preparationGlobalMapModel() {
        let obj: Object[] = []
    }

    private static preparationHomeMapModelForServer() {
        let obj: Object[] = []

        obj.push({ numberOpenZones: HomeMapModel.instance.numberOpenZones })

        for (let i = 0; i < HomeMapModel.instance.mapSize; i++) {
            if (HomeMapModel.instance.arrayObjectParameters[i] == null) continue
            if (HomeMapModel.instance.arrayObjectParameters[i].index != i) continue
            obj.push({
                type: HomeMapModel.instance.arrayObjectParameters[i].type,
                level: HomeMapModel.instance.arrayObjectParameters[i].level,
                index: HomeMapModel.instance.arrayObjectParameters[i].index
            })
        }
        this.addModelInBuffer(TypesModels.HOME_MAP_MODEL, obj)
    }

    public static preparationHomeMapModelForLocal() {
        for (let i = 0; i < HomeMapModel.instance.mapSize; i++) {
            if (HomeMapModel.instance.arrayObjectParameters[i] == null) continue
            if (HomeMapModel.instance.arrayObjectParameters[i].index != i) continue

            let objParam: ObjectParameters = new ObjectParameters

            objParam.type = HomeMapModel.instance.arrayObjectParameters[i].type
            objParam.level = HomeMapModel.instance.arrayObjectParameters[i].level
            objParam.index = HomeMapModel.instance.arrayObjectParameters[i].index

            HomeMapModel.instance.temporaryLocalStorage.push(objParam)
        }
    }

    private static preparationRadarModel() {
        let obj: Object[] = []
    }

    private static preparationTasksGamerModel() {
        let obj: Object[] = []

        for (let i = 0; i < TasksGameModel.instance.tasks.length; i++) {
            obj.push({
                typeTask: TasksGameModel.instance.tasks[i].typeTask,
                levelObjectTask: TasksGameModel.instance.tasks[i].levelObjectTask,
                quantityRequired: TasksGameModel.instance.tasks[i].quantityRequired,
                quantityCompleted: TasksGameModel.instance.tasks[i].quantityCompleted,
                rewardTrigger: TasksGameModel.instance.tasks[i].rewardTrigger
            })
        }
        this.addModelInBuffer(TypesModels.TASKS_GAME_MODEL, obj)
    }

    public static addModelInBuffer(nameModel: string, obj: Object) {
        if (obj == null) return
        for (let i = 0; i < BufferModel.instance.arrayBuffer.length; i++) {
            if (BufferModel.instance.arrayBuffer[i].nameModel == nameModel) {
                BufferModel.instance.arrayBuffer.splice(i, 1)
                return BufferModel.instance.arrayBuffer.push(new Model(nameModel, obj))
            }
        }
        BufferModel.instance.arrayBuffer.push(new Model(nameModel, obj))
    }

    public static getBuffer(): object[] {
        return BufferModel.instance.arrayBuffer
    }

    public static isBufferFull(): boolean {
        if (BufferModel.instance.arrayBuffer.length > 0) {
            return true
        }
        return false

    }
    public static addEventToQueue(event: string) {
        BufferModel.instance.eventsQueue.push(event)
    }

    public static getQueueEvents(): string[] {
        return BufferModel.instance.eventsQueue
    }

    public static isEventsQueueFull(): boolean {
        return (BufferModel.instance.eventsQueue.length > 0) ? true : false
    }

    public static clearEventsQueue() {
        BufferModel.instance.eventsQueue = []
    }

    public static clearBufferStorage() {
        BufferModel.instance.arrayBuffer = []
    }
}