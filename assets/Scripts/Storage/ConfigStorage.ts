import { _decorator, Component } from 'cc';
import { TypesObjects } from '../Static/TypesObjects';
import { TypesAttack } from '../Static/TypesAttack';
import { TypesItems } from '../Static/TypesItems';
import { Level } from '../Structures/Level';
import { HeroConfig } from '../Structures/HeroConfig';
import { HeroLevel } from '../Structures/HeroLevel';
import { TypesCharacters } from '../Static/TypesCharacters';
import { MainAndRepairBuildings } from '../Structures/MainAndRepairBuildings';
import { UnitsCongig } from '../Structures/ConfigUnits';
import { ConfigMergeBuildings } from '../Structures/ConfigMergeBuildings';
import { ConfigSpawnBuildings } from '../Structures/ConfigSpawnBuildings';
import { RadarConfig } from '../Structures/RadarConfig';
const { ccclass } = _decorator;

@ccclass('ConfigStorage')
export class ConfigStorage extends Component {

    public static instance: ConfigStorage;

    public mainAndRepairBuildings: Array<MainAndRepairBuildings> = []

    public unitsConfig: Array<UnitsCongig> = []

    public mergeBuildingsConfig: Array<ConfigMergeBuildings> = []

    public spawnBuildingsConfig: Array<ConfigSpawnBuildings> = []

    public levelConfig: Array<Level> = []

    public heroConfig: Array<HeroConfig> = []

    public heroLevelConfig: Array<HeroLevel> = []

    public radarConfig: Array<RadarConfig> = []

    onLoad() {
        ConfigStorage.instance = this;
        this.initMainBuilding()
        this.initRepairBuilding()

        this.initMergeGoldMine()
        this.initBuildGoldMine()

        this.initOwerland()
        this.initMarine()
        this.initAir()

        this.initBarrackMerge()
        this.initMainBuilding()

        this.initMarineBuild()
        this.initMarineMerge()

        this.initAirBuild()
        this.initAirportMerge()

        this.initLevel()
        this.initHeroLevel()
        this.initHeroConfig()
    }

