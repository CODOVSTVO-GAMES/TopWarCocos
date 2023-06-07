import { _decorator, CCString, Component, Node, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GlobalMapStorage')
export class GlobalMapStorage extends Component {

    public static instance: GlobalMapStorage

    @property({ type: CCString })
    public zone: string

    @property({ type: Vec2 })
    public chunk: Vec2

    public buildings = new Array<Building>

    protected start(): void {
        GlobalMapStorage.instance = this
    }
}

export class Building {
    id: number
    type: string
    node: Node
    coords: Vec2
    chunk: Vec2

    constructor(id: number, type: string, coords: Vec2, chunk: Vec2, node = null) {
        this.id = id
        this.type = type
        this.coords = coords
        this.chunk = chunk
        this.node = node
    }
}

