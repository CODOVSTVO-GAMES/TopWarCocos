import { _decorator, Component, Input, Node, Touch, Vec3 } from 'cc';
import { MapStorage } from './Storage/MapStorage';
import { Canvas } from './Canvas/Canvas';
import { ObjectParameters } from './ObjectParameters';
const { ccclass, property } = _decorator;

@ccclass('TouchObject')
export class TouchObject extends Component {

    @property({ type: Node })
    public object: Node;

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    public xPos: number = 0;
    public yPos: number = 0;
    public isMove: boolean = false;

    onLoad() {
        this.node.on(Input.EventType.TOUCH_START, this.touchStart, this);
        Canvas.instance.canvas.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
        Canvas.instance.canvas.on(Input.EventType.TOUCH_END, this.touchEnd, this);
        Canvas.instance.canvas.on(Input.EventType.TOUCH_CANCEL, this.touchCancel, this);
    }

    onDestroy() {
        this.node.off(Input.EventType.TOUCH_START, this.touchStart);
        Canvas.instance.canvas.off(Input.EventType.TOUCH_MOVE, this.touchMove);
        Canvas.instance.canvas.off(Input.EventType.TOUCH_END, this.touchEnd);
        Canvas.instance.canvas.off(Input.EventType.TOUCH_CANCEL, this.touchCancel);
    }

    touchStart() {
        if (this.isMove == true) return;

        this.node.setParent(MapStorage.instance.parentObject, true);
        this.isMove = true;
        this.xPos = this.node.position.x;
        this.yPos = this.node.position.y;
    }

    touchMove(e: Touch) {
        if (this.isMove == false) return;

        this.xPos += e.getDelta().x;
        this.yPos += e.getDelta().y;
    }

    touchEnd() {
        if (this.isMove == false) return;

        this.processing();
        this.isMove = false;
    }

    touchCancel() {
        if (this.isMove == false) return;

        this.processing();
        this.isMove = false;
    }

    update() {
        if (this.isMove == false) return;

        let pos: Vec3 = new Vec3(this.xPos, this.yPos, 0);
        this.node.position = pos;
    }

    processing() {
        let minDistance = 100000;
        let indexObject = 0;
        let cellFound = false;
        for (let i = 0; i < MapStorage.instance.coords.length; i++) {
            let currentDistance = Vec3.distance(this.node.position, MapStorage.instance.coords[i].position);
            if (currentDistance < minDistance) {
                if (MapStorage.instance.arrayObjectParameters[i] == null) {
                    minDistance = currentDistance;
                    indexObject = i;
                    cellFound = true;
                }
                else {
                    // if (currentDistance < 60) {
                    // console.log(this.objectParameters.type + " " + MapStorage.instance.arrayObjectParameters[i].type);
                    // if (this.objectParameters.type == MapStorage.instance.arrayObjectParameters[i].type) {
                    //     console.log("SUCCES");
                    //     this.destroy();
                    // }
                    // }
                }
            }

        } 
        if (cellFound == true) {
            this.node.setParent(MapStorage.instance.coords[indexObject], true);
            this.node.position = new Vec3(0, 0, 0);
        }
    }
}