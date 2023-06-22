import { _decorator, Component, Node } from 'cc';
import { BattleTask } from '../Structures/BattleTask';
import { SecondaryInterface } from '../UI/SecondaryInterface';
import { RadarStorage } from '../Storage/RadarStorage';
const { ccclass, property } = _decorator;

@ccclass('BuferTasks')
export class BuferTasks extends Component {

    public static instance: BuferTasks;

    public ongoingSalvationTasks: BattleTask[] = [];
    public ongoingDarkLegionTasks: BattleTask[] = [];
    public ongoingPersonalTasks: BattleTask[] = [];

    onLoad() {
        BuferTasks.instance = this;
    }

    /**
     * добавление задачи в буфер и изменение статуса
     * 
     * после того как задача считается выполненой, у неё меняется статус
     */


    addTaskSalvation(task: BattleTask) {
        this.ongoingSalvationTasks.push(task);
        task.status = 1;
        setTimeout(() => this.awardingSalvation(), task.battleTime * 1000)
    }

    addTaskDarkLegion(task: BattleTask) {
        this.ongoingDarkLegionTasks.push(task);
        task.status = 1;
    }

    addTaskPersonal(task: BattleTask) {
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