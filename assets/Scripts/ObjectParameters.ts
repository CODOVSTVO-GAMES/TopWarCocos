import { _decorator, Component, Node, Color, Sprite, CCString, CCFloat, CCBoolean } from 'cc';
import { SpriteStorage } from './Storage/SpriteStorage';
import { GameObjectInterface } from './UI/GameObjects/GameObjectInterface';
import { GoldMineInterface } from './UI/GameObjects/GoldMineInterface';
import { MessageAnimation } from './Animations/Message/MessageAnimation';
import { ArrowGameObject } from './ArrowGameObject';
import { TypesObjects } from './Static/TypesObjects';
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

    private gameObjectInterface: GameObjectInterface
    private goldMineInterface: GoldMineInterface
    private messageAnimation: MessageAnimation
    private arrowGameObject: ArrowGameObject

    public start() {
        this.updateSprite();
        if (this.type == TypesObjects.BARRACKS_MARINE) {

        }
    }

    public updateSprite() {
        this.spriteObject.spriteFrame = SpriteStorage.instance.getObjectSprite(this.type, this.level)
    }

    public onTransparencyObject() {
        this.spriteObject.color = new Color(255, 255, 255, 140)
        this.backgraundObject.color = new Color(255, 255, 255, 140)
    }

    public offTransparencyObject() {
        this.spriteObject.color = new Color(255, 255, 255, 255)
        this.backgraundObject.color = new Color(255, 255, 255, 255)
    }

    public getObjectInterface(): GameObjectInterface {
        try { this.gameObjectInterface = this.getComponent(GameObjectInterface) }
        catch { console.log("error: gameObjectInterface not received") }
        return this.gameObjectInterface
    }

    public getGoldMineInterface(): GoldMineInterface {
        try { this.goldMineInterface = this.getComponent(GoldMineInterface) }
        catch { console.log("error: goldMineInterface not received") }
        return this.goldMineInterface
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
