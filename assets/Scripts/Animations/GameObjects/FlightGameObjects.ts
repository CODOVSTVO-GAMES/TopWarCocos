import { _decorator, Component, Node, Vec3 } from 'cc';
import { ControllerHomeMapStorage } from '../../Storage/Controllers/ControllerHomeMapStorage';
import { HomeMapStorage } from '../../Storage/HomeMapStorage';
const { ccclass, property } = _decorator;

@ccclass('FlightGameObjects')
export class FlightGameObjects extends Component {

    public static instance: FlightGameObjects;

    public trigger: boolean = false;
    public triggerMerge: boolean = false;
    public triggerSeparate: boolean = false;

    private object_1: Node;
    private object_2: Node;
    private speed: number = 20;
    private index: number = 0;
    private toPos: Vec3;

    onLoad() {
        FlightGameObjects.instance = this;
    }

    moveToCell(object: Node, index: number) {
        this.index = index;
        this.object_1 = object;
        this.toPos = ControllerHomeMapStorage.getCoordWorldPosition(index);
        this.trigger = true;
    }

    moveMerge(object_1: Node, index: number) {
        this.object_1 = object_1;
        let objectParameters = ControllerHomeMapStorage.getObjectParameter(index);
        console.log(objectParameters);
        this.object_2 = objectParameters.nodeObject;
        this.index = objectParameters.index;
        this.toPos = ControllerHomeMapStorage.getCoordWorldPosition(index);
        this.triggerMerge = true;
        this.triggerSeparate = false;
        console.log("Merge " + index);
    }

    update(dt: number) {
        if (this.trigger == true) {
            let pos1 = this.object_1.getWorldPosition()
            this.object_1.setWorldPosition(
                this.getLerp(pos1.x, this.toPos.x, dt * this.speed),
                this.getLerp(pos1.y, this.toPos.y, dt * this.speed),
                0);
            if (Vec3.distance(pos1, this.toPos) < 0.5) { this.trigger = false; }
        }
        if (this.triggerMerge == true) {
            if (this.triggerSeparate == false) {
                let pos1 = this.object_1.getWorldPosition();
                let pos2 = this.object_2.getWorldPosition();
                this.object_1.setWorldPosition(
                    this.getLerp(pos1.x, this.toPos.x + 150, dt * this.speed),
                    this.getLerp(pos1.y, this.toPos.y, dt * this.speed),
                    0);
                this.object_2.setWorldPosition(
                    this.getLerp(pos2.x, this.toPos.x - 150, dt * this.speed),
                    this.getLerp(pos2.y, this.toPos.y, dt * this.speed),
                    0);
                if (Math.abs(pos1.x - (this.toPos.x + 150)) < 0.5 && Math.abs(pos1.y - this.toPos.y) < 0.5 && Math.abs(pos2.x - (this.toPos.x - 150)) < 0.5 && Math.abs(pos2.y - this.toPos.y) < 0.5) { this.triggerSeparate = true; }
            }
            else if (this.triggerSeparate == true) {
                let pos1 = this.object_1.getWorldPosition();
                let pos2 = this.object_2.getWorldPosition();
                this.object_1.setWorldPosition(
                    this.getLerp(pos1.x, this.toPos.x, dt * this.speed),
                    this.getLerp(pos1.y, this.toPos.y, dt * this.speed),
                    0);
                this.object_2.setWorldPosition(
                    this.getLerp(pos2.x, this.toPos.x, dt * this.speed),
                    this.getLerp(pos2.y, this.toPos.y, dt * this.speed),
                    0);
                if (Vec3.distance(pos1, this.toPos) < 0.5 && Vec3.distance(pos2, this.toPos) < 0.5) {
                    this.triggerMerge = false;
                    ControllerHomeMapStorage.upgradeLevelObject(this.index);
                    this.object_1.destroy();
                }
            }
        }
    }

    triggersFalse() {
        this.trigger = false;
        this.triggerMerge = false;
    }

    getLerp(one: number, two: number, current: number) {
        return one + (two - one) * current;
    }
}