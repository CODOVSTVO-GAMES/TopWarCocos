import { _decorator, CCFloat, CCString, Component, Node } from 'cc';
import { SceneNames } from '../Static/SceneNames';
import { RedirectionToScene } from '../Other/RedirectionToScene';
const { ccclass, property } = _decorator;

@ccclass('GlobalMapStorage')
export class GlobalMapStorage extends Component {

    public static instance: GlobalMapStorage

    @property({ type: CCString })
    public zone: string

    @property({ type: CCFloat })
    public xBaceCoord: number

    @property({ type: CCFloat })
    public yBaceCoord: number

    public buildings = new Array<Building>

    protected start(): void {
        GlobalMapStorage.instance = this
        // this.zone = 'testzone'
        this.xBaceCoord = 0
        this.yBaceCoord = 0
    }
}

export class Building {
    id: number
    type: string
    node: Node
    x: number
    y: number
    accountId: string

    constructor(id: number, type: string, x: number, y: number, accountId: string, node = null) {
        this.id = id
        this.type = type
        this.node = node
        this.accountId = accountId
        this.x = x
        this.y = y
    }
}

