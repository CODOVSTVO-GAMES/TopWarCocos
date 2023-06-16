import { _decorator, Component, Input, Node, Touch, Vec3 } from 'cc';
import { ObjectParameters } from './ObjectParameters';
import { TouchStatus } from './TouchStatus';
import { HighlightHomeMap } from './HomeBase/HighlightHomeMap';
import { ControllerHomeMapStorage } from './Storage/Controllers/ControllerHomeMapStorage';
import { TypesObjects } from './Static/TypesObjects';
import { ControllerCommandPostStorage } from './Storage/Controllers/ControllerCommandPostStorage';
import { ZoomCamera } from './Camera/ZoomCamera';
import { IndexesMap } from './Static/IndexesMap';
import { HomeMapStorage } from './Storage/HomeMapStorage';
import { FlightGameObjects } from './Animations/GameObjects/FlightGameObjects';
import { ControllerAutocombineStorage } from './Storage/Controllers/ControllerAutocombineStorage';
const { ccclass, property } = _decorator;

@ccclass('TouchObject')
export class TouchObject extends Component {

    @property({ type: Node })
    public touchObject: Node;

    @property({ type: Node })
    public mainObject: Node;

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters;

    private startPos: Vec3;
    private xPos: number;
    private yPos: number;
    private distanceChanges: number;
    private initialIndex: number;
    private isMove: boolean;

    onLoad() {
        this.touchObject.on(Input.EventType.TOUCH_START, this.touchStart, this);
        this.touchObject.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
        this.touchObject.on(Input.EventType.TOUCH_END, this.touchEnd, this);
    }

    onDestroy() {
        this.touchObject.off(Input.EventType.TOUCH_START, this.touchStart);
        this.touchObject.off(Input.EventType.TOUCH_MOVE, this.touchMove);
        this.touchObject.off(Input.EventType.TOUCH_END, this.touchEnd);
    }

    touchStart(e: Touch) {
        if (TouchStatus.instance.activeTouch == true && this.isMove) return;

        TouchStatus.instance.activeTouch = true;

        ControllerHomeMapStorage.onTransparencyObjects(this.objectParameters.type, this.objectParameters.level);
        ControllerHomeMapStorage.setObjectParameter(null, this.objectParameters.type, this.objectParameters.index);
        ControllerHomeMapStorage.putSelectObject();
        ControllerHomeMapStorage.setSelectObject(this.objectParameters);

        this.mainObject.setParent(ControllerHomeMapStorage.getParentObject(), true);
        this.objectParameters.getObjectInterface().openInterface(this.objectParameters);
        this.objectParameters.getArrowGameObject().activeArrow();

        if (this.objectParameters.getBarracksLogic()) {
            this.objectParameters.getBarracksLogic().openMessage();
        }

        this.startPos = new Vec3(this.mainObject.position);
        this.xPos = this.mainObject.position.x;
        this.yPos = this.mainObject.position.y;
        this.distanceChanges = 0;
        this.initialIndex = this.objectParameters.index;
        this.isMove = true;
    }

    touchMove(e: Touch) {
        if (TouchStatus.instance.activeTouch == false && this.isMove == false) return;

        this.xPos += (e.getUIDelta().x * ZoomCamera.instance.zoomRaito);
        this.yPos += (e.getUIDelta().y * ZoomCamera.instance.zoomRaito);

        this.mainObject.position = new Vec3(this.xPos, this.yPos, 0);

        if (this.distanceChanges < 12) {
            this.distanceChanges = Vec3.distance(this.mainObject.position, this.startPos);
        }
        else {
            HighlightHomeMap.openCell(this.objectParameters.type, this.objectParameters.location, this.objectParameters.level, this.mainObject.getWorldPosition());
        }
    }

    touchEnd() {
        if (TouchStatus.instance.activeTouch == false && this.isMove == false) return;

        this.processing();
        this.isMove = false;
        HighlightHomeMap.hideAllCoord();
        ControllerHomeMapStorage.offTransparencyObjects();
        TouchStatus.instance.activeTouch = false;
    }

