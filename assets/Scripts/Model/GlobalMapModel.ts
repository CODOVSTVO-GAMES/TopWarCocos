import { _decorator, CCFloat, CCString, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GlobalMapModel')
export class GlobalMapModel extends Component {

    public static instance: GlobalMapModel

    @property({ type: CCString })
    public zone: string

    @property({ type: CCFloat })
    public xBaceCoord: number

    @property({ type: CCFloat })
    public yBaceCoord: number

    public buildings = new Array<Building>

    protected onLoad(): void {
        GlobalMapModel.instance = this
    }

    public start() {
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
    level: number

    constructor(id: number, type: string, x: number, y: number, accountId: string, level: number, node = null) {
        this.id = id
        this.type = type
        this.node = node
        this.accountId = accountId
        this.x = x
        this.y = y
        this.level = level
    }
}

