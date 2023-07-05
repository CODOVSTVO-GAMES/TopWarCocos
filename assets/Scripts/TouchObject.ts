import { _decorator, Component, Input, Node, Touch, Vec3 } from 'cc';
import { ObjectParameters } from './ObjectParameters';
import { TouchStatus } from './TouchStatus';
import { HighlightHomeMap } from './HomeBase/HighlightHomeMap';
import { TypesObjects } from './Static/TypesObjects';
import { ZoomCamera } from './Camera/ZoomCamera';
import { HomeMapStructure } from './Static/HomeMapStructure';
import { FlightGameObjects } from './Animations/GameObjects/FlightGameObjects';
import { BarracksLogic } from './Logic/BarracksLogic';
import { TasksGameLogic } from './Logic/TasksGameLogic';
import { TypesTasksGame } from './Static/TypesTasksGame';
import { CommandPostPresenter } from './Presenter/CommandPostPresenter';
import { HomeMapPresenter } from './Presenter/HomeMapPresenter';
import { HomeMapModel } from './Model/HomeMapModel';
import { AutocombinePresenter } from './Presenter/AutocombinePresenter';
const { ccclass, property } = _decorator;

@ccclass('TouchObject')
export class TouchObject extends Component {

    @property({ type: Node })
    public touchObject: Node

    @property({ type: Node })
    public mainObject: Node

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters

    private startPos: Vec3
    private xPos: number
    private yPos: number
    private distanceChanges: number
    private initialIndex: number

    public onLoad() {
        this.touchObject.on(Input.EventType.TOUCH_START, this.touchStart, this)
        this.touchObject.on(Input.EventType.TOUCH_MOVE, this.touchMove, this)
        this.touchObject.on(Input.EventType.TOUCH_END, this.touchEnd, this)
    }

    public onDestroy() {
        this.touchObject.off(Input.EventType.TOUCH_START, this.touchStart)
        this.touchObject.off(Input.EventType.TOUCH_MOVE, this.touchMove)
        this.touchObject.off(Input.EventType.TOUCH_END, this.touchEnd)
    }

    private touchStart() {
        if (TouchStatus.instance.activeTouch == true) return

        TouchStatus.instance.activeTouch = true

        HomeMapPresenter.onTransparencyObjects(this.objectParameters.type, this.objectParameters.level)
        HomeMapPresenter.setObjectParameter(null, this.objectParameters.type, this.objectParameters.index)
        HomeMapPresenter.putSelectObject()
        HomeMapPresenter.setSelectObject(this.objectParameters)

        this.mainObject.setParent(HomeMapPresenter.getParentObject(), true)
        this.objectParameters.getObjectInterface().openInterface()

        if (this.objectParameters.getArrowGameObject()) {
            this.objectParameters.getArrowGameObject().activeArrow()
        }

        this.startPos = new Vec3(this.mainObject.position)
        this.xPos = this.mainObject.position.x
        this.yPos = this.mainObject.position.y
        this.distanceChanges = 0
        this.initialIndex = this.objectParameters.index
    }

    private touchMove(e: Touch) {
        if (TouchStatus.instance.activeTouch == false) return

        this.xPos += (e.getUIDelta().x * ZoomCamera.instance.zoomRaito)
        this.yPos += (e.getUIDelta().y * ZoomCamera.instance.zoomRaito)

        this.mainObject.position = new Vec3(this.xPos, this.yPos, 0)

        if (this.distanceChanges < 12) {
            this.distanceChanges = Vec3.distance(this.mainObject.position, this.startPos)
        }
        else {
            HighlightHomeMap.openCell(this.objectParameters.type, this.objectParameters.location, this.objectParameters.level, this.mainObject.getWorldPosition())
        }
    }

    private touchEnd() {
        if (TouchStatus.instance.activeTouch == false) return

        this.processing()
        HighlightHomeMap.hideAllCoord()
        HomeMapPresenter.offTransparencyObjects()
        TouchStatus.instance.activeTouch = false
    }

