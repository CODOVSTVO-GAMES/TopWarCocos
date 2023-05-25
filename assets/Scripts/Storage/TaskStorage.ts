import { _decorator, Component, Node } from 'cc';
import { ActiveTask } from '../Structures/ActiveTask';
const { ccclass, property } = _decorator;

@ccclass('TaskStorage')
export class TaskStorage extends Component {

    public static instance: TaskStorage;

    public mapTasksStatus: Array<boolean> = new Array(100).fill(false)

    public activeTasks: Array<ActiveTask> = []

    protected onLoad(): void {
        TaskStorage.instance = this
    }

}

