import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FlightGameObjects')
export class FlightGameObjects extends Component {

    public static instance: FlightGameObjects;

    @property({ type: Node })
    public object: Node;

    private trigger: boolean = false;

    onLoad() {
        FlightGameObjects.instance = this;
    }

    moveToCell(object: Node, index: number) {

    }

    update(dt: number) {
        if (this.trigger == true) {
            // this.object.
        }
    }
}