import { _decorator, Component, Node, Vec2, Vec3 } from 'cc';
import { BufferStorageController } from './BufferStorageController';
import { TypesStorages } from '../../Static/TypesStorages';
import { RadarStorage } from '../../Storage/RadarStorage';
import { BattleTask } from '../../Structures/BattleTask';
import { QuantityItem } from '../../Structures/QuantityItem';
import { ConfigStorageController } from './ConfigStorageController';
import { ModalRadarLogic } from '../../UI/Modals/ModalRadar/ModalRadarLogic';
import { MessageAnimation } from '../../Animations/Message/MessageAnimation';
import { HomeMapStorageController } from './HomeMapStorageController';
import { TypesObjects } from '../../Static/TypesObjects';
import { MapService } from '../NetworkControllers/MapService';
import { UserStorageController } from './UserStorageController';
import { TypesItems } from '../../Static/TypesItems';
import { GameStorageController } from './GameStorageController';
import { RadarRender } from '../../Logic/RadarRender';
import { RadarLogic } from '../../Logic/RadarLogic';
const { ccclass, property } = _decorator;

@ccclass('RadarStorageController')
export class RadarStorageController {

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
                    if (RadarStorageController.isTaskExists(arr[l]['id'])) {
                        console.log('повторка')
                        continue
                    }

