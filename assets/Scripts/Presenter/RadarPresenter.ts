import { Vec3 } from "cc";
import { MessageAnimation } from "../Animations/Message/MessageAnimation";
import { MapService } from "../Plugins/MapService";
import { ConfigPresenter } from "./ConfigPresenter";
import { UserPresenter } from "./UserPresenter";
import { RadarModel } from "../Model/RadarModel";
import { TypesObjects } from "../Static/TypesObjects";
import { BattleTask } from "../Structures/BattleTask";
import { QuantityItem } from "../Structures/QuantityItem";
import { HomeMapPresenter } from "./HomeMapPresenter";
import { GameModel } from "../Model/GameModel";
import { TypesItems } from "../Static/TypesItems";

export class RadarPresenter {

    private static messageAnimation: MessageAnimation;

    static getNewTasks() {
        MapService.getEnemy()
    }

    static taskResponcer(arr: object[]) {
        console.log('пришло ')
        console.log(arr)
        for (let l = 0; l < arr.length; l++) {
            if (arr[l]['type'] == 'taskPersonal' || arr[l]['type'] == 'taskSalvation') {
                if (arr[l]['owner'] == UserPresenter.getAccountId()) {
                    if (RadarPresenter.isTaskExists(arr[l]['id'])) {
                        console.log('повторка')
                        continue
                    }

                    const id = arr[l]['id']
                    const type = arr[l]['type']
                    const stars = arr[l]['stars']
                    const battleTime = arr[l]['battleTime']
                    let expiration = arr[l]['expiration']
                    expiration = expiration - UserPresenter.getServerTime()
                    RadarPresenter.addRadarTasks(id, type, stars, expiration, this.randomReward(stars), battleTime)
                }
            }
        }
    }

    static addRadarTasks(id: number, type: string, stars: number, time: number, reward: QuantityItem[], battleTime: number) {
        RadarModel.instance.tasks.push(new BattleTask(id, type, stars, Math.floor(time / 1000), 0, reward, battleTime, this.generateTaskCoords()));
        // this.updateRadarAnimation();
    }

    static activateTask(task: BattleTask) {
        task.status = 1
        console.log('статус 1')
        MapService.attackStatus(task.id, task.status)
    }

