export class TaskGame {
    public typeTask: string
    public levelObjectTask: number
    public quantityRequired: number
    public quantityCompleted: number

    constructor(typeTask: string, levelObjectTask: number, quantityRequired: number, quantityCompleted: number) {
        this.typeTask = typeTask
        this.levelObjectTask = levelObjectTask
        this.quantityRequired = quantityRequired
        this.quantityCompleted = quantityCompleted
    }

}