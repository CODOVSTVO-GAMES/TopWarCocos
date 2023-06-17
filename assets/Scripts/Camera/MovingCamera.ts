import { _decorator, Component, Input, Vec3, Touch, Node, Camera, Vec2 } from 'cc';
import { TouchStatus } from '../TouchStatus';
import { HomeMapStorageController } from '../Controllers/StorageControllers/HomeMapStorageController';
import { ZoomCamera } from './ZoomCamera';
import { SecondaryInterface } from '../UI/SecondaryInterface';
import { RedirectionToScene } from '../Other/RedirectionToScene';
const { ccclass, property } = _decorator;

@ccclass('MovingCamera')
export class MovingCamera extends Component {

    public static instance: MovingCamera

    @property({ type: Node })
    public object: Node;

    @property({ type: Node })
    public canvas: Node;

    @property({ type: Camera })
    public camera: Camera;

    public xPos: number;
    public yPos: number;
    public isMove: boolean;

    protected onLoad(): void {
        MovingCamera.instance = this
    }

    onEnable() {
        this.canvas.on(Input.EventType.TOUCH_START, this.touchStart, this);
        this.canvas.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
        this.canvas.on(Input.EventType.TOUCH_CANCEL, this.touchCancel, this);
        this.canvas.on(Input.EventType.TOUCH_END, this.touchEnd, this);
    }

    onDisable() {
        this.canvas.off(Input.EventType.TOUCH_START, this.touchStart);
        this.canvas.off(Input.EventType.TOUCH_MOVE, this.touchMove);
        this.canvas.off(Input.EventType.TOUCH_CANCEL, this.touchCancel);
        this.canvas.off(Input.EventType.TOUCH_END, this.touchEnd);
    }

    touchStart() {
        if (this.isMove == true || TouchStatus.instance.activeTouch == true) return;

        HomeMapStorageController.putSelectObject()
        if (RedirectionToScene.getSceneName() != 'GlobalMap') {
            SecondaryInterface.instance.closeFirstLayoutModal();
        }



        this.isMove = true;
        this.xPos = this.object.position.x;
        this.yPos = this.object.position.y;
    }

    touchMove(e: Touch) {
        if (this.isMove == false || TouchStatus.instance.activeTouch == true) return;

        this.xPos -= e.getUIDelta().x * ZoomCamera.instance.zoomRaito;
        this.yPos -= e.getUIDelta().y * ZoomCamera.instance.zoomRaito;

        // if (this.xPos > 1000) {
        //     this.xPos = 1000;
        // }
        // else if (this.xPos < -1000) {
        //     this.xPos = -1000;
        // }
        // if (this.yPos > 1000) {
        //     this.yPos = 1000;
        // }
        // else if (this.yPos < -1000) {
        //     this.yPos = -1000;
        // }
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

    movie(position: Vec2) {
        this.xPos = position.x
        this.yPos = position.y
    }
}