import { _decorator, Component } from 'cc';
import { TypesObjects } from '../Static/TypesObjects';
import { TypesAttack } from '../Static/TypesAttack';
import { GlobalConfigurationUnits } from '../Structures/GlobalConfigurationUnits';
import { TypesItems } from '../Static/TypesItems';
import { Level } from '../Structures/Level';
const { ccclass } = _decorator;

@ccclass('ConfigStorage')
export class ConfigStorage extends Component {

    public static instance: ConfigStorage;

    private globalConfig: Array<GlobalConfigurationUnits> = []

    onLoad() {
        ConfigStorage.instance = this;
        this.initOwerland()
        this.initLevel()
    }

    initOwerland() {
        let type = TypesObjects.TROOP_OVERLAND

        this.globalConfig.push(new GlobalConfigurationUnits(type, 1, 0, 0,TypesItems.PLAN_MAX_OVERLAND, 0, 0, 5, 1, TypesAttack.ONE, 1, 1, 0, 1, 1))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 2, 0, 0,TypesItems.PLAN_MAX_OVERLAND, 0, 0, 5, 1, TypesAttack.ONE, 1, 1, 0, 1, 1))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 3, 0, 0,TypesItems.PLAN_MAX_OVERLAND, 0, 0, 5, 1, TypesAttack.ONE, 1, 1, 0, 1, 1))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 4, 0, 0,TypesItems.PLAN_MAX_OVERLAND, 0, 0, 5, 1, TypesAttack.ONE, 1, 1, 0, 1, 1))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 5, 0, 0,TypesItems.PLAN_MAX_OVERLAND, 0, 0, 5, 1, TypesAttack.ONE, 1, 1, 0, 1, 1))
        
        this.globalConfig.push(new GlobalConfigurationUnits(type, 6, 0, 0,TypesItems.PLAN_MAX_OVERLAND, 0, 0, 5, 1, TypesAttack.ONE, 1, 1, 0, 1, 1))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 7, 0, 0,TypesItems.PLAN_MAX_OVERLAND, 0, 0, 5, 1, TypesAttack.ONE, 1, 1, 0, 1, 1))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 8, 0, 0,TypesItems.PLAN_MAX_OVERLAND, 0, 0, 5, 1, TypesAttack.ONE, 1, 1, 0, 1, 1))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 9, 0, 0,TypesItems.PLAN_MAX_OVERLAND, 0, 0, 5, 1, TypesAttack.ONE, 1, 1, 0, 1, 1))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 10, 0, 0,TypesItems.PLAN_MAX_OVERLAND, 0, 0, 5, 1, TypesAttack.ONE, 1, 1, 0, 1, 1))

    }

    getConfigByTypeAndLevel(type: string, level: number) {
        for (let x = 0; x < this.globalConfig.length; x++) {
            if (this.globalConfig[x].type == type && this.globalConfig[x].level == level) {
                return this.globalConfig[x]
            }
        }
        throw "Не существует такого обьекта"
    }

    getLevelExpirienceByLevel(level: number){
        for(let x = 0; x < this.levelConfig.length; x++){
            if( this.levelConfig[x].levelNumber == level){
                return  this.levelConfig[x].expirience
            }
        }
        throw "Не существует такого уровня"
    }

    getLevelPowerByLevel(level: number){
        for(let x = 0; x < this.levelConfig.length; x++){
            if( this.levelConfig[x].levelNumber == level){
                return  this.levelConfig[x].powerUponReceipt
            }
        }
        throw "Не существует такого уровня"
    }

    getLevelEnergyByLevel(level: number){
        for(let x = 0; x < this.levelConfig.length; x++){
            if( this.levelConfig[x].levelNumber == level){
                return  this.levelConfig[x].energyUponREceipt
            }
        }
        throw "Не существует такого уровня"
    }

    getLevelByExpirience(experience: number){
        for(let x = 0; x < this.levelConfig.length; x++){
            if(this.levelConfig[x + 1].expirience > experience){
                return this.levelConfig[x].levelNumber // будет работать не корректно при несортированом массиве
            }
        }
        throw "Не существует такого уровня"
    }

}