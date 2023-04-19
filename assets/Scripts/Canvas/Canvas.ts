import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Canvas')
export class Canvas extends Component {

    public static instance: Canvas;

    @property({ type: Node })
    canvas: Node;

    @property({ type: Node })
    mainCanvas: Node;

    start() {
        Canvas.instance = this;
    }
}

