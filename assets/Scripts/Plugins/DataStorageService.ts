import { UserPresenter } from "../Presenter/UserPresenter"
import { ServerApi } from "./ServerApi"
import { TypesModels } from "../Static/TypesStorages"
import { LoadingGame } from "../LoadingGame/LoadingGame"
import { DataStorageDTO } from "../Structures/DTO/DataStorageDTO"
import { DataStorageResponseDTO } from "../Structures/DTO/DataStorageResponseDTO"
import { GameModel } from "../Model/GameModel"
import { CommandPostModel } from "../Model/CommandPostModel"
import { AutocombineModel } from "../Model/AutocombineModel"
import { Autocombine } from "../Structures/Autocombine"
import { BarrackModel } from "../Model/BarrackModel"
import { Barrack } from "../Structures/Barrack"
import { QuantityItem } from "../Structures/QuantityItem"
import { BackpackModel } from "../Model/BackpackModel"
import { ConfigPresenter } from "../Presenter/ConfigPresenter"
import { CharactersModel } from "../Model/CharactersModel"
import { CharacterInfo } from "../Structures/CharacterInfo"
import { TasksGameModel } from "../Model/TasksGameModel"
import { TaskGame } from "../Structures/TaskGame"
import { HomeMapModel } from "../Model/HomeMapModel"
import { ObjectParameters } from "../ObjectParameters"
import { HomeMapPresenter } from "../Presenter/HomeMapPresenter"

export class DataStorageService {

    public static saveData(data: object[]) {
        ServerApi.post('data-storage', new DataStorageDTO(UserPresenter.getAccountId(), UserPresenter.getSessionId(), data), DataStorageService.parseDataStoragePostResponce)
    }

    public static getData(keys: string[]) {
        const strKeys = JSON.parse(JSON.stringify(keys))
        ServerApi.get('data-storage', new DataStorageDTO(UserPresenter.getAccountId(), UserPresenter.getSessionId(), strKeys), DataStorageService.parseDataStorageGetResponce)
    }

