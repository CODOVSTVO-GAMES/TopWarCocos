import { _decorator, Component, Input, Touch, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MouseClickVisualization')
export class MouseClickVisualization extends Component {

    @property({ type: Node })
    public click: Node;

    @property({ type: Node })
    public canvas: Node;

    onLoad() {
        this.canvas.on(Input.EventType.TOUCH_START, this.touchStart, this);
        this.canvas.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
        this.canvas.on(Input.EventType.TOUCH_END, this.touchEnd, this);
        this.canvas.on(Input.EventType.TOUCH_CANCEL, this.touchEnd, this);
    }

    onDestroy() {
        this.canvas.off(Input.EventType.TOUCH_START, this.touchStart, this);
        this.canvas.off(Input.EventType.TOUCH_MOVE, this.touchMove, this);
        this.canvas.off(Input.EventType.TOUCH_END, this.touchEnd, this);
        this.canvas.off(Input.EventType.TOUCH_CANCEL, this.touchEnd, this);
    }

    touchStart(e: Touch) {
        // let pos = e.getUILocation();
        // this.click.position = new Vec3(pos.x, pos.y, 0);
    }

    touchMove() {

    }

    touchEnd() {

    }
}