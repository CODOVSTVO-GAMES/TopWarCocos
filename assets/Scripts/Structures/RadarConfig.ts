
export class RadarConfig {
    level: number
    maxTasks: number
    displayedTasks: number
    maxEnergy: number
    time: number

    constructor(level: number, maxTasks: number, displayedTasks: number, maxEnergy: number, time: number) {
        this.level = level
        this.maxTasks = maxTasks
        this.displayedTasks = displayedTasks
        this.maxEnergy = maxEnergy
        this.time = time
    }
}