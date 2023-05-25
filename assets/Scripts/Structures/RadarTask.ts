import { RadarReward } from "./RadarReward";

export class RadarTask {
    type: string;
    stars: number;
    time: number;
    status: number;
    rewards: RadarReward[];

    constructor(type: string, stars: number, time: number, status: number, rewards: RadarReward[]) {
        this.type = type;
        this.stars = stars;
        this.time = time;
        this.status = status;
        this.rewards = rewards;
    }
}

