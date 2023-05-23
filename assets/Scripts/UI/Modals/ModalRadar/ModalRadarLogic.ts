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
    public timerCoroutine: any;

    public radarRewardsTypes: string[][] = [[TypesItems.PLAN_MAX_OVERLAND, TypesItems.PLAN_CREATE_BARRACK_OWERLAND, TypesItems.PLAN_MAX_BARRACK_OVERLAND],
                                            [TypesItems.PLAN_MAX_MAINBUILDING, TypesItems.PLAN_MAX_MINE, TypesItems.PLAN_CREATE_MINE],
                                            [TypesItems.PLAN_MAX_MINE, TypesItems.PLAN_CREATE_MINE, TypesItems.GOLD_CHEST],
                                            [TypesItems.PLAN_MAX_MARINE, TypesItems.PLAN_CREATE_BARRACK_MARINE, TypesItems.PLAN_MAX_BARRACK_MARINE],
                                            [TypesItems.PLAN_MAX_AIR, TypesItems.PLAN_CREATE_BARRACK_AIR, TypesItems.PLAN_MAX_BARRACK_AIR]];

    onLoad() {
        ModalRadarLogic.instance = this;
    }
    start() {
        this.calculationRadar();
        this.spawnTasks();
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
        ModalRadarInterface.instance.updateInterface();
    }
}