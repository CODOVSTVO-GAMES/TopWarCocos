import { Vec3 } from "cc";
import { MessageAnimation } from "../Animations/Message/MessageAnimation";
import { MapService } from "../Controllers/NetworkControllers/MapService";
import { BufferStorageController } from "../Controllers/StorageControllers/BufferStorageController";
import { ConfigStorageController } from "../Controllers/StorageControllers/ConfigStorageController";
import { RadarModelController } from "../Controllers/StorageControllers/RadarStorageController";
import { UserStorageController } from "../Controllers/StorageControllers/UserStorageController";
import { RadarModel } from "../Model/RadarModel";
import { TypesObjects } from "../Static/TypesObjects";
import { TypesStorages } from "../Static/TypesStorages";
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
                if (arr[l]['owner'] == UserStorageController.getAccountId()) {
                    if (RadarModelController.isTaskExists(arr[l]['id'])) {
                        console.log('повторка')
                        continue
                    }

                    const id = arr[l]['id']
                    const type = arr[l]['type']
                    const stars = arr[l]['stars']
                    const battleTime = arr[l]['battleTime']
                    let expiration = arr[l]['expiration']
                    expiration = expiration - UserStorageController.getServerTime()
                    RadarModelController.addRadarTasks(id, type, stars, expiration, this.randomReward(stars), battleTime)
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



























    static assignStartingValues() {
        RadarModel.instance.radarLevel = 1;
        let config = ConfigStorageController.getRadarConfigByLevel(RadarModel.instance.radarLevel);
        RadarModel.instance.availableMissions = 30;
        RadarModel.instance.timeToUpdate = config.time;
        RadarModel.instance.signalQuality = 1;
        RadarModel.instance.radarExperience = 0;
        this.saveStorage();
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
        this.saveStorage();
        // this.updateRadarAnimation();
    }

    static addRadarSignalQuantity(value: number) {
        if (value == 0) return;
        RadarModel.instance.signalQuality += value;
        this.saveStorage();
    }

    static addRadarExperience(value: number) {
        if (value == 0) return;
        RadarModel.instance.radarExperience += value;
        let targetExperience = ConfigStorageController.getRadarProgressNumberByLevel(this.getRadarLevel());
        while (this.getRadarExperience() > targetExperience) {
            RadarModel.instance.radarLevel++;
            RadarModel.instance.radarExperience -= targetExperience;
            targetExperience = ConfigStorageController.getRadarProgressNumberByLevel(this.getRadarLevel());
            // ModalRadarLogic.instance.calculationRadar();
        }
        // RadarRender.instance.updateInterface()

        this.saveStorage();
    }

    static reduceRadarTime(value: number) {
        if (value == 0) return;
        RadarModel.instance.timeToUpdate -= value;
        this.saveStorage();
    }

    // static reduceRadarTask(task: BattleTask) {
    //     if (task == null) return;
    //     for (let i = 0; i < RadarModel.instance.battleTasks.length; i++) {
    //         if (RadarModel.instance.battleTasks[i] == task) {
    //             RadarModel.instance.battleTasks.splice(i, 1);
    //         }
    //     }
    //     this.saveStorage();
    //     this.updateRadarAnimation();
    // }

    static reduceRadarAvailableMissions(value: number) {
        if (value == 0) return;
        RadarModel.instance.availableMissions -= value;
        this.saveStorage();
    }

    static equateRadarTime(value: number) {
        RadarModel.instance.timeToUpdate = value;
        this.saveStorage();
    }

    static equateRadarSignalQuantity(value: number) {
        RadarModel.instance.signalQuality = value;
        this.saveStorage();
    }

    static equateRadarAvailableMissions(value: number) {
        RadarModel.instance.availableMissions = value;
        this.saveStorage();
    }

    static equateRadarExperience(value: number) {
        RadarModel.instance.radarExperience = value;
        this.saveStorage();
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

    static saveStorage() {
        let tasks = [];
        // for (let i = 0; i < RadarModel.instance.tasks.length; i++) {
        //     tasks.push({
        //         type: RadarModel.instance.tasks[i].type,
        //         stars: RadarModel.instance.tasks[i].stars,
        //         time: RadarModel.instance.tasks[i].time,
        //         status: RadarModel.instance.tasks[i].status,
        //         rewards: RadarModel.instance.tasks[i].rewards
        //     });
        // }
        let obj = {
            radarLevel: RadarModel.instance.radarLevel,
            availableMissions: RadarModel.instance.availableMissions,
            timeToUpdate: RadarModel.instance.timeToUpdate,
            signalQuality: RadarModel.instance.signalQuality,
            radarExperience: RadarModel.instance.radarExperience,
            tasks: tasks
        };
        BufferStorageController.addItem(TypesStorages.RADAR_STORAGE, obj);
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

        let quantity = ConfigStorageController.getRadarBasicRateByLevel(level) * (1 + (0.25 * (stars - 1)));
        for (let i = 0; i < rewardTypes.length; i++) {
            rewards.push(new QuantityItem(rewardTypes[i], quantity));
        }

        let quantityExp = ConfigStorageController.getExpirienceRadarByLevel(level) * (1 + (0.25 * (stars - 1)));
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