    private processing() {
        let indexObject = this.searchNearestCoord()

        if (this.initialIndex == indexObject) {
            return this.putAnObject(indexObject)
        }

        let arrayIndexes = HomeMapPresenter.getArrayObject(this.objectParameters.type)

        if (this.searchAvailableMerge(indexObject, arrayIndexes)) {
            return
        }

        for (let i = 0; i < arrayIndexes.length; i++) {
            if (HomeMapStructure.structure[indexObject - arrayIndexes[i]].location != this.objectParameters.location) {
                return this.putAnObject(this.initialIndex)
            }
            else if (HomeMapStructure.structure[indexObject - arrayIndexes[i]].numberZone > HomeMapModel.instance.numberOpenZones) {
                return this.putAnObject(this.initialIndex)
            }
            else {
                if (this.objectParameters.sizes == "2x2") {
                    if (indexObject % 50 == 0 || indexObject < 50) {
                        return this.putAnObject(this.initialIndex)
                    }
                }
                else if (this.objectParameters.sizes == "3x2") {
                    if (indexObject % 50 == 0 || indexObject < 50) {
                        return this.putAnObject(this.initialIndex)
                    }
                }
                else if (this.objectParameters.sizes == "3x3") {
                    if ((indexObject % 50 == 0 || (indexObject - 1) % 50 == 0) || indexObject < 100) {
                        return this.putAnObject(this.initialIndex)
                    }
                }
            }
        }
        this.putAnObject(indexObject)
    }

    private searchNearestCoord(): number {
        let minDistance = 100000
        let indexObject = 0
        for (let i = 0; i < HomeMapPresenter.getMapSize(); i++) {
            let currentDistance = Vec3.distance(this.mainObject.position, HomeMapPresenter.getCoordPosition(i))
            if (currentDistance < minDistance) {
                minDistance = currentDistance
                indexObject = i
                if (minDistance < 42) break
            }
        }
        return indexObject
    }

    private searchAvailableMerge(indexObject: number, arrayIndexes: number[]): boolean {
        let quantityMatches = 0
        let indexMerge = 0
        for (let i = 0; i < arrayIndexes.length; i++) {
            let nearbyObjectParameters = HomeMapPresenter.getObjectParameter(indexObject - arrayIndexes[i])
            if (nearbyObjectParameters != null) {
                if (this.objectParameters.type == nearbyObjectParameters.type) {
                    if (this.objectParameters.level == nearbyObjectParameters.level) {
                        quantityMatches += 1
                        indexMerge = nearbyObjectParameters.index
                    }
                    else {
                        this.putAnObject(this.initialIndex)
                        return true
                    }
                }
                else {
                    this.putAnObject(this.initialIndex)
                    return true
                }
            }
        }

        if (quantityMatches > 0) {
            if (CommandPostPresenter.getLevelAllMerge(this.objectParameters.type) > 0) {
                if (this.objectParameters.level < CommandPostPresenter.getLevelAllMerge(this.objectParameters.type)) {
                    this.mergeObject(indexMerge)
                    return true
                }
            }
            else {
                this.putAnObject(this.initialIndex)
                return true
            }
        }
        else {
            return false
        }
    }

    private mergeObject(index: number) {
        HomeMapModel.instance.selectedObject = null
        BarracksLogic.instance.deleteBarrack(this.objectParameters.index)
        AutocombinePresenter.deleteGoldMine(this.objectParameters.index)
        if (this.objectParameters.type == TypesObjects.GOLD_MINE) {
            TasksGameLogic.instance.checkTask(TypesTasksGame.MERGE_GOLD_MINE, this.objectParameters.level, 1)
        }
        if (this.objectParameters.type == TypesObjects.BARRACKS_AIR) {
            TasksGameLogic.instance.checkTask(TypesTasksGame.MERGE_BARRACK_AIR, this.objectParameters.level, 1)
        }
        if (this.objectParameters.type == TypesObjects.BARRACKS_MARINE) {
            TasksGameLogic.instance.checkTask(TypesTasksGame.MERGE_BARRACK_MARINE, this.objectParameters.level, 1)
        }
        if (this.objectParameters.type == TypesObjects.BARRACKS_OVERLAND) {
            TasksGameLogic.instance.checkTask(TypesTasksGame.MERGE_BARRACK_OVERLAND, this.objectParameters.level, 1)
        }
        FlightGameObjects.instance.moveMerge(this.mainObject, index)
    }

    private putAnObject(index: number) {
        if (this.objectParameters.type == TypesObjects.BARRACKS_AIR || this.objectParameters.type == TypesObjects.BARRACKS_MARINE || this.objectParameters.type == TypesObjects.BARRACKS_OVERLAND) {
            BarracksLogic.instance.updateIndexBarrack(this.objectParameters.index, index)
        }
        else if (this.objectParameters.type == TypesObjects.GOLD_MINE) {
            AutocombinePresenter.updateIndexGoldMine(this.objectParameters.index, index)
        }
        this.objectParameters.index = index
        HomeMapPresenter.setObjectParameter(this.objectParameters, this.objectParameters.type, index)
        FlightGameObjects.instance.moveToCell(this.mainObject, index)
    }
}