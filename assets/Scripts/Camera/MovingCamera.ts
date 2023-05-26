import { _decorator, Component, Input, Vec3, Touch, Node, Camera } from 'cc';
import { TouchStatus } from '../TouchStatus';
import { Canvas } from '../Canvas/Canvas';
import { ControllerHomeMapStorage } from '../Storage/Controllers/ControllerHomeMapStorage';
const { ccclass, property } = _decorator;

@ccclass('MovingCamera')
export class MovingCamera extends Component {

    @property({ type: Node })
    public object: Node;

    @property({ type: Camera })
    public camera: Camera;

    public xPos: number;
    public yPos: number;
    public isMove: boolean;

    onEnable() {
        Canvas.instance.canvas.on(Input.EventType.TOUCH_START, this.touchStart, this);
        Canvas.instance.canvas.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
        Canvas.instance.canvas.on(Input.EventType.TOUCH_CANCEL, this.touchCancel, this);
        Canvas.instance.canvas.on(Input.EventType.TOUCH_END, this.touchEnd, this);
    }

    onDisable() {
        Canvas.instance.canvas.off(Input.EventType.TOUCH_START, this.touchStart);
        Canvas.instance.canvas.off(Input.EventType.TOUCH_MOVE, this.touchMove);
        Canvas.instance.canvas.off(Input.EventType.TOUCH_CANCEL, this.touchCancel);
        Canvas.instance.canvas.off(Input.EventType.TOUCH_END, this.touchEnd);
    }

    touchStart() {
        if (this.isMove == true || TouchStatus.instance.activeTouch == true) return;

        ControllerHomeMapStorage.closeInterface();

        this.isMove = true;
        this.xPos = this.object.position.x;
        this.yPos = this.object.position.y;
    }

    touchMove(e: Touch) {
        if (this.isMove == false || TouchStatus.instance.activeTouch == true) return;

        this.xPos -= e.getDelta().x;
        this.yPos -= e.getDelta().y;

        if (this.xPos > 1000) {
            this.xPos = 1000;
        }
        else if (this.xPos < -1000) {
            this.xPos = -1000;
        }
        if (this.yPos > 1000) {
            this.yPos = 1000;
        }
        else if (this.yPos < -1000) {
            this.yPos = -1000;
        }
    }

    touchCancel() {
        if (this.isMove == false) return;

        this.isMove = false;
    }

    touchEnd() {
        if (this.isMove == false) return;

        this.isMove = false;
    }

    update() {
        if (this.isMove == false) return;

        this.object.position = new Vec3(this.xPos, this.yPos, 0)
    }
}