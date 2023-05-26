import { _decorator, Component, Node } from 'cc';
const { ccclass } = _decorator;

@ccclass('TaskStorage')
export class TaskStorage extends Component {

    public static instance: TaskStorage;

    public activeTaskTypes: Array<string> = []

    public bufferTasksInfo = new Map<string, number>()

    public mapTasks: Array<number> = new Array(100)

    protected onLoad(): void {
        TaskStorage.instance = this
        this.mapTasks = this.mapTasks.fill(0)
    }

}

