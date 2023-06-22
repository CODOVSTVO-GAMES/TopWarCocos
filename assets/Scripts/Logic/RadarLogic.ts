import { _decorator, Component, Node } from 'cc';
import { RadarStorageController } from '../Controllers/StorageControllers/RadarStorageController';
import { BattleTask } from '../Structures/BattleTask';
import { RadarStorage } from '../Storage/RadarStorage';
import { MapService } from '../Controllers/NetworkControllers/MapService';
const { ccclass } = _decorator;

@ccclass('RadarLogic')
export class RadarLogic extends Component {

    public static instance: RadarLogic

    protected onLoad(): void {
        RadarLogic.instance = this
        this.schedule(this.taskProcessing, 1)
    }

    taskProcessing() {
        let tasks = RadarStorage.instance.tasks
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
                console.log('появилась выполненая задача')
                this.deleteFromServer(tasks[l])
            }
        }
    }

    expiration(task: BattleTask) {
        if (task.expiration >= 0) {
            task.expiration = task.expiration - 1
        } else {
            console.log('время задачи истекло')
            task.status = 3
        }
    }

    battle(task: BattleTask) {
        if (task.battleTime >= 0) {
            task.battleTime = task.battleTime - 1
        } else {
            console.log("задача выполнена")
            task.status = 2
        }
    }

    deleteFromServer(task: BattleTask) {
        MapService.attackWin(task.id)
    }

}

