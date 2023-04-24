import { _decorator, Component, Node, Sprite, CCString, CCFloat } from 'cc';
import { SpriteStorage } from './SpriteStorage';
import { BarracksInterface } from './GameObjects/Barracks/BarracksInterface';
import { BarracksLogic } from './GameObjects/Barracks/BarracksLogic';
import { GoldMineInterface } from './GameObjects/GoldMine/GoldMineInterface';
import { GoldMineLogic } from './GameObjects/GoldMine/GoldMineLogic';
const { ccclass, property } = _decorator;

@ccclass('ObjectParameters')
export class ObjectParameters extends Component {

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

    //=================================================
    //Links
    //=================================================

    public barracksInterface: BarracksInterface;
    public barracksLogic: BarracksLogic;

    public goldMineInterface: GoldMineInterface;
    public goldMineLogic: GoldMineLogic;

    start() {
        console.log('start');
        this.spriteObject.spriteFrame = SpriteStorage.instance.getSprite(this.type, this.level);
    }

    getBarracksInterface(): BarracksInterface {
        try { this.barracksInterface = this.getComponent(BarracksInterface); }
        catch { console.log("error: barracksInterface not received"); }
        return this.barracksInterface;
    }

    getBarracksLogic(): BarracksLogic {
        try { this.barracksLogic = this.getComponent(BarracksLogic); }
        catch { console.log("error: barracksLogic not received"); }
        return this.barracksLogic;
    }

    getGoldMineInterface(): GoldMineInterface {
        try { this.goldMineInterface = this.getComponent(GoldMineInterface); }
        catch { console.log("error: goldMineInterface not received"); }
        return this.goldMineInterface;
    }

    getGoldMineLogic(): GoldMineLogic {
        try { this.goldMineLogic = this.getComponent(GoldMineLogic); }
        catch { console.log("error: goldMineLogic not received"); }
        return this.goldMineLogic;
    }
}
