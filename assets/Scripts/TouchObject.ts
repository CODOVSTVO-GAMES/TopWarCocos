import { _decorator, Component, Input, Node, Touch, Vec3 } from 'cc';
import { ObjectParameters } from './ObjectParameters';
import { TouchStatus } from './TouchStatus';
import { HighlightHomeMap } from './HomeBase/HighlightHomeMap';
import { ControllerHomeMapStorage } from './Storage/Controllers/ControllerHomeMapStorage';
import { TypesObjects } from './Static/TypesObjects';
import { ControllerCommandPostStorage } from './Storage/Controllers/ControllerCommandPostStorage';
import { ZoomCamera } from './Camera/ZoomCamera';
const { ccclass, property } = _decorator;

@ccclass('TouchObject')
export class TouchObject extends Component {

    @property({ type: Node })
    public touchObject: Node;

    @property({ type: Node })
    public mainObject: Node;

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    public xPos: number;
    public yPos: number;
    public initialIndex: number;
    public isProcessing: boolean;
    public isMove: boolean;

    onLoad() {
        this.touchObject.on(Input.EventType.TOUCH_START, this.touchStart, this);
        this.touchObject.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
        this.touchObject.on(Input.EventType.TOUCH_END, this.touchEnd, this);
        this.touchObject.on(Input.EventType.TOUCH_CANCEL, this.touchCancel, this);
    }

    onDestroy() {
        this.touchObject.off(Input.EventType.TOUCH_START, this.touchStart);
        this.touchObject.off(Input.EventType.TOUCH_MOVE, this.touchMove);
        this.touchObject.off(Input.EventType.TOUCH_END, this.touchEnd);
        this.touchObject.off(Input.EventType.TOUCH_CANCEL, this.touchCancel);
    }

    touchStart(e: Touch) {
        if (TouchStatus.instance.activeTouch == true && this.isMove) return;

        TouchStatus.instance.activeTouch = true;
        ControllerHomeMapStorage.onTransparencyObjects();
        ControllerHomeMapStorage.setObjectParameter(null, this.objectParameters.type, this.objectParameters.index);
        ControllerHomeMapStorage.setSelectObject(this.objectParameters);

        HighlightHomeMap.openCell(this.objectParameters.type, this.objectParameters.level, this.mainObject.getWorldPosition());

        this.mainObject.setParent(ControllerHomeMapStorage.getParentObject(), true);
        this.objectParameters.getObjectInterface().openInterface(this.objectParameters);

        this.xPos = this.mainObject.position.x;
        this.yPos = this.mainObject.position.y;
        this.initialIndex = this.objectParameters.index;
        this.isProcessing = true;
        this.isMove = true;
    }

    touchMove(e: Touch) {
        if (TouchStatus.instance.activeTouch == false && this.isMove == false) return;

        this.xPos += (e.getUIDelta().x * ZoomCamera.instance.zoomRaito);
        this.yPos += (e.getUIDelta().y * ZoomCamera.instance.zoomRaito);

        this.mainObject.position = new Vec3(this.xPos, this.yPos, 0);

        HighlightHomeMap.openCell(this.objectParameters.type, this.objectParameters.level, this.mainObject.getWorldPosition());
    }

    touchEnd() {
        if (TouchStatus.instance.activeTouch == false && this.isMove == false) return;

        this.processing();
        this.isMove = false;
        HighlightHomeMap.closeSpriteCoord();
        ControllerHomeMapStorage.offTransparencyObjects();
        TouchStatus.instance.activeTouch = false;
    }

    touchCancel() {
        if (TouchStatus.instance.activeTouch == false && this.isMove == false) return;

        this.processing();
        this.isMove = false;
        HighlightHomeMap.closeSpriteCoord();
        ControllerHomeMapStorage.offTransparencyObjects();
        TouchStatus.instance.activeTouch = false;
    }

    processing() {
        if (this.isProcessing == false) return;
        this.isProcessing = false;

        let minDistance = 100000;
        let indexObject = 0;

        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            let currentDistance = Vec3.distance(this.mainObject.position, ControllerHomeMapStorage.getCoordPosition(i));
            if (currentDistance < minDistance) {
                minDistance = currentDistance;
                indexObject = i;
            }
        }

        if (this.initialIndex == indexObject) {
            return this.putAnObject(indexObject);
        }

        let arrayIndexs = ControllerHomeMapStorage.getArrayIndexs(this.objectParameters.type);
        let count = 0;
        let indexMerge = 0;
        for (let i = 0; i < arrayIndexs.length; i++) {
            let tempObjParam = ControllerHomeMapStorage.getObjectParameter(indexObject - arrayIndexs[i])
            if (tempObjParam != null) {
                if (this.objectParameters.type == tempObjParam.type) {
                    if (this.objectParameters.level == tempObjParam.level) {
                        count += 1;
                        indexMerge = i;
                    }
                    else {
                        return this.putAnObject(this.initialIndex);
                    }
                }
                else {
                    return this.putAnObject(this.initialIndex);
                }
            }
        }

        if (count > 0) {
            if (this.objectParameters.type == TypesObjects.GOLD_MINE) {
                if (this.objectParameters.level < ControllerCommandPostStorage.getLevelMergeGoldMine()) this.mergeObject(indexObject - arrayIndexs[indexMerge]);
            }
            else if (this.objectParameters.type == TypesObjects.TROOP_AIR) {
                if (this.objectParameters.level < ControllerCommandPostStorage.getLevelMergeTroopAir()) this.mergeObject(indexObject - arrayIndexs[indexMerge]);
            }
            else if (this.objectParameters.type == TypesObjects.TROOP_MARINE) {
                if (this.objectParameters.level < ControllerCommandPostStorage.getLevelMergeTroopMarine()) this.mergeObject(indexObject - arrayIndexs[indexMerge]);
            }
            else if (this.objectParameters.type == TypesObjects.TROOP_OVERLAND) {
                if (this.objectParameters.level < ControllerCommandPostStorage.getLevelMergeTroopOverland()) this.mergeObject(indexObject - arrayIndexs[indexMerge]);
            }
            else if (this.objectParameters.type == TypesObjects.BARRACKS_AIR) {
                if (this.objectParameters.level < ControllerCommandPostStorage.getLevelMergeBarracksAir()) this.mergeObject(indexObject - arrayIndexs[indexMerge]);
            }
            else if (this.objectParameters.type == TypesObjects.BARRACKS_MARINE) {
                if (this.objectParameters.level < ControllerCommandPostStorage.getLevelMergeBarracksMarine()) this.mergeObject(indexObject - arrayIndexs[indexMerge]);
            }
            else if (this.objectParameters.type == TypesObjects.BARRACKS_OVERLAND) {
                if (this.objectParameters.level < ControllerCommandPostStorage.getLevelMergeBarracksOverland()) this.mergeObject(indexObject - arrayIndexs[indexMerge]);
            }
            else {
                this.putAnObject(this.initialIndex);
            }
        }
        else {
            this.putAnObject(indexObject);
        }
    }

    mergeObject(index: number) {
        ControllerHomeMapStorage.upgradeLevel(index);
        this.mainObject.destroy();
    }

    putAnObject(index: number) {
        this.objectParameters.index = index;
        if (this.initialIndex == index) {
            this.objectParameters.getObjectInterface().openInterface(this.objectParameters);
        }
        ControllerHomeMapStorage.setObjectParameter(this.objectParameters, this.objectParameters.type, index);
        this.mainObject.setParent(ControllerHomeMapStorage.getCoord(index));
        this.mainObject.position = Vec3.ZERO;
    }
}