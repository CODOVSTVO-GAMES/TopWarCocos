import { _decorator, Component, Input, Node, Touch, Vec3 } from 'cc';
import { ObjectParameters } from './ObjectParameters';
import { TouchStatus } from './TouchStatus';
import { HighlightHomeMap } from './HomeBase/HighlightHomeMap';
import { ControllerHomeMapStorage } from './Storage/Controllers/ControllerHomeMapStorage';
import { TypesObjects } from './Static/TypesObjects';
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

    touchStart() {
        if (TouchStatus.instance.activeTouch == true && this.isMove) return;

        TouchStatus.instance.activeTouch = true;
        ControllerHomeMapStorage.onTransparencyObjects();
        ControllerHomeMapStorage.setObjectParameter(null, this.objectParameters.type, this.objectParameters.index);
        ControllerHomeMapStorage.setSelectObject(this.objectParameters);
        HighlightHomeMap.openCellFree();

        ControllerHomeMapStorage.closeInterface();

        HighlightHomeMap.closeCellSelected();
        HighlightHomeMap.closeCellBlock();
        HighlightHomeMap.openCellHint(this.objectParameters.type, this.objectParameters.level);
        HighlightHomeMap.openCellSelected(this.objectParameters.type, this.mainObject.getWorldPosition());

        this.mainObject.setParent(ControllerHomeMapStorage.getParentObject(), true);
        this.xPos = this.mainObject.position.x;
        this.yPos = this.mainObject.position.y;
        this.initialIndex = this.objectParameters.index;
        this.isProcessing = true;
        this.isMove = true;
    }

    touchMove(e: Touch) {
        if (TouchStatus.instance.activeTouch == false && this.isMove == false) return;

        this.xPos += (e.getDelta().x * 2);
        this.yPos += (e.getDelta().y * 2);

        this.mainObject.position = new Vec3(this.xPos, this.yPos, 0);
        HighlightHomeMap.closeCellSelected();
        HighlightHomeMap.closeCellBlock();
        HighlightHomeMap.closeCellHint();
        HighlightHomeMap.openCellHint(this.objectParameters.type, this.objectParameters.level);
        HighlightHomeMap.openCellSelected(this.objectParameters.type, this.mainObject.getWorldPosition());
    }

    touchEnd() {
        if (TouchStatus.instance.activeTouch == false && this.isMove == false) return;

        this.processing();
        this.isMove = false;
        HighlightHomeMap.closeCellFree();
        HighlightHomeMap.closeCellSelected();
        HighlightHomeMap.closeCellBlock();
        HighlightHomeMap.closeCellHint();
        ControllerHomeMapStorage.offTransparencyObjects();
        TouchStatus.instance.activeTouch = false;
    }

    touchCancel() {
        if (TouchStatus.instance.activeTouch == false && this.isMove == false) return;

        this.processing();
        this.isMove = false;
        HighlightHomeMap.closeCellFree();
        HighlightHomeMap.closeCellSelected();
        HighlightHomeMap.closeCellBlock();
        HighlightHomeMap.closeCellHint();
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
            if (ControllerHomeMapStorage.getObjectParameter(indexObject - arrayIndexs[i]) != null) {
                if (this.objectParameters.type == ControllerHomeMapStorage.getObjectParameter(indexObject - arrayIndexs[i]).type) {
                    if (this.objectParameters.level == ControllerHomeMapStorage.getObjectParameter(indexObject - arrayIndexs[i]).level) {


                        //В дальнейшем это условие можно будет удалить
                        if (
                            this.objectParameters.type != TypesObjects.TOWN_HALL &&
                            this.objectParameters.type != TypesObjects.BANK &&
                            this.objectParameters.type != TypesObjects.AUTOCOMBINE &&
                            this.objectParameters.type != TypesObjects.RADAR &&
                            this.objectParameters.type != TypesObjects.TREASURES &&
                            this.objectParameters.type != TypesObjects.MANIPULATOR &&
                            this.objectParameters.type != TypesObjects.REPAIR_SHOP &&
                            this.objectParameters.type != TypesObjects.LOBBY_WARS &&
                            this.objectParameters.type != TypesObjects.BULLETIN_BOARD &&
                            this.objectParameters.type != TypesObjects.WALL &&
                            this.objectParameters.type != TypesObjects.BATTLE
                        ) {
                            count += 1;
                            indexMerge = i;
                        }



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
            ControllerHomeMapStorage.upgradeLevel(indexObject - arrayIndexs[indexMerge]);
            // ControllerHomeMapStorage.deleteSelectObject();
            this.mainObject.destroy();
        }
        else {
            this.putAnObject(indexObject);
        }
    }

    putAnObject(index: number) {
        this.objectParameters.index = index;
        if (this.initialIndex == index) {
            this.objectParameters.getObjectInterface().openInterface(this.objectParameters);
        }
        ControllerHomeMapStorage.setObjectParameter(this.objectParameters, this.objectParameters.type, index);
        // ControllerHomeMapStorage.deleteSelectObject();
        this.mainObject.setParent(ControllerHomeMapStorage.getCoord(index));
        this.mainObject.position = Vec3.ZERO;
    }
}