import { _decorator, Color, Component, Input, Node, Touch, Vec3 } from 'cc';
import { ObjectParameters } from './ObjectParameters';
import { SpawnObjects } from './SpawnObjects';
import { TouchStatus } from './TouchStatus';
import { MapController } from './MapController';
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
        MapController.setObjectParameter(null, this.objectParameters.index);
        MapController.alo(this.objectParameters.index);
        MapController.openCellFree();
        this.object.setParent(MapController.getParentObject(), true);
        this.objectParameters.spriteObject.color = new Color(255, 255, 255, 180);
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
        this.objectParameters.spriteObject.color = new Color(255, 255, 255, 255);
        MapController.closeCellFree();
        MapController.closeCellSelected();
        TouchStatus.instance.activeTouch = false;
    }

    touchCancel() {
        if (TouchStatus.instance.activeTouch == false && this.isMove == false) return;

        this.processing();
        this.isMove = false;
        this.objectParameters.spriteObject.color = new Color(255, 255, 255, 255);
        MapController.closeCellFree();
        MapController.closeCellSelected();
        TouchStatus.instance.activeTouch = false;
    }

    update() {
        if (TouchStatus.instance.activeTouch == false || this.isMove == false) return;

        let pos: Vec3 = new Vec3(this.xPos, this.yPos, 0);
        this.object.position = pos;
        MapController.closeCellSelected();
        MapController.initCellBlock();
        MapController.openCellSelected(this.objectParameters.type, this.object.position);
    }

    processing() {
        let minDistance = 100000;
        let indexObject = 0;
        let cellFound = false;
        for (let i = 0; i < MapController.getMapSize(); i++) {
            let currentDistance = Vec3.distance(this.object.position, MapController.getCoordPosition(i));
            if (currentDistance < minDistance) {
                if (MapController.getObjectParameter(i) == null && MapController.getBlockObject(i) == null) {
                    minDistance = currentDistance;
                    indexObject = i;
                    cellFound = true;
                }
                else {
                    if (currentDistance < 60) {
                        if (this.objectParameters.type == MapController.getObjectParameter(i).type) {
                            if (this.objectParameters.level == MapController.getObjectParameter(i).level) {
                                let type = MapController.getObjectParameter(i).type;
                                let level = MapController.getObjectParameter(i).level;
                                let index = MapController.getObjectParameter(i).index;
                                MapController.getObjectParameter(i).nodeObject.destroy();
                                MapController.setObjectParameter(null, i);
                                MapController.setObjectParameter(null, this.objectParameters.index);
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
                this.objectParameters.getObjectInterface().openInterface(this.objectParameters.type);
            }
            MapController.setObjectParameter(null, this.objectParameters.index);
            this.objectParameters.index = indexObject;
            // this.objectParameters.getObjectInterface().closeInterface();
            MapController.setObjectParameter(this.objectParameters, indexObject);
            this.object.setParent(MapController.getCoord(indexObject), true);
            SpawnObjects.instance.spawnBlockObjects(this.objectParameters.type, this.objectParameters.level, this.objectParameters.index);
            this.object.position = new Vec3(0, 0, 0);
        }
    }
}