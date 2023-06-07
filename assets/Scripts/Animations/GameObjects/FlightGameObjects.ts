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
        this.toPos = ControllerHomeMapStorage.getCoordPosition(index);
        this.trigger = true;
        console.log(object.position + " " + this.toPos);
    }

    moveMerge(object_1: Node, index: number) {
        this.index = index;
        this.object_1 = object_1;
        this.object_2 = ControllerHomeMapStorage.getObjectParameter(index).nodeObject;
        this.toPos = ControllerHomeMapStorage.getCoordWorldPosition(index);
        this.triggerMerge = true;
        this.triggerSeparate = false;
        console.log(index + " " + object_1.getWorldPosition() + " " + this.object_2.getWorldPosition() + " " + this.toPos);
    }

    update(dt: number) {
        if (this.trigger == true) {
            console.log("MOOOOOOVEToCell");
            this.object_1.setWorldPosition(
                this.getLerp(this.object_1.getWorldPosition().x, this.toPos.x, dt * this.speed),
                this.getLerp(this.object_1.getWorldPosition().y, this.toPos.y, dt * this.speed),
                0);
            if (Vec3.distance(this.object_1.getWorldPosition(), this.toPos) < 0.5) {
                this.trigger = false;
                ControllerHomeMapStorage.upgradeLevelObject(this.index);
                HomeMapStorage.instance.selectedObject = null;
                this.object_1.destroy();
            }
        }
        if (this.triggerMerge == true) {
            console.log("moveMerge");
            if (this.triggerSeparate == false) {
                this.object_1.setWorldPosition(
                    this.getLerp(this.object_1.getWorldPosition().x, this.toPos.x + 150, dt * this.speed),
                    this.getLerp(this.object_1.getWorldPosition().y, this.toPos.y, dt * this.speed),
                    0);
                this.object_2.setWorldPosition(
                    this.getLerp(this.object_2.getWorldPosition().x, this.toPos.x - 150, dt * this.speed),
                    this.getLerp(this.object_2.getWorldPosition().y, this.toPos.y, dt * this.speed),
                    0);
                console.log(Math.abs(this.object_1.getWorldPosition().x - (this.toPos.x + 150)) + " " + Math.abs(this.object_2.getWorldPosition().x - (this.toPos.x - 150)))
                if (Math.abs(this.object_1.getWorldPosition().x - (this.toPos.x + 150)) < 0.5 && Math.abs(this.object_1.getWorldPosition().y - this.toPos.y) < 0.5 && Math.abs(this.object_2.getWorldPosition().x - (this.toPos.x - 150)) < 0.5 && Math.abs(this.object_2.getWorldPosition().y - this.toPos.y) < 0.5) { this.triggerSeparate = true; }
            }
            else if (this.triggerSeparate == true) {
                this.object_1.setWorldPosition(
                    this.getLerp(this.object_1.getWorldPosition().x, this.toPos.x, dt * this.speed),
                    this.getLerp(this.object_1.getWorldPosition().y, this.toPos.y, dt * this.speed),
                    0);
                this.object_2.setWorldPosition(
                    this.getLerp(this.object_2.getWorldPosition().x, this.toPos.x, dt * this.speed),
                    this.getLerp(this.object_2.getWorldPosition().y, this.toPos.y, dt * this.speed),
                    0);
                console.log(Vec3.distance(this.object_1.getWorldPosition(), this.toPos) + " " + Math.abs(this.object_2.getWorldPosition().x - this.toPos.x))
                if (Math.abs(this.object_1.getWorldPosition().x - this.toPos.x) < 0.5 && Math.abs(this.object_1.getWorldPosition().y - this.toPos.y) < 0.5 && Math.abs(this.object_2.getWorldPosition().x - this.toPos.x) < 0.5 && Math.abs(this.object_2.getWorldPosition().y - this.toPos.y) < 0.5) {
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