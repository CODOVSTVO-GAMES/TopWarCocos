import { _decorator, Component, Node } from 'cc';
import { RadarTask } from '../Structures/RadarTask';
const { ccclass, property } = _decorator;

@ccclass('BuferTasks')
export class BuferTasks extends Component {

    public static instance: BuferTasks;

    public ongoingTasks: RadarTask[] = [];

    onLoad() {
        BuferTasks.instance = this;
    }

    addTask(task: RadarTask) {
        this.ongoingTasks.push(task);
        task.status = 1;
        setTimeout(() => this.awarding(), Math.floor(Math.random() * 1000) + 1000)
    }

    awarding() {
        this.ongoingTasks[0].status = 2;
        this.ongoingTasks.splice(0, 1);
    }
}