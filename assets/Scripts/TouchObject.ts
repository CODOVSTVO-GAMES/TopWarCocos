import { _decorator, Component, Input, Node, Touch, Vec3 } from 'cc';
import { MapStorage } from './MapStorage';
import { Canvas } from './Canvas/Canvas';
const { ccclass, property } = _decorator;

@ccclass('TouchObject')
export class TouchObject extends Component {

    @property({ type: Node })
    public object: Node;

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

        console.log("move");
        this.xPos += e.getDelta().x;
        this.yPos += e.getDelta().y;

    }

    touchEnd() {
        if (this.isMove == false) return;

        this.isMove = false;
    }

    touchCancel() {
        if (this.isMove == false) return;

        this.isMove = false;
    }

    alo() {
        // let dir = 100000;
        // let index = 0;
        // for (let i = 0; i < MapStorage.instance.coords.length; i++) {
        //     dir = 
        //     if () {

        //     }
        // }
    }

//     update() {
//         if (this.isMove == false) return;

//         let vec3: Vec3 = new Vec3(this.xPos, this.yPos, 0);
// vec3.
//         this.node.position = vec3;
//     }

    // onTouchStart(event: EventTouch) {
    //     const touch = event.touch!;
    //     console.log(this.node.position);
    // }
    // onTouchEnd(event: EventTouch) {
    //     const touch = event.touch!;
    //     console.log(this.node.position);
    // }
}
