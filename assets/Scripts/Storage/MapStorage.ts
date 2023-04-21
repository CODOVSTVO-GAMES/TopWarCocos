import { _decorator, Component, Node } from 'cc';
import { ObjectParameters } from '../ObjectParameters';
const { ccclass, property } = _decorator;

@ccclass('MapStorage')
export class MapStorage extends Component {

    public static instance: MapStorage;
    public mapSize: number = 35;

    @property({ type: Node })
    public parentObject: Node;

    @property({ type: Node })
    public coords: Node[] = [];

    @property({ type: ObjectParameters })
    public arrayObjectParameters: ObjectParameters[] = [];

    onLoad() {
        MapStorage.instance = this;
    }

    start() {
        this.arrayObjectParameters = new Array(this.mapSize);
    }
}