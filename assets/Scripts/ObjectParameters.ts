import { _decorator, Component, Node, Color, Sprite, CCString, CCFloat, CCBoolean } from 'cc';
import { SpriteStorage } from './Storage/SpriteStorage';
import { ObjectInterface } from './GameObjects/Interface/ObjectInterface';
import { BarracksLogic } from './GameObjects/Logic/BarracksLogic';
import { GoldMineLogic } from './GameObjects/Logic/GoldMineLogic';
import { GoldMineInterface } from './GameObjects/Interface/GoldMineInterface';
import { MessageAnimation } from './Animations/Message/MessageAnimation';
import { ArrowGameObject } from './ArrowGameObject';
const { ccclass, property } = _decorator;

@ccclass('ObjectParameters')
export class ObjectParameters extends Component {

    @property({ type: CCString })
    public type: string;

    @property({ type: CCString })
    public location: string;

    @property({ type: CCFloat })
    public level: number;

    @property({ type: CCFloat })
    public index: number;

    @property({ type: CCBoolean })
    public inBattle: boolean;

    @property({ type: Node })
    public nodeObject: Node;

    @property({ type: Sprite })
    public spriteObject: Sprite;

    @property({ type: Sprite })
    public backgraundObject: Sprite;

    //=================================================
    //Links
    //=================================================

    public objectInterface: ObjectInterface;
    public goldMineInterface: GoldMineInterface;

    public barracksLogic: BarracksLogic;
    public goldMineLogic: GoldMineLogic;

    public messageAnimation: MessageAnimation;

    public arrowGameObject: ArrowGameObject;

    start() {
        this.updateSprite();
    }

    updateSprite() {
        this.spriteObject.spriteFrame = SpriteStorage.instance.getObjectSprite(this.type, this.level);
    }

    onTransparencyObject() {
        this.spriteObject.color = new Color(255, 255, 255, 140);
        this.backgraundObject.color = new Color(255, 255, 255, 140);
    }

    offTransparencyObject() {
        this.spriteObject.color = new Color(255, 255, 255, 255);
        this.backgraundObject.color = new Color(255, 255, 255, 255);
    }

    getObjectInterface(): ObjectInterface {
        try { this.objectInterface = this.getComponent(ObjectInterface); }
        catch { console.log("error: objectInterface not received"); }
        return this.objectInterface;
    }

    getGoldMineInterface(): GoldMineInterface {
        try { this.goldMineInterface = this.getComponent(GoldMineInterface); }
        catch { console.log("error: goldMineInterface not received"); }
        return this.goldMineInterface;
    }

    getBarracksLogic(): BarracksLogic {
        try { this.barracksLogic = this.getComponent(BarracksLogic); }
        catch { console.log("error: barracksLogic not received"); }
        return this.barracksLogic;
    }

    getGoldMineLogic(): GoldMineLogic {
        try { this.goldMineLogic = this.getComponent(GoldMineLogic); }
        catch { console.log("error: goldMineLogic not received"); }
        return this.goldMineLogic;
    }

    getMessageAnimation(): MessageAnimation {
        try { this.messageAnimation = this.getComponent(MessageAnimation); }
        catch { console.log("error: messageAnimation not received"); }
        return this.messageAnimation;
    }

    getArrowGameObject(): ArrowGameObject {
        try { this.arrowGameObject = this.getComponent(ArrowGameObject); }
        catch { console.log("error: arrowGameObject not received"); }
        return this.arrowGameObject;
    }
}
