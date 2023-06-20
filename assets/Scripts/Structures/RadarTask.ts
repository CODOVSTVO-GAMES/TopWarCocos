import { RadarReward } from "./RadarReward";

export class RadarTask {
    id: number;
    type: string;
    stars: number;
    time: number;
    status: number; // 0 - задача доступна для выполнения, 1 - задача выполняется, 2 - задача выполнена доступен сбор награды, 3 - награда собрана
    rewards: RadarReward[];

    constructor(id: number, type: string, stars: number, time: number, status: number, rewards: RadarReward[]) {
        this.id = id
        this.type = type;
        this.stars = stars;
        this.time = time;
        this.status = status;
        this.rewards = rewards;
    }
}

