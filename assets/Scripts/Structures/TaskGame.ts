export class TaskGame {
    public typeTask: string
    public levelObjectTask: number
    public quantityRequired: number
    public quantityCompleted: number
    public rewardTrigger: boolean

    constructor(typeTask: string, levelObjectTask: number, quantityRequired: number, quantityCompleted: number, rewardTrigger: boolean) {
        this.typeTask = typeTask
        this.levelObjectTask = levelObjectTask
        this.quantityRequired = quantityRequired
        this.quantityCompleted = quantityCompleted
        this.rewardTrigger = rewardTrigger
    }
}