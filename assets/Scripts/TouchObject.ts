import { _decorator, Component, Event, input, Input, Node, EventTouch } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TouchObject')
export class TouchObject extends Component {

    // @property({type: Node})
    // public nodee: Node;

    start() {
        console.log(this.node.position);
    }

    onLoad() {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    }
    onDestroy() {
        input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onTouchStart(event: EventTouch) {
        const touch = event.touch!;
        console.log(this.node.position);
    }

    onTouchEnd(event: EventTouch) {
        const touch = event.touch!;
        console.log(this.node.position);
    }

    keyUp(event: KeyboardEvent) {
        console.log(event.keyCode);
    }

    // touh() {
    //     node.on(Node.EventType.MOUSE_DOWN, (event) => {
    //         console.log('Mouse down');
    //     }, this);
    // }
}

