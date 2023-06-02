import { _decorator, Component, Node, Label, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ModalShopObjectInterface')
export class ModalShopObjectInterface extends Component {

    public static instance: ModalShopObjectInterface;

    @property({ type: Label })
    private levelBarrackAir: Label;

    @property({ type: Label })
    private levelBarrackMarine: Label;

    @property({ type: Label })
    private levelBarrackOverland: Label;

    @property({ type: Label })
    private levelGoldMine: Label;

    @property({ type: Label })
    private costBuyBarrackAir: Label;

    @property({ type: Label })
    private costBuyBarrackMarine: Label;

    @property({ type: Label })
    private costBuyBarrackOverland: Label;

    @property({ type: Label })
    private costBuyGoldMine: Label;

    @property({ type: Sprite })
    private iconBarrackAir: Sprite;

    @property({ type: Sprite })
    private iconBarrackMarine: Sprite;

    @property({ type: Sprite })
    private iconBarrackOverland: Sprite;

    @property({ type: Sprite })
    private iconGoldMine: Sprite;

    onLoad() {
        ModalShopObjectInterface.instance = this;
    }

    updateInterface() {

    }
}

