import { _decorator, Component, Node, Sprite } from 'cc';
import { ObjectParameters } from '../ObjectParameters';
const { ccclass, property } = _decorator;

@ccclass('HomeMapStorage')
export class HomeMapStorage extends Component {

    public static instance: HomeMapStorage;

    public mapSize = 2000;

    public parentSelectObject: Node;

    @property({ type: ObjectParameters })
    public selectedObject: ObjectParameters;

    @property({ type: ObjectParameters })
    public arrayObjectParameters: ObjectParameters[] = [];

    @property({ type: ObjectParameters })
    public temporaryLocalStorage: ObjectParameters[] = [];

    public coords: Node[] = [];
    public spriteCoords: Sprite[] = [];

    onLoad() {
        HomeMapStorage.instance = this;
        this.coords = new Array(this.mapSize);
        this.arrayObjectParameters = new Array(this.mapSize);
        this.spriteCoords = new Array(this.mapSize);
    }
}