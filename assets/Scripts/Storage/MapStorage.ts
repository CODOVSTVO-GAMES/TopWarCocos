import { _decorator, Component, Node, director } from 'cc';
import { ObjectParameters } from '../ObjectParameters';
import { HighlightHomeMap } from '../HomeBase/HighlightHomeMap';
const { ccclass, property } = _decorator;

@ccclass('MapStorage')
export class MapStorage extends Component {

    public static instance: MapStorage;
    public mapSize: number = 64;

    @property({ type: Node })
    public parentObject: Node;

    @property({ type: Node })
    public coords: Node[] = [];

    @property({ type: ObjectParameters })
    public selectedObject: ObjectParameters;

    @property({ type: ObjectParameters })
    public arrayObjectParameters: ObjectParameters[] = [];

    public cellFree: Node[] = [];
    public cellSelected: Node[] = [];
    public cellBlock: Node[] = [];

    onLoad() {
        MapStorage.instance = this;
    }

    start() {
        this.cellFree = new Array(this.mapSize);
        this.cellSelected = new Array(this.mapSize);
        this.cellBlock = new Array(this.mapSize);
        this.arrayObjectParameters = new Array(this.mapSize);
        // HighlightHomeMap.initCellFree();
        // HighlightHomeMap.initCellSelected();
        // HighlightHomeMap.initCellBlock();
    }
}