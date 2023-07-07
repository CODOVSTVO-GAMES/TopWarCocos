import { _decorator, Component, Node, Color, Sprite, CCString, CCFloat, CCBoolean } from 'cc';
import { SpriteModel } from './Model/SpriteModel';
import { MessageAnimation } from './Animations/Message/MessageAnimation';
import { ArrowGameObject } from './ArrowGameObject';
import { TypesObjects } from './Static/TypesObjects';
import { GameObjectView } from './View/GameObjectView';
import { GoldMineView } from './View/GoldMineView';
const { ccclass, property } = _decorator;

@ccclass('ObjectParameters')
export class ObjectParameters extends Component {

    @property({ type: CCString })
    public type: string

    @property({ type: CCString })
    public location: string

    @property({ type: CCString })
    public sizes: string

    @property({ type: CCFloat })
    public level: number

    @property({ type: CCFloat })
    public index: number

    @property({ type: CCBoolean })
    public inBattle: boolean

    @property({ type: Node })
    public nodeObject: Node

    @property({ type: Sprite })
    public spriteObject: Sprite

    @property({ type: Sprite })
    public backgraundObject: Sprite

    //=================================================
    //Links
    //=================================================

    private gameObjectView: GameObjectView
    private goldMineView: GoldMineView
    private messageAnimation: MessageAnimation
    private arrowGameObject: ArrowGameObject

    public start() {
        this.updateSprite();
        if (this.type == TypesObjects.BARRACKS_MARINE) {
            this.backgraundObject.color = new Color(255, 255, 255, 0)
        }
    }

    public updateSprite() {
        this.spriteObject.spriteFrame = SpriteModel.instance.getObjectSprite(this.type, this.level)
    }

    public onTransparencyObject() {
        this.spriteObject.color = new Color(255, 255, 255, 140)
        if (this.type != TypesObjects.BARRACKS_MARINE) {
            this.backgraundObject.color = new Color(255, 255, 255, 140)
        }
    }

    public offTransparencyObject() {
        this.spriteObject.color = new Color(255, 255, 255, 255)
        if (this.type != TypesObjects.BARRACKS_MARINE) {
            this.backgraundObject.color = new Color(255, 255, 255, 255)
        }
    }

    public getObjectView(): GameObjectView {
        try { this.gameObjectView = this.getComponent(GameObjectView) }
        catch { console.log("error: gameObjectView not received") }
        return this.gameObjectView
    }

    public getGoldMineView(): GoldMineView {
        try { this.goldMineView = this.getComponent(GoldMineView) }
        catch { console.log("error: goldMineView not received") }
        return this.goldMineView
    }

    public getMessageAnimation(): MessageAnimation {
        try { this.messageAnimation = this.getComponent(MessageAnimation) }
        catch { console.log("error: messageAnimation not received") }
        return this.messageAnimation
    }

    public getArrowGameObject(): ArrowGameObject {
        try { this.arrowGameObject = this.getComponent(ArrowGameObject) }
        catch { console.log("error: arrowGameObject not received") }
        return this.arrowGameObject
    }
}