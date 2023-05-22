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
        RadarStorage.instance.timeToUpdate = 11111;
        RadarStorage.instance.signalQuality = 1;
        this.updateRadarStorage();
    }

    static assigningSaveValues(obj: Object) {
        let json = JSON.parse(JSON.stringify(obj));
        RadarStorage.instance.radarLevel = json.radarLevel;
        RadarStorage.instance.availableMissions = json.availableMissions;
        RadarStorage.instance.timeToUpdate = json.timeToUpdate;
        RadarStorage.instance.signalQuality = json.signalQuality;

        // for (let i = 0; i < )
        // RadarStorage.instance.tasks = json.tasks; for()
    }

    static getRadarTasks(): RadarTask[] {
        return RadarStorage.instance.tasks;
    }

    static equateRadarTasks(type: string, stars: number, time: number, reward: RadarReward[]) {
        RadarStorage.instance.tasks.push(new RadarTask(type, stars, time, reward));
    }

    static updateRadarStorage() {
        let tasks: Object[];
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