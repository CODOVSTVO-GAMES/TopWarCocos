import { _decorator, Component, Node, Sprite } from 'cc';
import { SpriteStorage } from '../SpriteStorage';
const { ccclass, property } = _decorator;

@ccclass('WarriorParameters')
export class WarriorParameters extends Component {

    @property({ type: String })
    public type: string;

    @property({ type: Number })
    public level: number;

    @property({ type: Number })
    public index: number;

    @property({ type: Node })
    public nodeObject: Node;

    @property({ type: Sprite })
    public spriteObject: Sprite;

    start() {
        this.spriteObject.spriteFrame = SpriteStorage.instance.getSprite(this.type, this.level);
    }
}