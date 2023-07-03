import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { Battle } from './Battle';
import { SpriteModel } from '../Model/SpriteModel';
const { ccclass, property } = _decorator;

@ccclass('CardTroopRender')
export class CardTroopRender extends Component {

    @property({ type: Node })
    public nodeObject: Node;

    @property({ type: Label })
    public levelText: Label;

    @property({ type: Label })
    public quantityText: Label;

    @property({ type: Label })
    public hpText: Label;

    @property({ type: Sprite })
    public image: Sprite;

    public type: string;
    public level: number;
    public quantity: number;
    public index: number;

    start() {
        this.renderValues();
    }

    renderValues() {
        let cardLevel = this.level;
        let cardQuantity = this.quantity.toString();
        let cardsSprite = SpriteModel.instance.getObjectSprite(this.type, this.level);
        let level = "Ур. " + cardLevel;

        this.levelText.string = level;
        this.quantityText.string = cardQuantity;
        this.image.spriteFrame = cardsSprite;
    }

    clickCard() {
        Battle.instance.clickOnCard(this.index);
    }
}