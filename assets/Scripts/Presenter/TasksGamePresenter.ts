import { TasksGameModel } from "../Model/TasksGameModel"
import { TaskGame } from "../Structures/TaskGame"
import { TasksGameView } from "../View/TasksGameView"
import { SecondaryInterface } from "../UI/SecondaryInterface"
import { ItemTasksGameView } from "../View/ItemTasksGameView"
import { GamePresenter } from "./GamePresenter"

export class TasksGamePresenter {

    public static processingCollectRewardTask(itemTasksGame: ItemTasksGameView) {
        let typeTask = itemTasksGame.typeTask
        let levelObjectTask = itemTasksGame.levelObjectTask

        this.collectReward(typeTask, levelObjectTask)
    }

    public static processingGoOverTask(itemTasksGame: ItemTasksGameView) {
        SecondaryInterface.instance.closeFirstLayoutModal()
    }

    public static addTask(typeTask: string, levelObjectTask: number, quantityRequired: number, quantityCompleted: number) {
        TasksGameModel.instance.tasks.push(new TaskGame(typeTask, levelObjectTask, quantityRequired, quantityCompleted, false))
        // TasksGameView.instance.renderItemsTasks()
    }

    public static checkTask(typeTask: string, levelObjectTask: number, quantity: number) {
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

    public static collectReward(typeTask: string, levelObjectTask: number) {
        for (let i = 0; i < TasksGameModel.instance.tasks.length; i++) {
            if (TasksGameModel.instance.tasks[i].typeTask != typeTask) continue
            if (TasksGameModel.instance.tasks[i].levelObjectTask != levelObjectTask) continue
            if (TasksGameModel.instance.tasks[i].rewardTrigger == false) continue

            let quantityRequired = TasksGameModel.instance.tasks[i].quantityRequired
            let quantityCompleted = 0

            this.deleteTask(i)
            this.addTask(typeTask, levelObjectTask + 1, quantityRequired, quantityCompleted)

            GamePresenter.addCoins(1)
        }
    }

    public static deleteTask(index: number) {
        TasksGameModel.instance.tasks.splice(index, 1)
    }
}