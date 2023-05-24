import { _decorator, Component, Node } from 'cc';
import { ControllerBufferStorage } from './ControllerBufferStorage';
import { TypesStorages } from '../../Static/TypesStorages';
import { RadarStorage } from '../RadarStorage';
import { RadarTask } from '../../Structures/RadarTask';
import { RadarReward } from '../../Structures/RadarReward';
const { ccclass, property } = _decorator;

@ccclass('ControllerRadarStorage')
export class ControllerRadarStorage {

    static assignStartingValues() {
        RadarStorage.instance.radarLevel = 1;
        RadarStorage.instance.availableMissions = 30;
        RadarStorage.instance.timeToUpdate = 0;
        RadarStorage.instance.signalQuality = 1;
        this.updateRadarStorage();
    }

    static assigningSaveValues(obj: Object) {
        let json = JSON.parse(JSON.stringify(obj));
        console.log(json)
        RadarStorage.instance.radarLevel = json.radarLevel;
        RadarStorage.instance.availableMissions = json.availableMissions;
        RadarStorage.instance.timeToUpdate = json.timeToUpdate;
        RadarStorage.instance.signalQuality = json.signalQuality;
        RadarStorage.instance.tasks = json.tasks;
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

    static addRadarAvailableMissions(value: number) {
        if (value == 0) return;
        RadarStorage.instance.availableMissions += value;
        this.updateRadarStorage();
    }

    static reduceRadarTime(value: number) {
        if (value == 0) return;
        RadarStorage.instance.timeToUpdate -= value;
        this.updateRadarStorage()
    }
    
    static reduceRadarAvailableMissions(value: number) {
        if (value == 0) return;
        RadarStorage.instance.availableMissions -= value;
        this.updateRadarStorage();
    }

    static equateRadarTime(time: number) {
        RadarStorage.instance.timeToUpdate = time;
        this.updateRadarStorage();
    }

    static equateRadarTasks(type: string, stars: number, time: number, reward: RadarReward[]) {
        RadarStorage.instance.tasks.push(new RadarTask(type, stars, time, reward));
    }

    static updateRadarStorage() {
        let tasks = [];
        for (let i = 0; i < RadarStorage.instance.tasks.length; i++) {
            tasks.push({
                type: RadarStorage.instance.tasks[i].type,
                stars: RadarStorage.instance.tasks[i].stars,
                time: RadarStorage.instance.tasks[i].time,
                rewards: RadarStorage.instance.tasks[i].rewards
            });
        }

        let obj = {
            radarLevel: RadarStorage.instance.radarLevel,
            availableMissions: RadarStorage.instance.availableMissions,
            timeToUpdate: RadarStorage.instance.timeToUpdate,
            signalQuality: RadarStorage.instance.signalQuality,
            tasks: tasks
        };
        ControllerBufferStorage.addItem(TypesStorages.RADAR_STORAGE, obj);
    }
}