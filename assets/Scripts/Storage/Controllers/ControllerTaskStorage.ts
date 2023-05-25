import { TaskTypes } from "../../Static/TaskTypes";
import { ActiveTask } from "../../Structures/ActiveTask";
import { MainTask } from "../../tasks/MainTasks";
import { TaskStorage } from "../TaskStorage";

export class ControllerTaskStorage {

    static updateActiveTask(task: ActiveTask) {
        let ifThereIs = false

        for (let l = 0; l < TaskStorage.instance.activeTasks.length; l++) {
            if (TaskStorage.instance.activeTasks[l].level < task.level && TaskStorage.instance.activeTasks[l].type == task.type && task.isDone == true) {//если задача меньше левелом и пришедшая задача выполнена - ставим статус тру
                TaskStorage.instance.activeTasks[l].isDone = true
                continue
            }

            if (TaskStorage.instance.activeTasks[l].level == task.level && TaskStorage.instance.activeTasks[l].type == task.type) {//если задача есть и она пришла выполненой - ставим ей тру
                if (task.isDone == true) {
                    TaskStorage.instance.activeTasks[l].isDone = true
                }
                ifThereIs = true
            }
        }

        if (!ifThereIs) {//если задачи нет добавляем присланую задачу
            TaskStorage.instance.activeTasks.push(task)
        }
    }

    static collectTask(task: ActiveTask) {
        for (let l = 0; l < TaskStorage.instance.activeTasks.length; l++) {
            if (TaskStorage.instance.activeTasks[l].level == task.level && TaskStorage.instance.activeTasks[l].type == task.type) {
                console.log('начислить награду ' + task.reward)
                TaskStorage.instance.activeTasks.splice(l, 1) //должно удалить только задачу с таким номером. Не тестировал
                break
            }
        }
        if (task.type == TaskTypes.OPEN_MAP) {//костыль. Перепишется при написании нескольких типов квестов
            MainTask.openMap(task.level + 1)
        }

    }

}