    public static parseDataStorageGetResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get data error")
        else {
            const dataStorageJson = JSON.parse(JSON.stringify(data))
            const dataStorageResponseDTO = new DataStorageResponseDTO(dataStorageJson.objects)
            DataStorageService.dataRecipient(dataStorageResponseDTO.dataObjects)
        }
    }

    public static dataRecipient(objects: object[]) {

        //
        console.log(UserPresenter.getIsNewUser())
        LoadingGame.getPostData()
        LoadingGame.redirectToHomeMap()
        //

        if (UserPresenter.getIsNewUser()) {
            LoadingGame.getPostData()
            return
        }

        if (objects == null) {
            throw 'Пришел пустой обьект'
        }

        for (let i = 0; i < objects.length; i++) {
            const json = objects[i]
            let jsonValue = json['value']
            if (json['key'] == TypesModels.GAME_MODEL) {
                this.setGameModel(jsonValue)
            }
            else if (json['key'] == TypesModels.HOME_MAP_MODEL) {
                this.setHomeMapModel(jsonValue)
            }
            else if (json['key'] == TypesModels.BACKPACK_MODEL) {
                this.setBackpackModel(jsonValue)
            }
            else if (json['key'] == TypesModels.CHARACTERS_MODEL) {
                this.setCharactersModel(jsonValue)
            }
            else if (json['key'] == TypesModels.COMMAND_POST_MODEL) {
                this.setCommandPostModel(jsonValue)
            }
            else if (json['key'] == TypesModels.RADAR_MODEL) {
                this.setRadarModel(jsonValue)
            }
            else if (json['key'] == TypesModels.AUTOCOMBINE_MODEL) {
                this.setAutcombineModel(jsonValue)
            }
            else if (json['key'] == TypesModels.BARRACKS_MODEL) {
                this.setBarracksModel(jsonValue)
            }
            else if (json['key'] == TypesModels.TASKS_GAME_MODEL) {
                this.setTasksGameModel(jsonValue)
            }
        }
        LoadingGame.getPostData()
    }

    private static setGameModel(obj: Object) {
        let json = JSON.parse(JSON.stringify(obj))
        GameModel.instance.coins = json.coins
        GameModel.instance.gems = json.gems
        GameModel.instance.energy = json.energy
        GameModel.instance.maxEnergy = json.maxEnergy
        GameModel.instance.experience = json.experience
        GameModel.instance.level = json.level
        GameModel.instance.maxPower = json.maxPower
        GameModel.instance.territoryPower = json.territoryPower
        GameModel.instance.technoPower = json.technoPower
        GameModel.instance.heroPower = json.heroPower
        GameModel.instance.arsenalPower = json.arsenalPower
        GameModel.instance.professionPower = json.professionPower
        GameModel.instance.formationPower = json.formationPower
    }

    private static setHomeMapModel(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj[i]))
            if (i == 0) {
                HomeMapModel.instance.numberOpenZones = json.numberOpenZones
            }
            else {
                let json = JSON.parse(JSON.stringify(obj[i]))
                let objParam = new ObjectParameters
                objParam.type = json.type
                objParam.level = json.level
                objParam.index = json.index
                HomeMapPresenter.setObjectParameter(objParam, objParam.type, objParam.index)
            }
        }
    }

    private static setBackpackModel(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj[i]))
            BackpackModel.instance.backpack.push(new QuantityItem(json.type, json.quantity))
        }
    }

    private static setCharactersModel(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj[i]))
            let config = ConfigPresenter.getHeroConfigByCodeName(json.codeName)
            CharactersModel.instance.characters.push(new CharacterInfo(json.level, json.exp, json.stars, config.startDamage + (config.coefDamage * json.level + 5), config.startDefense + (config.coefDefense * json.level + 5 * 1), config.startLeader, config.type, config.codeName, json.type))
        }
    }

    private static setCommandPostModel(obj: Object) {
        let json = JSON.parse(JSON.stringify(obj))
        CommandPostModel.instance.levelCommandPost = json.levelCommandPost
        CommandPostModel.instance.levelRepairShop = json.levelRepairShop
        CommandPostModel.instance.levelMergeGoldMine = json.levelMergeGoldMine
        CommandPostModel.instance.levelBuildGoldMine = json.levelBuildGoldMine
        CommandPostModel.instance.levelMergeTroopAir = json.levelMergeTroopAir
        CommandPostModel.instance.levelMergeTroopMarine = json.levelMergeTroopMarine
        CommandPostModel.instance.levelMergeTroopOverland = json.levelMergeTroopOverland
        CommandPostModel.instance.levelMergeBarracksAir = json.levelMergeBarracksAir
        CommandPostModel.instance.levelMergeBarracksMarine = json.levelMergeBarracksMarine
        CommandPostModel.instance.levelMergeBarracksOverland = json.levelMergeBarracksOverland
        CommandPostModel.instance.levelBuildBarracksAir = json.levelBuildBarracksAir
        CommandPostModel.instance.levelBuildBarracksMarine = json.levelBuildBarracksMarine
        CommandPostModel.instance.levelBuildBarracksOverland = json.levelBuildBarracksOverland
    }

    private static setRadarModel(obj: Object) {

    }

    private static setAutcombineModel(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj[i]))
            if (i == 0) {
                AutocombineModel.instance.allProfit = json.allProfit
                AutocombineModel.instance.quantityWorkGoldMine = json.quantityWorkGoldMine
                AutocombineModel.instance.quantityProfit = json.quantityProfit
                AutocombineModel.instance.quantityCollect = json.quantityCollect
                AutocombineModel.instance.isActiveAutocombine = json.isActiveAutocombine
            }
            else {
                AutocombineModel.instance.indexes.push(new Autocombine(json.level, json.index, json.time))
            }
        }
    }

    private static setBarracksModel(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj[i]))
            BarrackModel.instance.arrayBarracks.push(new Barrack(json.indexBarrack))
            BarrackModel.instance.arrayBarracks[i].queueSpawnObject = json.queueSpawnObject
        }
    }

    private static setTasksGameModel(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj[i]))
            TasksGameModel.instance.tasks.push(new TaskGame(json[i].typeTask, json[i].typeTask, json[i].typeTask, json[i].typeTask, json[i].typeTask))
        }
    }

    public static parseDataStoragePostResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("Ошибка запроса дата сторадж пост")
        else {

        }
    }
}