import { _decorator, Component } from 'cc';
import { TasksGameStorage } from '../Storage/TasksGameStorage';
import { TaskGame } from '../Structures/TaskGame';
import { TasksGameStorageController } from '../Controllers/StorageControllers/TasksGameStorageController';
import { GameStorageController } from '../Controllers/StorageControllers/GameStorageController';
const { ccclass, property } = _decorator;

@ccclass('TasksGameLogic')
export class TasksGameLogic extends Component {

    public static instance: TasksGameLogic

    public onLoad() {
        TasksGameLogic.instance = this
    }

    public addTask(typeTask: string, levelObjectTask: number, quantityRequired: number, quantityCompleted: number) {
        TasksGameStorage.instance.storage.push(new TaskGame(typeTask, levelObjectTask, quantityRequired, quantityCompleted, false))
    }

    public checkTask(typeTask: string, levelObjectTask: number, quantity: number) {
        for (let i = 0; i < TasksGameStorage.instance.storage.length; i++) {
            if (TasksGameStorage.instance.storage[i].typeTask != typeTask) continue
            if (TasksGameStorage.instance.storage[i].levelObjectTask != levelObjectTask) continue
            if (TasksGameStorage.instance.storage[i].rewardTrigger) continue

            TasksGameStorage.instance.storage[i].quantityCompleted += quantity

            if (TasksGameStorage.instance.storage[i].quantityCompleted > TasksGameStorage.instance.storage[i].quantityRequired) {
                TasksGameStorage.instance.storage[i].quantityCompleted = TasksGameStorage.instance.storage[i].quantityRequired
                TasksGameStorage.instance.storage[i].rewardTrigger = true
            }
        }
    }

    public collectReward(typeTask: string, levelObjectTask: number) {
        for (let i = 0; i < TasksGameStorage.instance.storage.length; i++) {
            if (TasksGameStorage.instance.storage[i].typeTask != typeTask) continue
            if (TasksGameStorage.instance.storage[i].levelObjectTask != levelObjectTask) continue
            if (TasksGameStorage.instance.storage[i].rewardTrigger == false) continue

            let quantityRequired = TasksGameStorage.instance.storage[i].quantityRequired

            this.deleteTask(i)
            this.addTask(typeTask, levelObjectTask + 1, quantityRequired, 0)
            GameStorageController.addCoins(1)
            TasksGameStorageController.saveStorage()
        }
    }

    public deleteTask(index: number) {
        TasksGameStorage.instance.storage.splice(index, 1)
    }
}