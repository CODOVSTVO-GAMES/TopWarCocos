import { _decorator, Component, Node, EventMouse, Camera } from 'cc';
import { MainInterface } from '../UI/MainInterface';
import { SecondaryInterface } from '../UI/SecondaryInterface';
import { MouseClickVisualization } from '../MouseClickVisualization';
import { TouchStatus } from '../TouchStatus';
const { ccclass, property } = _decorator;

@ccclass('ZoomCamera')
export class ZoomCamera extends Component {

    public static instance: ZoomCamera

    @property({ type: Node })
    public canvas: Node;

    @property({ type: Camera })
    public camera: Camera;

    public zoomRaito: number;

    onLoad() {
        ZoomCamera.instance = this;
    }

    onEnable() {
        this.countCoomRaito(this.camera.orthoHeight)
        this.canvas.on(Node.EventType.MOUSE_WHEEL, this.mouseScroll, this);
    }

    onDisable() {
        this.canvas.off(Node.EventType.MOUSE_WHEEL, this.mouseScroll);
    }

    mouseScroll(e: EventMouse) {
        if (TouchStatus.instance.activeTouch) return

        let scroll = e.getScrollY();
        if (scroll > 0) {
            if (this.camera.orthoHeight > 300) {
                scroll = -50 * this.zoomRaito;
            }
            else {
                scroll = 0;
            }
        }
        else if (scroll < 0) {
            if (this.camera.orthoHeight < 5000) {
                scroll = 50 * this.zoomRaito;
            }
            else {
                scroll = 0;
            }
        }
        else {
            scroll = 0;
        }
        this.camera.orthoHeight += scroll;
        this.countCoomRaito(this.camera.orthoHeight);
    }

    countCoomRaito(ortoHeight: number) {
        this.zoomRaito = ortoHeight / 960;
        MainInterface.instance.resizeMainInterface(this.zoomRaito)
        SecondaryInterface.instance.resizeSecondaryInterface(this.zoomRaito)
        MouseClickVisualization.instance.resizeSecondaryInterface(this.zoomRaito);
    }
}