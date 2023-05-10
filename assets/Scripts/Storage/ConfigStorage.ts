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

    public globalConfig: Array<GlobalConfigurationUnits> = []

    public levelConfig: Array<Level> = []

    public heroConfig: Array<HeroConfig> = []

    public heroLevelConfig: Array<HeroLevel> = []

    onLoad() {
        ConfigStorage.instance = this;
        this.initMainBuilding()

        this.initRepairBuilding()

        this.initBarrackMerge()
        this.initMainBuilding()

        this.initGoldMine()
        //спавн рудников

        this.initOwerland()
        this.initMarine()
        this.initAir()

        //мердж вервь
        //спавн вервь

        //мердж аэропорт
        //спавн аэропорт

        this.initLevel()
        this.initHeroLevel()
        this.initHeroConfig()
    }

    initMainBuilding() {
        let type = TypesObjects.TOWN_HALL
        let typeItem = TypesItems.PLAN_MAX_MAINBUILDING

        this.globalConfig.push(new GlobalConfigurationUnits(type, 1,     0, 0,     typeItem, 0, 0,     0, 0, TypesAttack.NONE, 0, 0,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 2,     0, 0,     typeItem, 0, 0,     0, 0, TypesAttack.NONE, 0, 0,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 3,     0, 0,     typeItem, 0, 0,     0, 0, TypesAttack.NONE, 0, 0,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 4,     0, 0,     typeItem, 0, 0,     0, 0, TypesAttack.NONE, 0, 0,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 5,     0, 0,     typeItem, 0, 0,     0, 0, TypesAttack.NONE, 0, 0,     0,      0, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 6,     160, 970,     typeItem, 10, 0,     0, 0, TypesAttack.NONE, 0, 0,     0.6,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 7,     2200, 1020,     typeItem, 20, 0,     0, 0, TypesAttack.NONE, 0, 0,     0.7,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 8,     5810, 1070,     typeItem, 30, 0,     0, 0, TypesAttack.NONE, 0, 0,     0.8,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 9,     12300, 1130,     typeItem, 35, 0,     0, 0, TypesAttack.NONE, 0, 0,     0.9,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 10,     24000, 1190,     typeItem, 40, 0,     0, 0, TypesAttack.NONE, 0, 0,     1,      0, 0))

        //10->

        this.globalConfig.push(new GlobalConfigurationUnits(type, 11,     54000, 1240,     typeItem, 45, 0,     0, 0, TypesAttack.NONE, 0, 0,     1.2,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 12,     119000, 1310,     typeItem, 50, 0,     0, 0, TypesAttack.NONE, 0, 0,     1.5,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 13,     365000, 1380,     typeItem, 60, 0,     0, 0, TypesAttack.NONE, 0, 0,     2,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 14,     1040000, 1450,     typeItem, 70, 0,     0, 0, TypesAttack.NONE, 0, 0,     2.5,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 15,     3610000, 1520,     typeItem, 80, 0,     0, 0, TypesAttack.NONE, 0, 0,     3,      0, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 16,     9740000, 1610,     typeItem, 90, 0,     0, 0, TypesAttack.NONE, 0, 0,     3.5,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 17,     24600000, 1690,     typeItem, 100, 0,     0, 0, TypesAttack.NONE, 0, 0,     4,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 18,     60000000, 1770,     typeItem, 120, 0,     0, 0, TypesAttack.NONE, 0, 0,     4.5,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 19,     163000000, 1860,     typeItem, 140, 0,     0, 0, TypesAttack.NONE, 0, 0,     5,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 20,     378000000, 1960,     typeItem, 160, 0,     0, 0, TypesAttack.NONE, 0, 0,     5.5,      0, 0))

        //20->

        this.globalConfig.push(new GlobalConfigurationUnits(type, 21,     832000000, 2060,     typeItem, 180, 0,     0, 0, TypesAttack.NONE, 0, 0,     6,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 22,     1780000000, 2170,     typeItem, 210, 0,     0, 0, TypesAttack.NONE, 0, 0,     6.5,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 23,     4030000000, 2290,     typeItem, 240, 0,     0, 0, TypesAttack.NONE, 0, 0,     7,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 24,     7410000000, 2410,     typeItem, 280, 0,     0, 0, TypesAttack.NONE, 0, 0,     7.5,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 25,     15800000000, 2540,     typeItem, 320, 0,     0, 0, TypesAttack.NONE, 0, 0,     8,      0, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 26,     33100000000, 2680,     typeItem, 370, 0,     0, 0, TypesAttack.NONE, 0, 0,     8.5,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 27,     67000000000, 2810,     typeItem, 420, 0,     0, 0, TypesAttack.NONE, 0, 0,     9,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 28,     155000000000, 2960,     typeItem, 480, 0,     0, 0, TypesAttack.NONE, 0, 0,     9.5,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 29,     314000000000, 3120,     typeItem, 560, 0,     0, 0, TypesAttack.NONE, 0, 0,     10,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 30,     634000000000, 3260,     typeItem, 640, 0,     0, 0, TypesAttack.NONE, 0, 0,     10.5,      0, 0))

        //30->
    }

    initRepairBuilding() {
        let type = TypesObjects.REPAIR_SHOP
        let typeItem = TypesItems.PLAN_MAX_MAINBUILDING

        this.globalConfig.push(new GlobalConfigurationUnits(type, 1,     0, 0,     typeItem, 0, 0,     0, 0, TypesAttack.NONE, 0, 60000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 2,     12000, 580,     typeItem, 5, 0,     0, 0, TypesAttack.NONE, 0, 135000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 3,     27000, 610,     typeItem, 5, 0,     0, 0, TypesAttack.NONE, 0, 299000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 4,     59900, 640,     typeItem, 10, 0,     0, 0, TypesAttack.NONE, 0, 913000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 5,     182000, 670,     typeItem, 10, 0,     0, 0, TypesAttack.NONE, 0, 2600000,     0,      0, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 6,     520000, 710,     typeItem, 10, 0,     0, 0, TypesAttack.NONE, 0, 9030000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 7,     1800000, 750,     typeItem, 10, 0,     0, 0, TypesAttack.NONE, 0, 24300000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 8,     4870000, 780,     typeItem, 10, 0,     0, 0, TypesAttack.NONE, 0, 61600000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 9,     12300000, 830,     typeItem, 15, 0,     0, 0, TypesAttack.NONE, 0, 150000000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 10,     30000000, 870,     typeItem, 15, 0,     0, 0, TypesAttack.NONE, 0, 408000000,     0,      0, 0))

        //10->

        this.globalConfig.push(new GlobalConfigurationUnits(type, 11,     81600000, 910,     typeItem, 20, 0,     0, 0, TypesAttack.NONE, 0, 945000000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 12,     189000000, 960,     typeItem, 20, 0,     0, 0, TypesAttack.NONE, 0, 2080000000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 13,     416000000, 1010,     typeItem, 20, 0,     0, 0, TypesAttack.NONE, 0, 4460000000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 14,     893000000, 1060,     typeItem, 25, 0,     0, 0, TypesAttack.NONE, 0, 10000000000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 15,     2010000000, 1120,     typeItem, 30, 0,     0, 0, TypesAttack.NONE, 0, 18500000000,     0,      0, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 16,     3710000000, 1170,     typeItem, 35, 0,     0, 0, TypesAttack.NONE, 0, 39500000000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 17,     7900000000, 1240,     typeItem, 40, 0,     0, 0, TypesAttack.NONE, 0, 82800000000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 18,     16500000000, 1310,     typeItem, 45, 0,     0, 0, TypesAttack.NONE, 0, 167000000000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 19,     33500000000, 1380,     typeItem, 50, 0,     0, 0, TypesAttack.NONE, 0, 389000000000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 20,     77800000000, 1450,     typeItem, 60, 0,     0, 0, TypesAttack.NONE, 0, 785000000000,     0,      0, 0))

        //20->

        this.globalConfig.push(new GlobalConfigurationUnits(type, 21,     77800000000, 1520,     typeItem, 65, 0,     0, 0, TypesAttack.NONE, 0, 785000000000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 22,     317000000000, 1600,     typeItem, 75, 0,     0, 0, TypesAttack.NONE, 0, 1580000000000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 23,     640000000000, 1690,     typeItem, 85, 0,     0, 0, TypesAttack.NONE, 0, 3200000000000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 24,     1290000000000, 1770,     typeItem, 100, 0,     0, 0, TypesAttack.NONE, 0, 6460000000000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 25,     2610000000000, 1860,     typeItem, 115, 0,     0, 0, TypesAttack.NONE, 0, 13000000000000,     0,      0, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 26,     5270000000000, 1950,     typeItem, 170, 0,     0, 0, TypesAttack.NONE, 0, 26300000000000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 27,     10600000000000, 2050,     typeItem, 255, 0,     0, 0, TypesAttack.NONE, 0, 53200000000000,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 28,     24700000000000, 2160,     typeItem, 375, 0,     0, 0, TypesAttack.NONE, 0, 123000000000000,     0,      0, 0))
        // this.globalConfig.push(new GlobalConfigurationUnits(type, 29,     314000000000, 3120,     typeItem, 560, 0,     0, 0, TypesAttack.NONE, 0, 0,     10,      0, 0))
        // this.globalConfig.push(new GlobalConfigurationUnits(type, 30,     634000000000, 3260,     typeItem, 640, 0,     0, 0, TypesAttack.NONE, 0, 0,     10.5,      0, 0))

        //30->
    }

    initGoldMine() {
        let type = TypesObjects.GOLD_MINE
        let typeItem = TypesItems.PLAN_MAX_MINE

        this.globalConfig.push(new GlobalConfigurationUnits(type, 1,     0, 0,     typeItem, 0, 0,     0, 0, TypesAttack.NONE, 0, 400,     0,      80, 120))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 2,     0, 0,     typeItem, 0, 0,     0, 0, TypesAttack.NONE, 0, 800,     0,      160, 360))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 3,     0, 0,     typeItem, 0, 0,     0, 0, TypesAttack.NONE, 0, 1600,     0,      320, 1080))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 4,     0, 0,     typeItem, 0, 0,     0, 0, TypesAttack.NONE, 0, 3200,     0,      640, 2040))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 5,     0, 0,     typeItem, 0, 0,     0, 0, TypesAttack.NONE, 0, 6400,     0,      1280, 4080))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 6,     1100, 480,     typeItem, 8, 5500,     0, 0, TypesAttack.NONE, 0, 12800,     0,      2560, 7200))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 7,     2900, 510,     typeItem, 10, 14500,     0, 0, TypesAttack.NONE, 0, 25600,     0,      5120, 13600))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 8,     6190, 540,     typeItem, 12, 30900,     0, 0, TypesAttack.NONE, 0, 51200,     0,      10240, 24400))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 9,     12000, 560,     typeItem, 16, 60000,     0, 0, TypesAttack.NONE, 0, 102000,     0,      20400, 40800))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 10,     27000, 590,     typeItem, 22, 135000,     0, 0, TypesAttack.NONE, 0, 204000,     0,      40900, 74700))

        //10->

        this.globalConfig.push(new GlobalConfigurationUnits(type, 11,     59900, 620,     typeItem, 28, 299000,     0, 0, TypesAttack.NONE, 0, 408000,     0,      81900, 134000))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 12,     182000, 660,     typeItem, 34, 913000,     0, 0, TypesAttack.NONE, 0, 819000,     0,      163000, 264000))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 13,     520000, 690,     typeItem, 42, 2600000,     0, 0, TypesAttack.NONE, 0, 1630000,     0,      327000, 494000))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 14,     1800000, 720,     typeItem, 50, 9030000,     0, 0, TypesAttack.NONE, 0, 3270000,     0,      655000, 855000))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 15,     4870000, 760,     typeItem, 60, 24300000,     0, 0, TypesAttack.NONE, 0, 6550000,     0,      1310000, 1620000))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 16,     12300000, 800,     typeItem, 70, 61600000,     0, 0, TypesAttack.NONE, 0, 13100000,     0,      2620000, 2760000))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 17,     30000000, 840,     typeItem, 80, 150000000,     0, 0, TypesAttack.NONE, 0, 26200000,     0,      5240000, 5180000))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 18,     81600000, 890,     typeItem, 90, 408000000,     0, 0, TypesAttack.NONE, 0, 52400000,     0,      10400000, 9270000))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 19,     189000000, 930,     typeItem, 102, 945000000,     0, 0, TypesAttack.NONE, 0, 104000000,     0,      20900000, 15400000))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 20,     416000000, 980,     typeItem, 114, 2080000000,     0, 0, TypesAttack.NONE, 0, 209000000,     0,      41900000, 28400000))

        //20->

        this.globalConfig.push(new GlobalConfigurationUnits(type, 21,     893000000, 1030,     typeItem, 128, 4460000000,     0, 0, TypesAttack.NONE, 0, 419000000,     0,      83900000, 44700000))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 22,     2010000000, 1080,     typeItem, 142, 10000000000,     0, 0, TypesAttack.NONE, 0, 839000000,     0,      167000000, 77900000))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 23,     3710000000, 1150,     typeItem, 156, 18500000000,     0, 0, TypesAttack.NONE, 0, 1670000000,     0,      335000000, 130000000))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 24,     7900000000, 1210,     typeItem, 172, 39500000000,     0, 0, TypesAttack.NONE, 0, 3350000000,     0,      671000000, 237000000))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 25,     16500000000, 1270,     typeItem, 190, 82200000000,     0, 0, TypesAttack.NONE, 0, 6710000000,     0,      1340000000, 528000000))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 26,     33500000000, 1340,     typeItem, 206, 167000000000,     0, 0, TypesAttack.NONE, 0, 13400000000,     0,      2680000000, 914000000))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 27,     77800000000, 1410,     typeItem, 224, 389000000000,     0, 0, TypesAttack.NONE, 0, 26800000000,     0,      5360000000, 1700000000))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 28,     157000000000, 1480,     typeItem, 242, 785000000000,     0, 0, TypesAttack.NONE, 0, 53600000000,     0,      10700000000, 3140000000))
        // this.globalConfig.push(new GlobalConfigurationUnits(type, 29,     317000000000, 1560,     typeItem, 260, 1580000000000,     0, 0, TypesAttack.NONE, 0, 1580000000000,     0,      0, 0))
        // this.globalConfig.push(new GlobalConfigurationUnits(type, 30,     640000000000, 1630,     typeItem, 280, 3200000000000,     0, 0, TypesAttack.NONE, 0, 3200000000000,     0,      0, 0))

        //30->
    }

    initBarrackMerge() {
        let type = TypesObjects.BARRACKS_OVERLAND
        let typeItem = TypesItems.PLAN_MAX_BARRACK

        this.globalConfig.push(new GlobalConfigurationUnits(type, 1,     0, 0,     typeItem, 0, 0,     0, 0, TypesAttack.NONE, 0, 0,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 2,     0, 0,     typeItem, 0, 0,     0, 0, TypesAttack.NONE, 0, 0,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 3,     0, 0,     typeItem, 0, 0,     0, 0, TypesAttack.NONE, 0, 0,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 4,     0, 0,     typeItem, 0, 0,     0, 0, TypesAttack.NONE, 0, 0,     0,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 5,     0, 0,     typeItem, 0, 0,     0, 0, TypesAttack.NONE, 0, 0,     0,      0, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 6,     1100, 480,     typeItem, 8, 0,     0, 0, TypesAttack.NONE, 0, 0,     0.6,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 7,     2900, 510,     typeItem, 10, 0,     0, 0, TypesAttack.NONE, 0, 0,     0.7,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 8,     6190, 540,     typeItem, 12, 0,     0, 0, TypesAttack.NONE, 0, 0,     0.8,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 9,     12000, 560,     typeItem, 16, 0,     0, 0, TypesAttack.NONE, 0, 0,     0.9,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 10,     27000, 590,     typeItem, 22, 0,     0, 0, TypesAttack.NONE, 0, 0,     1,      0, 0))

        //10->

        this.globalConfig.push(new GlobalConfigurationUnits(type, 11,     59900, 620,     typeItem, 28, 0,     0, 0, TypesAttack.NONE, 0, 0,     1.2,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 12,     182000, 660,     typeItem, 34, 0,     0, 0, TypesAttack.NONE, 0, 0,     1.5,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 13,     520000, 690,     typeItem, 42, 0,     0, 0, TypesAttack.NONE, 0, 0,     2,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 14,     1800000, 720,     typeItem, 50, 0,     0, 0, TypesAttack.NONE, 0, 0,     2.5,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 15,     4870000, 760,     typeItem, 60, 0,     0, 0, TypesAttack.NONE, 0, 0,     3,      0, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 16,     12300000, 800,     typeItem, 70, 0,     0, 0, TypesAttack.NONE, 0, 0,     3.5,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 17,     30000000, 840,     typeItem, 80, 0,     0, 0, TypesAttack.NONE, 0, 0,     4,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 18,     81600000, 890,     typeItem, 90, 0,     0, 0, TypesAttack.NONE, 0, 0,     4.5,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 19,     189000000, 930,     typeItem, 102, 0,     0, 0, TypesAttack.NONE, 0, 0,     5,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 20,     416000000, 980,     typeItem, 114, 0,     0, 0, TypesAttack.NONE, 0, 0,     5.5,      0, 0))

        //20->

        this.globalConfig.push(new GlobalConfigurationUnits(type, 21,     893000000, 1030,     typeItem, 128, 0,     0, 0, TypesAttack.NONE, 0, 0,     6,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 22,     2010000000, 1080,     typeItem, 142, 0,     0, 0, TypesAttack.NONE, 0, 0,     6.5,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 23,     3710000000, 1150,     typeItem, 156, 0,     0, 0, TypesAttack.NONE, 0, 0,     7,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 24,     7900000000, 1210,     typeItem, 172, 0,     0, 0, TypesAttack.NONE, 0, 0,     7.5,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 25,     16500000000, 1270,     typeItem, 190, 0,     0, 0, TypesAttack.NONE, 0, 0,     8,      0, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 26,     33500000000, 1340,     typeItem, 206, 0,     0, 0, TypesAttack.NONE, 0, 0,     8.5,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 27,     77800000000, 1410,     typeItem, 224, 0,     0, 0, TypesAttack.NONE, 0, 0,     9,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 28,     157000000000, 1480,     typeItem, 242, 0,     0, 0, TypesAttack.NONE, 0, 0,     9.5,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 29,     317000000000, 1560,     typeItem, 260, 0,     0, 0, TypesAttack.NONE, 0, 0,     10,      0, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 30,     640000000000, 1630,     typeItem, 280, 0,     0, 0, TypesAttack.NONE, 0, 0,     10.5,      0, 0))

        //30->
    }

    initBarrackBuild() {
        let type = TypesObjects.BARRACKS_OVERLAND
        let typeItem = TypesItems.PLAN_CREATE_BARRACK

        this.globalConfig.push(new GlobalConfigurationUnits(type, 1,     0, 0,     typeItem, 0, 0,     0, 0, TypesAttack.NONE, 0, 400,     0,      80, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 2,     1180, 380,     typeItem, 8, 0,     0, 0, TypesAttack.NONE, 0, 800,     0,      160, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 3,     2900, 420,     typeItem, 10, 0,     0, 0, TypesAttack.NONE, 0, 1600,     0,      320, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 4,     6190, 440,     typeItem, 12, 0,     0, 0, TypesAttack.NONE, 0, 3200,     0,      640, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 5,     12000, 460,     typeItem, 16, 0,     0, 0, TypesAttack.NONE, 0, 6400,     0,      1280, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 6,     27000, 480,     typeItem, 22, 0,     0, 0, TypesAttack.NONE, 0, 12800,     0,      2560, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 7,     62500, 510,     typeItem, 28, 0,     0, 0, TypesAttack.NONE, 0, 25600,     0,      5120, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 8,     182000, 540,     typeItem, 34, 0,     0, 0, TypesAttack.NONE, 0, 51200,     0,      10240, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 9,     541000, 560,     typeItem, 42, 0,     0, 0, TypesAttack.NONE, 0, 102000,     0,      20400, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 10,     1800000, 590,     typeItem, 50, 0,     0, 0, TypesAttack.NONE, 0, 204000,     0,      40900, 0))

        //10->

        this.globalConfig.push(new GlobalConfigurationUnits(type, 11,     4870000, 620,     typeItem, 60, 0,     0, 0, TypesAttack.NONE, 0, 409000,     0,      81900, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 12,     12300000, 660,     typeItem, 70, 0,     0, 0, TypesAttack.NONE, 0, 819000,     0,      163000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 13,     30000000, 690,     typeItem, 80, 0,     0, 0, TypesAttack.NONE, 0, 1630000,     0,      327000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 14,     81600000, 720,     typeItem, 90, 0,     0, 0, TypesAttack.NONE, 0, 3270000,     0,      655000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 15,     189000000, 760,     typeItem, 102, 0,     0, 0, TypesAttack.NONE, 0, 6550000,     0,      1310000, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 16,     416000000, 800,     typeItem, 114, 0,     0, 0, TypesAttack.NONE, 0, 13100000,     0,      2620000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 17,     893000000, 840,     typeItem, 128, 0,     0, 0, TypesAttack.NONE, 0, 26200000,     0,      5240000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 18,     2010000000, 890,     typeItem, 142, 0,     0, 0, TypesAttack.NONE, 0, 52400000,     0,      10400000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 19,     3710000000, 930,     typeItem, 156, 0,     0, 0, TypesAttack.NONE, 0, 104000000,     0,      20900000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 20,     7900000000, 980,     typeItem, 172, 0,     0, 0, TypesAttack.NONE, 0, 209000000,     0,      41900000, 0))

        //20->

        this.globalConfig.push(new GlobalConfigurationUnits(type, 21,     16500000000, 1030,     typeItem, 190, 0,     0, 0, TypesAttack.NONE, 0, 419000000,     0,      83800000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 22,     33500000000, 1080,     typeItem, 206, 0,     0, 0, TypesAttack.NONE, 0, 838000000,     0,      167000000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 23,     78100000000, 1150,     typeItem, 224, 0,     0, 0, TypesAttack.NONE, 0, 1670000000,     0,      335000000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 24,     157000000000, 1210,     typeItem, 242, 0,     0, 0, TypesAttack.NONE, 0, 3350000000,     0,      671000000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 25,     317000000000, 1270,     typeItem, 260, 0,     0, 0, TypesAttack.NONE, 0, 6710000000,     0,      1340000000, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 26,     640000000000, 1340,     typeItem, 280, 0,     0, 0, TypesAttack.NONE, 0, 13400000000,     0,      2680000000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 27,     1290000000000, 1410,     typeItem, 310, 0,     0, 0, TypesAttack.NONE, 0, 26800000000,     0,      5360000000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 28,     2610000000000, 1480,     typeItem, 340, 0,     0, 0, TypesAttack.NONE, 0, 53600000000,     0,      10700000000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 29,     5270000000000, 1560,     typeItem, 380, 0,     0, 0, TypesAttack.NONE, 0, 107000000000,     0,      21400000000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 30,     10600000000000, 1630,     typeItem, 420, 0,     0, 0, TypesAttack.NONE, 0, 214000000000,     0,      42900000000, 0))

        //30->
    }

    initOwerland() {
        let type = TypesObjects.TROOP_OVERLAND
        let typeItem = TypesItems.PLAN_MAX_OVERLAND

        this.globalConfig.push(new GlobalConfigurationUnits(type, 1,     0, 0,     typeItem, 0, 0,     5, 1, TypesAttack.ONE, 1, 10,     0,      2, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 2,     0, 0,     typeItem, 0, 0,     10, 3, TypesAttack.ONE, 1, 20,     0,      4, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 3,     0, 0,     typeItem, 0, 0,     20, 5, TypesAttack.ONE, 2, 40,     0,      8, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 4,     0, 0,     typeItem, 0, 0,     28, 7, TypesAttack.ONE, 3, 80,     0,      16, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 5,     0, 0,     typeItem, 0, 0,     39, 9, TypesAttack.ONE, 4, 160,     0,      32, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 6,     1100, 970,     typeItem, 8, 5500,     55, 13, TypesAttack.TWO, 5, 320,     0,      64, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 7,     2900, 1020,     typeItem, 10, 14500,     77, 19, TypesAttack.THREE, 10, 640,     0,      128, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 8,     6190, 1070,     typeItem, 12, 30900,     108, 27, TypesAttack.ONE, 16, 1280,     0,      256, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 9,     12000, 1130,     typeItem, 16, 60000,     150, 37, TypesAttack.VERTICAL, 20, 2560,     0,      512, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 10,     27000, 1190,     typeItem, 22, 135000,     210, 52, TypesAttack.HORIZON, 24, 5120,     0,      1020, 0))

        //10->

        this.globalConfig.push(new GlobalConfigurationUnits(type, 11,     59900, 1240,     typeItem, 28, 299000,     290, 72, TypesAttack.HORIZON, 32, 10200,     0,      2040, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 12,     182000, 1310,     typeItem, 34, 913000,     410, 102, TypesAttack.THREE, 40, 20400,     0,      4090, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 13,     520000, 1380,     typeItem, 42, 2600000,     570, 142, TypesAttack.ONE, 60, 40900,     0,      8190, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 14,     1800000, 1450,     typeItem, 50, 9030000,     800, 200, TypesAttack.ONE, 100, 81900,     0,      16300, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 15,     4870000, 1520,     typeItem, 60, 24300000,     1120, 280, TypesAttack.ONE, 200, 163000,     0,      32700, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 16,     12300000, 1610,     typeItem, 70, 61600000,     1600, 400, TypesAttack.HORIZON, 400, 327000,     0,      65500, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 17,     30000000, 1690,     typeItem, 80, 150000000,     2200, 550, TypesAttack.VERTICAL, 800, 655000,     0,      131000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 18,     81600000, 1770,     typeItem, 90, 408000000,     3100, 775, TypesAttack.TWO, 400, 1310000,     0,      262000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 19,     189000000, 1860,     typeItem, 102, 945000000,     4300, 1070, TypesAttack.THREE, 870, 2620000,     0,      524000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 20,     416000000, 1960,     typeItem, 114, 2080000000,     6000, 1500, TypesAttack.ONE, 1800, 5240000,     0,      1040000, 0))

        //20->

        this.globalConfig.push(new GlobalConfigurationUnits(type, 21,     893000000, 2060,     typeItem, 128, 4460000000,     8400, 2100, TypesAttack.ONE, 3600, 10400000,     0,      2090000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 22,     2010000000, 2170,     typeItem, 142, 10000000000,     11800, 2950, TypesAttack.TWO, 5130, 20900000,     0,      4190000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 23,     3710000000, 2290,     typeItem, 156, 18500000000,     17000, 4250, TypesAttack.ONE, 4050, 41900000,     0,      8380000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 24,     7900000000, 2410,     typeItem, 172, 39500000000,     24000, 6000, TypesAttack.ONE, 5400, 83800000,     0,      16700000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 25,     16500000000, 2540,     typeItem, 190, 82800000000,     34000, 8500, TypesAttack.TWO, 4200, 167000000,     0,      33500000, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 26,     33500000000, 2680,     typeItem, 206, 167000000000,     48000, 12000, TypesAttack.HORIZON, 4680, 355000000,     0,      67100000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 27,     77800000000, 2810,     typeItem, 224, 389000000000,     67000, 16700, TypesAttack.ONE, 5220, 671000000,     0,      134000000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 28,     157000000000, 2960,     typeItem, 242, 785000000000,     94000, 23500, TypesAttack.ONE, 6960, 1340000000,     0,      268000000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 29,     317000000000, 3120,     typeItem, 260, 1580000000000,     132000, 33000, TypesAttack.ONE, 7750, 2680000000,     0,      536000000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 30,     640000000000, 3260,     typeItem, 280, 3200000000000,     180000, 45000, TypesAttack.ONE, 8630, 5360000000,     0,      1070000000, 0))

        //30->
    }

    initMarine() {
        let type = TypesObjects.TROOP_MARINE
        let typeItem = TypesItems.PLAN_MAX_MARINE
        let typeAttack = TypesAttack.HORIZON

        this.globalConfig.push(new GlobalConfigurationUnits(type, 1,     0, 0,     typeItem, 0, 0,     5, 1, typeAttack, 1, 10,     0,      2, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 2,     0, 0,     typeItem, 0, 0,     10, 3, typeAttack, 1, 20,     0,      4, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 3,     0, 0,     typeItem, 0, 0,     20, 5, typeAttack, 1, 40,     0,      8, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 4,     0, 0,     typeItem, 0, 0,     28, 7, typeAttack, 1, 80,     0,      16, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 5,     0, 0,     typeItem, 0, 0,     39, 9, typeAttack, 1, 160,     0,      32, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 6,     1100, 970,     typeItem, 8, 5500,     55, 13, typeAttack, 3, 320,     0,      64, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 7,     2900, 1020,     typeItem, 10, 14500,     77, 19, typeAttack, 3, 640,     0,      128, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 8,     6190, 1070,     typeItem, 12, 30900,     108, 27, typeAttack, 5, 1280,     0,      256, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 9,     12000, 1130,     typeItem, 16, 60000,     150, 37, typeAttack, 7, 2560,     0,      512, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 10,     27000, 1190,     typeItem, 22, 135000,     210, 52, typeAttack, 8, 5120,     0,      1020, 0))

        //10->

        this.globalConfig.push(new GlobalConfigurationUnits(type, 11,     59900, 1240,     typeItem, 28, 299000,     290, 72, typeAttack, 9, 10200,     0,      2040, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 12,     182000, 1310,     typeItem, 34, 913000,     410, 102, typeAttack, 10, 20400,     0,      4090, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 13,     520000, 1380,     typeItem, 42, 2600000,     570, 142, typeAttack, 20, 40900,     0,      8190, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 14,     1800000, 1450,     typeItem, 50, 9030000,     800, 200, typeAttack, 30, 81900,     0,      16300, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 15,     4870000, 1520,     typeItem, 60, 24300000,     1120, 280, typeAttack, 60, 163000,     0,      32700, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 16,     12300000, 1610,     typeItem, 70, 61600000,     1600, 400, typeAttack, 200, 327000,     0,      65500, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 17,     30000000, 1690,     typeItem, 80, 150000000,     2200, 550, typeAttack, 150, 655000,     0,      131000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 18,     81600000, 1770,     typeItem, 90, 408000000,     3100, 775, typeAttack, 192, 1310000,     0,      262000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 19,     189000000, 1860,     typeItem, 102, 945000000,     4300, 1070, typeAttack, 345, 2620000,     0,      524000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 20,     416000000, 1960,     typeItem, 114, 2080000000,     6000, 1500, typeAttack, 690, 5240000,     0,      1040000, 0))

        //20->

        this.globalConfig.push(new GlobalConfigurationUnits(type, 21,     893000000, 2060,     typeItem, 128, 4460000000,     8400, 2100, typeAttack, 960, 10400000,     0,      2090000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 22,     2010000000, 2170,     typeItem, 142, 10000000000,     11800, 2950, typeAttack, 1480, 20900000,     0,      4190000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 23,     3710000000, 2290,     typeItem, 156, 18500000000,     17000, 4250, typeAttack, 1650, 41900000,     0,      8380000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 24,     7900000000, 2410,     typeItem, 172, 39500000000,     24000, 6000, typeAttack, 2220, 83800000,     0,      16700000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 25,     16500000000, 2540,     typeItem, 190, 82800000000,     34000, 8500, typeAttack, 3940, 167000000,     0,      33500000, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 26,     33500000000, 2680,     typeItem, 206, 167000000000,     48000, 12000, typeAttack, 3260, 355000000,     0,      67100000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 27,     77800000000, 2810,     typeItem, 224, 389000000000,     67000, 16700, typeAttack, 3630, 671000000,     0,      134000000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 28,     157000000000, 2960,     typeItem, 242, 785000000000,     94000, 23500, typeAttack, 3360, 1340000000,     0,      268000000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 29,     317000000000, 3120,     typeItem, 260, 1580000000000,     132000, 33000, typeAttack, 4500, 2680000000,     0,      536000000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 30,     640000000000, 3260,     typeItem, 280, 3200000000000,     180000, 45000, typeAttack, 6000, 5360000000,     0,      1070000000, 0))

        //30->
    }

    initAir() {
        let type = TypesObjects.TROOP_AIR
        let typeItem = TypesItems.PLAN_MAX_AIR
        let typeAttack = TypesAttack.VERTICAL

        this.globalConfig.push(new GlobalConfigurationUnits(type, 1,     0, 0,     typeItem, 0, 0,     5, 1, typeAttack, 1, 10,     0,      2, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 2,     0, 0,     typeItem, 0, 0,     10, 3, typeAttack, 1, 20,     0,      4, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 3,     0, 0,     typeItem, 0, 0,     20, 5, typeAttack, 1, 40,     0,      8, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 4,     0, 0,     typeItem, 0, 0,     28, 7, typeAttack, 1, 80,     0,      16, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 5,     0, 0,     typeItem, 0, 0,     39, 9, typeAttack, 1, 160,     0,      32, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 6,     1100, 970,     typeItem, 8, 5500,     55, 13, typeAttack, 3, 320,     0,      64, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 7,     2900, 1020,     typeItem, 10, 14500,     77, 19, typeAttack, 3, 640,     0,      128, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 8,     6190, 1070,     typeItem, 12, 30900,     108, 27, typeAttack, 5, 1280,     0,      256, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 9,     12000, 1130,     typeItem, 16, 60000,     150, 37, typeAttack, 7, 2560,     0,      512, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 10,     27000, 1190,     typeItem, 22, 135000,     210, 52, typeAttack, 8, 5120,     0,      1020, 0))

        //10->

        this.globalConfig.push(new GlobalConfigurationUnits(type, 11,     59900, 1240,     typeItem, 28, 299000,     290, 72, typeAttack, 9, 10200,     0,      2040, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 12,     182000, 1310,     typeItem, 34, 913000,     410, 102, typeAttack, 10, 20400,     0,      4090, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 13,     520000, 1380,     typeItem, 42, 2600000,     570, 142, typeAttack, 20, 40900,     0,      8190, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 14,     1800000, 1450,     typeItem, 50, 9030000,     800, 200, typeAttack, 30, 81900,     0,      16300, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 15,     4870000, 1520,     typeItem, 60, 24300000,     1120, 280, typeAttack, 60, 163000,     0,      32700, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 16,     12300000, 1610,     typeItem, 70, 61600000,     1600, 400, typeAttack, 200, 327000,     0,      65500, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 17,     30000000, 1690,     typeItem, 80, 150000000,     2200, 550, typeAttack, 150, 655000,     0,      131000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 18,     81600000, 1770,     typeItem, 90, 408000000,     3100, 775, typeAttack, 192, 1310000,     0,      262000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 19,     189000000, 1860,     typeItem, 102, 945000000,     4300, 1070, typeAttack, 345, 2620000,     0,      524000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 20,     416000000, 1960,     typeItem, 114, 2080000000,     6000, 1500, typeAttack, 690, 5240000,     0,      1040000, 0))

        //20->

        this.globalConfig.push(new GlobalConfigurationUnits(type, 21,     893000000, 2060,     typeItem, 128, 4460000000,     8400, 2100, typeAttack, 960, 10400000,     0,      2090000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 22,     2010000000, 2170,     typeItem, 142, 10000000000,     11800, 2950, typeAttack, 1480, 20900000,     0,      4190000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 23,     3710000000, 2290,     typeItem, 156, 18500000000,     17000, 4250, typeAttack, 1650, 41900000,     0,      8380000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 24,     7900000000, 2410,     typeItem, 172, 39500000000,     24000, 6000, typeAttack, 2220, 83800000,     0,      16700000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 25,     16500000000, 2540,     typeItem, 190, 82800000000,     34000, 8500, typeAttack, 3940, 167000000,     0,      33500000, 0))

        this.globalConfig.push(new GlobalConfigurationUnits(type, 26,     33500000000, 2680,     typeItem, 206, 167000000000,     48000, 12000, typeAttack, 3260, 355000000,     0,      67100000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 27,     77800000000, 2810,     typeItem, 224, 389000000000,     67000, 16700, typeAttack, 3630, 671000000,     0,      134000000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 28,     157000000000, 2960,     typeItem, 242, 785000000000,     94000, 23500, typeAttack, 3360, 1340000000,     0,      268000000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 29,     317000000000, 3120,     typeItem, 260, 1580000000000,     132000, 33000, typeAttack, 4500, 2680000000,     0,      536000000, 0))
        this.globalConfig.push(new GlobalConfigurationUnits(type, 30,     640000000000, 3260,     typeItem, 280, 3200000000000,     180000, 45000, typeAttack, 6000, 5360000000,     0,      1070000000, 0))

        //30->
    }

    initLevel() {
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

    initHeroLevel() {
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

        this.heroLevelConfig.push(new HeroLevel("r", 21, 7500))
        this.heroLevelConfig.push(new HeroLevel("r", 22, 8000))
        this.heroLevelConfig.push(new HeroLevel("r", 23, 8500))
        this.heroLevelConfig.push(new HeroLevel("r", 24, 9250))
        this.heroLevelConfig.push(new HeroLevel("r", 25, 10000))
        this.heroLevelConfig.push(new HeroLevel("r", 26, 10750))
        this.heroLevelConfig.push(new HeroLevel("r", 27, 11500))
        this.heroLevelConfig.push(new HeroLevel("r", 28, 12250))
        this.heroLevelConfig.push(new HeroLevel("r", 29, 13000))
        this.heroLevelConfig.push(new HeroLevel("r", 30, 13750))
    }

    initHeroConfig() {
        this.heroConfig.push(new HeroConfig("r", "blackWidow", 120, 180, 200, 24, 36))  // hp = 120 + (24 * heroLevel + 5 * heroStarStady)
    }
}