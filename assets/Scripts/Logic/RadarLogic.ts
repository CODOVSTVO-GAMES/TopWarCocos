import { _decorator, Component, Node } from 'cc';
import { RadarStorageController } from '../Controllers/StorageControllers/RadarStorageController';
import { BattleTask } from '../Structures/BattleTask';
const { ccclass } = _decorator;

@ccclass('RadarLogic')
export class RadarLogic extends Component {

    public static instance: RadarLogic

    protected onLoad(): void {
        RadarLogic.instance = this
        this.schedule(this.taskProcessing, 1)
    }

    taskProcessing() {
        let tasks = RadarStorageController.getTasks()
        // console.log(tasks)
        for (let l = 0; l < tasks.length; l++) {
            if (tasks[l].status == 0) {
                this.expiration(tasks[l])
            }
            else if (tasks[l].status == 1) {
                console.log('1')
                this.battle(tasks[l])
            }
        }
    }

    expiration(task: BattleTask) {
        task.expiration = task.expiration - 1
        if (task.expiration <= 0) {
            console.log('время задачи истекло')
        }
        RadarStorageController.saveTask(task)
    }

    battle(task: BattleTask) {
        task.battleTime = task.battleTime - 1
        if (task.battleTime <= 0) {
            console.log("задача выполнена")
        }
        RadarStorageController.saveTask(task)
    }

}

