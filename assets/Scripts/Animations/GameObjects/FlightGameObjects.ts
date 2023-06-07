import { _decorator, Component, Node, Vec3 } from 'cc';
import { ControllerHomeMapStorage } from '../../Storage/Controllers/ControllerHomeMapStorage';
const { ccclass, property } = _decorator;

@ccclass('FlightGameObjects')
export class FlightGameObjects extends Component {

    public static instance: FlightGameObjects;

    private object: Node;
    private trigger: boolean = false;
    private speed: number = 2;
    private toPos: Vec3;

    onLoad() {
        FlightGameObjects.instance = this;
    }

    moveToCell(object: Node, index: number) {
        this.object = object;
        this.toPos = ControllerHomeMapStorage.getCoordPosition(index);
    }

    // update(dt: number) {
    //     if (this.trigger == true) {
    //         console.log(dt * this.speed)
    //         this.object.position = new Vec3(
    //             this.getLerp(this.object.position.x, 100, dt * this.speed),
    //             this.getLerp(this.object.position.y, 200, dt * this.speed),
    //             0);
    //     }
    // }

    getLerp(one: number, two: number, current: number) {
        return one + (two - one) * current;
    }
}