import { _decorator, Color, Component, Input, Node, Touch, Vec3 } from 'cc';
import { ObjectParameters } from './ObjectParameters';
import { TouchStatus } from './TouchStatus';
import { MapController } from './MapController';
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

    public test: boolean;

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
        MapController.openCellFree();
        MapController.TEST();
        this.object.setParent(MapController.getParentObject(), true);
        this.objectParameters.spriteObject.color = new Color(255, 255, 255, 140);
        this.objectParameters.backgraundObject.color = new Color(255, 255, 255, 140);
        this.xPos = this.object.position.x;
        this.yPos = this.object.position.y;
        this.test = true;
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
        this.objectParameters.backgraundObject.color = new Color(255, 255, 255, 255);
        MapController.closeCellFree();
        MapController.closeCellSelected();
        MapController.ALO();
        TouchStatus.instance.activeTouch = false;
    }

    touchCancel() {
        if (TouchStatus.instance.activeTouch == false && this.isMove == false) return;

        this.processing();
        this.isMove = false;
        this.objectParameters.spriteObject.color = new Color(255, 255, 255, 255);
        this.objectParameters.backgraundObject.color = new Color(255, 255, 255, 255);
        MapController.closeCellFree();
        MapController.closeCellSelected();
        MapController.ALO();
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
        if (this.test == false) return;
        this.test = false;

        let minDistance = 100000;
        let indexObject = 0;
        let cellFound = false;
        let block = false;
        for (let i = 0; i < MapController.getMapSize(); i++) {
            let currentDistance = Vec3.distance(this.object.position, MapController.getCoordPosition(i));
            if (currentDistance < minDistance) {
                if (MapController.getObjectParameter(i) == null) {
                    minDistance = currentDistance;
                    indexObject = i;
                    cellFound = true;
                }
                else {
                    if (currentDistance < 60) {
                        if (this.objectParameters.type == MapController.getObjectParameter(i).type) {
                            if (this.objectParameters.level == MapController.getObjectParameter(i).level) {
                                MapController.upgradeLevel(i);
                                this.node.destroy();
                                block = true;
                                return;
                            }
                        }
                    }
                }
            }
        }
        if (cellFound == true && block == false) {
            if (this.objectParameters.index == indexObject) {
                if (this.objectParameters.type != TypesObjects.TOWN_HALL)
                    this.objectParameters.getObjectInterface().openInterface(this.objectParameters.type);
            }
            MapController.setObjectParameter(null, this.objectParameters.index);
            this.objectParameters.index = indexObject;
            MapController.setObjectParameter(this.objectParameters, indexObject);
            this.object.setParent(MapController.getCoord(indexObject), true);
            this.object.position = new Vec3(0, 0, 0);
        }
    }
}