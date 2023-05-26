import { _decorator, Component, Node } from 'cc';
import { ControllerBufferStorage } from './ControllerBufferStorage';
import { TypesStorages } from '../../Static/TypesStorages';
import { RadarStorage } from '../RadarStorage';
import { RadarTask } from '../../Structures/RadarTask';
import { RadarReward } from '../../Structures/RadarReward';
import { ControllerConfigStorage } from './ControllerConfigStorage';
import { ModalRadarInterface } from '../../UI/Modals/ModalRadar/ModalRadarInterface';
const { ccclass, property } = _decorator;

@ccclass('ControllerRadarStorage')
export class ControllerRadarStorage {

    static assignStartingValues() {
        RadarStorage.instance.radarLevel = 1;
        let config = ControllerConfigStorage.getRadarConfigByLevel(RadarStorage.instance.radarLevel);
        RadarStorage.instance.availableMissions = 30;
        RadarStorage.instance.timeToUpdate = config.time;
        RadarStorage.instance.signalQuality = 1;
        RadarStorage.instance.radarExperience = 0;
        this.updateRadarStorage();
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
        this.updateRadarStorage();
    }

    static addRadarSignalQuantity(value: number) {
        if (value == 0) return;
        RadarStorage.instance.signalQuality += value;
        this.updateRadarStorage();
    }

    static addRadarExperience(value: number) {
        if (value == 0) return;
        RadarStorage.instance.radarExperience += value;
        let targetExperience = ControllerConfigStorage.getRadarProgressNumberByLevel(this.getRadarLevel());
        while (this.getRadarExperience() > targetExperience) {
            RadarStorage.instance.radarLevel++;
            RadarStorage.instance.radarExperience -= targetExperience;
            targetExperience = ControllerConfigStorage.getRadarProgressNumberByLevel(this.getRadarLevel());
        }
        ModalRadarInterface.instance.updateInterface();
        this.updateRadarStorage();
    }

    static reduceRadarTime(value: number) {
        if (value == 0) return;
        RadarStorage.instance.timeToUpdate -= value;
        this.updateRadarStorage();
    }

    static reduceRadarTask(task: RadarTask) {
        if (task == null) return;
        for (let i = 0; i < RadarStorage.instance.tasks.length; i++) {
            if (RadarStorage.instance.tasks[i] == task) {
                RadarStorage.instance.tasks.splice(i, 1);
            }
        }
        this.updateRadarStorage();
    }

    static reduceRadarAvailableMissions(value: number) {
        if (value == 0) return;
        RadarStorage.instance.availableMissions -= value;
        this.updateRadarStorage();
    }

    static equateRadarTime(value: number) {
        RadarStorage.instance.timeToUpdate = value;
        this.updateRadarStorage();
    }

    static equateRadarSignalQuantity(value: number) {
        RadarStorage.instance.signalQuality = value;
        this.updateRadarStorage();
    }

    static equateRadarAvailableMissions(value: number) {
        RadarStorage.instance.availableMissions = value;
        this.updateRadarStorage();
    }

    static equateRadarTasks(type: string, stars: number, time: number, reward: RadarReward[]) {
        RadarStorage.instance.tasks.push(new RadarTask(type, stars, time, 0, reward));
    }

    static equateRadarExperience(value: number) {
        RadarStorage.instance.radarExperience = value;
        this.updateRadarStorage();
    }

    static updateRadarStorage() {
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
        ControllerBufferStorage.addItem(TypesStorages.RADAR_STORAGE, obj);
    }
}