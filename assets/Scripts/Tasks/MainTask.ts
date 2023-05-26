import { TaskTypes } from "../Static/TaskTypes"
import { TypesItems } from "../Static/TypesItems"
import { ControllerTaskStorage } from "../Storage/Controllers/ControllerTaskStorage"
import { TaskReward } from "../Structures/TaskReward"

export class MainTask {

    static mergeUnitSV(quantity = 1) {
        
    }

    static openMap(level: number) {
        this.completeTask(TaskTypes.OPEN_MAP, level)
    }

    private static completeTask(taskType: string, level: number) {
        this.activateTaskType(taskType)

        let array = ControllerTaskStorage.getArrayByType(taskType)

        array = ControllerTaskStorage.completeTaskWithLevelLessAndThisLevel(array, level)

        array = ControllerTaskStorage.showNearestTasks(array)

        ControllerTaskStorage.saveArrayByType(taskType, array)
    }

    static activateTaskType(taskType: string) {
        //активирует цепочку квестов по типу
        ControllerTaskStorage.addActiveTaskTypes(taskType)
        ControllerTaskStorage.saveArrayByType(taskType, ControllerTaskStorage.showNearestTasks(ControllerTaskStorage.getArrayByType(taskType)))
    }

    static collectReward(taskType: string, level: number) {
        let array: Array<number> = ControllerTaskStorage.getArrayByType(taskType)

        let reward = new TaskReward(TypesItems.GOLD, 500)//получить из стораджа

        //начислить награду

        //

        //отметить награду полученой
        array[level] = 3

        //активировать следующие задачи
        array = ControllerTaskStorage.showNearestTasks(array)

        ControllerTaskStorage.saveArrayByType(taskType, array)
    }

}