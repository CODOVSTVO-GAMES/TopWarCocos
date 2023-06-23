import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TasksGameLogic')
export class TasksGameLogic extends Component {

    public static instance: TasksGameLogic

    public onLoad() {
        TasksGameLogic.instance = this
    }

    public addTaks() {
        console.log()
    }

    public checkTask() {
        console.log()
    }

    public endTask() {
        console.log()
    }

    public deleteTask() {
        console.log()
    }
}