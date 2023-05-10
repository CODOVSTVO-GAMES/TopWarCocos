import { _decorator } from 'cc';
import { ConfigStorage } from '../ConfigStorage';
import { GlobalConfigurationUnits } from '../../Structures/GlobalConfigurationUnits';
import { TypesObjects } from '../../Static/TypesObjects';
import { TypesItems } from '../../Static/TypesItems';
import { HeroConfig } from '../../Structures/HeroConfig';

export class ControllerConfigStorage {

    static getConfigByTypeAndLevel(type: string, level: number): GlobalConfigurationUnits {
        if (type == TypesObjects.BARRACKS_AIR || type == TypesObjects.BARRACKS_MARINE || type == TypesObjects.BARRACKS_OVERLAND) {
            throw "Запрещено запрашивать этот тип этим методом."
        }
        for (let i = 0; i < ConfigStorage.instance.globalConfig.length; i++) {
            if (ConfigStorage.instance.globalConfig[i].type == type && ConfigStorage.instance.globalConfig[i].level == level) {
                return ConfigStorage.instance.globalConfig[i]
            }
        }
        throw "Не существует такого обьекта"
    }

    static getProductionInTimeMineByLevel(level: number): number {
        for (let i = 0; i < ConfigStorage.instance.globalConfig.length; i++) {
            if (ConfigStorage.instance.globalConfig[i].imprivementResourceType == TypesItems.PLAN_MAX_MINE && ConfigStorage.instance.globalConfig[i].level == level) {
                return ConfigStorage.instance.globalConfig[i].productionInTime
            }
        }
        throw "Не существует такого уровня шахты"
    }

    static getExpPerSpawnMineByLevel(level: number): number {
        for (let i = 0; i < ConfigStorage.instance.globalConfig.length; i++) {
            if (ConfigStorage.instance.globalConfig[i].imprivementResourceType == TypesItems.PLAN_MAX_MINE && ConfigStorage.instance.globalConfig[i].level == level) {
                return ConfigStorage.instance.globalConfig[i].expPerSpawn
            }
        }
        throw "Не существует такого уровня шахты"
    }

    static getLevelExpirienceByLevel(level: number) {
        for (let i = 0; i < ConfigStorage.instance.levelConfig.length; i++) {
            if (ConfigStorage.instance.levelConfig[i].levelNumber == level) {
                return ConfigStorage.instance.levelConfig[i].expirience
            }
        }
        throw "Не существует такого уровня"
    }

    static getLevelPowerByLevel(level: number) {
        for (let i = 0; i < ConfigStorage.instance.levelConfig.length; i++) {
            if (ConfigStorage.instance.levelConfig[i].levelNumber == level) {
                return ConfigStorage.instance.levelConfig[i].powerUponReceipt
            }
        }
        throw "Не существует такого уровня"
    }

    static getLevelEnergyByLevel(level: number) {
        for (let i = 0; i < ConfigStorage.instance.levelConfig.length; i++) {
            if (ConfigStorage.instance.levelConfig[i].levelNumber == level) {
                return ConfigStorage.instance.levelConfig[i].energyUponREceipt
            }
        }
        throw "Не существует такого уровня"
    }

    static getLevelByExpirience(experience: number) {
        for (let i = 0; i < ConfigStorage.instance.levelConfig.length; i++) {
            if (ConfigStorage.instance.levelConfig[i + 1].expirience > experience) {
                return ConfigStorage.instance.levelConfig[i].levelNumber // будет работать корректно при сортированом массиве
            }
        }
        throw "Не существует такого уровня"
    }

    static getHeroLevelExpirienceByTypeAndLevel(type: string, level: number) {
        for (let i = 0; i < ConfigStorage.instance.heroLevelConfig.length; i++) {
            if (ConfigStorage.instance.heroLevelConfig[i].levelNumber == level && ConfigStorage.instance.heroLevelConfig[i].type == type) {
                return ConfigStorage.instance.heroLevelConfig[i].heroExpirience
            }
        }
        throw "Не существует такого уровня героя"
    }

    static getHeroConfigByCodeName(codeName: string): HeroConfig {
        for (let i = 0; i < ConfigStorage.instance.heroConfig.length; i++) {
            if (ConfigStorage.instance.heroConfig[i].codeName == codeName) {
                return ConfigStorage.instance.heroConfig[i]
            }
        }
        throw "Не существует такого уровня героя"
    }
}