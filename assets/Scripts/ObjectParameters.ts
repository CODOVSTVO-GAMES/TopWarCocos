import { _decorator, Component, Node, Sprite, CCString, CCFloat, CCBoolean } from 'cc';
import { SpriteStorage } from './SpriteStorage';
import { ObjectInterface } from './GameObjects/ObjectInterface';
import { BarracksLogic } from './GameObjects/BarracksLogic';
import { GoldMineLogic } from './GameObjects/GoldMineLogic';
import { TypesObjects } from './Static/TypesObjects';
import { BlockObject } from './BlockObject';
const { ccclass, property } = _decorator;

@ccclass('ObjectParameters')
export class ObjectParameters extends Component {

    @property({ type: CCString })
    public type: string = "";

    @property({ type: CCFloat })
    public level: number = 0;

    @property({ type: CCFloat })
    public index: number = 0;

    @property({ type: CCBoolean })
    public inBattle: boolean = false;

    @property({ type: CCBoolean })
    public blockObjectBOOOL: boolean;

    @property({ type: Node })
    public nodeObject: Node;

    @property({ type: Sprite })
    public spriteObject: Sprite;

    //=================================================
    //Links
    //=================================================

    public blockObject: BlockObject;
    public objectInterface: ObjectInterface;
    public barracksLogic: BarracksLogic;
    public goldMineLogic: GoldMineLogic;

    start() {
        if (this.blockObjectBOOOL == false) {
            this.spriteObject.spriteFrame = SpriteStorage.instance.getSprite(this.type, this.level);
        }
    }

    getBlockObject(): BlockObject {
        try { this.blockObject = this.getComponent(BlockObject); }
        catch { console.log("error: test not received"); }
        return this.blockObject;
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
