import { _decorator, Component, Node, EventMouse, input, Camera } from 'cc';
import { Canvas } from '../Canvas/Canvas';
const { ccclass, property } = _decorator;

@ccclass('ZoomCamera')
export class ZoomCamera extends Component {

    @property({ type: Camera })
    public camera: Camera;

    // onEnable() {
    //     Canvas.instance.canvas.on(Node.EventType.MOUSE_WHEEL, this.mouseScroll, this);
    // }

    // onDisable() {
    //     Canvas.instance.canvas.off(Node.EventType.MOUSE_WHEEL, this.mouseScroll);
    // }

    // mouseScroll(e: EventMouse) {
    //     let scroll = e.getScrollY();
    //     if (scroll > 0) {
    //         if (this.camera.orthoHeight > 300) {
    //             scroll = -50;
    //         }
    //         else {
    //             scroll = 0;
    //         }
    //     }
    //     else if (scroll < 0) {
    //         if (this.camera.orthoHeight < 700) {
    //             scroll = 50;
    //         }
    //         else {
    //             scroll = 0;
    //         }
    //     }
    //     else {
    //         scroll = 0;
    //     }
    //     this.camera.orthoHeight += scroll;
    // }
}