    static taskProcessing() {
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

    static expiration(task: BattleTask) {
        if (task.expiration >= 0) {
            task.expiration = task.expiration - 1
        } else {
            console.log('время задачи истекло')
            task.status = 3
        }
    }

    static battle(task: BattleTask) {
        if (task.battleTime >= 0) {
            task.battleTime = task.battleTime - 1
        } else {
            console.log("задача выполнена")
            task.status = 2
        }
    }

    static async deleteTask(tasks: BattleTask[]) {
        for (let i = 0; i < tasks.length; i++) {
            for (let j = 0; j < RadarModel.instance.tasks.length; j++) {
                if (RadarModel.instance.tasks[j].id = tasks[i].id) {
                    MapService.attackStatus(tasks[i].id, tasks[i].status)
                    RadarModel.instance.tasks.splice(j, 1)
                    break
                }
            }
        }
        MapService.getEnemy()
    }


























    static assignStartingValues() {
        RadarModel.instance.radarLevel = 1;
        let config = ConfigPresenter.getRadarConfigByLevel(RadarModel.instance.radarLevel);
        RadarModel.instance.availableMissions = 30;
        RadarModel.instance.timeToUpdate = config.time;
        RadarModel.instance.signalQuality = 1;
        RadarModel.instance.radarExperience = 0;
    }

    static assigningSaveValues(obj: Object) {
        let json = JSON.parse(JSON.stringify(obj));
        RadarModel.instance.radarLevel = json.radarLevel;
        RadarModel.instance.availableMissions = json.availableMissions;
        RadarModel.instance.timeToUpdate = json.timeToUpdate;
        RadarModel.instance.signalQuality = json.signalQuality;
        // RadarModel.instance.battleTasks = json.tasks;
        RadarModel.instance.radarExperience = json.radarExperience;
    }

    // static getRadarTasks(): BattleTask[] {
    //     return RadarModel.instance.battleTasks;
    // }

    static isTaskExists(id: number) {
        for (let l = 0; l < RadarModel.instance.tasks.length; l++) {
            if (RadarModel.instance.tasks[l].id == id) {
                return true
            }
        }
        return false
    }

    static getRadarLevel(): number {
        return RadarModel.instance.radarLevel;
    }

    static getRadarAvailableMissions(): number {
        return RadarModel.instance.availableMissions;
    }

    static getRadarTime(): number {
        return RadarModel.instance.timeToUpdate;
    }

    static getRadarSignal(): number {
        return RadarModel.instance.signalQuality;
    }

    static getRadarExperience(): number {
        return RadarModel.instance.radarExperience;
    }

    static addRadarAvailableMissions(value: number) {
        if (value == 0) return;
        RadarModel.instance.availableMissions += value;
        // this.updateRadarAnimation();
    }

    static addRadarSignalQuantity(value: number) {
        if (value == 0) return;
        RadarModel.instance.signalQuality += value;
    }

    static addRadarExperience(value: number) {
        if (value == 0) return;
        RadarModel.instance.radarExperience += value;
        let targetExperience = ConfigPresenter.getRadarProgressNumberByLevel(this.getRadarLevel());
        while (this.getRadarExperience() > targetExperience) {
            RadarModel.instance.radarLevel++;
            RadarModel.instance.radarExperience -= targetExperience;
            targetExperience = ConfigPresenter.getRadarProgressNumberByLevel(this.getRadarLevel());
            // ModalRadarLogic.instance.calculationRadar();
        }
        // RadarRender.instance.updateInterface()
    }

    static reduceRadarTime(value: number) {
        if (value == 0) return;
        RadarModel.instance.timeToUpdate -= value;
    }

    // static reduceRadarTask(task: BattleTask) {
    //     if (task == null) return;
    //     for (let i = 0; i < RadarModel.instance.battleTasks.length; i++) {
    //         if (RadarModel.instance.battleTasks[i] == task) {
    //             RadarModel.instance.battleTasks.splice(i, 1);
    //         }
    //     }
    //     this.updateRadarAnimation();
    // }

    static reduceRadarAvailableMissions(value: number) {
        if (value == 0) return;
        RadarModel.instance.availableMissions -= value;
    }

    static equateRadarTime(value: number) {
        RadarModel.instance.timeToUpdate = value;
    }

    static equateRadarSignalQuantity(value: number) {
        RadarModel.instance.signalQuality = value;
    }

    static equateRadarAvailableMissions(value: number) {
        RadarModel.instance.availableMissions = value;
    }

    static equateRadarExperience(value: number) {
        RadarModel.instance.radarExperience = value;
    }

    // static updateRadarAnimation() {
    //     let status = 0;
    //     for (let i = 0; i < RadarModel.instance.battleTasks.length; i++) {
    //         if (RadarModel.instance.battleTasks[i].status < 2) {
    //             if (status < 1) {
    //                 status = 1;
    //             }
    //         }
    //         else {
    //             status = 2;
    //         }
    //     }
    //     this.getMessageAnimation();
    //     if (status == 1) {
    //         if (this.messageAnimation != null) {
    //             this.messageAnimation.startAnimation();
    //         }
    //     }
    //     else {
    //         if (this.messageAnimation != null) {
    //             this.messageAnimation.stopAnimation();
    //         }
    //     }
    // }

    static getMessageAnimation() {
        try {
            if (this.messageAnimation == null) {
                this.messageAnimation = HomeMapPresenter.getObjectParametersByType(TypesObjects.RADAR).getMessageAnimation();
            }
        } catch (e) {
            console.log('ошибка ' + e)
        }

    }

    private static generateTaskCoords(): Vec3 {
        let x = Math.floor(Math.random() * 200);
        let y = Math.floor(Math.random() * 200);
        if (Math.floor(Math.random() * 2) == 1) {
            x *= -1;
        }
        if (Math.floor(Math.random() * 2) == 1) {
            y *= -1;
        }

        return new Vec3(x, y, 0)
    }

    static randomReward(stars: number): QuantityItem[] {
        let rewards = [];
        let rewardTypes = this.radarRewardsTypes[Math.floor(Math.random() * this.radarRewardsTypes.length)];
        let level = GameModel.instance.level

        let quantity = ConfigPresenter.getRadarBasicRateByLevel(level) * (1 + (0.25 * (stars - 1)));
        for (let i = 0; i < rewardTypes.length; i++) {
            rewards.push(new QuantityItem(rewardTypes[i], quantity));
        }

        let quantityExp = ConfigPresenter.getExpirienceRadarByLevel(level) * (1 + (0.25 * (stars - 1)));
        rewards.push(new QuantityItem(TypesItems.EXPERIENCE, quantityExp));
        return rewards;
    }

    public static radarRewardsTypes: string[][] = [
        [TypesItems.PLAN_MERGE_TROOP_OVERLAND, TypesItems.PLAN_BUILD_BARRACK_OVERLAND, TypesItems.PLAN_MERGE_BARRACK_OVERLAND],
        [TypesItems.PLAN_COMMAND_POST, TypesItems.PLAN_MERGE_GOLD_MINE, TypesItems.PLAN_BUILD_GOLD_MINE],
        [TypesItems.PLAN_MERGE_GOLD_MINE, TypesItems.PLAN_BUILD_GOLD_MINE, TypesItems.GOLD_CHEST],
        [TypesItems.PLAN_MERGE_TROOP_MARINE, TypesItems.PLAN_BUILD_BARRACK_MARINE, TypesItems.PLAN_MERGE_BARRACK_MARINE],
        [TypesItems.PLAN_MERGE_TROOP_AIR, TypesItems.PLAN_BUILD_BARRACK_AIR, TypesItems.PLAN_MERGE_BARRACK_AIR]];


}