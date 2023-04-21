import { _decorator, Component, Input, Node, Touch, Vec3 } from 'cc';
import { MapStorage } from './Storage/MapStorage';
import { ObjectParameters } from './ObjectParameters';
import { SpawnObjects } from './SpawnObjects';
import { TouchStatus } from './TouchStatus';
import { TypesObjects } from './Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('TouchObject')
export class TouchObject extends Component {

    @property({ type: Node })
    public object: Node;

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    public xPos: number = 0;
    public yPos: number = 0;
    public isMove: boolean;

    onLoad() {
        this.object.on(Input.EventType.TOUCH_START, this.touchStart, this);
        this.object.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
        this.object.on(Input.EventType.TOUCH_END, this.touchEnd, this);
        this.object.on(Input.EventType.TOUCH_CANCEL, this.touchCancel, this);
    }

    onDestroy() {
        this.object.off(Input.EventType.TOUCH_START, this.touchStart);
        this.object.off(Input.EventType.TOUCH_MOVE, this.touchMove);
        this.object.off(Input.EventType.TOUCH_END, this.touchEnd);
        this.object.off(Input.EventType.TOUCH_CANCEL, this.touchCancel);
    }

    touchStart() {
        if (TouchStatus.instance.activeTouch == true && this.isMove) return;

        TouchStatus.instance.activeTouch = true;
        MapStorage.instance.arrayObjectParameters[this.objectParameters.index] = null;
        this.object.setParent(MapStorage.instance.parentObject, true);
        this.xPos = this.object.position.x;
        this.yPos = this.object.position.y;
        this.isMove = true;
    }

    touchMove(e: Touch) {
        if (TouchStatus.instance.activeTouch == false && this.isMove == false) return;

        this.xPos += (e.getDelta().x * 2);
        this.yPos += (e.getDelta().y * 2);
    }

    touchEnd() {
        if (TouchStatus.instance.activeTouch == false && this.isMove == false) return;

        this.processing();
        this.isMove = false;
        TouchStatus.instance.activeTouch = false;
    }

    touchCancel() {
        if (TouchStatus.instance.activeTouch == false && this.isMove == false) return;

        this.processing();
        this.isMove = false;
        TouchStatus.instance.activeTouch = false;
    }

    update() {
        if (TouchStatus.instance.activeTouch == false || this.isMove == false) return;

        let pos: Vec3 = new Vec3(this.xPos, this.yPos, 0);
        this.object.position = pos;
    }

    processing() {
        let minDistance = 100000;
        let indexObject = 0;
        let cellFound = false;
        for (let i = 0; i < MapStorage.instance.coords.length; i++) {
            let currentDistance = Vec3.distance(this.object.position, MapStorage.instance.coords[i].position);
            if (currentDistance < minDistance) {
                if (MapStorage.instance.arrayObjectParameters[i] == null) {
                    minDistance = currentDistance;
                    indexObject = i;
                    cellFound = true;
                }
                else {
                    if (currentDistance < 60) {
                        if (this.objectParameters.type == MapStorage.instance.arrayObjectParameters[i].type) {
                            if (this.objectParameters.level == MapStorage.instance.arrayObjectParameters[i].level) {
                                let type = MapStorage.instance.arrayObjectParameters[i].type;
                                let level = MapStorage.instance.arrayObjectParameters[i].level;
                                let index = MapStorage.instance.arrayObjectParameters[i].index;
                                MapStorage.instance.arrayObjectParameters[i].nodeObject.destroy();
                                MapStorage.instance.arrayObjectParameters[i] = null;
                                MapStorage.instance.arrayObjectParameters[this.objectParameters.index] = null;
                                this.node.destroy();
                                SpawnObjects.instance.spawnObjectsMerge(type, level, index);
                                return;
                            }
                        }
                    }
                }
            }
        }
        if (cellFound == true) {
            if (this.objectParameters.index == indexObject) {
                if (this.objectParameters.type == TypesObjects.BARTACK_OVERLAND) {
                    this.objectParameters.getBarracksInterface().openInterface();
                }
                else if (this.objectParameters.type == TypesObjects.GOLD_MINE) {
                    this.objectParameters.getGoldMineInterface().openInterface();
                }
            }
            MapStorage.instance.arrayObjectParameters[this.objectParameters.index] = null;
            this.objectParameters.index = indexObject;
            MapStorage.instance.arrayObjectParameters[indexObject] = this.objectParameters;
            this.object.setParent(MapStorage.instance.coords[indexObject], true);
            this.object.position = new Vec3(0, 0, 0);
        }
    }
}