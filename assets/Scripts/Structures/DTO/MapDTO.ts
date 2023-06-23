export class MapDTO {
    accountId: string
    zone: string
    x: number
    y: number
    level: number
    battlesNumber: number
    taskId: number
    taskStatus: number

    constructor(accountId: string, zone: string, x: number, y: number, level: number, taskStatus = 0, battlesNumber = 0, taskId = 0) {
        this.accountId = accountId
        this.zone = zone
        this.x = x
        this.y = y
        this.level = level
        this.battlesNumber = battlesNumber
        this.taskId = taskId
        this.taskStatus = taskStatus

    }
}
