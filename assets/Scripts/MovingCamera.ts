import { _decorator, Component, Input, Vec3, Touch } from 'cc';
import { Canvas } from './Canvas/Canvas';
const { ccclass, property } = _decorator;

@ccclass('MovingCamera')
export class MovingCamera extends Component {

    @property({ type: Node })
    public object: Node;

    public xPos: number = 0;
    public yPos: number = 0;
    public isMove: boolean = false;

    start() {
    }

    // onload() {
    //     Canvas.instance.mainCanvas.on(Input.EventType.TOUCH_START, this.touchStart, this);
    //     Canvas.instance.mainCanvas.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
    //     Canvas.instance.mainCanvas.on(Input.EventType.TOUCH_CANCEL, this.touchCancel, this);
    //     Canvas.instance.mainCanvas.on(Input.EventType.TOUCH_END, this.touchEnd, this);
    // }

    // onDestroy() {
    //     Canvas.instance.mainCanvas.off(Input.EventType.TOUCH_START, this.touchStart, this);
    //     Canvas.instance.mainCanvas.off(Input.EventType.TOUCH_MOVE, this.touchMove, this);
    //     Canvas.instance.mainCanvas.off(Input.EventType.TOUCH_CANCEL, this.touchCancel, this);
    //     Canvas.instance.mainCanvas.off(Input.EventType.TOUCH_END, this.touchEnd, this);
    // }

    touchStart() {
        if (this.isMove == true) return;

        this.isMove = true;
        this.xPos = this.node.position.x;
        this.yPos = this.node.position.y;
    }

    touchMove(e: Touch) {
        if (this.isMove == false) return;

        console.log("move1");
        this.xPos += e.getDelta().x;
        this.yPos += e.getDelta().y;
    }

    touchCancel() {
        if (this.isMove == false) return;

        this.isMove = false;
    }

    touchEnd() {
        if (this.isMove == false) return;

        this.isMove = false;
    }

    // update() {
    //     if (this.isMove == false) return;

    //     let vec3: Vec3 = new Vec3(this.xPos, this.yPos, 0);
    //     this.node.position = vec3;
    // }
}