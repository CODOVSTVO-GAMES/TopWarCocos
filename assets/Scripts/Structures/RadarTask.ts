import { RadarReward } from "./RadarReward";

export class RadarTask {

    public type: string;
    public stars: number;
    public time: number;
    public rewards: RadarReward[];

    constructor(type: string, stars: number, time: number, rewards: RadarReward[]) {
        this.type = type;
        this.stars = stars;
        this.time = time;
        this.rewards = rewards;
    }
}

