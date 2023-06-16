import { _decorator, Component, Node, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('WireCutInterface')
export class WireCutInterface extends Component {

    public static instance: WireCutInterface;

    @property({ type: Sprite })
    public wire: Sprite;

    @property({ type: SpriteFrame })
    public wireSprites: SpriteFrame[] = [];

    onLoad() {
        WireCutInterface.instance = this;
    }

    /**
     * резка проводов
     */

    renderWire() {
        this.wire.spriteFrame = this.wireSprites[0];
    }

    renderWireCut() {
        this.wire.spriteFrame = this.wireSprites[1];
    }
}