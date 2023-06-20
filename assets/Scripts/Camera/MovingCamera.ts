import { _decorator, Component, Input, Vec3, Touch, Node, Camera, Vec2 } from 'cc';
import { TouchStatus } from '../TouchStatus';
import { HomeMapStorageController } from '../Controllers/StorageControllers/HomeMapStorageController';
import { ZoomCamera } from './ZoomCamera';
import { SecondaryInterface } from '../UI/SecondaryInterface';
import { RedirectionToScene } from '../Other/RedirectionToScene';
import { GlobalMapStorageController } from '../Controllers/StorageControllers/GlobalMapStorageController';
import { MapService } from '../Controllers/NetworkControllers/MapService';
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

    private chunkId = '';

    public xPos: number;
    public yPos: number;
    public isMove: boolean;

    protected onLoad(): void {
        MovingCamera.instance = this
        if (RedirectionToScene.getSceneName() == 'HomeMap') {
            this.movie(new Vec2(100, -1000))
        }
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

        if (RedirectionToScene.getSceneName() != 'GlobalMap') {
            HomeMapStorageController.putSelectObject()
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


        if (RedirectionToScene.getSceneName() == 'GlobalMap') {
            if (this.xPos > 30000) {
                this.xPos = 30000;
            }
            else if (this.xPos < 0) {
                this.xPos = 0;
            }
            if (this.yPos > 30000) {
                this.yPos = 30000;
            }
            else if (this.yPos < 0) {
                this.yPos = 0;
            }
        }

        if (RedirectionToScene.getSceneName() == 'GlobalMap') {
            //доспавниваем карту

            const cellNumberX = Math.floor(this.camera.node.position.x / GlobalMapStorageController.widthCell)
            const chunkX = Math.floor(cellNumberX / GlobalMapStorageController.getChunksCells())

            const cellNumberY = Math.floor(this.camera.node.position.y / GlobalMapStorageController.lengthCell)
            const chunkY = Math.floor(cellNumberY / GlobalMapStorageController.getChunksCells())
            //номер клетки = координата камеры / размер клетки  
            //номер чанка = без остатка(номер клетки / размер чанка)

            const chunkId: string = chunkX.toString() + chunkY.toString()

            if (chunkId == this.chunkId) {
                return
            }
            else {
                MapService.getMap(chunkX, chunkY)
                this.chunkId = chunkId
                console.log('запрос')
            }
        }


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