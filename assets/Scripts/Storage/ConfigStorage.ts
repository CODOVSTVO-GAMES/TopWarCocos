import { _decorator, Component } from 'cc';
import { TypesObjects } from '../Static/TypesObjects';
import { TypesAttack } from '../Static/TypesAttack';
import { GlobalConfigurationUnits } from '../Structures/GlobalConfigurationUnits';
import { TypesItems } from '../Static/TypesItems';
import { Level } from '../Structures/Level';
import { HeroConfig } from '../Structures/HeroConfig';
import { HeroLevel } from '../Structures/HeroLevel';
const { ccclass } = _decorator;

@ccclass('ConfigStorage')
export class ConfigStorage extends Component {

    public static instance: ConfigStorage;

    private globalConfig: Array<GlobalConfigurationUnits> = []

    private levelConfig: Array<Level> = []

    private heroConfig: Array<HeroConfig> = []

    private heroLevelConfig: Array<HeroLevel> = []

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

    initLevel(){
        this.levelConfig.push(new Level(1, 100, 420, 50))
        this.levelConfig.push(new Level(2, 270, 420, 50))
        this.levelConfig.push(new Level(3, 770, 420, 50))
        this.levelConfig.push(new Level(4, 2270, 420, 50))
        this.levelConfig.push(new Level(5, 6570, 420, 50))
        this.levelConfig.push(new Level(6, 20800, 420, 50))
        this.levelConfig.push(new Level(7, 58600, 420, 50))
        this.levelConfig.push(new Level(8, 100, 1130, 50))
        this.levelConfig.push(new Level(9, 100, 420, 50))
        this.levelConfig.push(new Level(10, 100, 420, 50))

        this.levelConfig.push(new Level(11, 100, 420, 50))
        this.levelConfig.push(new Level(12, 100, 420, 50))
        this.levelConfig.push(new Level(13, 100, 420, 50))
        this.levelConfig.push(new Level(14, 100, 420, 50))
        this.levelConfig.push(new Level(15, 100, 420, 50))
        this.levelConfig.push(new Level(16, 100, 420, 50))
        this.levelConfig.push(new Level(17, 100, 420, 50))
        this.levelConfig.push(new Level(18, 100, 420, 50))
        this.levelConfig.push(new Level(19, 100, 420, 50))
        this.levelConfig.push(new Level(20, 100, 420, 50))

        this.levelConfig.push(new Level(21, 100, 420, 50))
        this.levelConfig.push(new Level(22, 100, 420, 50))
        this.levelConfig.push(new Level(23, 100, 420, 50))
        this.levelConfig.push(new Level(24, 100, 420, 50))
        this.levelConfig.push(new Level(25, 100, 420, 50))
        this.levelConfig.push(new Level(26, 100, 420, 50))
        this.levelConfig.push(new Level(27, 100, 420, 50))
        this.levelConfig.push(new Level(28, 100, 420, 50))
        this.levelConfig.push(new Level(29, 100, 420, 50))
        this.levelConfig.push(new Level(30, 100, 420, 50))

    }

    initHeroLevel(){
        this.heroLevelConfig.push(new HeroLevel("r", 1, 0))
        this.heroLevelConfig.push(new HeroLevel("r", 2, 250))
        this.heroLevelConfig.push(new HeroLevel("r", 3, 500))
        this.heroLevelConfig.push(new HeroLevel("r", 4, 750))
        this.heroLevelConfig.push(new HeroLevel("r", 5, 1000))
        this.heroLevelConfig.push(new HeroLevel("r", 6, 1250))
        this.heroLevelConfig.push(new HeroLevel("r", 7, 1500))
        this.heroLevelConfig.push(new HeroLevel("r", 8, 1750))
        this.heroLevelConfig.push(new HeroLevel("r", 9, 2000))
        this.heroLevelConfig.push(new HeroLevel("r", 10, 2250))

        this.heroLevelConfig.push(new HeroLevel("r", 11, 2500))
        this.heroLevelConfig.push(new HeroLevel("r", 12, 3000))
        this.heroLevelConfig.push(new HeroLevel("r", 13, 3500))
        this.heroLevelConfig.push(new HeroLevel("r", 14, 4000))
        this.heroLevelConfig.push(new HeroLevel("r", 15, 4500))
        this.heroLevelConfig.push(new HeroLevel("r", 16, 5000))
        this.heroLevelConfig.push(new HeroLevel("r", 17, 5500))
        this.heroLevelConfig.push(new HeroLevel("r", 18, 6000))
        this.heroLevelConfig.push(new HeroLevel("r", 19, 6500))
        this.heroLevelConfig.push(new HeroLevel("r", 20, 7000))
    }

    initHeroConfig(){
        this.heroConfig.push(new HeroConfig("r", "blackWidow", 120, 180, 200, 24, 36))  // hp = 120 + (24 * heroLevel + 5 * heroStarStady)
    }

    getConfigByTypeAndLevel(type: string, level: number) : GlobalConfigurationUnits{
        for (let x = 0; x < this.globalConfig.length; x++) {
            if (this.globalConfig[x].type == type && this.globalConfig[x].level == level) {
                return this.globalConfig[x]
            }
        }
        throw "Не существует такого обьекта"
    }

    //--------------------------------------------------------------

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
                return this.levelConfig[x].levelNumber // будет работать корректно при сортированом массиве
            }
        }
        throw "Не существует такого уровня"
    }

    //--------------------------------------------------------------

    getHeroLevelExpirienceByTypeAndLevel(type: string, level: number){
        for(let x = 0; x < this.heroLevelConfig.length; x++){
            if(this.heroLevelConfig[x].levelNumber == level && this.heroLevelConfig[x].type == type){
                return  this.heroLevelConfig[x].heroExpirience
            }
        }
        throw "Не существует такого уровня героя"
    }

    getHeroConfigByCodeName(codeName: string) : HeroConfig{
        for(let x = 0; x < this.heroConfig.length; x++){
            if(this.heroConfig[x].codeName == codeName){
                return  this.heroConfig[x]
            }
        }
        throw "Не существует такого уровня героя"
    }

}