                    const id = arr[l]['id']
                    const type = arr[l]['type']
                    const stars = arr[l]['stars']
                    const battleTime = arr[l]['battleTime']
                    let expiration = arr[l]['expiration']
                    expiration = expiration - UserStorageController.getServerTime()
                    RadarStorageController.addRadarTasks(id, type, stars, expiration, this.randomReward(stars), battleTime)
                }
            }
        }
        RadarRender.instance.updateInterface()
    }

    static addRadarTasks(id: number, type: string, stars: number, time: number, reward: QuantityItem[], battleTime: number) {
        RadarStorage.instance.tasks.push(new BattleTask(id, type, stars, Math.floor(time / 1000), 0, reward, battleTime, this.generateTaskCoords()));
        this.updateRadarAnimation();
    }

    static activateTask(task: BattleTask) {
        task.status = 1
        console.log('статус 1')
        MapService.attackStatus(task.id, task.status)
    }



























    static assignStartingValues() {
        RadarStorage.instance.radarLevel = 1;
        let config = ConfigStorageController.getRadarConfigByLevel(RadarStorage.instance.radarLevel);
        RadarStorage.instance.availableMissions = 30;
        RadarStorage.instance.timeToUpdate = config.time;
        RadarStorage.instance.signalQuality = 1;
        RadarStorage.instance.radarExperience = 0;
        this.saveStorage();
    }

    static assigningSaveValues(obj: Object) {
        let json = JSON.parse(JSON.stringify(obj));
        RadarStorage.instance.radarLevel = json.radarLevel;
        RadarStorage.instance.availableMissions = json.availableMissions;
        RadarStorage.instance.timeToUpdate = json.timeToUpdate;
        RadarStorage.instance.signalQuality = json.signalQuality;
        RadarStorage.instance.battleTasks = json.tasks;
        RadarStorage.instance.radarExperience = json.radarExperience;
    }

    // static getRadarTasks(): BattleTask[] {
    //     return RadarStorage.instance.battleTasks;
    // }

    static isTaskExists(id: number) {
        for (let l = 0; l < RadarStorage.instance.tasks.length; l++) {
            if (RadarStorage.instance.tasks[l].id == id) {
                return true
            }
        }
        return false
    }

    static getRadarLevel(): number {
        return RadarStorage.instance.radarLevel;
    }

    static getRadarAvailableMissions(): number {
        return RadarStorage.instance.availableMissions;
    }

    static getRadarTime(): number {
        return RadarStorage.instance.timeToUpdate;
    }

    static getRadarSignal(): number {
        return RadarStorage.instance.signalQuality;
    }

    static getRadarExperience(): number {
        return RadarStorage.instance.radarExperience;
    }

    static addRadarAvailableMissions(value: number) {
        if (value == 0) return;
        RadarStorage.instance.availableMissions += value;
        this.saveStorage();
        this.updateRadarAnimation();
    }

    static addRadarSignalQuantity(value: number) {
        if (value == 0) return;
        RadarStorage.instance.signalQuality += value;
        this.saveStorage();
    }

    static addRadarExperience(value: number) {
        if (value == 0) return;
        RadarStorage.instance.radarExperience += value;
        let targetExperience = ConfigStorageController.getRadarProgressNumberByLevel(this.getRadarLevel());
        while (this.getRadarExperience() > targetExperience) {
            RadarStorage.instance.radarLevel++;
            RadarStorage.instance.radarExperience -= targetExperience;
            targetExperience = ConfigStorageController.getRadarProgressNumberByLevel(this.getRadarLevel());
            ModalRadarLogic.instance.calculationRadar();
        }
        RadarRender.instance.updateInterface()

        this.saveStorage();
    }

    static reduceRadarTime(value: number) {
        if (value == 0) return;
        RadarStorage.instance.timeToUpdate -= value;
        this.saveStorage();
    }

    static reduceRadarTask(task: BattleTask) {
        if (task == null) return;
        for (let i = 0; i < RadarStorage.instance.battleTasks.length; i++) {
            if (RadarStorage.instance.battleTasks[i] == task) {
                RadarStorage.instance.battleTasks.splice(i, 1);
            }
        }
        this.saveStorage();
        this.updateRadarAnimation();
    }

    static reduceRadarAvailableMissions(value: number) {
        if (value == 0) return;
        RadarStorage.instance.availableMissions -= value;
        this.saveStorage();
    }

    static equateRadarTime(value: number) {
        RadarStorage.instance.timeToUpdate = value;
        this.saveStorage();
    }

    static equateRadarSignalQuantity(value: number) {
        RadarStorage.instance.signalQuality = value;
        this.saveStorage();
    }

    static equateRadarAvailableMissions(value: number) {
        RadarStorage.instance.availableMissions = value;
        this.saveStorage();
    }

    static equateRadarExperience(value: number) {
        RadarStorage.instance.radarExperience = value;
        this.saveStorage();
    }

    static updateRadarAnimation() {
        let status = 0;
        for (let i = 0; i < RadarStorage.instance.battleTasks.length; i++) {
            if (RadarStorage.instance.battleTasks[i].status < 2) {
                if (status < 1) {
                    status = 1;
                }
            }
            else {
                status = 2;
            }
        }
        this.getMessageAnimation();
        if (status == 1) {
            if (this.messageAnimation != null) {
                this.messageAnimation.startAnimation();
            }
        }
        else {
            if (this.messageAnimation != null) {
                this.messageAnimation.stopAnimation();
            }
        }
    }

    static getMessageAnimation() {
        try {
            if (this.messageAnimation == null) {
                this.messageAnimation = HomeMapStorageController.getObjectParametersByType(TypesObjects.RADAR).getMessageAnimation();
            }
        } catch (e) {
            console.log('ошибка ' + e)
        }

    }

    static saveStorage() {
        let tasks = [];
        // for (let i = 0; i < RadarStorage.instance.tasks.length; i++) {
        //     tasks.push({
        //         type: RadarStorage.instance.tasks[i].type,
        //         stars: RadarStorage.instance.tasks[i].stars,
        //         time: RadarStorage.instance.tasks[i].time,
        //         status: RadarStorage.instance.tasks[i].status,
        //         rewards: RadarStorage.instance.tasks[i].rewards
        //     });
        // }
        let obj = {
            radarLevel: RadarStorage.instance.radarLevel,
            availableMissions: RadarStorage.instance.availableMissions,
            timeToUpdate: RadarStorage.instance.timeToUpdate,
            signalQuality: RadarStorage.instance.signalQuality,
            radarExperience: RadarStorage.instance.radarExperience,
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
        let level = GameStorageController.getLevel();

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