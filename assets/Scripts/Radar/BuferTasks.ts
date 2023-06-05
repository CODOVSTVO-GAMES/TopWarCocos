import { _decorator, Component, Node } from 'cc';
import { RadarTask } from '../Structures/RadarTask';
import { ModalRadarRewardLogic } from '../UI/Modals/ModalRadarReward/ModalRadarRewardLogic';
import { ModalRadarLogic } from '../UI/Modals/ModalRadar/ModalRadarLogic';
import { SecondaryInterface } from '../UI/SecondaryInterface';
const { ccclass, property } = _decorator;

@ccclass('BuferTasks')
export class BuferTasks extends Component {

    public static instance: BuferTasks;

    public ongoingSalvationTasks: RadarTask[] = [];
    public ongoingDarkLegionTasks: RadarTask[] = [];
    public ongoingPersonalTasks: RadarTask[] = [];

    onLoad() {
        BuferTasks.instance = this;
    }

    addTaskSalvation(task: RadarTask) {
        this.ongoingSalvationTasks.push(task);
        task.status = 1;
        setTimeout(() => this.awardingSalvation(), Math.floor(Math.random() * 5000) + 5000);
    }

    addTaskDarkLegion(task: RadarTask) {
        this.ongoingDarkLegionTasks.push(task);
        task.status = 1;
    }

    addTaskPersonal(task: RadarTask) {
        this.ongoingPersonalTasks.push(task);
        task.status = 1;
    }

    awardingSalvation() {
        this.ongoingSalvationTasks[0].status = 2;
        this.ongoingSalvationTasks.splice(0, 1);
        if (ModalRadarRewardLogic.instance.task == this.ongoingSalvationTasks[0]) {
            SecondaryInterface.instance.closeSecondLayoutModal();
        }
    }

    awardingDarkLegion() {
        this.ongoingDarkLegionTasks[0].status = 2;
        this.ongoingDarkLegionTasks.splice(0, 1);
    }

    awardingPersonal() {
        this.ongoingPersonalTasks[0].status = 2;
        this.ongoingPersonalTasks.splice(0, 1);
    }
}