export class MapDTO {
    accountId: string
    zone: string
    x: number
    y: number
    level: number
    battlesNumber: number
    taskId: number
    taskStatus: boolean

    constructor(accountId: string, zone: string, x: number, y: number, level: number, battlesNumber = 0, taskId = 0, taskStatus= false) {
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
