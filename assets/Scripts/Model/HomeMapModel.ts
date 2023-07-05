import { _decorator, Component, Node, Sprite } from 'cc';
import { ObjectParameters } from '../ObjectParameters';
import { TypesObjects } from '../Static/TypesObjects';
import { HomeMapPresenter } from '../Presenter/HomeMapPresenter';
const { ccclass } = _decorator;

@ccclass('HomeMapModel')
export class HomeMapModel extends Component {

    public static instance: HomeMapModel

    public mapSize: number = 2000
    public numberOpenZones: number
    public parentSelectObject: Node
    public selectedObject: ObjectParameters
    public arrayObjectParameters: ObjectParameters[]
    public temporaryLocalStorage: ObjectParameters[]
    public coords: Node[]
    public spriteCoords: Sprite[]

    protected onLoad(): void {
        HomeMapModel.instance = this
        this.coords = new Array(this.mapSize)
        this.arrayObjectParameters = new Array(this.mapSize)
        this.temporaryLocalStorage = []
        this.spriteCoords = new Array(this.mapSize)
        this.assignStartingValues()
    }

    public assignStartingValues() {
        this.numberOpenZones = 0

        let arrayObjects = [
            {
                type: TypesObjects.RADAR,
                level: 1,
                index: 1580
            },
            {
                type: TypesObjects.WHOLE_MANIPULATOR,
                level: 1,
                index: 1381
            },
            {
                type: TypesObjects.TROOP_OVERLAND,
                level: 1,
                index: 1481
            },
            {
                type: TypesObjects.TROOP_OVERLAND,
                level: 1,
                index: 1482
            },
            {
                type: TypesObjects.TROOP_OVERLAND,
                level: 1,
                index: 1531
            },
            {
                type: TypesObjects.TROOP_OVERLAND,
                level: 1,
                index: 1532
            },
            {
                type: TypesObjects.TROOP_OVERLAND,
                level: 1,
                index: 1582
            }
        ]

        for (let i = 0; i < arrayObjects.length; i++) {
            let objParam = new ObjectParameters
            objParam.type = arrayObjects[i].type
            objParam.level = arrayObjects[i].level
            objParam.index = arrayObjects[i].index
            HomeMapPresenter.setObjectParameter(objParam, objParam.type, objParam.index)
        }
    }
}