import { _decorator, Component, Node, Sprite, CCString, CCFloat, CCBoolean } from 'cc';
import { SpriteStorage } from './SpriteStorage';
import { ObjectInterface } from './GameObjects/ObjectInterface';
import { BarracksLogic } from './GameObjects/BarracksLogic';
import { GoldMineLogic } from './GameObjects/GoldMineLogic';
import { TypesObjects } from './Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('ObjectParameters')
export class ObjectParameters extends Component {

    @property({ type: CCString })
    public type: string;

    @property({ type: CCFloat })
    public level: number;

    @property({ type: CCFloat })
    public index: number;

    @property({ type: CCBoolean })
    public blockObject: boolean;

    @property({ type: Node })
    public nodeObject: Node;

    @property({ type: Sprite })
    public spriteObject: Sprite;

    // @property({ type: ObjectParameters })
    // public parentObject: ObjectParameters;

    // @property({ type: ObjectParameters })
    // public childrenObject: ObjectParameters[] = [];

    //=================================================
    //Links
    //=================================================

    public objectInterface: ObjectInterface;
    public barracksLogic: BarracksLogic;
    public goldMineLogic: GoldMineLogic;

    start() {
        if (this.blockObject == false) {
            this.spriteObject.spriteFrame = SpriteStorage.instance.getSprite(this.type, this.level);
        }
    }

    getObjectInterface(): ObjectInterface {
        try { this.objectInterface = this.getComponent(ObjectInterface); }
        catch { console.log("error: objectInterface not received"); }
        return this.objectInterface;
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
}
