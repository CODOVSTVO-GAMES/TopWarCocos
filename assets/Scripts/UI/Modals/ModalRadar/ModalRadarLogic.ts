import { _decorator, Component, Node } from 'cc';
import { ConfigStorageController } from '../../../Controllers/StorageControllers/ConfigStorageController';
import { RadarStorageController } from '../../../Controllers/StorageControllers/RadarStorageController';
import { SecondaryInterface } from '../../SecondaryInterface';
import { TypesModals } from '../../../Static/TypesModals';
import { RadarRender } from '../../../Logic/RadarRender';
const { ccclass } = _decorator;

@ccclass('ModalRadarLogic')
export class ModalRadarLogic extends Component {

    public static instance: ModalRadarLogic;

    public maxEnergy: number;
    public maxDisplayedTasks: number;
    public maxTasks: number;
    public configTime: number;
    public timerCoroutine: any;

    // public radarRewardsTypes: string[][] = [
    //     [TypesItems.PLAN_MERGE_TROOP_OVERLAND, TypesItems.PLAN_BUILD_BARRACK_OVERLAND, TypesItems.PLAN_MERGE_BARRACK_OVERLAND],
    //     [TypesItems.PLAN_COMMAND_POST, TypesItems.PLAN_MERGE_GOLD_MINE, TypesItems.PLAN_BUILD_GOLD_MINE],
    //     [TypesItems.PLAN_MERGE_GOLD_MINE, TypesItems.PLAN_BUILD_GOLD_MINE, TypesItems.GOLD_CHEST],
    //     [TypesItems.PLAN_MERGE_TROOP_MARINE, TypesItems.PLAN_BUILD_BARRACK_MARINE, TypesItems.PLAN_MERGE_BARRACK_MARINE],
    //     [TypesItems.PLAN_MERGE_TROOP_AIR, TypesItems.PLAN_BUILD_BARRACK_AIR, TypesItems.PLAN_MERGE_BARRACK_AIR]];

    onLoad() {
        ModalRadarLogic.instance = this;
    }

    /**
     * в старте:
     *    получаем конфиг радара по уровню
     *    добавляем задачи в конфиг (если есть доступные && если на локаторе есть место)
     *    запускаем таймер
     */

    start() {
        this.calculationRadar();
        this.startTimer();
    }


    // spawnNewTasks() {
    //     MapService.getEnemy()
    // }

    // taskResponcer(arr: object[]) {
    //     for (let l = 0; l < arr.length; l++) {
    //         console.log()
    //         if (arr[l]['type'] == 'taskPersonal' || arr[l]['type'] == 'taskSalvation') {
    //             if (arr[l]['owner'] == UserStorageController.getAccountId()) {
    //                 if (RadarStorageController.isTaskExists(arr[l]['id'])) {
    //                     continue
    //                 }
    //                 const id = arr[l]['id']
    //                 const type = arr[l]['type']
    //                 const stars = arr[l]['stars']
    //                 const battleTime = arr[l]['battleTime']
    //                 let expiration = arr[l]['expiration']
    //                 expiration = expiration - UserStorageController.getServerTime()
    //                 RadarStorageController.addRadarTasks(id, type, stars, expiration, this.randomReward(stars), battleTime)
    //                 console.log('создана задача')
    //             }
    //         }
    //     }
    // }

    calculationRadar() {
        let config = ConfigStorageController.getRadarConfigByLevel(RadarStorageController.getRadarLevel()); // получаем конфиг радара по уровню
        this.maxEnergy = config.maxEnergy;
        this.maxTasks = config.maxTasks;
        this.maxDisplayedTasks = config.displayedTasks;
        this.configTime = config.time;
    }

    startTimer() {
        this.timerCoroutine = setInterval(() => this.timer(), 1000);
    }

    stopTimer() {
        clearInterval(this.timerCoroutine);
        let availableMissions = RadarStorageController.getRadarAvailableMissions();
        if (this.maxTasks >= availableMissions + 5) {
            RadarStorageController.addRadarAvailableMissions(5); // по истечению таймера начисляется 5 миссий
        }
        else if (availableMissions < this.maxTasks) {
            RadarStorageController.addRadarAvailableMissions(this.maxTasks - availableMissions); // по истечению таймера начисляется максимальное кол-во миссий
        }
        RadarStorageController.equateRadarTime(this.configTime);
        this.startTimer();
    }

    timer() { //обновляет время до начисления задач
        let radarTime = RadarStorageController.getRadarTime();
        if (radarTime > 0) {
            RadarStorageController.reduceRadarTime(1);
            RadarStorageController.saveStorage();
            if (SecondaryInterface.instance.getTypeActiveFirstLayoutModal() == TypesModals.RADAR) {
                RadarRender.instance.updateInterface()
            }
        }
        else {
            this.stopTimer();
        }
    }

    // randomReward(stars: number): RadarReward[] {
    //     let rewards = [];
    //     let rewardTypes = this.radarRewardsTypes[Math.floor(Math.random() * this.radarRewardsTypes.length)];
    //     let level = GameStorageController.getLevel();

    //     let quantity = ConfigStorageController.getRadarBasicRateByLevel(level) * (1 + (0.25 * (stars - 1)));
    //     for (let i = 0; i < rewardTypes.length; i++) {
    //         rewards.push(new RadarReward(rewardTypes[i], quantity));
    //     }

    //     let quantityExp = ConfigStorageController.getExpirienceRadarByLevel(level) * (1 + (0.25 * (stars - 1)));
    //     rewards.push(new RadarReward(TypesItems.EXPERIENCE, quantityExp));
    //     return rewards;
    // }

    signalGain() {
        RadarStorageController.addRadarSignalQuantity(1);
        RadarRender.instance.updateInterface()
    }
}