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
import { RadarTask } from '../../../Structures/RadarTask';
import { ModalRadarTaskInterface } from '../ModalRadarTask/ModalRadarTaskInterface';
const { ccclass, property } = _decorator;

@ccclass('ModalRadarLogic')
export class ModalRadarLogic extends Component {

    public static instance: ModalRadarLogic;

    @property({ type: Node })
    public modalRadarTask: Node;

    public maxEnergy: number;
    public maxDisplayedTasks: number;
    public maxTasks: number;
    public timerCoroutine: any;

    public radarRewardsTypes: string[][] = [[TypesItems.PLAN_MAX_OVERLAND, TypesItems.PLAN_CREATE_BARRACK_OVERLAND, TypesItems.PLAN_MAX_BARRACK_OVERLAND],
                                            [TypesItems.PLAN_MAX_MAINBUILDING, TypesItems.PLAN_MAX_GOLD_MINE, TypesItems.PLAN_CREATE_GOLD_MINE],
                                            [TypesItems.PLAN_MAX_GOLD_MINE, TypesItems.PLAN_CREATE_GOLD_MINE, TypesItems.GOLD_CHEST],
                                            [TypesItems.PLAN_MAX_MARINE, TypesItems.PLAN_CREATE_BARRACK_MARINE, TypesItems.PLAN_MAX_BARRACK_MARINE],
                                            [TypesItems.PLAN_MAX_AIR, TypesItems.PLAN_CREATE_BARRACK_AIR, TypesItems.PLAN_MAX_BARRACK_AIR]];

    onLoad() {
        ModalRadarLogic.instance = this;
    }
    start() {
        this.calculationRadar();
        let radarTasks = ControllerRadarStorage.getRadarTasks();
        while (radarTasks.length < this.maxDisplayedTasks) {
            this.spawnTasks();
        }
        this.startTimer();
    }

    calculationRadar() {
        let config = ControllerConfigStorage.getRadarConfigByLevel(RadarStorage.instance.radarLevel);
        this.maxEnergy = config.maxEnergy;
        this.maxTasks = config.maxTasks;
        this.maxDisplayedTasks = config.displayedTasks;
    }

    spawnTasks() {
        let radarTasks = ControllerRadarStorage.getRadarTasks();
        if (radarTasks.length < this.maxDisplayedTasks) {
            let stars = this.randomStars();
            ControllerRadarStorage.equateRadarTasks(this.randomType(), stars, 28800, this.randomReward(stars));
            ControllerRadarStorage.reduceRadarAvailableMissions(1);
        }
        console.log(ControllerRadarStorage.getRadarTasks());
    }

    startTimer() {
        this.timerCoroutine = setInterval(() => this.timer(), 1000);
    }

    stopTimer() {
        clearInterval(this.timerCoroutine);
        let config = ControllerConfigStorage.getRadarConfigByLevel(RadarStorage.instance.radarLevel);
        let availableMissions = ControllerRadarStorage.getRadarAvailableMissions();
        if (config.maxTasks >= availableMissions + 5) {
            ControllerRadarStorage.addRadarAvailableMissions(5);
        }
        else if (availableMissions < config.maxTasks) {
            ControllerRadarStorage.addRadarAvailableMissions(config.maxTasks - availableMissions);
        }
        ControllerRadarStorage.equateRadarTime(config.time);
        this.startTimer();
    }

    // endTask(task: RadarTask) {

    // }

    openRadarTask(task: RadarTask) {
        ModalRadarTaskInterface.instance.updateInterface(task);
        this.modalRadarTask.active = true;
    }

    closeRadarTask() {
        this.modalRadarTask.active = false;
    }

    timeZero() {
        ControllerRadarStorage.equateRadarTime(1);
    }

    sbros() {
        ControllerRadarStorage.assignStartingValues();
        // ModalRadarInterface.instance.tasks = [];
    }

    timer() {
        if (ControllerRadarStorage.getRadarTime() > 0) {
            ControllerRadarStorage.reduceRadarTime(1);
            ControllerRadarStorage.updateRadarStorage();
            if (SecondaryInterface.instance.getTypeActiveModal() == TypesModals.RADAR) {
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
        else if (random < 95) {
            return TypesRadar.TASK_DARK_LEGION;
        }
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
        for (let i = 0; i < rewardTypes.length; i++) {
            rewards.push(new RadarReward(rewardTypes[i], ControllerConfigStorage.getRadarBasicRateByLevel(ControllerGameStorage.getLevel()) * (1 + (0.25 * (stars - 1)))));
        }
        rewards.push(new RadarReward(TypesItems.EXPERIENCE, ControllerConfigStorage.getExpirienceRadarByLevel(ControllerGameStorage.getLevel()) * (1 + (0.25 * (stars - 1)))))
        return rewards;
    }

    signalGain() {
        ControllerRadarStorage.addRadarSignalQuantity(1);
        ModalRadarInterface.instance.updateInterface();
    }
}