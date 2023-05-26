import { TaskTypes } from "../../Static/TaskTypes";
import { TypesItems } from "../../Static/TypesItems";
import { TaskReward } from "../../Structures/TaskReward";
import { TaskStorage } from "../TaskStorage";

/**
 * 0-закрыт
 * 1-показан
 * 2-заберите награду
 * 3-получен
 */

export class ControllerTaskStorage {

    static completeTask(taskType: string, level: number) {
        this.activateTaskType(taskType)

        let array: Array<number> = this.getArrayByType(taskType)

        array = this.completeTaskWithLevelLessAndThisLevel(array, level)

        array = this.showNearestTasks(array)

        this.saveArrayByType(taskType, array)
    }

    static activateTaskType(taskType: string) {
        //активирует цепочку квестов по типу
        for (let l = 0; l < TaskStorage.instance.activeTaskTypes.length; l++) {
            if (TaskStorage.instance.activeTaskTypes[l] == taskType) {
                return
            }
        }
        TaskStorage.instance.activeTaskTypes.push(taskType)
        this.showNearestTasks(this.getArrayByType(taskType))
    }

    static collectReward(taskType: string, level: number) {
        let array: Array<number> = this.getArrayByType(taskType)

        let reward = new TaskReward(TypesItems.GOLD, 500)//получить из стораджа

        //начислить награду

        //

        //отметить награду полученой
        array[level] = 3

        //активировать следующие задачи
        array = this.showNearestTasks(array)

        this.saveArrayByType(taskType, array)
    }

    private static getArrayByType(taskType: string): Array<number> {
        let array
        if (taskType == TaskTypes.OPEN_MAP) {
            array = TaskStorage.instance.mapTasks
        } else {
            throw "не существует такого типа квестов"
        }
        return array
    }

    private static saveArrayByType(taskType: string, array: Array<number>) {
        if (taskType == TaskTypes.OPEN_MAP) {
            TaskStorage.instance.mapTasks = array
        } else {
            throw "не существует такого типа квестов"
        }
    }

    private static completeTaskWithLevelLessAndThisLevel(array: Array<number>, level: number): Array<number> {
        //таcк этого уровня и меньше меняют статус на получите награду
        for (let l = 0; l < array.length; l++) {
            if (l <= level) {
                if (array[l] == 0 || array[l] == 1) {
                    array[l] = 2
                }
            }
        }
        return array
    }

    private static showNearestTasks(array: Array<number>): Array<number> {
        //открывает 2 ближайшие задачи
        let bufferNumber = 0
        for (let l = 0; l <= array.length; l++) {
            if (array[l] == 0 || array[l] == 1) {
                array[l] = 1
                bufferNumber++
            }
            if (bufferNumber >= 2) { break }
        }
        return array
    }

}