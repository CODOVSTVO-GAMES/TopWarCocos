import { _decorator, Component, Node } from 'cc';
import { ObjectParameters } from '../ObjectParameters';
const { ccclass, property } = _decorator;

@ccclass('HomeMapStorage')
export class HomeMapStorage extends Component {

    public static instance: HomeMapStorage;

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
        HomeMapStorage.instance = this;
    }

    start() {
        this.coords = new Array(this.mapSize);
        this.arrayObjectParameters = new Array(this.mapSize);
        this.cellFree = new Array(this.mapSize);
        this.cellSelected = new Array(this.mapSize);
        this.cellBlock = new Array(this.mapSize);
    }
}