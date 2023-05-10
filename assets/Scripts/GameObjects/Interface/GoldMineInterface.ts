import { _decorator, Component, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GoldMineInterface')
export class GoldMineInterface extends Component {

    // @property({ type: ObjectParameters })
    // public objectParameters: ObjectParameters;

    @property({ type: Sprite })
    public fill: Sprite;

    public render(value: number) {
        this.fill.fillRange = value;
    }
}

