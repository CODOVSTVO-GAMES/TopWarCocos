import { _decorator, Component, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GoldMineInterface')
export class GoldMineInterface extends Component {

    @property({ type: Node })
    public message: Node;

    @property({ type: Node })
    public progress: Node;

    @property({ type: Sprite })
    public fill: Sprite;

    public render(value: number) {
        this.fill.fillRange = -(1 - (((value * 100) / 60) * 0.01));
        this.fill.fillRange = value;

    }

    public openMessage() {
        this.message.active = true;
        this.progress.active = true;
    }

    public closeMessage() {
        this.message.active = false;
        this.progress.active = false;
    }
}

