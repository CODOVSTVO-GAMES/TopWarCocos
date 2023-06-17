import { _decorator, Component, Node } from 'cc';
import { RadarTask } from '../Structures/RadarTask';
import { SecondaryInterface } from '../UI/SecondaryInterface';
import { RadarStorage } from '../Storage/RadarStorage';
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

    /**
     * добавление задачи в буфер и изменение статуса
     * 
     * после того как задача считается выполненой, у неё меняется статус
     */

    addTaskSalvation(task: RadarTask) {
        this.ongoingSalvationTasks.push(task);
        task.status = 1;
        setTimeout(() => this.awardingSalvation(), Math.floor(Math.random() * 5000) + 5000); // тут задаётся рандомное время для похода (это не должно тут быть)
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
        if (RadarStorage.instance.task == this.ongoingSalvationTasks[0]) {
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