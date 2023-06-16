import { _decorator, Component, Node } from 'cc';
import { ControllerConfigStorage } from '../../../Storage/Controllers/ControllerConfigStorage';
import { RadarStorage } from '../../../Storage/RadarStorage';
import { ControllerRadarStorage } from '../../../Storage/Controllers/ControllerRadarStorage';
import { TypesRadar } from '../../../Static/TypesRadar';
import { RadarReward } from '../../../Structures/RadarReward';
import { TypesItems } from '../../../Static/TypesItems';
import { ControllerGameStorage } from '../../../Storage/Controllers/ControllerGameStorage';
import { ModalRadarInterface } from './ModalRadarInterface';
import { SecondaryInterface } from '../../SecondaryInterface';
import { TypesModals } from '../../../Static/TypesModals';
const { ccclass, property } = _decorator;

@ccclass('ModalRadarLogic')
export class ModalRadarLogic extends Component {

    public static instance: ModalRadarLogic;

    public maxEnergy: number;
    public maxDisplayedTasks: number;
    public maxTasks: number;
    public configTime: number;
    public timerCoroutine: any;

    public radarRewardsTypes: string[][] = [[TypesItems.PLAN_MERGE_TROOP_OVERLAND, TypesItems.PLAN_BUILD_BARRACK_OVERLAND, TypesItems.PLAN_MERGE_BARRACK_OVERLAND],
                                            [TypesItems.PLAN_COMMAND_POST, TypesItems.PLAN_MERGE_GOLD_MINE, TypesItems.PLAN_BUILD_GOLD_MINE],
                                            [TypesItems.PLAN_MERGE_GOLD_MINE, TypesItems.PLAN_BUILD_GOLD_MINE, TypesItems.GOLD_CHEST],
                                            [TypesItems.PLAN_MERGE_TROOP_MARINE, TypesItems.PLAN_BUILD_BARRACK_MARINE, TypesItems.PLAN_MERGE_BARRACK_MARINE],
                                            [TypesItems.PLAN_MERGE_TROOP_AIR, TypesItems.PLAN_BUILD_BARRACK_AIR, TypesItems.PLAN_MERGE_BARRACK_AIR]];

    onLoad() {
        ModalRadarLogic.instance = this;
    }

    /**
     * в старте:
     *    получаем конфиг радара по уровню
     *    добавляем задачи в конфиг (если есть доступные && если на локаторе есть место)
     *    запускаем таймер
     * 
     * 
     */

    start() {
        this.calculationRadar();
        this.spawnNewTasks();
        this.startTimer();
    }

    calculationRadar() {
        let config = ControllerConfigStorage.getRadarConfigByLevel(RadarStorage.instance.radarLevel); // получаем конфиг радара по уровню
        this.maxEnergy = config.maxEnergy;
        this.maxTasks = config.maxTasks;
        this.maxDisplayedTasks = config.displayedTasks;
        this.configTime = config.time;
    }

    spawnTasks() {
        let radarTasks = ControllerRadarStorage.getRadarTasks();
        if (radarTasks.length < this.maxDisplayedTasks && ControllerRadarStorage.getRadarAvailableMissions() > 0) {
            let stars = this.randomStars();
            ControllerRadarStorage.addRadarTasks(this.randomType(), stars, 28800, this.randomReward(stars));
            ControllerRadarStorage.reduceRadarAvailableMissions(1); // вычитаем одну миссию из счетчика доступных
        }
    }

    startTimer() {
        this.timerCoroutine = setInterval(() => this.timer(), 1000);
    }

    stopTimer() {
        clearInterval(this.timerCoroutine);
        let availableMissions = ControllerRadarStorage.getRadarAvailableMissions();
        if (this.maxTasks >= availableMissions + 5) {
            ControllerRadarStorage.addRadarAvailableMissions(5); // по истечению таймера начисляется 5 миссий
        }
        else if (availableMissions < this.maxTasks) {
            ControllerRadarStorage.addRadarAvailableMissions(this.maxTasks - availableMissions); // по истечению таймера начисляется максимальное кол-во миссий
        }
        ControllerRadarStorage.equateRadarTime(this.configTime);
        this.startTimer();
    }

    spawnNewTasks() {
        let radarTasks = ControllerRadarStorage.getRadarTasks();
        while (radarTasks.length < this.maxDisplayedTasks && ControllerRadarStorage.getRadarAvailableMissions() > 0) {
            this.spawnTasks();
        }
    }

    timer() {
        let radarTime = ControllerRadarStorage.getRadarTime();
        if (radarTime > 0) {
            ControllerRadarStorage.reduceRadarTime(1);
            ControllerRadarStorage.saveStorage();
            if (SecondaryInterface.instance.getTypeActiveFirstLayoutModal() == TypesModals.RADAR) {
                ModalRadarInterface.instance.updateInterface();
            }
        }
        else {
            this.stopTimer();
        }
    }

    randomType(): string {
        let random = Math.floor(Math.random() * 100);
        if (random < 60) {
            return TypesRadar.TASK_SALVATION;
        }
        // else if (random < 95) {
        //     return TypesRadar.TASK_DARK_LEGION; // этих заданий ещё не существует
        // }
        else {
            return TypesRadar.TASK_PERSONAL
        }
    }

    randomStars(): number {
        let random = Math.floor(Math.random() * 100);
        if (random < 50) {
            return 1;
        }
        else if (random < 75) {
            return 2;
        }
        else if (random < 95) {
            return 3;
        }
        else {
            return 4;
        }
    }

    randomReward(stars: number): RadarReward[] {
        let rewards = [];
        let rewardTypes = this.radarRewardsTypes[Math.floor(Math.random() * this.radarRewardsTypes.length)];
        let level = ControllerGameStorage.getLevel();
        
        let quantity = ControllerConfigStorage.getRadarBasicRateByLevel(level) * (1 + (0.25 * (stars - 1)));
        for (let i = 0; i < rewardTypes.length; i++) {
            rewards.push(new RadarReward(rewardTypes[i], quantity));
        }

        let quantityExp = ControllerConfigStorage.getExpirienceRadarByLevel(level) * (1 + (0.25 * (stars - 1)));
        rewards.push(new RadarReward(TypesItems.EXPERIENCE, quantityExp));
        return rewards;
    }

    signalGain() {
        ControllerRadarStorage.addRadarSignalQuantity(1);
        ModalRadarInterface.instance.updateInterface();
    }
}