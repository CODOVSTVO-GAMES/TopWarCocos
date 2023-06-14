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
import { Unit } from '../Structures/Unit';
import { ControllerConfigStorage } from './Controllers/ControllerConfigStorage';
import { MapEnemyController } from './Controllers/MapEnemyController';
import { MapEnemyUnits } from '../Structures/MapEnemyUnits';
const { ccclass } = _decorator;

@ccclass('ConfigStorage')
export class ConfigStorage extends Component {

    public static instance: ConfigStorage;

    public mainAndRepairBuildings: Array<MainAndRepairBuildings> = [];

    public unitsConfig: Array<UnitsCongig> = [];

    public mergeBuildingsConfig: Array<ConfigMergeBuildings> = [];

    public spawnBuildingsConfig: Array<ConfigSpawnBuildings> = [];

    public levelConfig: Array<Level> = [];

    public heroConfig: Array<HeroConfig> = [];

    public heroLevelConfig: Array<HeroLevel> = [];

    public radarConfig: Array<RadarConfig> = [];

    public radarBasicRate: Array<number> = [];

    public radarProgressNumber: Array<number> = [];

    public expirienceRadar: Array<number> = [];

    public goldBoxConfig: Array<number> = [];

    onLoad() {
        ConfigStorage.instance = this;

        this.initHeroLevel();
        this.initHeroConfig();

        this.initGoldBox();

        this.initRadarBacicRate();
        this.initRadarConfig();
        this.initRadarProgressNumber();
        this.initExpirienceRadar();
    }

