import { _decorator } from 'cc';
import { ConfigModel } from '../Model/ConfigModel';
import { TypesObjects } from '../Static/TypesObjects';
import { HeroConfig } from '../Structures/HeroConfig';
import { UnitsCongig } from '../Structures/ConfigUnits';
import { RadarConfig } from '../Structures/RadarConfig';
import { MainAndRepairBuildings } from '../Structures/MainAndRepairBuildings';

export class ConfigPresenter {

    static getProdictionInTimeGoldMineByLevel(level: number): number {
        for (let i = 0; i < ConfigModel.instance.mergeBuildingsConfig.length; i++) {
            if (ConfigModel.instance.mergeBuildingsConfig[i].type == TypesObjects.GOLD_MINE && ConfigModel.instance.mergeBuildingsConfig[i].level == level) {
                return ConfigModel.instance.mergeBuildingsConfig[i].productionInTime;
            }
        }
        // throw "не существует такого уровня шахты";
        console.log("не существует такого уровня шахты");
    }

    static getLevelExpirienceByLevel(level: number) {
        for (let i = 0; i < ConfigModel.instance.levelConfig.length; i++) {
            if (ConfigModel.instance.levelConfig[i].levelNumber == level) {
                return ConfigModel.instance.levelConfig[i].expirience
            }
        }
        // throw "не существует такого уровня";
        console.log("не существует такого уровня");
    }

    static getLevelPowerByLevel(level: number) {
        for (let i = 0; i < ConfigModel.instance.levelConfig.length; i++) {
            if (ConfigModel.instance.levelConfig[i].levelNumber == level) {
                return ConfigModel.instance.levelConfig[i].powerUponReceipt
            }
        }
        // throw "не существует такого уровня";
        console.log("не существует такого уровня");
    }

    static getLevelEnergyByLevel(level: number) {
        for (let i = 0; i < ConfigModel.instance.levelConfig.length; i++) {
            if (ConfigModel.instance.levelConfig[i].levelNumber == level) {
                return ConfigModel.instance.levelConfig[i].energyUponREceipt
            }
        }
        // throw "не существует такого уровня";
        console.log("не существует такого уровня");
    }

    static getLevelByExpirience(experience: number) {
        for (let i = 0; i < ConfigModel.instance.levelConfig.length; i++) {
            if (ConfigModel.instance.levelConfig[i + 1].expirience > experience) {
                return ConfigModel.instance.levelConfig[i].levelNumber // будет работать корректно при сортированом массиве
            }
        }
        // throw "не существует такого уровня";
        console.log("не существует такого уровня");
    }

    static getHeroLevelExpirienceByTypeAndLevel(type: string, level: number) {
        for (let i = 0; i < ConfigModel.instance.heroLevelConfig.length; i++) {
            if (ConfigModel.instance.heroLevelConfig[i].levelNumber == level && ConfigModel.instance.heroLevelConfig[i].type == type) {
                return ConfigModel.instance.heroLevelConfig[i].heroExpirience
            }
        }
        // throw "не существует такого уровня героя";
        console.log("не существует такого уровня героя");
    }

    static getHeroLevelByExpirienceAndType(experience: number) {
        for (let i = 0; i < ConfigModel.instance.heroLevelConfig.length; i++) {
            if (ConfigModel.instance.heroLevelConfig[i + 1].heroExpirience > experience) {
                return ConfigModel.instance.heroLevelConfig[i].levelNumber // будет работать корректно при сортированом массиве
            }
        }
        // throw "не существует такого уровня";
        console.log("не существует такого уровня");
    }

    static getHeroConfigByCodeName(codeName: string): HeroConfig {
        for (let i = 0; i < ConfigModel.instance.heroConfig.length; i++) {
            if (ConfigModel.instance.heroConfig[i].codeName == codeName) {
                return ConfigModel.instance.heroConfig[i]
            }
        }
        // throw "не существует такого уровня героя";
        console.log("не существует такого уровня героя");
    }


    //---------------------------------------------------------------------------------------------------
    //main building and repair building


