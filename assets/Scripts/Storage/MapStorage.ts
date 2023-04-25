import { _decorator, Component, Node } from 'cc';
import { ObjectParameters } from '../ObjectParameters';
import { MapController } from '../MapController';
import { BlockObject } from '../BlockObject';
const { ccclass, property } = _decorator;

@ccclass('MapStorage')
export class MapStorage extends Component {

    public static instance: MapStorage;
    public mapSize: number = 25;

    @property({ type: Node })
    public parentObject: Node;

    @property({ type: Node })
    public coords: Node[] = [];

    @property({ type: ObjectParameters })
    public arrayObjectParameters: ObjectParameters[] = [];

    @property({ type: BlockObject })
    public arrayBlockObject: BlockObject[] = [];

    public cellFree: Node[] = [];
    public cellSelected: Node[] = [];

    onLoad() {
        MapStorage.instance = this;
    }

    start() {
        this.cellFree = new Array(this.mapSize);
        this.cellSelected = new Array(this.mapSize);
        this.arrayObjectParameters = new Array(this.mapSize);
        this.arrayBlockObject = new Array(this.mapSize);
        MapController.initCellFree();
        MapController.initCellSelected();
    }
}