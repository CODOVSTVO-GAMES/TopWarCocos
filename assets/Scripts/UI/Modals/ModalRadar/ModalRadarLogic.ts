import { _decorator, Component, Node } from 'cc';
import { ControllerConfigStorage } from '../../../Storage/Controllers/ControllerConfigStorage';
import { RadarStorage } from '../../../Storage/RadarStorage';
import { ControllerRadarStorage } from '../../../Storage/Controllers/ControllerRadarStorage';
const { ccclass, property } = _decorator;

@ccclass('ModalRadarLogic')
export class ModalRadarLogic extends Component {

    public static instance: ModalRadarLogic;

    public maxEnergy: number;
    public maxDisplayedTasks: number;
    public maxTasks: number;
    public time: number;
    public timerCoroutine: any;

    onLoad() {
        ModalRadarLogic.instance = this;
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
            ControllerRadarStorage.equateRadarTasks();
        }
    }




    startTimer() {
        this.timerCoroutine = setInterval(() => this.timer(), 1000);
    }

    stopTimer() {
        clearInterval(this.timerCoroutine);
    }

    timer() {
        if (this.time > 0) {
            this.time--;
        }
        else {
            this.stopTimer();
        }
    }
}