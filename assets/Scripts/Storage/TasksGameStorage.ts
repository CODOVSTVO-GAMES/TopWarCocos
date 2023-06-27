import { _decorator, Component } from 'cc';
import { TaskGame } from '../Structures/TaskGame';
const { ccclass } = _decorator;

@ccclass('TasksGameStorage')
export class TasksGameStorage extends Component {

    public static instance: TasksGameStorage

    public storage: TaskGame[] = []

    public onLoad() {
        TasksGameStorage.instance = this
    }
}