    configRecipient(objects: object[]) {
        if (objects == null) throw 'Пришел пустой обьект';

        for (let i = 0; i < objects.length; i++) {
            const json = objects[i];
            const key = json['key'];
            let value = JSON.parse(JSON.stringify(json['value']));

            if (key == 'levels') {
                for (let l = 0; l < value.length; l++) {
                    this.levelConfig.push(new Level(value[l].l, value[l].e, 420, 50));
                }
            }
            else if (key == 'mainBuildings') {
                for (let l = 0; l < value.length; l++) {
                    this.mainAndRepairBuildings.push(new MainAndRepairBuildings(TypesObjects.COMMAND_POST, parseFloat(value[l].l), parseFloat(value[l].e), parseFloat(value[l].p), TypesItems.PLAN_COMMAND_POST, value[l].ru, parseFloat(value[l].pu), value[l].ba / 10));
                }
            }
            else if (key == 'repairBuildings') {
                for (let l = 0; l < value.length; l++) {
                    this.mainAndRepairBuildings.push(new MainAndRepairBuildings(TypesObjects.REPAIR_SHOP, parseFloat(value[l].l), parseFloat(value[l].e), parseFloat(value[l].p), TypesItems.PLAN_COMMAND_POST, value[l].ru, parseFloat(value[l].pu), 0));
                }
            }
            else if (key == 'units') {
                for (let l = 0; l < value.length; l++) {
                    this.unitsConfig.push(new UnitsCongig(TypesObjects.TROOP_OVERLAND, parseFloat(value[l].l), parseFloat(value[l].e), parseFloat(value[l].p), TypesItems.PLAN_MERGE_TROOP_OVERLAND, value[l].ru, 0, 5, 1, value[l].ta, parseFloat(value[l].pu), value[l].pc, value[l].es));
                    this.unitsConfig.push(new UnitsCongig(TypesObjects.TROOP_MARINE, parseFloat(value[l].l), parseFloat(value[l].e), parseFloat(value[l].p), TypesItems.PLAN_MERGE_TROOP_MARINE, value[l].ru, 0, 5, 1, TypesAttack.HORIZON, parseFloat(value[l].pu), value[l].pc, value[l].es));
                    this.unitsConfig.push(new UnitsCongig(TypesObjects.TROOP_AIR, parseFloat(value[l].l), parseFloat(value[l].e), parseFloat(value[l].p), TypesItems.PLAN_MERGE_TROOP_AIR, value[l].ru, 0, 5, 1, TypesAttack.VERTICAL, parseFloat(value[l].pu), value[l].pc, value[l].es));
                }
            }
            else if (key == 'createBuildings') {
                for (let l = 0; l < value.length; l++) {
                    this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(TypesObjects.GOLD_MINE, parseFloat(value[l].l), parseFloat(value[l].e), parseFloat(value[l].p), TypesItems.PLAN_BUILD_GOLD_MINE, value[l].ru, parseFloat(value[l].pu), value[l].pc, value[l].es));
                    this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(TypesObjects.BARRACKS_OVERLAND, parseFloat(value[l].l), parseFloat(value[l].e), parseFloat(value[l].p), TypesItems.PLAN_BUILD_BARRACK_OVERLAND, value[l].ru, parseFloat(value[l].pu), value[l].pc, value[l].es));
                    this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(TypesObjects.BARRACKS_MARINE, parseFloat(value[l].l), parseFloat(value[l].e), parseFloat(value[l].p), TypesItems.PLAN_MERGE_TROOP_MARINE, value[l].ru, parseFloat(value[l].pu), value[l].pc, value[l].es));
                    this.spawnBuildingsConfig.push(new ConfigSpawnBuildings(TypesObjects.BARRACKS_AIR, parseFloat(value[l].l), parseFloat(value[l].e), parseFloat(value[l].p), TypesItems.PLAN_MERGE_BARRACK_AIR, value[l].ru, parseFloat(value[l].pu), value[l].pc, value[l].es));
                }
            }
            else if (key == 'mergeBarracks') {
                for (let l = 0; l < value.length; l++) {
                    this.mergeBuildingsConfig.push(new ConfigMergeBuildings(TypesObjects.BARRACKS_OVERLAND, parseFloat(value[l].l), parseFloat(value[l].e), parseFloat(value[l].p), TypesItems.PLAN_MERGE_BARRACK_OVERLAND, value[l].ru, parseFloat(value[l].pu), 0));
                    this.mergeBuildingsConfig.push(new ConfigMergeBuildings(TypesObjects.BARRACKS_MARINE, parseFloat(value[l].l), parseFloat(value[l].e), parseFloat(value[l].p), TypesItems.PLAN_MERGE_TROOP_MARINE, value[l].ru, parseFloat(value[l].pu), 0));
                    this.mergeBuildingsConfig.push(new ConfigMergeBuildings(TypesObjects.BARRACKS_AIR, parseFloat(value[l].l), parseFloat(value[l].e), parseFloat(value[l].p), TypesItems.PLAN_MERGE_TROOP_AIR, value[l].ru, parseFloat(value[l].pu), 0));
                }
            }
            else if (key == 'mergeMining') {
                for (let l = 0; l < value.length; l++) {
                    this.mergeBuildingsConfig.push(new ConfigMergeBuildings(TypesObjects.GOLD_MINE, parseFloat(value[l].l), parseFloat(value[l].e), parseFloat(value[l].p), TypesItems.PLAN_MERGE_GOLD_MINE, value[l].ru, parseFloat(value[l].pu), parseFloat(value[l].m)));
                }
            }
            else if (key == 'radarExpirience') {
                this.expirienceRadar.push(1)
                for (let l = 0; l < value.length; l++) {
                    this.expirienceRadar.push(value.e);
                }
            }
            else if (key == 'enemyTeams') {
                for (let l = 0; l < value.length; l++) {
                    if (!this.isNotNullOrNotUndefined(value[l].n)) continue

                    let units1: Unit[] = []
                    let units2: Unit[] = []
                    let units3: Unit[] = []

                    if (this.isNotNullOrNotUndefined(value[l].l1) && this.isNotNullOrNotUndefined(value[l].n1)) {
                        units1.push(this.createEnemyUnit(value[l].l1, value[l].n1))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l2) && this.isNotNullOrNotUndefined(value[l].n2)) {
                        units1.push(this.createEnemyUnit(value[l].l2, value[l].n2))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l3) && this.isNotNullOrNotUndefined(value[l].n3)) {
                        units1.push(this.createEnemyUnit(value[l].l3, value[l].n3))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l4) && this.isNotNullOrNotUndefined(value[l].n4)) {
                        units1.push(this.createEnemyUnit(value[l].l4, value[l].n4))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l5) && this.isNotNullOrNotUndefined(value[l].n5)) {
                        units1.push(this.createEnemyUnit(value[l].l5, value[l].n5))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l6) && this.isNotNullOrNotUndefined(value[l].n6)) {
                        units1.push(this.createEnemyUnit(value[l].l6, value[l].n6))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l7) && this.isNotNullOrNotUndefined(value[l].n7)) {
                        units1.push(this.createEnemyUnit(value[l].l7, value[l].n7))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l8) && this.isNotNullOrNotUndefined(value[l].n8)) {
                        units1.push(this.createEnemyUnit(value[l].l8, value[l].n8))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l9) && this.isNotNullOrNotUndefined(value[l].n9)) {
                        units1.push(this.createEnemyUnit(value[l].l9, value[l].n9))
                    }

                    if (this.isNotNullOrNotUndefined(value[l].l10) && this.isNotNullOrNotUndefined(value[l].n10)) {
                        units2.push(this.createEnemyUnit(value[l].l10, value[l].n10))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l11) && this.isNotNullOrNotUndefined(value[l].n11)) {
                        units2.push(this.createEnemyUnit(value[l].l11, value[l].n11))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l12) && this.isNotNullOrNotUndefined(value[l].n12)) {
                        units2.push(this.createEnemyUnit(value[l].l12, value[l].n12))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l13) && this.isNotNullOrNotUndefined(value[l].n13)) {
                        units2.push(this.createEnemyUnit(value[l].l13, value[l].n13))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l14) && this.isNotNullOrNotUndefined(value[l].n14)) {
                        units2.push(this.createEnemyUnit(value[l].l14, value[l].n14))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l15) && this.isNotNullOrNotUndefined(value[l].n15)) {
                        units2.push(this.createEnemyUnit(value[l].l15, value[l].n15))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l16) && this.isNotNullOrNotUndefined(value[l].n16)) {
                        units2.push(this.createEnemyUnit(value[l].l16, value[l].n16))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l17) && this.isNotNullOrNotUndefined(value[l].n17)) {
                        units2.push(this.createEnemyUnit(value[l].l17, value[l].n17))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l18) && this.isNotNullOrNotUndefined(value[l].n18)) {
                        units2.push(this.createEnemyUnit(value[l].l18, value[l].n18))
                    }

                    if (this.isNotNullOrNotUndefined(value[l].l19) && this.isNotNullOrNotUndefined(value[l].n19)) {
                        units3.push(this.createEnemyUnit(value[l].l19, value[l].n19))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l20) && this.isNotNullOrNotUndefined(value[l].n20)) {
                        units3.push(this.createEnemyUnit(value[l].l20, value[l].n20))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l21) && this.isNotNullOrNotUndefined(value[l].n21)) {
                        units3.push(this.createEnemyUnit(value[l].l21, value[l].n21))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l22) && this.isNotNullOrNotUndefined(value[l].n22)) {
                        units3.push(this.createEnemyUnit(value[l].l22, value[l].n22))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l23) && this.isNotNullOrNotUndefined(value[l].n23)) {
                        units3.push(this.createEnemyUnit(value[l].l23, value[l].n23))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l24) && this.isNotNullOrNotUndefined(value[l].n24)) {
                        units3.push(this.createEnemyUnit(value[l].l24, value[l].n24))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l25) && this.isNotNullOrNotUndefined(value[l].n25)) {
                        units3.push(this.createEnemyUnit(value[l].l25, value[l].n25))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l26) && this.isNotNullOrNotUndefined(value[l].n26)) {
                        units3.push(this.createEnemyUnit(value[l].l26, value[l].n26))
                    }
                    if (this.isNotNullOrNotUndefined(value[l].l27) && this.isNotNullOrNotUndefined(value[l].n27)) {
                        units3.push(this.createEnemyUnit(value[l].l27, value[l].n27))
                    }

                    MapEnemyController.addEnemyCommand(new MapEnemyUnits(value[l].n, units1, units2, units3))
                }

            }
        }
    }

    isNotNullOrNotUndefined(value: any) {
        if (value == undefined) return false
        if (value == null) return false
        return true
    }

    private createEnemyUnit(level: number, quantity: number): Unit {
        let config = ControllerConfigStorage.getConfigUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, level)

        return new Unit(config.hp, config.hp, config.damage, 6666, config.level, quantity, config.attackType, 'Это была ловушка', config.type)
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

    initExpirienceRadar() {
        this.expirienceRadar.push(1)

        this.expirienceRadar.push(28)
        this.expirienceRadar.push(60)
        this.expirienceRadar.push(120)
        this.expirienceRadar.push(280)
        this.expirienceRadar.push(580)
        this.expirienceRadar.push(1260)
        this.expirienceRadar.push(2725)
        this.expirienceRadar.push(5860)
        this.expirienceRadar.push(12700)
        this.expirienceRadar.push(27800)

        this.expirienceRadar.push(60200)
        this.expirienceRadar.push(130000)
        this.expirienceRadar.push(282000)
        this.expirienceRadar.push(606300)
        this.expirienceRadar.push(1300000)
        this.expirienceRadar.push(2800000)
        this.expirienceRadar.push(6000000)
        this.expirienceRadar.push(12800000)
        this.expirienceRadar.push(1)
        this.expirienceRadar.push(1)

    }

    initGoldBox() {
        this.goldBoxConfig.push(1)

        this.goldBoxConfig.push(1)
        this.goldBoxConfig.push(2)
        this.goldBoxConfig.push(3)
        this.goldBoxConfig.push(4)
        this.goldBoxConfig.push(5)
        this.goldBoxConfig.push(6)
        this.goldBoxConfig.push(1530000)
        this.goldBoxConfig.push(2740000)
        this.goldBoxConfig.push(4570000)
        this.goldBoxConfig.push(8370000)

        this.goldBoxConfig.push(15000000)
        this.goldBoxConfig.push(29600000)
        this.goldBoxConfig.push(55400000)
        this.goldBoxConfig.push(95800000)
        this.goldBoxConfig.push(182000000)
        this.goldBoxConfig.push(310000000)
        this.goldBoxConfig.push(581000000)
        this.goldBoxConfig.push(1030000000)
        this.goldBoxConfig.push(1730000000)
        this.goldBoxConfig.push(3190000000)

        this.goldBoxConfig.push(5010000000)
        this.goldBoxConfig.push(1)
        this.goldBoxConfig.push(14500000000)
        this.goldBoxConfig.push(26500000000)
        this.goldBoxConfig.push(1)
        this.goldBoxConfig.push(102000000000)
        this.goldBoxConfig.push(1)
        this.goldBoxConfig.push(1)
        this.goldBoxConfig.push(1)
        this.goldBoxConfig.push(1170000000000)

        this.goldBoxConfig.push(1)
        this.goldBoxConfig.push(1)
        this.goldBoxConfig.push(1)
        this.goldBoxConfig.push(1)
        this.goldBoxConfig.push(1)
        this.goldBoxConfig.push(1)
        this.goldBoxConfig.push(1)
        this.goldBoxConfig.push(1)
        this.goldBoxConfig.push(1)
        this.goldBoxConfig.push(497000000000000)
    }

    initRadarBacicRate() {
        this.radarBasicRate.push(6)

        this.radarBasicRate.push(6)
        this.radarBasicRate.push(6)
        this.radarBasicRate.push(6)
        this.radarBasicRate.push(6)
        this.radarBasicRate.push(6)
        this.radarBasicRate.push(6)
        this.radarBasicRate.push(6)
        this.radarBasicRate.push(6)
        this.radarBasicRate.push(6)
        this.radarBasicRate.push(6)

        this.radarBasicRate.push(8)
        this.radarBasicRate.push(19)
        this.radarBasicRate.push(19)
        this.radarBasicRate.push(19)
        this.radarBasicRate.push(19)
        this.radarBasicRate.push(19)
        this.radarBasicRate.push(24)
        this.radarBasicRate.push(24)
        this.radarBasicRate.push(24)
        this.radarBasicRate.push(24)

        this.radarBasicRate.push(24)
        this.radarBasicRate.push(29)
        this.radarBasicRate.push(29)
        this.radarBasicRate.push(29)
        this.radarBasicRate.push(29)
        this.radarBasicRate.push(29)
        this.radarBasicRate.push(1)
        this.radarBasicRate.push(1)
        this.radarBasicRate.push(1)
    }

    initRadarProgressNumber() {
        this.radarProgressNumber.push(1)

        this.radarProgressNumber.push(3);
        this.radarProgressNumber.push(30);
        this.radarProgressNumber.push(300);
        this.radarProgressNumber.push(1);
    }

    getHeroConfig(): HeroConfig[] {
        return this.heroConfig;
    }
}