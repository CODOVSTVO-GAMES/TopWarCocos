import { _decorator, Component, Input, Touch, Node, Vec3 } from 'cc';
import { ZoomCamera } from '../../../Camera/ZoomCamera';
import { SecondaryInterface } from '../../SecondaryInterface';
import { BuferTasks } from '../../../Radar/BuferTasks';
const { ccclass, property } = _decorator;

@ccclass('SwitchLogic')
export class SwitchLogic extends Component {

    public static instance: SwitchLogic;

    @property({ type: Node })
    public handle: Node;

    private yPos: number;
    private triggerEnd: boolean = false;
    private isMove: boolean = false;

    onLoad() {
        SwitchLogic.instance = this;

        this.handle.on(Input.EventType.TOUCH_START, this.touchStart, this);
        this.handle.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
        this.handle.on(Input.EventType.TOUCH_END, this.touchEnd, this);
        this.handle.on(Input.EventType.TOUCH_CANCEL, this.touchCancel, this);
    }

    onDestroy() {
        this.handle.off(Input.EventType.TOUCH_START, this.touchStart, this);
        this.handle.off(Input.EventType.TOUCH_MOVE, this.touchMove, this);
        this.handle.off(Input.EventType.TOUCH_END, this.touchEnd, this);
        this.handle.off(Input.EventType.TOUCH_CANCEL, this.touchCancel, this);
    }

    renderModal() {
        this.handle.position = new Vec3(150, 125, 0);
        this.triggerEnd = false;
    }

    touchStart() {
        if (this.triggerEnd == true && this.isMove == true) return;

        this.yPos = this.handle.position.y;
        this.isMove = true;
    }

    touchMove(e: Touch) {
        if (this.triggerEnd == true && this.isMove == false) return;

        this.yPos += e.getUIDelta().y * ZoomCamera.instance.zoomRaito;
        let resultY = this.yPos;
        if (resultY < -125) {
            resultY = -125;
        }
        else if (resultY > 125) {
            resultY = 125;
        }
        this.handle.position = new Vec3(150, resultY, 0);
    }

    touchEnd() {
        if (this.triggerEnd == true && this.isMove == false) return;

        if (this.yPos <= -125) {
            if (this.triggerEnd == false) {
                setTimeout(() => {
                    SecondaryInterface.instance.closeAllModals();
                    BuferTasks.instance.awardingPersonal();
                }, 1000);
            }
            this.triggerEnd = true;
        }
        this.isMove = false;
    }

    touchCancel() {
        if (this.triggerEnd == true && this.isMove == false) return;

        if (this.yPos <= -125) {
            if (this.triggerEnd == false) {
                setTimeout(() => {
                    SecondaryInterface.instance.closeAllModals();
                    BuferTasks.instance.awardingPersonal();
                }, 1000);
            }
            this.triggerEnd = true;
        }
        this.isMove = false;
    }
}