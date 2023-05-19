
export class RadarConfig {

    public level: number;
    public maxTasks: number;
    public displayedTasks: number;
    public maxEnergy: number;
    public time: number;

    constructor(level: number, maxTasks: number, displayedTasks: number, maxEnergy: number, time: number) {
        this.level = level;
        this.maxTasks = maxTasks;
        this.displayedTasks = displayedTasks;
        this.maxEnergy = maxEnergy;
        this.time = time;
    }
}