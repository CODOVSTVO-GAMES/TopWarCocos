import { TaskReward } from "./TaskReward"

export class ActiveTask {
    level: number
    type: string
    reward: Array<TaskReward>
    isDone: boolean

    constructor(level: number, type: string, reward: Array<TaskReward>, isDone = false) {
        this.type = type
        this.level = level
        this.reward = reward
        this.isDone = isDone
    }

}