import { _decorator, Component, Node } from 'cc';
import { RadarStorageController } from '../Controllers/StorageControllers/RadarStorageController';
import { BattleTask } from '../Structures/BattleTask';
import { RadarStorage } from '../Storage/RadarStorage';
import { MapService } from '../Controllers/NetworkControllers/MapService';
const { ccclass } = _decorator;

@ccclass('RadarLogic')
export class RadarLogic extends Component {

    public static instance: RadarLogic

    private timing = 1


    protected onLoad(): void {
        RadarLogic.instance = this
        this.schedule(this.taskProcessing, this.timing)
    }

    taskProcessing() {
        let tasks = RadarStorage.instance.tasks

        let deleteTasks: BattleTask[] = []
        for (let l = 0; l < tasks.length; l++) {
            // console.log(l + " " + tasks[l].id)
            if (tasks[l].status == 0) {
                this.expiration(tasks[l])
            }
            else if (tasks[l].status == 1) {
                // console.log('1')
                this.battle(tasks[l])
            }
            else if (tasks[l].status == 3) {
                // this.deleteTask(tasks[l])
                deleteTasks.push(tasks[l])
            }
        }
        if (deleteTasks.length > 0) {
            this.deleteTask(deleteTasks)
        }
    }

    expiration(task: BattleTask) {
        if (task.expiration >= 0) {
            task.expiration = task.expiration - this.timing
        } else {
            console.log('время задачи истекло')
            task.status = 3
        }
    }

    battle(task: BattleTask) {
        if (task.battleTime >= 0) {
            task.battleTime = task.battleTime - this.timing
        } else {
            console.log("задача выполнена")
            task.status = 2
        }
    }

    async deleteTask(tasks: BattleTask[]) {
        for (let l = 0; l < tasks.length; l++) {
            for (let l = 0; l < RadarStorage.instance.tasks.length; l++) {

                if (RadarStorage.instance.tasks[l].id = tasks[l].id) {
                    MapService.attackStatus(tasks[l].id, tasks[l].status)
                    RadarStorage.instance.tasks.splice(l, 1)
                    break
                }

            }
        }

        MapService.getEnemy()
    }
}

