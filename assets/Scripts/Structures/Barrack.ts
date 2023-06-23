import { QueueBarrack } from "./QueueBarrack"

export class Barrack {
    public indexBarrack: number
    public queueSpawnObject: QueueBarrack[]

    constructor(indexBarrack: number) {
        this.indexBarrack = indexBarrack
    }
}