import { RadarReward } from "./RadarReward";
import { _decorator, Node, Vec3 } from 'cc';

export class BattleTask {
    id: number
    type: string
    stars: number
    expiration: number
    battleTime: number
    status: number // 0 - задача доступна для выполнения, 1 - задача выполняется, 2 - задача выполнена доступен сбор награды, 3 - награда собрана
    rewards: RadarReward[]
    node: Node
    coords: Vec3

    constructor(id: number, type: string, stars: number, expiration: number, status: number, rewards: RadarReward[], battleTimme: number, coords: Vec3, node = null) {
        this.id = id
        this.type = type
        this.stars = stars
        this.expiration = expiration
        this.status = status
        this.rewards = rewards
        this.battleTime = battleTimme
        this.node = node
        this.coords = coords
    }
}

