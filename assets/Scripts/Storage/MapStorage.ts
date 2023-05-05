import { _decorator, Component, Node } from 'cc';
import { ObjectParameters } from '../ObjectParameters';
const { ccclass, property } = _decorator;

@ccclass('MapStorage')
export class MapStorage extends Component {

    public static instance: MapStorage;

    public mapSize: number = 64;

    public parentSelectObject: Node;

    @property({ type: ObjectParameters })
    public selectedObject: ObjectParameters;

    @property({ type: ObjectParameters })
    public arrayObjectParameters: ObjectParameters[] = [];

    public coords: Node[] = [];
    public cellFree: Node[] = [];
    public cellSelected: Node[] = [];
    public cellBlock: Node[] = [];

    onLoad() {
        MapStorage.instance = this;
    }

    start() {
        this.coords = new Array(this.mapSize);
        this.arrayObjectParameters = new Array(this.mapSize);
        this.cellFree = new Array(this.mapSize);
        this.cellSelected = new Array(this.mapSize);
        this.cellBlock = new Array(this.mapSize);
    }
}