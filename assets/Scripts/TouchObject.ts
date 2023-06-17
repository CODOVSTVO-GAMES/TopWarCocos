import { _decorator, Component, Input, Node, Touch, Vec3 } from 'cc';
import { ObjectParameters } from './ObjectParameters';
import { TouchStatus } from './TouchStatus';
import { HighlightHomeMap } from './HomeBase/HighlightHomeMap';
import { HomeMapStorageController } from './Controllers/HomeMapStorageController';
import { TypesObjects } from './Static/TypesObjects';
import { ZoomCamera } from './Camera/ZoomCamera';
import { IndexesMap } from './Static/IndexesMap';
import { HomeMapStorage } from './Storage/HomeMapStorage';
import { FlightGameObjects } from './Animations/GameObjects/FlightGameObjects';
import { AutocombineStorageController } from './Controllers/StorageControllers/AutocombineStorageController';
import { CommandPostStorageController } from './Controllers/CommandPostStorageController';
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

    public onLoad() {
        this.touchObject.on(Input.EventType.TOUCH_START, this.touchStart, this);
        this.touchObject.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
        this.touchObject.on(Input.EventType.TOUCH_END, this.touchEnd, this);
    }

    public onDestroy() {
        this.touchObject.off(Input.EventType.TOUCH_START, this.touchStart);
        this.touchObject.off(Input.EventType.TOUCH_MOVE, this.touchMove);
        this.touchObject.off(Input.EventType.TOUCH_END, this.touchEnd);
    }

    private touchStart() {
        if (TouchStatus.instance.activeTouch == true) return;

        TouchStatus.instance.activeTouch = true;

        HomeMapStorageController.onTransparencyObjects(this.objectParameters.type, this.objectParameters.level);
        HomeMapStorageController.setObjectParameter(null, this.objectParameters.type, this.objectParameters.index);
        HomeMapStorageController.putSelectObject();
        HomeMapStorageController.setSelectObject(this.objectParameters);

        this.mainObject.setParent(HomeMapStorageController.getParentObject(), true);
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
    }

    private touchMove(e: Touch) {
        if (TouchStatus.instance.activeTouch == false) return;

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

    private touchEnd() {
        if (TouchStatus.instance.activeTouch == false) return;

        this.processing();
        HighlightHomeMap.hideAllCoord();
        HomeMapStorageController.offTransparencyObjects();
        TouchStatus.instance.activeTouch = false;
    }

    private processing() {
        let indexObject = this.searchNearestCoord();

        if (this.initialIndex == indexObject) {
            return this.putAnObject(indexObject);
        }

        let arrayIndexes = HomeMapStorageController.getArrayObject(this.objectParameters.type);

        if (this.searchAvailableMerge(indexObject, arrayIndexes)) {
            return;
        }

        for (let i = 0; i < arrayIndexes.length; i++) {
            if (IndexesMap.indexesMap[indexObject - arrayIndexes[i]].location != this.objectParameters.location) {
                return this.putAnObject(this.initialIndex);
            }
            else {
                if (this.objectParameters.sizes == "2x2") {
                    if (indexObject % 50 == 0 || indexObject < 50) {
                        return this.putAnObject(this.initialIndex);
                    }
                }
                else if (this.objectParameters.sizes == "3x2") {
                    if (indexObject % 50 == 0 || indexObject < 50) {
                        return this.putAnObject(this.initialIndex);
                    }
                }
                else if (this.objectParameters.sizes == "3x3") {
                    if ((indexObject % 50 == 0 || (indexObject - 1) % 50 == 0) || indexObject < 100) {
                        return this.putAnObject(this.initialIndex);
                    }
                }
            }
        }
        this.putAnObject(indexObject);
    }

    private searchNearestCoord(): number {
        let minDistance = 100000;
        let indexObject = 0;
        for (let i = 0; i < HomeMapStorageController.getMapSize(); i++) {
            let currentDistance = Vec3.distance(this.mainObject.position, HomeMapStorageController.getCoordPosition(i));
            if (currentDistance < minDistance) {
                minDistance = currentDistance;
                indexObject = i;
                if (minDistance < 42) break;
            }
        }
        return indexObject;
    }

    private searchAvailableMerge(indexObject: number, arrayIndexes: number[]): boolean {
        let quantityMatches = 0;
        let indexMerge = 0;
        for (let i = 0; i < arrayIndexes.length; i++) {
            let nearbyObjectParameters = HomeMapStorageController.getObjectParameter(indexObject - arrayIndexes[i])
            if (nearbyObjectParameters != null) {
                if (this.objectParameters.type == nearbyObjectParameters.type) {
                    if (this.objectParameters.level == nearbyObjectParameters.level) {
                        quantityMatches += 1;
                        indexMerge = nearbyObjectParameters.index;
                    }
                    else {
                        this.putAnObject(this.initialIndex);
                        return false;
                    }
                }
                else {
                    this.putAnObject(this.initialIndex);
                    return false;
                }
            }
        }

        if (quantityMatches > 0) {
            if (this.objectParameters.type == TypesObjects.GOLD_MINE) {
                if (this.objectParameters.level < CommandPostStorageController.getLevelMergeGoldMine()) {
                    this.mergeObject(indexMerge);
                    return true;
                }
            }
            else if (this.objectParameters.type == TypesObjects.TROOP_AIR) {
                if (this.objectParameters.level < CommandPostStorageController.getLevelMergeTroopAir()) {
                    this.mergeObject(indexMerge);
                    return true;
                }
            }
            else if (this.objectParameters.type == TypesObjects.TROOP_MARINE) {
                if (this.objectParameters.level < CommandPostStorageController.getLevelMergeTroopMarine()) {
                    this.mergeObject(indexMerge);
                    return true;
                }
            }
            else if (this.objectParameters.type == TypesObjects.TROOP_OVERLAND) {
                if (this.objectParameters.level < CommandPostStorageController.getLevelMergeTroopOverland()) {
                    this.mergeObject(indexMerge);
                    return true;
                }
            }
            else if (this.objectParameters.type == TypesObjects.BARRACKS_AIR) {
                if (this.objectParameters.level < CommandPostStorageController.getLevelMergeBarracksAir()) {
                    this.mergeObject(indexMerge);
                    return true;
                }
            }
            else if (this.objectParameters.type == TypesObjects.BARRACKS_MARINE) {
                if (this.objectParameters.level < CommandPostStorageController.getLevelMergeBarracksMarine()) {
                    this.mergeObject(indexMerge);
                    return true;
                }
            }
            else if (this.objectParameters.type == TypesObjects.BARRACKS_OVERLAND) {
                if (this.objectParameters.level < CommandPostStorageController.getLevelMergeBarracksOverland()) {
                    this.mergeObject(indexMerge);
                    return true;
                }
            }
            else {
                this.putAnObject(this.initialIndex);
                return false;
            }
        }
    }


    private alo(indexMerge: number): boolean {
        this.mergeObject(indexMerge);
        return true;
    }

    private mergeObject(index: number) {
        HomeMapStorage.instance.selectedObject = null;
        AutocombineStorageController.deleteGoldMine(this.objectParameters.index);
        FlightGameObjects.instance.moveMerge(this.mainObject, index);
    }

    private putAnObject(index: number) {
        if (this.objectParameters.type == TypesObjects.GOLD_MINE) {
            AutocombineStorageController.updateIndexGoldMine(this.objectParameters.index, index);
        }
        this.objectParameters.index = index;
        HomeMapStorageController.setObjectParameter(this.objectParameters, this.objectParameters.type, index);
        FlightGameObjects.instance.moveToCell(this.mainObject, index);
    }
}