    static getPowerMainBuildingByLevel(level: number) {
        for (let i = 0; i < ConfigModel.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigModel.instance.mainAndRepairBuildings[i].type == TypesObjects.COMMAND_POST
                && ConfigModel.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigModel.instance.mainAndRepairBuildings[i].power
            }
        }
        // throw "Главное здание такого уровня не найдено";
        console.log("Главное здание такого уровня не найдено");
    }

    static getExpMainBuildingByLevel(level: number) {
        for (let i = 0; i < ConfigModel.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigModel.instance.mainAndRepairBuildings[i].type == TypesObjects.COMMAND_POST
                && ConfigModel.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigModel.instance.mainAndRepairBuildings[i].experience
            }
        }
        // throw "Главное здание такого уровня не найдено";
        console.log("Главное здание такого уровня не найдено");
    }

    static getPriceUpdateMainBuildingByLevel(level: number) {
        for (let i = 0; i < ConfigModel.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigModel.instance.mainAndRepairBuildings[i].type == TypesObjects.COMMAND_POST
                && ConfigModel.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigModel.instance.mainAndRepairBuildings[i].priceUpdate
            }
        }
        // throw "Главное здание такого уровня не найдено";
        console.log("Главное здание такого уровня не найдено");
    }

    static getImprivementResourceTypeMainBuildingByLevel(level: number) {
        for (let i = 0; i < ConfigModel.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigModel.instance.mainAndRepairBuildings[i].type == TypesObjects.COMMAND_POST
                && ConfigModel.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigModel.instance.mainAndRepairBuildings[i].imprivementResourceType
            }
        }
        // throw "Главное здание такого уровня не найдено";
        console.log("Главное здание такого уровня не найдено");
    }

    static getImprivementResourceNumberMainBuildingByLevel(level: number) {
        for (let i = 0; i < ConfigModel.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigModel.instance.mainAndRepairBuildings[i].type == TypesObjects.COMMAND_POST
                && ConfigModel.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigModel.instance.mainAndRepairBuildings[i].imprivementResourceNumber
            }
        }
        // throw "Главное здание такого уровня не найдено";
        console.log("Главное здание такого уровня не найдено");
    }

    static getAttackBonusMainBuildingByLevel(level: number) {
        for (let i = 0; i < ConfigModel.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigModel.instance.mainAndRepairBuildings[i].type == TypesObjects.COMMAND_POST
                && ConfigModel.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigModel.instance.mainAndRepairBuildings[i].attackBonus
            }
        }
        // throw "Главное здание такого уровня не найдено";
        console.log("Главное здание такого уровня не найдено");
    }


    //---------------------------------------------------------------------------------------------------
    //powerRepairBuildings

    static repairBuildings(level: number): MainAndRepairBuildings {
        for (let i = 0; i < ConfigModel.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigModel.instance.mainAndRepairBuildings[i].type == TypesObjects.REPAIR_SHOP
                && ConfigModel.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigModel.instance.mainAndRepairBuildings[i]
            }
        }
        console.log("Главное здание такого уровня не найдено");
    }
    ///--<




    static getPriceUpdateRepairBuilding(level: number) {
        for (let i = 0; i < ConfigModel.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigModel.instance.mainAndRepairBuildings[i].type == TypesObjects.REPAIR_SHOP
                && ConfigModel.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigModel.instance.mainAndRepairBuildings[i].priceUpdate
            }
        }
        // throw "Главное здание такого уровня не найдено";
        console.log("Главное здание такого уровня не найдено");
    }

    static getImprivementResourceNumberRepairBuilding(level: number) {
        for (let i = 0; i < ConfigModel.instance.mainAndRepairBuildings.length; i++) {
            if (ConfigModel.instance.mainAndRepairBuildings[i].type == TypesObjects.REPAIR_SHOP
                && ConfigModel.instance.mainAndRepairBuildings[i].level == level) {
                return ConfigModel.instance.mainAndRepairBuildings[i].imprivementResourceNumber
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

        for (let i = 0; i < ConfigModel.instance.unitsConfig.length; i++) {
            if (ConfigModel.instance.unitsConfig[i].type == type && ConfigModel.instance.unitsConfig[i].level == level) {
                return ConfigModel.instance.unitsConfig[i]
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

        for (let i = 0; i < ConfigModel.instance.unitsConfig.length; i++) {
            if (ConfigModel.instance.unitsConfig[i].type == type && ConfigModel.instance.unitsConfig[i].level == level) {
                return ConfigModel.instance.unitsConfig[i].experience
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

        for (let i = 0; i < ConfigModel.instance.unitsConfig.length; i++) {
            if (ConfigModel.instance.unitsConfig[i].type == type && ConfigModel.instance.unitsConfig[i].level == level) {
                return ConfigModel.instance.unitsConfig[i].power
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

        for (let i = 0; i < ConfigModel.instance.unitsConfig.length; i++) {
            if (ConfigModel.instance.unitsConfig[i].type == type && ConfigModel.instance.unitsConfig[i].level == level) {
                return ConfigModel.instance.unitsConfig[i].activeHp
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

        for (let i = 0; i < ConfigModel.instance.unitsConfig.length; i++) {
            if (ConfigModel.instance.unitsConfig[i].type == type && ConfigModel.instance.unitsConfig[i].level == level) {
                return ConfigModel.instance.unitsConfig[i].damageTroop
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

        for (let i = 0; i < ConfigModel.instance.unitsConfig.length; i++) {
            if (ConfigModel.instance.unitsConfig[i].type == type && ConfigModel.instance.unitsConfig[i].level == level) {
                return ConfigModel.instance.unitsConfig[i].typeAttack
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

        for (let i = 0; i < ConfigModel.instance.unitsConfig.length; i++) {
            if (ConfigModel.instance.unitsConfig[i].type == type && ConfigModel.instance.unitsConfig[i].level == level) {
                return ConfigModel.instance.unitsConfig[i].timeCreation
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

        for (let i = 0; i < ConfigModel.instance.unitsConfig.length; i++) {
            if (ConfigModel.instance.unitsConfig[i].type == type && ConfigModel.instance.unitsConfig[i].level == level) {
                return ConfigModel.instance.unitsConfig[i].priceBuy
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

        for (let i = 0; i < ConfigModel.instance.unitsConfig.length; i++) {
            if (ConfigModel.instance.unitsConfig[i].type == type && ConfigModel.instance.unitsConfig[i].level == level) {
                return ConfigModel.instance.unitsConfig[i].priceUpdate
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

        for (let i = 0; i < ConfigModel.instance.unitsConfig.length; i++) {
            if (ConfigModel.instance.unitsConfig[i].type == type && ConfigModel.instance.unitsConfig[i].level == level) {
                return ConfigModel.instance.unitsConfig[i].imprivementResourceType
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

        for (let i = 0; i < ConfigModel.instance.unitsConfig.length; i++) {
            if (ConfigModel.instance.unitsConfig[i].type == type && ConfigModel.instance.unitsConfig[i].level == level) {
                return ConfigModel.instance.unitsConfig[i].imprivementResourceNumber
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

        for (let i = 0; i < ConfigModel.instance.unitsConfig.length; i++) {
            if (ConfigModel.instance.unitsConfig[i].type == type && ConfigModel.instance.unitsConfig[i].level == level) {
                return ConfigModel.instance.unitsConfig[i].expPerSpawn
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

        for (let i = 0; i < ConfigModel.instance.mergeBuildingsConfig.length; i++) {
            if (ConfigModel.instance.mergeBuildingsConfig[i].type == type && ConfigModel.instance.mergeBuildingsConfig[i].level == level) {
                return ConfigModel.instance.mergeBuildingsConfig[i].experience
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

        for (let i = 0; i < ConfigModel.instance.mergeBuildingsConfig.length; i++) {
            if (ConfigModel.instance.mergeBuildingsConfig[i].type == type && ConfigModel.instance.mergeBuildingsConfig[i].level == level) {
                return ConfigModel.instance.mergeBuildingsConfig[i].power
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

        for (let i = 0; i < ConfigModel.instance.mergeBuildingsConfig.length; i++) {
            if (ConfigModel.instance.mergeBuildingsConfig[i].type == type && ConfigModel.instance.mergeBuildingsConfig[i].level == level) {
                return ConfigModel.instance.mergeBuildingsConfig[i].priceUpdate
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

        for (let i = 0; i < ConfigModel.instance.mergeBuildingsConfig.length; i++) {
            if (ConfigModel.instance.mergeBuildingsConfig[i].type == type && ConfigModel.instance.mergeBuildingsConfig[i].level == level) {
                return ConfigModel.instance.mergeBuildingsConfig[i].imprivementResourceType
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

        for (let i = 0; i < ConfigModel.instance.mergeBuildingsConfig.length; i++) {
            if (ConfigModel.instance.mergeBuildingsConfig[i].type == type && ConfigModel.instance.mergeBuildingsConfig[i].level == level) {
                return ConfigModel.instance.mergeBuildingsConfig[i].imprivementResourceNumber
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

        for (let i = 0; i < ConfigModel.instance.spawnBuildingsConfig.length; i++) {
            if (ConfigModel.instance.spawnBuildingsConfig[i].type == type && ConfigModel.instance.spawnBuildingsConfig[i].level == level) {
                return ConfigModel.instance.spawnBuildingsConfig[i].experience
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

        for (let i = 0; i < ConfigModel.instance.spawnBuildingsConfig.length; i++) {
            if (ConfigModel.instance.spawnBuildingsConfig[i].type == type && ConfigModel.instance.spawnBuildingsConfig[i].level == level) {
                return ConfigModel.instance.spawnBuildingsConfig[i].power
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

        for (let i = 0; i < ConfigModel.instance.spawnBuildingsConfig.length; i++) {
            if (ConfigModel.instance.spawnBuildingsConfig[i].type == type && ConfigModel.instance.spawnBuildingsConfig[i].level == level) {
                return ConfigModel.instance.spawnBuildingsConfig[i].priceBuy
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

        for (let i = 0; i < ConfigModel.instance.spawnBuildingsConfig.length; i++) {
            if (ConfigModel.instance.spawnBuildingsConfig[i].type == type && ConfigModel.instance.spawnBuildingsConfig[i].level == level) {
                return ConfigModel.instance.spawnBuildingsConfig[i].priceUpdate
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

        for (let i = 0; i < ConfigModel.instance.spawnBuildingsConfig.length; i++) {
            if (ConfigModel.instance.spawnBuildingsConfig[i].type == type && ConfigModel.instance.spawnBuildingsConfig[i].level == level) {
                return ConfigModel.instance.spawnBuildingsConfig[i].imprivementResourceType
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

        for (let i = 0; i < ConfigModel.instance.spawnBuildingsConfig.length; i++) {
            if (ConfigModel.instance.spawnBuildingsConfig[i].type == type && ConfigModel.instance.spawnBuildingsConfig[i].level == level) {
                return ConfigModel.instance.spawnBuildingsConfig[i].imprivementResourceNumber
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

        for (let i = 0; i < ConfigModel.instance.spawnBuildingsConfig.length; i++) {
            if (ConfigModel.instance.spawnBuildingsConfig[i].type == type && ConfigModel.instance.spawnBuildingsConfig[i].level == level) {
                return ConfigModel.instance.spawnBuildingsConfig[i].expPerSpawn
            }
        }
        // throw "не существует такого обьекта";
        console.log("не существует такого обьекта");
    }

    static getRadarConfigByLevel(level: number): RadarConfig {
        for (let i = 0; i < ConfigModel.instance.radarConfig.length; i++) {
            if (ConfigModel.instance.radarConfig[i].level == level) {
                return ConfigModel.instance.radarConfig[i]
            }
        }
        console.log("Радар такого уровня не найден")
    }

    static radarConfig(level: number): RadarConfig {//смена названия
        for (let i = 0; i < ConfigModel.instance.radarConfig.length; i++) {
            if (ConfigModel.instance.radarConfig[i].level == level) {
                return ConfigModel.instance.radarConfig[i]
            }
        }
        console.log("Радар такого уровня не найден")
    }

    getHeroConfig(): HeroConfig[] {
        return ConfigModel.instance.heroConfig
    }

    //---------------------------------------------------------------------------------------------------
    //expirienceRadar


    static getExpirienceRadarByLevel(level: number): number {
        if (ConfigModel.instance.expirienceRadar.length < level) throw 'Уровень не существует'
        return ConfigModel.instance.expirienceRadar[level]
    }


    //---------------------------------------------------------------------------------------------------
    //goldBox

    static getGoldByLevel(level: number): number {
        if (ConfigModel.instance.goldBoxConfig.length < level) throw 'Уровень не существует'
        return ConfigModel.instance.goldBoxConfig[level]
    }

    //---------------------------------------------------------------------------------------------------
    //radarBasicRate

    static getRadarBasicRateByLevel(level: number) {
        if (ConfigModel.instance.radarBasicRate.length < level) throw 'Уровень не существует'
        return ConfigModel.instance.radarBasicRate[level]
    }

    //---------------------------------------------------------------------------------------------------
    //radarProgressNumber

    static getRadarProgressNumberByLevel(level: number) {
        if (ConfigModel.instance.radarProgressNumber.length < level) throw 'Уровень не существует'
        return ConfigModel.instance.radarProgressNumber[level]
    }



    //---------------------------------------------------------------------------------------------------

    //сумка в этот раз будет понятный файл! -->
    static getValue(type: string, level: number, name: string) {
        if (type == TypesObjects.TROOP_OVERLAND || TypesObjects.TROOP_MARINE || TypesObjects.TROOP_AIR) {
            for (let l = 0; l < ConfigModel.instance.unitsConfig.length; l++) {
                if (ConfigModel.instance.unitsConfig[l].type == type && ConfigModel.instance.unitsConfig[l].level == level) {
                    return ConfigModel.instance.unitsConfig[l][name]
                }
            }
        }

        console.log('радуга и пони')
    }
    //---<

}