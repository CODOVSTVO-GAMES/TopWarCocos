import { _decorator, Component, Node, Sprite, CCString, CCFloat } from 'cc';
import { SpriteStorage } from '../SpriteStorage';
const { ccclass, property } = _decorator;

@ccclass('TroopParameters')
export class TroopParameters extends Component {

    @property({ type: CCString })
    public type: string;

    @property({ type: CCFloat })
    public level: number;

    @property({ type: CCFloat })
    public index: number;

    @property({ type: Node })
    public nodeObject: Node;

    @property({ type: Sprite })
    public spriteObject: Sprite;

    start() {
        // this.spriteObject.spriteFrame = SpriteStorage.instance.getSprite(this.type, this.level);
    }

    log() {
        console.log("Type: " + this.type + "; Level: " + this.level + "; Index: " + this.index);
    }
}