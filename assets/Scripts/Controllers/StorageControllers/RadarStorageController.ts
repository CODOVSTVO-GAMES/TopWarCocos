import { _decorator, Component, Node } from 'cc';
import { BufferStorageController } from './BufferStorageController';
import { TypesStorages } from '../../Static/TypesStorages';
import { RadarStorage } from '../../Storage/RadarStorage';
import { RadarTask } from '../../Structures/RadarTask';
import { RadarReward } from '../../Structures/RadarReward';
import { ConfigStorageController } from './ConfigStorageController';
import { ModalRadarInterface } from '../../UI/Modals/ModalRadar/ModalRadarInterface';
import { ModalRadarLogic } from '../../UI/Modals/ModalRadar/ModalRadarLogic';
import { MessageAnimation } from '../../Animations/Message/MessageAnimation';
import { HomeMapStorageController } from './HomeMapStorageController';
import { TypesObjects } from '../../Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('RadarStorageController')
export class RadarStorageController {

    private static messageAnimation: MessageAnimation;

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
        RadarStorage.instance.tasks = json.tasks;
        RadarStorage.instance.radarExperience = json.radarExperience;
    }

    static getRadarTasks(): RadarTask[] {
        return RadarStorage.instance.tasks;
    }

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

    static addRadarTasks(id: number, type: string, stars: number, time: number, reward: RadarReward[]) {
        RadarStorage.instance.tasks.push(new RadarTask(id, type, stars, time, 0, reward));
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
        ModalRadarInterface.instance.updateInterface();
        this.saveStorage();
    }

    static reduceRadarTime(value: number) {
        if (value == 0) return;
        RadarStorage.instance.timeToUpdate -= value;
        this.saveStorage();
    }

    static reduceRadarTask(task: RadarTask) {
        if (task == null) return;
        for (let i = 0; i < RadarStorage.instance.tasks.length; i++) {
            if (RadarStorage.instance.tasks[i] == task) {
                RadarStorage.instance.tasks.splice(i, 1);
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
        for (let i = 0; i < RadarStorage.instance.tasks.length; i++) {
            if (RadarStorage.instance.tasks[i].status < 2) {
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
        for (let i = 0; i < RadarStorage.instance.tasks.length; i++) {
            tasks.push({
                type: RadarStorage.instance.tasks[i].type,
                stars: RadarStorage.instance.tasks[i].stars,
                time: RadarStorage.instance.tasks[i].time,
                status: RadarStorage.instance.tasks[i].status,
                rewards: RadarStorage.instance.tasks[i].rewards
            });
        }
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
}