    processing() {
        let minDistance = 100000;
        let indexObject = 0;

        for (let i = 0; i < ControllerHomeMapStorage.getMapSize(); i++) {
            let currentDistance = Vec3.distance(this.mainObject.position, ControllerHomeMapStorage.getCoordPosition(i));
            if (currentDistance < minDistance) {
                minDistance = currentDistance;
                indexObject = i;
                if (minDistance < 42) break;
            }
        }

        if (this.initialIndex == indexObject) {
            return this.putAnObject(indexObject);
        }

        let arrayIndexes = ControllerHomeMapStorage.getArrayObject(this.objectParameters.type);
        let count = 0;
        let indexMerge = 0;
        for (let i = 0; i < arrayIndexes.length; i++) {
            let tempObjParam = ControllerHomeMapStorage.getObjectParameter(indexObject - arrayIndexes[i])
            if (tempObjParam != null) {
                if (this.objectParameters.type == tempObjParam.type) {
                    if (this.objectParameters.level == tempObjParam.level) {
                        count += 1;
                        indexMerge = tempObjParam.index;
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
                if (this.objectParameters.level < ControllerCommandPostStorage.getLevelMergeGoldMine()) {
                    return this.mergeObject(indexMerge);
                }
            }
            else if (this.objectParameters.type == TypesObjects.TROOP_AIR) {
                if (this.objectParameters.level < ControllerCommandPostStorage.getLevelMergeTroopAir()) {
                    return this.mergeObject(indexMerge);
                }
            }
            else if (this.objectParameters.type == TypesObjects.TROOP_MARINE) {
                if (this.objectParameters.level < ControllerCommandPostStorage.getLevelMergeTroopMarine()) {
                    return this.mergeObject(indexMerge);
                }
            }
            else if (this.objectParameters.type == TypesObjects.TROOP_OVERLAND) {
                if (this.objectParameters.level < ControllerCommandPostStorage.getLevelMergeTroopOverland()) {
                    return this.mergeObject(indexMerge);
                }
            }
            else if (this.objectParameters.type == TypesObjects.BARRACKS_AIR) {
                if (this.objectParameters.level < ControllerCommandPostStorage.getLevelMergeBarracksAir()) {
                    return this.mergeObject(indexMerge);
                }
            }
            else if (this.objectParameters.type == TypesObjects.BARRACKS_MARINE) {
                if (this.objectParameters.level < ControllerCommandPostStorage.getLevelMergeBarracksMarine()) {
                    return this.mergeObject(indexMerge);
                }
            }
            else if (this.objectParameters.type == TypesObjects.BARRACKS_OVERLAND) {
                if (this.objectParameters.level < ControllerCommandPostStorage.getLevelMergeBarracksOverland()) {
                    return this.mergeObject(indexMerge);
                }
            }
            else {
                return this.putAnObject(this.initialIndex);
            }
        }

        if (this.objectParameters.sizes == "1x1") {
            if (IndexesMap.indexesMap[indexObject].location != this.objectParameters.location) {
                this.putAnObject(this.initialIndex);
            }
            else {
                this.putAnObject(indexObject);
            }
        }
        else if (this.objectParameters.sizes == "2x2") {
            if (indexObject % 50 == 0 || indexObject < 50) {
                this.putAnObject(this.initialIndex);
            }
            else {
                for (let i = 0; i < arrayIndexes.length; i++) {
                    if (IndexesMap.indexesMap[indexObject - arrayIndexes[i]].location != this.objectParameters.location) {
                        return this.putAnObject(this.initialIndex);
                    }
                }
                this.putAnObject(indexObject);
            }
        }
        else if (this.objectParameters.sizes == "3x2") {
            if (indexObject % 50 == 0 || indexObject < 100) {
                this.putAnObject(this.initialIndex);
            }
            else {
                for (let i = 0; i < arrayIndexes.length; i++) {
                    if (IndexesMap.indexesMap[indexObject - arrayIndexes[i]].location != this.objectParameters.location) {
                        return this.putAnObject(this.initialIndex);
                    }
                }
                this.putAnObject(indexObject);
            }
        }
        else if (this.objectParameters.sizes == "3x3") {
            if ((indexObject % 50 == 0 || (indexObject - 1) % 50 == 0) || indexObject < 100) {
                this.putAnObject(this.initialIndex);
            }
            else {
                for (let i = 0; i < arrayIndexes.length; i++) {
                    if (IndexesMap.indexesMap[indexObject - arrayIndexes[i]].location != this.objectParameters.location) {
                        return this.putAnObject(this.initialIndex);
                    }
                }
                this.putAnObject(indexObject);
            }
        }
    }

    mergeObject(index: number) {
        HomeMapStorage.instance.selectedObject = null;
        ControllerAutocombineStorage.deleteGoldMine(this.objectParameters.index);
        FlightGameObjects.instance.moveMerge(this.mainObject, index);
    }

    putAnObject(index: number) {
        if (this.objectParameters.type == TypesObjects.GOLD_MINE) {
            ControllerAutocombineStorage.updateIndexGoldMine(this.objectParameters.index, index);
        }
        this.objectParameters.index = index;
        if (this.initialIndex == index) {
            this.objectParameters.getObjectInterface().openInterface(this.objectParameters);
        }
        ControllerHomeMapStorage.setObjectParameter(this.objectParameters, this.objectParameters.type, index);
        FlightGameObjects.instance.moveToCell(this.mainObject, index);
    }
}