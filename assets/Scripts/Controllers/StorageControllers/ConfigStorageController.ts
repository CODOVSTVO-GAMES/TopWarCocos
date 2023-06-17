import { _decorator } from 'cc';
import { ConfigStorage } from '../../Storage/ConfigStorage';
import { TypesObjects } from '../../Static/TypesObjects';
import { HeroConfig } from '../../Structures/HeroConfig';
import { UnitsCongig } from '../../Structures/ConfigUnits';
import { RadarConfig } from '../../Structures/RadarConfig';

export class ConfigStorageController {

    static getProdictionInTimeGoldMineByLevel(level: number): number {
        for (let i = 0; i < ConfigStorage.instance.mergeBuildingsConfig.length; i++) {
            if (ConfigStorage.instance.mergeBuildingsConfig[i].type == TypesObjects.GOLD_MINE && ConfigStorage.instance.mergeBuildingsConfig[i].level == level) {
                return ConfigStorage.instance.mergeBuildingsConfig[i].productionInTime;
            }
        }
        // throw "не существует такого уровня шахты";
        console.log("не существует такого уровня шахты");
    }

    static getLevelExpirienceByLevel(level: number) {
        for (let i = 0; i < ConfigStorage.instance.levelConfig.length; i++) {
            if (ConfigStorage.instance.levelConfig[i].levelNumber == level) {
                return ConfigStorage.instance.levelConfig[i].expirience
            }
        }
        // throw "не существует такого уровня";
        console.log("не существует такого уровня");
    }

    static getLevelPowerByLevel(level: number) {
        for (let i = 0; i < ConfigStorage.instance.levelConfig.length; i++) {
            if (ConfigStorage.instance.levelConfig[i].levelNumber == level) {
                return ConfigStorage.instance.levelConfig[i].powerUponReceipt
            }
        }
        // throw "не существует такого уровня";
        console.log("не существует такого уровня");
    }

    static getLevelEnergyByLevel(level: number) {
        for (let i = 0; i < ConfigStorage.instance.levelConfig.length; i++) {
            if (ConfigStorage.instance.levelConfig[i].levelNumber == level) {
                return ConfigStorage.instance.levelConfig[i].energyUponREceipt
            }
        }
        // throw "не существует такого уровня";
        console.log("не существует такого уровня");
    }

    static getLevelByExpirience(experience: number) {
        for (let i = 0; i < ConfigStorage.instance.levelConfig.length; i++) {
            if (ConfigStorage.instance.levelConfig[i + 1].expirience > experience) {
                return ConfigStorage.instance.levelConfig[i].levelNumber // будет работать корректно при сортированом массиве
            }
        }
        // throw "не существует такого уровня";
        console.log("не существует такого уровня");
    }

    static getHeroLevelExpirienceByTypeAndLevel(type: string, level: number) {
        for (let i = 0; i < ConfigStorage.instance.heroLevelConfig.length; i++) {
            if (ConfigStorage.instance.heroLevelConfig[i].levelNumber == level && ConfigStorage.instance.heroLevelConfig[i].type == type) {
                return ConfigStorage.instance.heroLevelConfig[i].heroExpirience
            }
        }
        // throw "не существует такого уровня героя";
        console.log("не существует такого уровня героя");
    }

    static getHeroLevelByExpirienceAndType(experience: number) {
        for (let i = 0; i < ConfigStorage.instance.heroLevelConfig.length; i++) {
            if (ConfigStorage.instance.heroLevelConfig[i + 1].heroExpirience > experience) {
                return ConfigStorage.instance.heroLevelConfig[i].levelNumber // будет работать корректно при сортированом массиве
            }
        }
        // throw "не существует такого уровня";
        console.log("не существует такого уровня");
    }

    static getHeroConfigByCodeName(codeName: string): HeroConfig {
        for (let i = 0; i < ConfigStorage.instance.heroConfig.length; i++) {
            if (ConfigStorage.instance.heroConfig[i].codeName == codeName) {
                return ConfigStorage.instance.heroConfig[i]
            }
        }
        // throw "не существует такого уровня героя";
        console.log("не существует такого уровня героя");
    }


