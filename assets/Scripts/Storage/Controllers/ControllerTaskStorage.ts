import { TaskTypes } from "../../Static/TaskTypes";
import { TaskStorage } from "../TaskStorage";

/**
 * 0-закрыт
 * 1-показан
 * 2-заберите награду
 * 3-получен
 */

export class ControllerTaskStorage {

    static setActiveTaskTypes(array: Array<string>) {
        TaskStorage.instance.activeTaskTypes = array;
    }

    static addActiveTaskTypes(taskType: string) {
        for (let l = 0; l < TaskStorage.instance.activeTaskTypes.length; l++) {
            if (TaskStorage.instance.activeTaskTypes[l] == taskType) {
                return;
            }
        }
        TaskStorage.instance.activeTaskTypes.push(taskType);
    }

    static getActiveTaskTypes() {
        return TaskStorage.instance.activeTaskTypes;
    }

    static setMapTasks(array: Array<number>) {
        TaskStorage.instance.mapTasks = array;
    }

    static getMapTasks() {
        return TaskStorage.instance.mapTasks;
    }

    static getArrayByType(taskType: string): Array<number> {
        let array;
        if (taskType == TaskTypes.OPEN_MAP) {
            array = TaskStorage.instance.mapTasks;
        } else {
            throw "не существует такого типа квестов";
        }
        return array;
    }

    static showNearestTasks(array: Array<number>): Array<number> {
        //открывает 2 ближайшие задачи
        let bufferNumber = 0;
        for (let l = 0; l <= array.length; l++) {
            if (array[l] == 0 || array[l] == 1) {
                array[l] = 1;
                bufferNumber++;
            }
            if (bufferNumber >= 2) { break; }
        }
        return array;
    }

    static completeTaskWithLevelLessAndThisLevel(array: Array<number>, level: number): Array<number> {
        //таcк этого уровня и меньше меняют статус на получите награду
        for (let l = 0; l < array.length; l++) {
            if (l <= level) {
                if (array[l] == 0 || array[l] == 1) {
                    array[l] = 2;
                }
            }
        }
        return array;
    }

    static saveArrayByType(taskType: string, array: Array<number>) {
        if (taskType == TaskTypes.OPEN_MAP) {
            this.setMapTasks(array);
        } else {
            throw "не существует такого типа квестов";
        }
    }
}