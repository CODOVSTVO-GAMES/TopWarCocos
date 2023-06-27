import { TypesStorages } from "../../Static/TypesStorages";
import { TypesTasksGame } from "../../Static/TypesTasksGame";
import { TasksGameStorage } from "../../Storage/TasksGameStorage";
import { TaskGame } from "../../Structures/TaskGame";
import { BufferStorageController } from "./BufferStorageController";

export class TasksGameStorageController {

    public static assignStartingValues() {
        TasksGameStorage.instance.storage.push(new TaskGame(TypesTasksGame.OPEN_ZONE, 2, 1, 0, false))

        TasksGameStorage.instance.storage.push(new TaskGame(TypesTasksGame.MERGE_GOLD_MINE, 2, 5, 0, false))

        TasksGameStorage.instance.storage.push(new TaskGame(TypesTasksGame.MERGE_BARRACK_AIR, 2, 2, 0, false))
        TasksGameStorage.instance.storage.push(new TaskGame(TypesTasksGame.MERGE_BARRACK_MARINE, 2, 2, 0, false))
        TasksGameStorage.instance.storage.push(new TaskGame(TypesTasksGame.MERGE_BARRACK_OVERLAND, 2, 2, 0, false))

        TasksGameStorage.instance.storage.push(new TaskGame(TypesTasksGame.BUILD_GOLD_MINE, 1, 10, 1, false))

        TasksGameStorage.instance.storage.push(new TaskGame(TypesTasksGame.BUILD_BARRACK_AIR, 1, 4, 0, false))
        TasksGameStorage.instance.storage.push(new TaskGame(TypesTasksGame.BUILD_BARRACK_MARINE, 1, 4, 0, false))
        TasksGameStorage.instance.storage.push(new TaskGame(TypesTasksGame.BUILD_BARRACK_OVERLAND, 1, 4, 0, false))

        TasksGameStorage.instance.storage.push(new TaskGame(TypesTasksGame.OPEN_UPGRADE_COMMAND_POST, 2, 1, 0, false))

        TasksGameStorage.instance.storage.push(new TaskGame(TypesTasksGame.OPEN_UPGRADE_MERGE_GOLD_MINE, 2, 1, 0, false))

        TasksGameStorage.instance.storage.push(new TaskGame(TypesTasksGame.OPEN_UPGRADE_MERGE_BARRACK_AIR, 2, 1, 0, false))
        TasksGameStorage.instance.storage.push(new TaskGame(TypesTasksGame.OPEN_UPGRADE_MERGE_BARRACK_MARINE, 2, 1, 0, false))
        TasksGameStorage.instance.storage.push(new TaskGame(TypesTasksGame.OPEN_UPGRADE_MERGE_BARRACK_OVERLAND, 2, 1, 0, false))

        TasksGameStorage.instance.storage.push(new TaskGame(TypesTasksGame.OPEN_UPGRADE_BUILD_GOLD_MINE, 2, 1, 0, false))

        TasksGameStorage.instance.storage.push(new TaskGame(TypesTasksGame.OPEN_UPGRADE_BUILD_BARRACK_AIR, 2, 1, 0, false))
        TasksGameStorage.instance.storage.push(new TaskGame(TypesTasksGame.OPEN_UPGRADE_BUILD_BARRACK_MARINE, 2, 1, 0, false))
        TasksGameStorage.instance.storage.push(new TaskGame(TypesTasksGame.OPEN_UPGRADE_BUILD_BARRACK_OVERLAND, 2, 1, 0, false))

        console.log(TasksGameStorage.instance.storage)
        this.saveStorage()
    }

    public static assigningSaveValues(obj: Object[]) {
        for (let i = 0; i < obj.length; i++) {
            let json = JSON.parse(JSON.stringify(obj[i]))

            let typeTask = json.typeTask
            let levelObjectTask = json.levelObjectTask
            let quantityRequired = json.quantityRequired
            let quantityCompleted = json.quantityCompleted
            let rewardTrigger = json.rewardTrigger

            TasksGameStorage.instance.storage.push(new TaskGame(typeTask, levelObjectTask, quantityRequired, quantityCompleted, rewardTrigger))
        }
        console.log(TasksGameStorage.instance.storage)
    }

    public static saveStorage() {
        let obj: Object[] = []
        for (let i = 0; i < TasksGameStorage.instance.storage.length; i++) {
            obj.push({
                typeTask: TasksGameStorage.instance.storage[i].typeTask,
                levelObjectTask: TasksGameStorage.instance.storage[i].levelObjectTask,
                quantityRequired: TasksGameStorage.instance.storage[i].quantityRequired,
                quantityCompleted: TasksGameStorage.instance.storage[i].quantityCompleted,
                rewardTrigger: TasksGameStorage.instance.storage[i].rewardTrigger
            })
        }
        BufferStorageController.addItem(TypesStorages.TASKS_GAME_STORAGE, obj)
    }
}