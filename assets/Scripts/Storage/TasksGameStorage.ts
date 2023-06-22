import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('TasksGameStorage')
export class TasksGameStorage extends Component {

    public static instance: TasksGameStorage

    public onLoad() {
        TasksGameStorage.instance = this
    }
}