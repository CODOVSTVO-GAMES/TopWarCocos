import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('TaskStorage')
export class TaskStorage extends Component {

    public static instance: TaskStorage;

    public activeTaskTypes: Array<string> = [];

    public bufferTasksInfo = new Map<string, number>();

    public mapTasks: Array<number> = new Array(100);

    onLoad() {
        TaskStorage.instance = this;
        this.mapTasks = this.mapTasks.fill(0);
    }

}

