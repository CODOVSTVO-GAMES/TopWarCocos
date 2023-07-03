import { _decorator, Component, Node } from 'cc';
import { BattleTask } from '../Structures/BattleTask';
import { MapService } from '../Plugins/MapService';
import { RadarModel } from '../Model/RadarModel';
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
        let tasks = RadarModel.instance.tasks

        let deleteTasks: BattleTask[] = []
        for (let l = 0; l < tasks.length; l++) {
            if (tasks[l].status == 0) {
                this.expiration(tasks[l])
            }
            else if (tasks[l].status == 1) {
                this.battle(tasks[l])
            }
            else if (tasks[l].status == 3) {
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
            for (let l = 0; l < RadarModel.instance.tasks.length; l++) {

                if (RadarModel.instance.tasks[l].id = tasks[l].id) {
                    MapService.attackStatus(tasks[l].id, tasks[l].status)
                    RadarModel.instance.tasks.splice(l, 1)
                    break
                }

            }
        }
        MapService.getEnemy()
    }
}