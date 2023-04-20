import { _decorator, Component, Input, Node, Touch, Vec3 } from 'cc';
import { MapStorage } from './Storage/MapStorage';
import { ObjectParameters } from './ObjectParameters';
import { SpawnObjects } from './SpawnObjects';
import { TouchStatus } from './TouchStatus';
const { ccclass, property } = _decorator;

@ccclass('TouchObject')
export class TouchObject extends Component {

    @property({ type: Node })
    public object: Node;

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    public xPos: number = 0;
    public yPos: number = 0;

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
        if (TouchStatus.instance.status == true) return;

        MapStorage.instance.arrayObjectParameters[this.objectParameters.index] = null;
        this.object.setParent(MapStorage.instance.parentObject, true);
        TouchStatus.instance.status = true;
        this.xPos = this.object.position.x;
        this.yPos = this.object.position.y;
    }

    touchMove(e: Touch) {
        if (TouchStatus.instance.status == false) return;

        this.xPos += e.getDelta().x;
        this.yPos += e.getDelta().y;
    }

    touchEnd() {
        if (TouchStatus.instance.status == false) return;

        this.processing();
        TouchStatus.instance.status = false;
        TouchStatus.instance.status = false;
    }

    touchCancel() {
        if (TouchStatus.instance.status == false) return;

        this.processing();
        TouchStatus.instance.status = false;
        TouchStatus.instance.status = false;
    }

    update() {
        if (TouchStatus.instance.status == false) return;

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
                                SpawnObjects.instance.spawnObjectsMerge(this.objectParameters.type, this.objectParameters.level, this.objectParameters.index);
                                MapStorage.instance.arrayObjectParameters[this.objectParameters.index]
                                MapStorage.instance.arrayObjectParameters[i] = null;
                                MapStorage.instance.arrayObjectParameters[i].destroy();
                                this.node.destroy();
                                return;
                            }
                        }
                    }
                }
            }
        }
        if (cellFound == true) {
            MapStorage.instance.arrayObjectParameters[this.objectParameters.index] = null;
            MapStorage.instance.arrayObjectParameters[indexObject] = this.objectParameters;
            this.object.setParent(MapStorage.instance.coords[indexObject], true);
            this.object.position = new Vec3(0, 0, 0);
        }
    }
}