    initMainBuilding() {
        let type = TypesObjects.COMMAND_POST
        let typeItem = TypesItems.PLAN_MAX_MAINBUILDING

        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 1, 0, 0, typeItem, 0, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 2, 0, 0, typeItem, 0, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 3, 0, 0, typeItem, 0, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 4, 0, 0, typeItem, 0, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 5, 0, 0, typeItem, 0, 0, 0))

        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 6, 160, 970, typeItem, 10, 800, 0.6))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 7, 2200, 1020, typeItem, 20, 11000, 0.7))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 8, 5810, 1070, typeItem, 30, 29000, 0.8))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 9, 12300, 1130, typeItem, 35, 61900, 0.9))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 10, 24000, 1190, typeItem, 40, 120000, 1))


        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 11, 54000, 1240, typeItem, 45, 270000, 1.2))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 12, 119000, 1310, typeItem, 50, 599000, 1.5))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 13, 365000, 1380, typeItem, 60, 1820000, 2))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 14, 1040000, 1450, typeItem, 70, 5200000, 2.5))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 15, 3610000, 1520, typeItem, 80, 18000000, 3))

        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 16, 9740000, 1610, typeItem, 90, 48700000, 3.5))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 17, 24600000, 1690, typeItem, 100, 123000000, 4))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 18, 60000000, 1770, typeItem, 120, 300000000, 4.5))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 19, 163000000, 1860, typeItem, 140, 816000000, 5))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 20, 378000000, 1960, typeItem, 160, 1890000000, 5.5))

        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 21, 832000000, 2060, typeItem, 180, 4160000000, 6))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 22, 1780000000, 2170, typeItem, 210, 8930000000, 6.5))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 23, 4030000000, 2290, typeItem, 240, 20100000000, 7))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 24, 7410000000, 2410, typeItem, 280, 37000000000, 7.5))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 25, 15800000000, 2540, typeItem, 320, 79000000000, 8))

        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 26, 33100000000, 2680, typeItem, 370, 165000000000, 8.5))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 27, 67000000000, 2810, typeItem, 420, 335000000000, 9))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 28, 155000000000, 2960, typeItem, 480, 778000000000, 9.5))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 29, 314000000000, 3120, typeItem, 560, 1570000000000, 10))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 20, 634000000000, 3260, typeItem, 640, 3170000000000, 10.5))
    }

    initRepairBuilding() {
        let type = TypesObjects.REPAIR_SHOP
        let typeItem = TypesItems.PLAN_MAX_MAINBUILDING

        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 1, 0, 0, typeItem, 0, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 2, 12000, 580, typeItem, 5, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 3, 27000, 610, typeItem, 5, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 4, 59900, 640, typeItem, 10, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 5, 182000, 670, typeItem, 10, 0, 0))

        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 6, 520000, 710, typeItem, 10, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 7, 1800000, 750, typeItem, 10, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 8, 4870000, 780, typeItem, 10, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 9, 12300000, 830, typeItem, 15, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 10, 30000000, 870, typeItem, 15, 0, 0))

        //10->

        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 11, 81600000, 910, typeItem, 20, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 12, 189000000, 960, typeItem, 20, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 13, 416000000, 1010, typeItem, 20, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 14, 893000000, 1060, typeItem, 25, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 15, 2010000000, 1120, typeItem, 30, 0, 0))

        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 16, 3710000000, 1170, typeItem, 35, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 17, 7900000000, 1240, typeItem, 40, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 18, 16500000000, 1310, typeItem, 45, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 19, 33500000000, 1380, typeItem, 50, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 20, 77800000000, 1450, typeItem, 60, 0, 0))

        //20->

        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 21, 77800000000, 1520, typeItem, 65, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 22, 317000000000, 1600, typeItem, 75, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 23, 640000000000, 1690, typeItem, 85, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 24, 1290000000000, 1770, typeItem, 100, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 25, 2610000000000, 1860, typeItem, 115, 0, 0))

        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 26, 5270000000000, 1950, typeItem, 170, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 27, 10600000000000, 2050, typeItem, 255, 0, 0))
        this.mainAndRepairBuildings.push(new MainAndRepairBuildings(type, 28, 24700000000000, 2160, typeItem, 375, 0, 0))
    }

    initMergeGoldMine() {
        let type = TypesObjects.GOLD_MINE
        let typeItem = TypesItems.PLAN_MAX_MINE

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 1, 0, 0, typeItem, 0, 0, 120))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 2, 0, 0, typeItem, 0, 0, 360))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 3, 0, 0, typeItem, 0, 0, 1080))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 4, 0, 0, typeItem, 0, 0, 2040))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 5, 0, 0, typeItem, 0, 0, 4080))

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 6, 1100, 480, typeItem, 8, 5500, 7200))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 7, 2900, 510, typeItem, 10, 14500, 13600))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 8, 6190, 540, typeItem, 12, 30900, 24400))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 9, 12000, 560, typeItem, 16, 60000, 40800))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 10, 27000, 590, typeItem, 22, 135000, 74700))

        //10->

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 11, 59900, 620, typeItem, 28, 299000, 134000))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 12, 182000, 660, typeItem, 34, 913000, 264000))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 13, 520000, 690, typeItem, 42, 2600000, 494000))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 14, 1800000, 720, typeItem, 50, 9030000, 855000))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 15, 4870000, 760, typeItem, 60, 24300000, 1620000))

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 16, 12300000, 800, typeItem, 70, 61600000, 2760000))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 17, 30000000, 840, typeItem, 80, 150000000, 5180000))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 18, 81600000, 890, typeItem, 90, 408000000, 9270000))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 19, 189000000, 930, typeItem, 102, 945000000, 15400000))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 20, 416000000, 980, typeItem, 114, 2080000000, 28400000))

        //20->

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 21, 893000000, 1030, typeItem, 128, 4460000000, 44700000))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 22, 2010000000, 1080, typeItem, 142, 10000000000, 77900000))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 23, 3710000000, 1150, typeItem, 156, 18500000000, 130000000))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 24, 7900000000, 1210, typeItem, 172, 39500000000, 237000000))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 25, 16500000000, 1270, typeItem, 190, 82200000000, 528000000))

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 26, 33500000000, 1340, typeItem, 206, 167000000000, 914000000))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 27, 77800000000, 1410, typeItem, 224, 389000000000, 1700000000))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 28, 157000000000, 1480, typeItem, 242, 785000000000, 3140000000))

        //30->
    }

    initBuildGoldMine() {
        let type = TypesObjects.GOLD_MINE
        let typeItem = TypesItems.PLAN_CREATE_MINE

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 1, 0, 0, typeItem, 0, 0, 400, 80))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 2, 1180, 380, typeItem, 8, 5500, 800, 160))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 3, 2900, 420, typeItem, 10, 14500, 1600, 320))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 4, 6190, 440, typeItem, 12, 30900, 3200, 640))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 5, 12000, 460, typeItem, 16, 60000, 6400, 1280))

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 6, 27000, 480, typeItem, 22, 135000, 12800, 2560))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 7, 62500, 510, typeItem, 28, 312000, 25600, 5120))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 8, 182000, 540, typeItem, 34, 913000, 51200, 10240))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 9, 541000, 560, typeItem, 42, 2700000, 102000, 20400))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 10, 1800000, 590, typeItem, 50, 9030000, 204000, 40900))

        //10->

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 11, 4870000, 620, typeItem, 60, 24300000, 409000, 81900))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 12, 12300000, 660, typeItem, 70, 61600000, 819000, 163000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 13, 30000000, 690, typeItem, 80, 150000000, 1630000, 327000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 14, 81600000, 720, typeItem, 90, 408000000, 3270000, 655000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 15, 189000000, 760, typeItem, 102, 945000000, 6550000, 1310000))

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 16, 416000000, 800, typeItem, 114, 2080000000, 13100000, 2620000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 17, 893000000, 840, typeItem, 128, 4460000000, 26200000, 5240000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 18, 2010000000, 890, typeItem, 142, 10000000000, 52400000, 10400000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 19, 3710000000, 930, typeItem, 156, 18500000000, 104000000, 20900000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 20, 7900000000, 980, typeItem, 172, 39500000000, 209000000, 41900000))

        //20->

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 21, 16500000000, 1030, typeItem, 190, 82800000000, 419000000, 83800000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 22, 33500000000, 1080, typeItem, 206, 167000000000, 838000000, 167000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 23, 78100000000, 1150, typeItem, 224, 390000000000, 1670000000, 335000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 24, 157000000000, 1210, typeItem, 242, 789000000000, 3350000000, 671000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 25, 317000000000, 1270, typeItem, 260, 1580000000000, 6710000000, 1340000000))

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 26, 640000000000, 1340, typeItem, 280, 3200000000000, 13400000000, 2680000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 27, 1290000000000, 1410, typeItem, 310, 6460000000000, 26800000000, 5360000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 28, 2610000000000, 1480, typeItem, 340, 13000000000000, 53600000000, 10700000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 29, 5270000000000, 1560, typeItem, 380, 26300000000000, 107000000000, 21400000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 30, 10600000000000, 1630, typeItem, 420, 53200000000000, 214000000000, 42900000000))

        //30->
    }


    initBarrackMerge() {
        let type = TypesObjects.BARRACKS_OVERLAND
        let typeItem = TypesItems.PLAN_MAX_BARRACK

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 1, 0, 0, typeItem, 0, 0, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 2, 0, 0, typeItem, 0, 0, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 3, 0, 0, typeItem, 0, 0, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 4, 0, 0, typeItem, 0, 0, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 5, 0, 0, typeItem, 0, 0, 0))

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 6, 1100, 480, typeItem, 8, 5500, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 7, 2900, 510, typeItem, 10, 14500, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 8, 6190, 540, typeItem, 12, 30900, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 9, 12000, 560, typeItem, 16, 60000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 10, 27000, 590, typeItem, 22, 135000, 0))

        //10->

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 11, 59900, 620, typeItem, 28, 299000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 12, 182000, 660, typeItem, 34, 913000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 13, 520000, 690, typeItem, 42, 2600000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 14, 1800000, 720, typeItem, 50, 9030000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 15, 4870000, 760, typeItem, 60, 24300000, 0))

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 16, 12300000, 800, typeItem, 70, 61600000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 17, 30000000, 840, typeItem, 80, 150000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 18, 81600000, 890, typeItem, 90, 408000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 19, 189000000, 930, typeItem, 102, 945000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 20, 416000000, 980, typeItem, 114, 2080000000, 0))

        //20->

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 21, 893000000, 1030, typeItem, 128, 4460000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 22, 2010000000, 1080, typeItem, 142, 10000000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 23, 3710000000, 1150, typeItem, 156, 18500000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 24, 7900000000, 1210, typeItem, 172, 39500000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 25, 16500000000, 1270, typeItem, 190, 82800000000, 0))

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 26, 33500000000, 1340, typeItem, 206, 167000000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 27, 77800000000, 1410, typeItem, 224, 389000000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 28, 157000000000, 1480, typeItem, 242, 785000000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 29, 317000000000, 1560, typeItem, 260, 1580000000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 30, 640000000000, 1630, typeItem, 280, 3200000000000, 0))

        //30->
    }

    initBarrackBuild() {
        let type = TypesObjects.BARRACKS_OVERLAND
        let typeItem = TypesItems.PLAN_CREATE_BARRACK_OWERLAND

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 1, 0, 0, typeItem, 0, 0, 400, 80))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 2, 1180, 380, typeItem, 8, 5900, 800, 160))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 3, 2900, 420, typeItem, 10, 15300, 1600, 320))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 4, 6190, 440, typeItem, 12, 30900, 3200, 640))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 5, 12000, 460, typeItem, 16, 60000, 6400, 1280))

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 6, 27000, 480, typeItem, 22, 135000, 12800, 2560))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 7, 62500, 510, typeItem, 28, 312000, 25600, 5120))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 8, 182000, 540, typeItem, 34, 913000, 51200, 10240))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 9, 541000, 560, typeItem, 42, 2700000, 102000, 20400))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 10, 1800000, 590, typeItem, 50, 9030000, 204000, 40900))

        //10->

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 11, 4870000, 620, typeItem, 60, 24300000, 409000, 81900))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 12, 12300000, 660, typeItem, 70, 61600000, 819000, 163000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 13, 30000000, 690, typeItem, 80, 150000000, 1630000, 327000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 14, 81600000, 720, typeItem, 90, 408000000, 3270000, 655000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 15, 189000000, 760, typeItem, 102, 945000000, 6550000, 1310000))

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 16, 416000000, 800, typeItem, 114, 2080000000, 13100000, 2620000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 17, 893000000, 840, typeItem, 128, 4460000000, 26200000, 5240000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 18, 2010000000, 890, typeItem, 142, 10000000000, 52400000, 10400000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 19, 3710000000, 930, typeItem, 156, 18500000000, 104000000, 20900000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 20, 7900000000, 980, typeItem, 172, 39500000000, 209000000, 41900000))

        //20->

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 21, 16500000000, 1030, typeItem, 190, 82800000000, 419000000, 83800000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 22, 33500000000, 1080, typeItem, 206, 167000000000, 838000000, 167000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 23, 78100000000, 1150, typeItem, 224, 390000000000, 1670000000, 335000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 24, 157000000000, 1210, typeItem, 242, 789000000000, 3350000000, 671000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 25, 317000000000, 1270, typeItem, 260, 1580000000000, 6710000000, 1340000000))

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 26, 640000000000, 1340, typeItem, 280, 3200000000000, 13400000000, 2680000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 27, 1290000000000, 1410, typeItem, 310, 6460000000000, 26800000000, 5360000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 28, 2610000000000, 1480, typeItem, 340, 13000000000000, 53600000000, 10700000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 29, 5270000000000, 1560, typeItem, 380, 26300000000000, 107000000000, 21400000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 30, 10600000000000, 1630, typeItem, 420, 53200000000000, 214000000000, 42900000000))

        //30->
    }

    initMarineMerge() {
        let type = TypesObjects.BARRACKS_MARINE
        let typeItem = TypesItems.PLAN_MAX_MARINE

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 1, 0, 0, typeItem, 0, 0, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 2, 0, 0, typeItem, 0, 0, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 3, 0, 0, typeItem, 0, 0, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 4, 0, 0, typeItem, 0, 0, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 5, 0, 0, typeItem, 0, 0, 0))

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 6, 1100, 480, typeItem, 8, 5500, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 7, 2900, 510, typeItem, 10, 14500, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 8, 6190, 540, typeItem, 12, 30900, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 9, 12000, 560, typeItem, 16, 60000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 10, 27000, 590, typeItem, 22, 135000, 0))

        //10->

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 11, 59900, 620, typeItem, 28, 299000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 12, 182000, 660, typeItem, 34, 913000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 13, 520000, 690, typeItem, 42, 2600000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 14, 1800000, 720, typeItem, 50, 9030000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 15, 4870000, 760, typeItem, 60, 24300000, 0))

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 16, 12300000, 800, typeItem, 70, 61600000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 17, 30000000, 840, typeItem, 80, 150000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 18, 81600000, 890, typeItem, 90, 408000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 19, 189000000, 930, typeItem, 102, 945000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 20, 416000000, 980, typeItem, 114, 2080000000, 0))

        //20->

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 21, 893000000, 1030, typeItem, 128, 4460000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 22, 2010000000, 1080, typeItem, 142, 10000000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 23, 3710000000, 1150, typeItem, 156, 18500000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 24, 7900000000, 1210, typeItem, 172, 39500000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 25, 16500000000, 1270, typeItem, 190, 82800000000, 0))

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 26, 33500000000, 1340, typeItem, 206, 167000000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 27, 77800000000, 1410, typeItem, 224, 389000000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 28, 157000000000, 1480, typeItem, 242, 785000000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 29, 317000000000, 1560, typeItem, 260, 1580000000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 30, 640000000000, 1630, typeItem, 280, 3200000000000, 0))

        //30->
    }

    initMarineBuild() {
        let type = TypesObjects.BARRACKS_MARINE
        let typeItem = TypesItems.PLAN_CREATE_BARRACK_MARINE

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 1, 0, 0, typeItem, 0, 0, 400, 80))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 2, 1180, 380, typeItem, 8, 5900, 800, 160))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 3, 2900, 420, typeItem, 10, 15300, 1600, 320))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 4, 6190, 440, typeItem, 12, 30900, 3200, 640))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 5, 12000, 460, typeItem, 16, 60000, 6400, 1280))

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 6, 27000, 480, typeItem, 22, 135000, 12800, 2560))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 7, 62500, 510, typeItem, 28, 312000, 25600, 5120))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 8, 182000, 540, typeItem, 34, 913000, 51200, 10240))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 9, 541000, 560, typeItem, 42, 2700000, 102000, 20400))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 10, 1800000, 590, typeItem, 50, 9030000, 204000, 40900))

        //10->

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 11, 4870000, 620, typeItem, 60, 24300000, 409000, 81900))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 12, 12300000, 660, typeItem, 70, 61600000, 819000, 163000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 13, 30000000, 690, typeItem, 80, 150000000, 1630000, 327000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 14, 81600000, 720, typeItem, 90, 408000000, 3270000, 655000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 15, 189000000, 760, typeItem, 102, 945000000, 6550000, 1310000))

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 16, 416000000, 800, typeItem, 114, 2080000000, 13100000, 2620000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 17, 893000000, 840, typeItem, 128, 4460000000, 26200000, 5240000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 18, 2010000000, 890, typeItem, 142, 10000000000, 52400000, 10400000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 19, 3710000000, 930, typeItem, 156, 18500000000, 104000000, 20900000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 20, 7900000000, 980, typeItem, 172, 39500000000, 209000000, 41900000))

        //20->

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 21, 16500000000, 1030, typeItem, 190, 82800000000, 419000000, 83800000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 22, 33500000000, 1080, typeItem, 206, 167000000000, 838000000, 167000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 23, 78100000000, 1150, typeItem, 224, 390000000000, 1670000000, 335000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 24, 157000000000, 1210, typeItem, 242, 789000000000, 3350000000, 671000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 25, 317000000000, 1270, typeItem, 260, 1580000000000, 6710000000, 1340000000))

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 26, 640000000000, 1340, typeItem, 280, 3200000000000, 13400000000, 2680000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 27, 1290000000000, 1410, typeItem, 310, 6460000000000, 26800000000, 5360000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 28, 2610000000000, 1480, typeItem, 340, 13000000000000, 53600000000, 10700000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 29, 5270000000000, 1560, typeItem, 380, 26300000000000, 107000000000, 21400000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 30, 10600000000000, 1630, typeItem, 420, 53200000000000, 214000000000, 42900000000))

        //30->
    }

    initAirportMerge() {
        let type = TypesObjects.BARRACKS_AIR
        let typeItem = TypesItems.PLAN_MAX_AIRPORT

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 1, 0, 0, typeItem, 0, 0, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 2, 0, 0, typeItem, 0, 0, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 3, 0, 0, typeItem, 0, 0, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 4, 0, 0, typeItem, 0, 0, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 5, 0, 0, typeItem, 0, 0, 0))

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 6, 1100, 480, typeItem, 8, 5500, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 7, 2900, 510, typeItem, 10, 14500, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 8, 6190, 540, typeItem, 12, 30900, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 9, 12000, 560, typeItem, 16, 60000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 10, 27000, 590, typeItem, 22, 135000, 0))

        //10->

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 11, 59900, 620, typeItem, 28, 299000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 12, 182000, 660, typeItem, 34, 913000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 13, 520000, 690, typeItem, 42, 2600000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 14, 1800000, 720, typeItem, 50, 9030000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 15, 4870000, 760, typeItem, 60, 24300000, 0))

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 16, 12300000, 800, typeItem, 70, 61600000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 17, 30000000, 840, typeItem, 80, 150000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 18, 81600000, 890, typeItem, 90, 408000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 19, 189000000, 930, typeItem, 102, 945000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 20, 416000000, 980, typeItem, 114, 2080000000, 0))

        //20->

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 21, 893000000, 1030, typeItem, 128, 4460000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 22, 2010000000, 1080, typeItem, 142, 10000000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 23, 3710000000, 1150, typeItem, 156, 18500000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 24, 7900000000, 1210, typeItem, 172, 39500000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 25, 16500000000, 1270, typeItem, 190, 82800000000, 0))

        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 26, 33500000000, 1340, typeItem, 206, 167000000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 27, 77800000000, 1410, typeItem, 224, 389000000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 28, 157000000000, 1480, typeItem, 242, 785000000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 29, 317000000000, 1560, typeItem, 260, 1580000000000, 0))
        this.mergeBuildingsConfig.push(new ConfigMergeBuildings(type, 30, 640000000000, 1630, typeItem, 280, 3200000000000, 0))

        //30->
    }

    initAirBuild() {
        let type = TypesObjects.BARRACKS_AIR
        let typeItem = TypesItems.PLAN_CREATE_BARRACK_AIRPORT

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 1, 0, 0, typeItem, 0, 0, 400, 80))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 2, 1180, 380, typeItem, 8, 5900, 800, 160))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 3, 2900, 420, typeItem, 10, 15300, 1600, 320))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 4, 6190, 440, typeItem, 12, 30900, 3200, 640))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 5, 12000, 460, typeItem, 16, 60000, 6400, 1280))

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 6, 27000, 480, typeItem, 22, 135000, 12800, 2560))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 7, 62500, 510, typeItem, 28, 312000, 25600, 5120))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 8, 182000, 540, typeItem, 34, 913000, 51200, 10240))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 9, 541000, 560, typeItem, 42, 2700000, 102000, 20400))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 10, 1800000, 590, typeItem, 50, 9030000, 204000, 40900))

        //10->

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 11, 4870000, 620, typeItem, 60, 24300000, 409000, 81900))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 12, 12300000, 660, typeItem, 70, 61600000, 819000, 163000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 13, 30000000, 690, typeItem, 80, 150000000, 1630000, 327000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 14, 81600000, 720, typeItem, 90, 408000000, 3270000, 655000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 15, 189000000, 760, typeItem, 102, 945000000, 6550000, 1310000))

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 16, 416000000, 800, typeItem, 114, 2080000000, 13100000, 2620000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 17, 893000000, 840, typeItem, 128, 4460000000, 26200000, 5240000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 18, 2010000000, 890, typeItem, 142, 10000000000, 52400000, 10400000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 19, 3710000000, 930, typeItem, 156, 18500000000, 104000000, 20900000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 20, 7900000000, 980, typeItem, 172, 39500000000, 209000000, 41900000))

        //20->

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 21, 16500000000, 1030, typeItem, 190, 82800000000, 419000000, 83800000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 22, 33500000000, 1080, typeItem, 206, 167000000000, 838000000, 167000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 23, 78100000000, 1150, typeItem, 224, 390000000000, 1670000000, 335000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 24, 157000000000, 1210, typeItem, 242, 789000000000, 3350000000, 671000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 25, 317000000000, 1270, typeItem, 260, 1580000000000, 6710000000, 1340000000))

        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 26, 640000000000, 1340, typeItem, 280, 3200000000000, 13400000000, 2680000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 27, 1290000000000, 1410, typeItem, 310, 6460000000000, 26800000000, 5360000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 28, 2610000000000, 1480, typeItem, 340, 13000000000000, 53600000000, 10700000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 29, 5270000000000, 1560, typeItem, 380, 26300000000000, 107000000000, 21400000000))
        this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(type, 30, 10600000000000, 1630, typeItem, 420, 53200000000000, 214000000000, 42900000000))

        //30->
    }


    initOwerland() {
        let type = TypesObjects.TROOP_OVERLAND
        let typeItem = TypesItems.PLAN_MAX_OVERLAND

        this.unitsConfig.push(new UnitsCongig(type, 1, 0, 0, typeItem, 0, 0, 5, 1, TypesAttack.ONE, 1, 10, 2))
        this.unitsConfig.push(new UnitsCongig(type, 2, 0, 0, typeItem, 0, 0, 10, 3, TypesAttack.ONE, 1, 20, 4))
        this.unitsConfig.push(new UnitsCongig(type, 3, 0, 0, typeItem, 0, 0, 20, 5, TypesAttack.ONE, 2, 40, 8))
        this.unitsConfig.push(new UnitsCongig(type, 4, 0, 0, typeItem, 0, 0, 28, 7, TypesAttack.ONE, 3, 80, 16))
        this.unitsConfig.push(new UnitsCongig(type, 5, 0, 0, typeItem, 0, 0, 39, 9, TypesAttack.ONE, 4, 160, 32))

        this.unitsConfig.push(new UnitsCongig(type, 6, 1100, 970, typeItem, 8, 5500, 55, 13, TypesAttack.TWO, 5, 320, 64))
        this.unitsConfig.push(new UnitsCongig(type, 7, 2900, 1020, typeItem, 10, 14500, 77, 19, TypesAttack.THREE, 10, 640, 128))
        this.unitsConfig.push(new UnitsCongig(type, 8, 6190, 1070, typeItem, 12, 30900, 108, 27, TypesAttack.ONE, 16, 1280, 256))
        this.unitsConfig.push(new UnitsCongig(type, 9, 12000, 1130, typeItem, 16, 60000, 150, 37, TypesAttack.VERTICAL, 20, 2560, 512))
        this.unitsConfig.push(new UnitsCongig(type, 10, 27000, 1190, typeItem, 22, 135000, 210, 52, TypesAttack.HORIZON, 24, 5120, 1024))

        //10->

        this.unitsConfig.push(new UnitsCongig(type, 11, 59900, 1240, typeItem, 28, 299000, 290, 72, TypesAttack.HORIZON, 32, 10200, 2040))
        this.unitsConfig.push(new UnitsCongig(type, 12, 182000, 1310, typeItem, 34, 913000, 410, 102, TypesAttack.THREE, 40, 20400, 4090))
        this.unitsConfig.push(new UnitsCongig(type, 13, 520000, 1380, typeItem, 42, 2600000, 570, 142, TypesAttack.ONE, 60, 40900, 8190))
        this.unitsConfig.push(new UnitsCongig(type, 14, 1800000, 1450, typeItem, 50, 9030000, 800, 200, TypesAttack.ONE, 100, 81900, 16300))
        this.unitsConfig.push(new UnitsCongig(type, 15, 4870000, 1520, typeItem, 60, 24300000, 1120, 280, TypesAttack.ONE, 200, 163000, 32700))

        this.unitsConfig.push(new UnitsCongig(type, 16, 12300000, 1610, typeItem, 70, 61600000, 1600, 400, TypesAttack.HORIZON, 400, 327000, 65500))
        this.unitsConfig.push(new UnitsCongig(type, 17, 30000000, 1690, typeItem, 80, 150000000, 2200, 550, TypesAttack.VERTICAL, 800, 655000, 131000))
        this.unitsConfig.push(new UnitsCongig(type, 18, 81600000, 1770, typeItem, 90, 408000000, 3100, 775, TypesAttack.TWO, 400, 1310000, 262000))
        this.unitsConfig.push(new UnitsCongig(type, 19, 189000000, 1860, typeItem, 102, 945000000, 4300, 1070, TypesAttack.THREE, 870, 2620000, 524000))
        this.unitsConfig.push(new UnitsCongig(type, 20, 416000000, 1960, typeItem, 114, 2080000000, 6000, 1500, TypesAttack.ONE, 1800, 5240000, 1040000))

        //20->

        this.unitsConfig.push(new UnitsCongig(type, 21, 893000000, 2060, typeItem, 128, 4460000000, 8400, 2100, TypesAttack.ONE, 3600, 10400000, 2090000))
        this.unitsConfig.push(new UnitsCongig(type, 22, 2010000000, 2170, typeItem, 142, 10000000000, 11800, 2950, TypesAttack.TWO, 5130, 20900000, 4190000))
        this.unitsConfig.push(new UnitsCongig(type, 23, 3710000000, 2290, typeItem, 156, 18500000000, 17000, 4250, TypesAttack.ONE, 4050, 41900000, 8380000))
        this.unitsConfig.push(new UnitsCongig(type, 24, 7900000000, 2410, typeItem, 172, 39500000000, 24000, 6000, TypesAttack.ONE, 5400, 83800000, 16700000))
        this.unitsConfig.push(new UnitsCongig(type, 25, 16500000000, 2540, typeItem, 190, 82800000000, 34000, 8500, TypesAttack.TWO, 4200, 167000000, 33500000))

        this.unitsConfig.push(new UnitsCongig(type, 26, 33500000000, 2680, typeItem, 206, 167000000000, 48000, 12000, TypesAttack.HORIZON, 4680, 355000000, 67100000))
        this.unitsConfig.push(new UnitsCongig(type, 27, 77800000000, 2810, typeItem, 224, 389000000000, 67000, 16700, TypesAttack.ONE, 5220, 671000000, 134000000))
        this.unitsConfig.push(new UnitsCongig(type, 28, 157000000000, 2960, typeItem, 242, 785000000000, 94000, 23500, TypesAttack.ONE, 6960, 1340000000, 268000000))
        this.unitsConfig.push(new UnitsCongig(type, 29, 317000000000, 3120, typeItem, 260, 1580000000000, 132000, 33000, TypesAttack.ONE, 7750, 2680000000, 536000000))
        this.unitsConfig.push(new UnitsCongig(type, 30, 640000000000, 3260, typeItem, 280, 3200000000000, 180000, 45000, TypesAttack.ONE, 8630, 5360000000, 1070000000))

        //30->
    }

    initMarine() {
        let type = TypesObjects.TROOP_MARINE
        let typeItem = TypesItems.PLAN_MAX_MARINE
        let typeAttack = TypesAttack.HORIZON

        this.unitsConfig.push(new UnitsCongig(type, 1, 0, 0, typeItem, 0, 0, 5, 1, typeAttack, 1, 10, 2))
        this.unitsConfig.push(new UnitsCongig(type, 2, 0, 0, typeItem, 0, 0, 10, 3, typeAttack, 1, 20, 4))
        this.unitsConfig.push(new UnitsCongig(type, 3, 0, 0, typeItem, 0, 0, 20, 5, typeAttack, 1, 40, 8))
        this.unitsConfig.push(new UnitsCongig(type, 4, 0, 0, typeItem, 0, 0, 28, 7, typeAttack, 1, 80, 16))
        this.unitsConfig.push(new UnitsCongig(type, 5, 0, 0, typeItem, 0, 0, 39, 9, typeAttack, 1, 160, 32))

        this.unitsConfig.push(new UnitsCongig(type, 6, 1100, 970, typeItem, 8, 5500, 55, 13, typeAttack, 3, 320, 64))
        this.unitsConfig.push(new UnitsCongig(type, 7, 2900, 1020, typeItem, 10, 14500, 77, 19, typeAttack, 3, 640, 128))
        this.unitsConfig.push(new UnitsCongig(type, 8, 6190, 1070, typeItem, 12, 30900, 108, 27, typeAttack, 5, 1280, 256))
        this.unitsConfig.push(new UnitsCongig(type, 9, 12000, 1130, typeItem, 16, 60000, 150, 37, typeAttack, 7, 2560, 512))
        this.unitsConfig.push(new UnitsCongig(type, 10, 27000, 1190, typeItem, 22, 135000, 210, 52, typeAttack, 8, 5120, 1024))

        //10->

        this.unitsConfig.push(new UnitsCongig(type, 11, 59900, 1240, typeItem, 28, 299000, 290, 72, typeAttack, 9, 10200, 2040))
        this.unitsConfig.push(new UnitsCongig(type, 12, 182000, 1310, typeItem, 34, 913000, 410, 102, typeAttack, 10, 20400, 4080))
        this.unitsConfig.push(new UnitsCongig(type, 13, 520000, 1380, typeItem, 42, 2600000, 570, 142, typeAttack, 20, 40900, 8160))
        this.unitsConfig.push(new UnitsCongig(type, 14, 1800000, 1450, typeItem, 50, 9030000, 800, 200, typeAttack, 30, 81900, 16320))
        this.unitsConfig.push(new UnitsCongig(type, 15, 4870000, 1520, typeItem, 60, 24300000, 1120, 280, typeAttack, 60, 163000, 32700))

        this.unitsConfig.push(new UnitsCongig(type, 16, 12300000, 1610, typeItem, 70, 61600000, 1600, 400, typeAttack, 200, 327000, 65500))
        this.unitsConfig.push(new UnitsCongig(type, 17, 30000000, 1690, typeItem, 80, 150000000, 2200, 550, typeAttack, 150, 655000, 131000))
        this.unitsConfig.push(new UnitsCongig(type, 18, 81600000, 1770, typeItem, 90, 408000000, 3100, 775, typeAttack, 192, 1310000, 262000))
        this.unitsConfig.push(new UnitsCongig(type, 19, 189000000, 1860, typeItem, 102, 945000000, 4300, 1070, typeAttack, 345, 2620000, 524000))
        this.unitsConfig.push(new UnitsCongig(type, 20, 416000000, 1960, typeItem, 114, 2080000000, 6000, 1500, typeAttack, 690, 5240000, 1040000))

        //20->

        this.unitsConfig.push(new UnitsCongig(type, 21, 893000000, 2060, typeItem, 128, 4460000000, 8400, 2100, typeAttack, 960, 10400000, 2090000))
        this.unitsConfig.push(new UnitsCongig(type, 22, 2010000000, 2170, typeItem, 142, 10000000000, 11800, 2950, typeAttack, 1480, 20900000, 4190000))
        this.unitsConfig.push(new UnitsCongig(type, 23, 3710000000, 2290, typeItem, 156, 18500000000, 17000, 4250, typeAttack, 1650, 41900000, 8380000))
        this.unitsConfig.push(new UnitsCongig(type, 24, 7900000000, 2410, typeItem, 172, 39500000000, 24000, 6000, typeAttack, 2220, 83800000, 16700000))
        this.unitsConfig.push(new UnitsCongig(type, 25, 16500000000, 2540, typeItem, 190, 82800000000, 34000, 8500, typeAttack, 3940, 167000000, 33500000))

        this.unitsConfig.push(new UnitsCongig(type, 26, 33500000000, 2680, typeItem, 206, 167000000000, 48000, 12000, typeAttack, 3260, 355000000, 67100000))
        this.unitsConfig.push(new UnitsCongig(type, 27, 77800000000, 2810, typeItem, 224, 389000000000, 67000, 16700, typeAttack, 3630, 671000000, 134000000))
        this.unitsConfig.push(new UnitsCongig(type, 28, 157000000000, 2960, typeItem, 242, 785000000000, 94000, 23500, typeAttack, 3360, 1340000000, 268000000))
        this.unitsConfig.push(new UnitsCongig(type, 29, 317000000000, 3120, typeItem, 260, 1580000000000, 132000, 33000, typeAttack, 4500, 2680000000, 536000000))
        this.unitsConfig.push(new UnitsCongig(type, 30, 640000000000, 3260, typeItem, 280, 3200000000000, 180000, 45000, typeAttack, 6000, 5360000000, 1070000000))

        //30->
    }

    initAir() {
        let type = TypesObjects.TROOP_AIR
        let typeItem = TypesItems.PLAN_MAX_AIR
        let typeAttack = TypesAttack.VERTICAL

        this.unitsConfig.push(new UnitsCongig(type, 1, 0, 0, typeItem, 0, 0, 5, 1, typeAttack, 1, 10, 2))
        this.unitsConfig.push(new UnitsCongig(type, 2, 0, 0, typeItem, 0, 0, 10, 3, typeAttack, 1, 20, 4))
        this.unitsConfig.push(new UnitsCongig(type, 3, 0, 0, typeItem, 0, 0, 20, 5, typeAttack, 1, 40, 8))
        this.unitsConfig.push(new UnitsCongig(type, 4, 0, 0, typeItem, 0, 0, 28, 7, typeAttack, 1, 80, 16))
        this.unitsConfig.push(new UnitsCongig(type, 5, 0, 0, typeItem, 0, 0, 39, 9, typeAttack, 1, 160, 32))

        this.unitsConfig.push(new UnitsCongig(type, 6, 1100, 970, typeItem, 8, 5500, 55, 13, typeAttack, 3, 320, 64))
        this.unitsConfig.push(new UnitsCongig(type, 7, 2900, 1020, typeItem, 10, 14500, 77, 19, typeAttack, 3, 640, 128))
        this.unitsConfig.push(new UnitsCongig(type, 8, 6190, 1070, typeItem, 12, 30900, 108, 27, typeAttack, 5, 1280, 256))
        this.unitsConfig.push(new UnitsCongig(type, 9, 12000, 1130, typeItem, 16, 60000, 150, 37, typeAttack, 7, 2560, 512))
        this.unitsConfig.push(new UnitsCongig(type, 10, 27000, 1190, typeItem, 22, 135000, 210, 52, typeAttack, 8, 5120, 1024))

        //10->

        this.unitsConfig.push(new UnitsCongig(type, 11, 59900, 1240, typeItem, 28, 299000, 290, 72, typeAttack, 9, 10200, 2040))
        this.unitsConfig.push(new UnitsCongig(type, 12, 182000, 1310, typeItem, 34, 913000, 410, 102, typeAttack, 10, 20400, 4080))
        this.unitsConfig.push(new UnitsCongig(type, 13, 520000, 1380, typeItem, 42, 2600000, 570, 142, typeAttack, 20, 40900, 8160))
        this.unitsConfig.push(new UnitsCongig(type, 14, 1800000, 1450, typeItem, 50, 9030000, 800, 200, typeAttack, 30, 81900, 16320))
        this.unitsConfig.push(new UnitsCongig(type, 15, 4870000, 1520, typeItem, 60, 24300000, 1120, 280, typeAttack, 60, 163000, 32700))

        this.unitsConfig.push(new UnitsCongig(type, 16, 12300000, 1610, typeItem, 70, 61600000, 1600, 400, typeAttack, 200, 327000, 65500))
        this.unitsConfig.push(new UnitsCongig(type, 17, 30000000, 1690, typeItem, 80, 150000000, 2200, 550, typeAttack, 150, 655000, 131000))
        this.unitsConfig.push(new UnitsCongig(type, 18, 81600000, 1770, typeItem, 90, 408000000, 3100, 775, typeAttack, 192, 1310000, 262000))
        this.unitsConfig.push(new UnitsCongig(type, 19, 189000000, 1860, typeItem, 102, 945000000, 4300, 1070, typeAttack, 345, 2620000, 524000))
        this.unitsConfig.push(new UnitsCongig(type, 20, 416000000, 1960, typeItem, 114, 2080000000, 6000, 1500, typeAttack, 690, 5240000, 1040000))

        //20->

        this.unitsConfig.push(new UnitsCongig(type, 21, 893000000, 2060, typeItem, 128, 4460000000, 8400, 2100, typeAttack, 960, 10400000, 2090000))
        this.unitsConfig.push(new UnitsCongig(type, 22, 2010000000, 2170, typeItem, 142, 10000000000, 11800, 2950, typeAttack, 1480, 20900000, 4190000))
        this.unitsConfig.push(new UnitsCongig(type, 23, 3710000000, 2290, typeItem, 156, 18500000000, 17000, 4250, typeAttack, 1650, 41900000, 83800000))
        this.unitsConfig.push(new UnitsCongig(type, 24, 7900000000, 2410, typeItem, 172, 39500000000, 24000, 6000, typeAttack, 2220, 83800000, 16700000))
        this.unitsConfig.push(new UnitsCongig(type, 25, 16500000000, 2540, typeItem, 190, 82800000000, 34000, 8500, typeAttack, 3940, 167000000, 33500000))

        this.unitsConfig.push(new UnitsCongig(type, 26, 33500000000, 2680, typeItem, 206, 167000000000, 48000, 12000, typeAttack, 3260, 355000000, 67100000))
        this.unitsConfig.push(new UnitsCongig(type, 27, 77800000000, 2810, typeItem, 224, 389000000000, 67000, 16700, typeAttack, 3630, 671000000, 134000000))
        this.unitsConfig.push(new UnitsCongig(type, 28, 157000000000, 2960, typeItem, 242, 785000000000, 94000, 23500, typeAttack, 3360, 1340000000, 268000000))
        this.unitsConfig.push(new UnitsCongig(type, 29, 317000000000, 3120, typeItem, 260, 1580000000000, 132000, 33000, typeAttack, 4500, 2680000000, 536000000))
        this.unitsConfig.push(new UnitsCongig(type, 30, 640000000000, 3260, typeItem, 280, 3200000000000, 180000, 45000, typeAttack, 6000, 5360000000, 1070000000))

        //30->
    }

    initLevel() {
        this.levelConfig.push(new Level(1, 0, 420, 50))
        this.levelConfig.push(new Level(2, 70, 420, 50))
        this.levelConfig.push(new Level(3, 270, 420, 50))
        this.levelConfig.push(new Level(4, 770, 420, 50))
        this.levelConfig.push(new Level(5, 2270, 420, 50))
        this.levelConfig.push(new Level(6, 6570, 420, 50))
        this.levelConfig.push(new Level(7, 20800, 420, 50))
        this.levelConfig.push(new Level(8, 58600, 1130, 50))
        this.levelConfig.push(new Level(9, 139000, 420, 50))
        this.levelConfig.push(new Level(10, 307000, 420, 50))

        this.levelConfig.push(new Level(11, 651000, 420, 50))
        this.levelConfig.push(new Level(12, 1350000, 420, 50))
        this.levelConfig.push(new Level(13, 3480000, 420, 50))
        this.levelConfig.push(new Level(14, 9550000, 420, 50))
        this.levelConfig.push(new Level(15, 30600000, 420, 50))
        this.levelConfig.push(new Level(16, 87500000, 420, 50))
        this.levelConfig.push(new Level(17, 231000000, 420, 50))
        this.levelConfig.push(new Level(18, 581000000, 420, 50))
        this.levelConfig.push(new Level(19, 1530000000, 420, 50))
        this.levelConfig.push(new Level(20, 3730000000, 420, 50))

        this.levelConfig.push(new Level(21, 8590000000, 420, 50))
        this.levelConfig.push(new Level(22, 19000000000, 420, 50))
        this.levelConfig.push(new Level(23, 44600000000, 420, 50))
        this.levelConfig.push(new Level(24, 96600000000, 420, 50))
        this.levelConfig.push(new Level(25, 207000000000, 420, 50))
        this.levelConfig.push(new Level(26, 439000000000, 420, 50))
        this.levelConfig.push(new Level(27, 955000000000, 420, 50))
        this.levelConfig.push(new Level(28, 1990000000000, 420, 50))
        this.levelConfig.push(new Level(29, 4190000000000, 420, 50))
        this.levelConfig.push(new Level(30, 8640000000000, 420, 50))

    }

    initHeroLevel() {
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 1, 0))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 2, 250))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 3, 500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 4, 750))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 5, 1000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 6, 1250))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 7, 1500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 8, 1750))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 9, 2000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 10, 2250))

        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 11, 2500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 12, 3000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 13, 3500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 14, 4000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 15, 4500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 16, 5000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 17, 5500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 18, 6000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 19, 6500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 20, 7000))

        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 21, 7500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 22, 8000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 23, 8500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 24, 9250))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 25, 10000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 26, 10750))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 27, 11500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 28, 12250))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 29, 13000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.R, 30, 13750))



        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 1, 0))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 2, 250))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 3, 500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 4, 750))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 5, 1000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 6, 1250))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 7, 1500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 8, 1750))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 9, 2000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 10, 2250))

        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 11, 2500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 12, 3000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 13, 3500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 14, 4000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 15, 4500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 16, 5000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 17, 5500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 18, 6000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 19, 6500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 20, 7000))

        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 21, 7500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 22, 8000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 23, 8500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 24, 9250))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 25, 10000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 26, 10750))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 27, 11500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 28, 12250))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 29, 13000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SR, 30, 13750))



        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 1, 0))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 2, 250))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 3, 500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 4, 750))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 5, 1000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 6, 1250))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 7, 1500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 8, 1750))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 9, 2000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 10, 2250))

        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 11, 2500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 12, 3000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 13, 3500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 14, 4000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 15, 4500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 16, 5000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 17, 5500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 18, 6000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 19, 6500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 20, 7000))

        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 21, 7500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 22, 8000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 23, 8500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 24, 9250))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 25, 10000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 26, 10750))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 27, 11500))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 28, 12250))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 29, 13000))
        this.heroLevelConfig.push(new HeroLevel(TypesCharacters.SSR, 30, 13750))
    }

    initHeroConfig() {
        this.heroConfig.push(new HeroConfig(TypesCharacters.R, TypesCharacters.BLACK_WIDOW, 120, 180, 100, 24, 36));  // hp = 120 + (24 * heroLevel + (5 * heroStarStady))
        this.heroConfig.push(new HeroConfig(TypesCharacters.R, TypesCharacters.CHARACTER_1, 140, 200, 100, 24, 36));
        this.heroConfig.push(new HeroConfig(TypesCharacters.R, TypesCharacters.CHARACTER_2, 160, 220, 200, 24, 36));
        this.heroConfig.push(new HeroConfig(TypesCharacters.SSR, TypesCharacters.CHARACTER_3, 180, 240, 200, 24, 36));
        this.heroConfig.push(new HeroConfig(TypesCharacters.SR, TypesCharacters.CHARACTER_4, 200, 260, 300, 24, 36));
        this.heroConfig.push(new HeroConfig(TypesCharacters.R, TypesCharacters.CHARACTER_5, 220, 280, 300, 24, 36));
        this.heroConfig.push(new HeroConfig(TypesCharacters.R, TypesCharacters.CHARACTER_6, 240, 300, 400, 24, 36));
        this.heroConfig.push(new HeroConfig(TypesCharacters.SR, TypesCharacters.CHARACTER_7, 260, 320, 400, 24, 36));
        this.heroConfig.push(new HeroConfig(TypesCharacters.R, TypesCharacters.CHARACTER_8, 280, 340, 500, 24, 36));
        this.heroConfig.push(new HeroConfig(TypesCharacters.R, TypesCharacters.CHARACTER_9, 300, 360, 500, 24, 36));
        this.heroConfig.push(new HeroConfig(TypesCharacters.R, TypesCharacters.CHARACTER_10, 320, 380, 600, 24, 36));
        this.heroConfig.push(new HeroConfig(TypesCharacters.R, TypesCharacters.CHARACTER_11, 340, 400, 600, 24, 36));
        this.heroConfig.push(new HeroConfig(TypesCharacters.R, TypesCharacters.CHARACTER_12, 360, 420, 700, 24, 36));
        this.heroConfig.push(new HeroConfig(TypesCharacters.R, TypesCharacters.CHARACTER_13, 380, 440, 700, 24, 36));
        this.heroConfig.push(new HeroConfig(TypesCharacters.R, TypesCharacters.CHARACTER_14, 400, 460, 800, 24, 36));
    }

    initRadarConfig() {
        this.radarConfig.push(new RadarConfig(1, 30, 2, 65, 4800));
        this.radarConfig.push(new RadarConfig(2, 35, 3, 70, 4500));
        this.radarConfig.push(new RadarConfig(3, 40, 4, 75, 4200));
    }
}