    //---------------------------------------------------------------------------------------------------
    //main building and repair building


    static getPowerMainBuildingByLevel(level: number) {
        for (let i = 0; i < ConfigStorage.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigStorage.instance.mainAndRepairBuildings[i].type == TypesObjects.COMMAND_POST
                && ConfigStorage.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigStorage.instance.mainAndRepairBuildings[i].power
            }
        }
        // throw "Главное здание такого уровня не найдено";
        console.log("Главное здание такого уровня не найдено");
    }

    static getExpMainBuildingByLevel(level: number) {
        for (let i = 0; i < ConfigStorage.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigStorage.instance.mainAndRepairBuildings[i].type == TypesObjects.COMMAND_POST
                && ConfigStorage.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigStorage.instance.mainAndRepairBuildings[i].experience
            }
        }
        // throw "Главное здание такого уровня не найдено";
        console.log("Главное здание такого уровня не найдено");
    }

    static getPriceUpdateMainBuildingByLevel(level: number) {
        for (let i = 0; i < ConfigStorage.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigStorage.instance.mainAndRepairBuildings[i].type == TypesObjects.COMMAND_POST
                && ConfigStorage.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigStorage.instance.mainAndRepairBuildings[i].priceUpdate
            }
        }
        // throw "Главное здание такого уровня не найдено";
        console.log("Главное здание такого уровня не найдено");
    }

    static getImprivementResourceTypeMainBuildingByLevel(level: number) {
        for (let i = 0; i < ConfigStorage.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigStorage.instance.mainAndRepairBuildings[i].type == TypesObjects.COMMAND_POST
                && ConfigStorage.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigStorage.instance.mainAndRepairBuildings[i].imprivementResourceType
            }
        }
        // throw "Главное здание такого уровня не найдено";
        console.log("Главное здание такого уровня не найдено");
    }

    static getImprivementResourceNumberMainBuildingByLevel(level: number) {
        for (let i = 0; i < ConfigStorage.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigStorage.instance.mainAndRepairBuildings[i].type == TypesObjects.COMMAND_POST
                && ConfigStorage.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigStorage.instance.mainAndRepairBuildings[i].imprivementResourceNumber
            }
        }
        // throw "Главное здание такого уровня не найдено";
        console.log("Главное здание такого уровня не найдено");
    }

    static getAttackBonusMainBuildingByLevel(level: number) {
        for (let i = 0; i < ConfigStorage.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigStorage.instance.mainAndRepairBuildings[i].type == TypesObjects.COMMAND_POST
                && ConfigStorage.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigStorage.instance.mainAndRepairBuildings[i].attackBonus
            }
        }
        // throw "Главное здание такого уровня не найдено";
        console.log("Главное здание такого уровня не найдено");
    }


    //---------------------------------------------------------------------------------------------------
    //powerRepairBuildings


    static getPowerRepairBuilding(level: number) {
        for (let i = 0; i < ConfigStorage.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigStorage.instance.mainAndRepairBuildings[i].type == TypesObjects.REPAIR_SHOP
                && ConfigStorage.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigStorage.instance.mainAndRepairBuildings[i].power
            }
        }
        // throw "Главное здание такого уровня не найдено";
        console.log("Главное здание такого уровня не найдено");
    }

    static getExpRepairBuilding(level: number) {
        for (let i = 0; i < ConfigStorage.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigStorage.instance.mainAndRepairBuildings[i].type == TypesObjects.REPAIR_SHOP
                && ConfigStorage.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigStorage.instance.mainAndRepairBuildings[i].experience
            }
        }
        // throw "Главное здание такого уровня не найдено";
        console.log("Главное здание такого уровня не найдено");
    }

    static getPriceUpdateRepairBuilding(level: number) {
        for (let i = 0; i < ConfigStorage.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigStorage.instance.mainAndRepairBuildings[i].type == TypesObjects.REPAIR_SHOP
                && ConfigStorage.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigStorage.instance.mainAndRepairBuildings[i].priceUpdate
            }
        }
        // throw "Главное здание такого уровня не найдено";
        console.log("Главное здание такого уровня не найдено");
    }

    static getImprivementResourceTypeRepairBuilding(level: number) {
        for (let i = 0; i < ConfigStorage.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigStorage.instance.mainAndRepairBuildings[i].type == TypesObjects.REPAIR_SHOP
                && ConfigStorage.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigStorage.instance.mainAndRepairBuildings[i].imprivementResourceType
            }
        }
        // throw "Главное здание такого уровня не найдено";
        console.log("Главное здание такого уровня не найдено");
    }

    static getImprivementResourceNumberRepairBuilding(level: number) {
        for (let i = 0; i < ConfigStorage.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigStorage.instance.mainAndRepairBuildings[i].type == TypesObjects.REPAIR_SHOP
                && ConfigStorage.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigStorage.instance.mainAndRepairBuildings[i].imprivementResourceNumber
            }
        }
        // throw "Главное здание такого уровня не найдено";
        console.log("Главное здание такого уровня не найдено");
    }

    static getNumberWokrShopRepairBuilding(level: number) {
        for (let i = 0; i < ConfigStorage.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigStorage.instance.mainAndRepairBuildings[i].type == TypesObjects.REPAIR_SHOP
                && ConfigStorage.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigStorage.instance.mainAndRepairBuildings[i].level
            }
        }
        // throw "Главное здание такого уровня не найдено";
        console.log("Главное здание такого уровня не найдено");
    }


    //---------------------------------------------------------------------------------------------------
    //unitsConfig


    static getConfigUnitsByTypeAndLevel(type: string, level: number): UnitsCongig {
        if (type != TypesObjects.TROOP_OVERLAND && type != TypesObjects.TROOP_MARINE && type != TypesObjects.TROOP_AIR) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.unitsConfig.length; i++) {
            if (ConfigStorage.instance.unitsConfig[i].type == type && ConfigStorage.instance.unitsConfig[i].level == level) {
                return ConfigStorage.instance.unitsConfig[i]
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getExpirienceUnitsByTypeAndLevel(type: string, level: number): number {
        if (type != TypesObjects.TROOP_OVERLAND && type != TypesObjects.TROOP_MARINE && type != TypesObjects.TROOP_AIR) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.unitsConfig.length; i++) {
            if (ConfigStorage.instance.unitsConfig[i].type == type && ConfigStorage.instance.unitsConfig[i].level == level) {
                return ConfigStorage.instance.unitsConfig[i].experience
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getPowerUnitsByTypeAndLevel(type: string, level: number): number {
        if (type != TypesObjects.TROOP_OVERLAND && type != TypesObjects.TROOP_MARINE && type != TypesObjects.TROOP_AIR) {
            // throw "Запрещено запрашивать этот тип этим методом.";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.unitsConfig.length; i++) {
            if (ConfigStorage.instance.unitsConfig[i].type == type && ConfigStorage.instance.unitsConfig[i].level == level) {
                return ConfigStorage.instance.unitsConfig[i].power
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getHpUnitsByTypeAndLevel(type: string, level: number): number {
        if (type != TypesObjects.TROOP_OVERLAND && type != TypesObjects.TROOP_MARINE && type != TypesObjects.TROOP_AIR) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.unitsConfig.length; i++) {
            if (ConfigStorage.instance.unitsConfig[i].type == type && ConfigStorage.instance.unitsConfig[i].level == level) {
                return ConfigStorage.instance.unitsConfig[i].hp
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getDamageUnitsByTypeAndLevel(type: string, level: number): number {
        if (type != TypesObjects.TROOP_OVERLAND && type != TypesObjects.TROOP_MARINE && type != TypesObjects.TROOP_AIR) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.unitsConfig.length; i++) {
            if (ConfigStorage.instance.unitsConfig[i].type == type && ConfigStorage.instance.unitsConfig[i].level == level) {
                return ConfigStorage.instance.unitsConfig[i].damage
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getAttackTypeUnitsByTypeAndLevel(type: string, level: number): string {
        if (type != TypesObjects.TROOP_OVERLAND && type != TypesObjects.TROOP_MARINE && type != TypesObjects.TROOP_AIR) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.unitsConfig.length; i++) {
            if (ConfigStorage.instance.unitsConfig[i].type == type && ConfigStorage.instance.unitsConfig[i].level == level) {
                return ConfigStorage.instance.unitsConfig[i].attackType
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getTimeCreationUnitsByTypeAndLevel(type: string, level: number): number {
        if (type != TypesObjects.TROOP_OVERLAND && type != TypesObjects.TROOP_MARINE && type != TypesObjects.TROOP_AIR) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.unitsConfig.length; i++) {
            if (ConfigStorage.instance.unitsConfig[i].type == type && ConfigStorage.instance.unitsConfig[i].level == level) {
                return ConfigStorage.instance.unitsConfig[i].timeCreation
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getPriceBuyUnitsByTypeAndLevel(type: string, level: number): number {
        if (type != TypesObjects.TROOP_OVERLAND && type != TypesObjects.TROOP_MARINE && type != TypesObjects.TROOP_AIR) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.unitsConfig.length; i++) {
            if (ConfigStorage.instance.unitsConfig[i].type == type && ConfigStorage.instance.unitsConfig[i].level == level) {
                return ConfigStorage.instance.unitsConfig[i].priceBuy
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getPriceUpdateUnitsByTypeAndLevel(type: string, level: number): number {
        if (type != TypesObjects.TROOP_OVERLAND && type != TypesObjects.TROOP_MARINE && type != TypesObjects.TROOP_AIR) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.unitsConfig.length; i++) {
            if (ConfigStorage.instance.unitsConfig[i].type == type && ConfigStorage.instance.unitsConfig[i].level == level) {
                return ConfigStorage.instance.unitsConfig[i].priceUpdate
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getImprivementResourceTypeUnitsByTypeAndLevel(type: string, level: number): string {
        if (type != TypesObjects.TROOP_OVERLAND && type != TypesObjects.TROOP_MARINE && type != TypesObjects.TROOP_AIR) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.unitsConfig.length; i++) {
            if (ConfigStorage.instance.unitsConfig[i].type == type && ConfigStorage.instance.unitsConfig[i].level == level) {
                return ConfigStorage.instance.unitsConfig[i].imprivementResourceType
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getImprivementResourceNumberUnitsByTypeAndLevel(type: string, level: number): number {
        if (type != TypesObjects.TROOP_OVERLAND && type != TypesObjects.TROOP_MARINE && type != TypesObjects.TROOP_AIR) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.unitsConfig.length; i++) {
            if (ConfigStorage.instance.unitsConfig[i].type == type && ConfigStorage.instance.unitsConfig[i].level == level) {
                return ConfigStorage.instance.unitsConfig[i].imprivementResourceNumber
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getExpPerSpawnUnitsByTypeAndLevel(type: string, level: number): number {
        if (type != TypesObjects.TROOP_OVERLAND && type != TypesObjects.TROOP_MARINE && type != TypesObjects.TROOP_AIR) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.unitsConfig.length; i++) {
            if (ConfigStorage.instance.unitsConfig[i].type == type && ConfigStorage.instance.unitsConfig[i].level == level) {
                return ConfigStorage.instance.unitsConfig[i].expPerSpawn
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }


    //---------------------------------------------------------------------------------------------------
    //configMergeBuildings


    static getExpirienceBuildingMergeByTypeAndLevel(type: string, level: number): number {
        if (type != TypesObjects.BARRACKS_MARINE && type != TypesObjects.BARRACKS_AIR && type != TypesObjects.BARRACKS_OVERLAND && type != TypesObjects.GOLD_MINE) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.mergeBuildingsConfig.length; i++) {
            if (ConfigStorage.instance.mergeBuildingsConfig[i].type == type && ConfigStorage.instance.mergeBuildingsConfig[i].level == level) {
                return ConfigStorage.instance.mergeBuildingsConfig[i].experience
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getPowerBuildingMergeByTypeAndLevel(type: string, level: number): number {
        if (type != TypesObjects.BARRACKS_MARINE && type != TypesObjects.BARRACKS_AIR && type != TypesObjects.BARRACKS_OVERLAND && type != TypesObjects.GOLD_MINE) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.mergeBuildingsConfig.length; i++) {
            if (ConfigStorage.instance.mergeBuildingsConfig[i].type == type && ConfigStorage.instance.mergeBuildingsConfig[i].level == level) {
                return ConfigStorage.instance.mergeBuildingsConfig[i].power
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getPriceUpdateBuildingMergeByTypeAndLevel(type: string, level: number): number {
        if (type != TypesObjects.BARRACKS_MARINE && type != TypesObjects.BARRACKS_AIR && type != TypesObjects.BARRACKS_OVERLAND && type != TypesObjects.GOLD_MINE) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.mergeBuildingsConfig.length; i++) {
            if (ConfigStorage.instance.mergeBuildingsConfig[i].type == type && ConfigStorage.instance.mergeBuildingsConfig[i].level == level) {
                return ConfigStorage.instance.mergeBuildingsConfig[i].priceUpdate
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getImprivementResourceTypeBuildingMergeByTypeAndLevel(type: string, level: number): string {
        if (type != TypesObjects.BARRACKS_MARINE && type != TypesObjects.BARRACKS_AIR && type != TypesObjects.BARRACKS_OVERLAND && type != TypesObjects.GOLD_MINE) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.mergeBuildingsConfig.length; i++) {
            if (ConfigStorage.instance.mergeBuildingsConfig[i].type == type && ConfigStorage.instance.mergeBuildingsConfig[i].level == level) {
                return ConfigStorage.instance.mergeBuildingsConfig[i].imprivementResourceType
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getIimprivementResourceNumberBuildingMergeByTypeAndLevel(type: string, level: number): number {
        if (type != TypesObjects.BARRACKS_MARINE && type != TypesObjects.BARRACKS_AIR && type != TypesObjects.BARRACKS_OVERLAND && type != TypesObjects.GOLD_MINE) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.mergeBuildingsConfig.length; i++) {
            if (ConfigStorage.instance.mergeBuildingsConfig[i].type == type && ConfigStorage.instance.mergeBuildingsConfig[i].level == level) {
                return ConfigStorage.instance.mergeBuildingsConfig[i].imprivementResourceNumber
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }


    //---------------------------------------------------------------------------------------------------
    //configSpawnBuildings


    static getExpirienceBuildingSpawnByTypeAndLevel(type: string, level: number): number {
        if (type != TypesObjects.BARRACKS_MARINE && type != TypesObjects.BARRACKS_AIR && type != TypesObjects.BARRACKS_OVERLAND && type != TypesObjects.GOLD_MINE) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.spawnBuildingsConfig.length; i++) {
            if (ConfigStorage.instance.spawnBuildingsConfig[i].type == type && ConfigStorage.instance.spawnBuildingsConfig[i].level == level) {
                return ConfigStorage.instance.spawnBuildingsConfig[i].experience
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getPowerBuildingSpawnByTypeAndLevel(type: string, level: number): number {
        if (type != TypesObjects.BARRACKS_MARINE && type != TypesObjects.BARRACKS_AIR && type != TypesObjects.BARRACKS_OVERLAND && type != TypesObjects.GOLD_MINE) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.spawnBuildingsConfig.length; i++) {
            if (ConfigStorage.instance.spawnBuildingsConfig[i].type == type && ConfigStorage.instance.spawnBuildingsConfig[i].level == level) {
                return ConfigStorage.instance.spawnBuildingsConfig[i].power
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getPriceBuyBuildingSpawnByTypeAndLevel(type: string, level: number): number {
        if (type != TypesObjects.BARRACKS_MARINE && type != TypesObjects.BARRACKS_AIR && type != TypesObjects.BARRACKS_OVERLAND && type != TypesObjects.GOLD_MINE) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.spawnBuildingsConfig.length; i++) {
            if (ConfigStorage.instance.spawnBuildingsConfig[i].type == type && ConfigStorage.instance.spawnBuildingsConfig[i].level == level) {
                return ConfigStorage.instance.spawnBuildingsConfig[i].priceBuy
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getPriceUpdateBuildingSpawnByTypeAndLevel(type: string, level: number): number {
        if (type != TypesObjects.BARRACKS_MARINE && type != TypesObjects.BARRACKS_AIR && type != TypesObjects.BARRACKS_OVERLAND && type != TypesObjects.GOLD_MINE) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.spawnBuildingsConfig.length; i++) {
            if (ConfigStorage.instance.spawnBuildingsConfig[i].type == type && ConfigStorage.instance.spawnBuildingsConfig[i].level == level) {
                return ConfigStorage.instance.spawnBuildingsConfig[i].priceUpdate
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getIimprivementResourceTypeUpdateBuildingSpawnByTypeAndLevel(type: string, level: number): string {
        if (type != TypesObjects.BARRACKS_MARINE && type != TypesObjects.BARRACKS_AIR && type != TypesObjects.BARRACKS_OVERLAND && type != TypesObjects.GOLD_MINE) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.spawnBuildingsConfig.length; i++) {
            if (ConfigStorage.instance.spawnBuildingsConfig[i].type == type && ConfigStorage.instance.spawnBuildingsConfig[i].level == level) {
                return ConfigStorage.instance.spawnBuildingsConfig[i].imprivementResourceType
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(type: string, level: number): number {
        if (type != TypesObjects.BARRACKS_MARINE && type != TypesObjects.BARRACKS_AIR && type != TypesObjects.BARRACKS_OVERLAND && type != TypesObjects.GOLD_MINE) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.spawnBuildingsConfig.length; i++) {
            if (ConfigStorage.instance.spawnBuildingsConfig[i].type == type && ConfigStorage.instance.spawnBuildingsConfig[i].level == level) {
                return ConfigStorage.instance.spawnBuildingsConfig[i].imprivementResourceNumber
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getExpPerSpawnResourceNumberUpdateBuildingSpawnByTypeAndLevel(type: string, level: number): number {
        if (type != TypesObjects.BARRACKS_MARINE && type != TypesObjects.BARRACKS_AIR && type != TypesObjects.BARRACKS_OVERLAND && type != TypesObjects.GOLD_MINE) {
            // throw "Запрещено запрашивать этот тип этим методом";
            console.log("Запрещено запрашивать этот тип этим методом");
        }

        for (let i = 0; i < ConfigStorage.instance.spawnBuildingsConfig.length; i++) {
            if (ConfigStorage.instance.spawnBuildingsConfig[i].type == type && ConfigStorage.instance.spawnBuildingsConfig[i].level == level) {
                return ConfigStorage.instance.spawnBuildingsConfig[i].expPerSpawn
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getRadarConfigByLevel(level: number): RadarConfig {
        for (let i = 0; i < ConfigStorage.instance.radarConfig.length; i++) {
            if (ConfigStorage.instance.radarConfig[i].level == level) {
                return ConfigStorage.instance.radarConfig[i]
            }
        }
        throw "Радар такого уровня не найден";
    }

    getHeroConfig(): HeroConfig[] {
        return ConfigStorage.instance.heroConfig;
    }


    //---------------------------------------------------------------------------------------------------
    //expirienceRadar


    static getExpirienceRadarByLevel(level: number): number {
        if (ConfigStorage.instance.expirienceRadar.length < level) throw 'Уровень не существует'
        return ConfigStorage.instance.expirienceRadar[level]
    }


    //---------------------------------------------------------------------------------------------------
    //goldBox

    static getGoldByLevel(level: number): number {
        if (ConfigStorage.instance.goldBoxConfig.length < level) throw 'Уровень не существует'
        return ConfigStorage.instance.goldBoxConfig[level]
    }

    //---------------------------------------------------------------------------------------------------
    //radarBasicRate

    static getRadarBasicRateByLevel(level: number) {
        if (ConfigStorage.instance.radarBasicRate.length < level) throw 'Уровень не существует'
        return ConfigStorage.instance.radarBasicRate[level]
    }

    //---------------------------------------------------------------------------------------------------
    //radarProgressNumber

    static getRadarProgressNumberByLevel(level: number) {
        if (ConfigStorage.instance.radarProgressNumber.length < level) throw 'Уровень не существует'
        return ConfigStorage.instance.radarProgressNumber[level]
    }



    //---------------------------------------------------------------------------------------------------
}