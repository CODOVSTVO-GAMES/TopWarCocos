import { _decorator, Component } from 'cc';
import { TaskGame } from '../Structures/TaskGame';
import { GamePresenter } from '../Presenter/GamePresenter';
import { TasksGameModel } from '../Model/TasksGameModel';
const { ccclass, property } = _decorator;

@ccclass('TasksGameLogic')
export class TasksGameLogic extends Component {

    public static instance: TasksGameLogic

    public onLoad() {
        TasksGameLogic.instance = this
    }

    public addTask(typeTask: string, levelObjectTask: number, quantityRequired: number, quantityCompleted: number) {
        TasksGameModel.instance.tasks.push(new TaskGame(typeTask, levelObjectTask, quantityRequired, quantityCompleted, false))
    }

    public checkTask(typeTask: string, levelObjectTask: number, quantity: number) {
        for (let i = 0; i < TasksGameModel.instance.tasks.length; i++) {
            if (TasksGameModel.instance.tasks[i].typeTask != typeTask) continue
            if (TasksGameModel.instance.tasks[i].levelObjectTask != levelObjectTask) continue
            if (TasksGameModel.instance.tasks[i].rewardTrigger) continue

            TasksGameModel.instance.tasks[i].quantityCompleted += quantity

            if (TasksGameModel.instance.tasks[i].quantityCompleted > TasksGameModel.instance.tasks[i].quantityRequired) {
                TasksGameModel.instance.tasks[i].quantityCompleted = TasksGameModel.instance.tasks[i].quantityRequired
                TasksGameModel.instance.tasks[i].rewardTrigger = true
            }
        }
    }

    public collectReward(typeTask: string, levelObjectTask: number) {
        for (let i = 0; i < TasksGameModel.instance.tasks.length; i++) {
            if (TasksGameModel.instance.tasks[i].typeTask != typeTask) continue
            if (TasksGameModel.instance.tasks[i].levelObjectTask != levelObjectTask) continue
            if (TasksGameModel.instance.tasks[i].rewardTrigger == false) continue

            let quantityRequired = TasksGameModel.instance.tasks[i].quantityRequired

            this.deleteTask(i)
            this.addTask(typeTask, levelObjectTask + 1, quantityRequired, 0)
            GamePresenter.addCoins(1)
            // HomeMapPresenter.saveStorage()
        }
    }

    public deleteTask(index: number) {
        TasksGameModel.instance.tasks.splice(index, 1)
    }
}