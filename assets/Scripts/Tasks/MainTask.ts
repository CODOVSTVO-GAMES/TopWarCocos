import { TaskTypes } from "../Static/TaskTypes"
import { TypesItems } from "../Static/TypesItems"
import { TaskStorageController } from "../Controllers/StorageControllers/TaskStorageController"
import { TaskReward } from "../Structures/TaskReward"

export class MainTask {

    static mergeUnitSV(quantity = 1) {

    }

    static openMap(level: number) {
        this.completeTask(TaskTypes.OPEN_MAP, level)
    }

    private static completeTask(taskType: string, level: number) {
        this.activateTaskType(taskType)

        let array = TaskStorageController.getArrayByType(taskType)

        array = TaskStorageController.completeTaskWithLevelLessAndThisLevel(array, level)

        array = TaskStorageController.showNearestTasks(array)

        TaskStorageController.saveArrayByType(taskType, array)
    }

    static activateTaskType(taskType: string) {
        //активирует цепочку квестов по типу
        TaskStorageController.addActiveTaskTypes(taskType)
        TaskStorageController.saveArrayByType(taskType, TaskStorageController.showNearestTasks(TaskStorageController.getArrayByType(taskType)))
    }

    static collectReward(taskType: string, level: number) {
        let array: Array<number> = TaskStorageController.getArrayByType(taskType)

        let reward = new TaskReward(TypesItems.GOLD, 500)//получить из стораджа

        //начислить награду

        //

        //отметить награду полученой
        array[level] = 3

        //активировать следующие задачи
        array = TaskStorageController.showNearestTasks(array)

        TaskStorageController.saveArrayByType(taskType, array)
    }

}