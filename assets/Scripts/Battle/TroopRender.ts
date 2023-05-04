import { _decorator, Animation, Component, Label, Node, Sprite } from 'cc';
import { SpriteStorage } from '../SpriteStorage';
import { TypesObjects } from '../Static/TypesObjects';
import { Battle, Unit } from './Battle';
const { ccclass, property } = _decorator;

@ccclass('TroopRender')
export class TroopRender extends Component {

    public team: string;

    public index: number;

    @property({ type: Node })
    public nodeObject: Node;

    @property({ type: Sprite })
    public spriteObject: Sprite;

    @property({ type: Sprite })
    public sliderObject: Sprite;

    @property({ type: Label })
    public hpText: Label;

    @property({ type: Animation })
    public anim: Animation;

    public unitInfo: Unit;

    start() {
        let type;
        let level;
        if (this.team == TypesObjects.TEAM_OWN) {
            this.unitInfo = Battle.instance.arrayOwn[this.index];
            type = this.unitInfo.type;
            level = this.unitInfo.level;
        }
        else if (this.team == TypesObjects.TEAM_ENEMY) {
            this.unitInfo = Battle.instance.arrayEnemy[this.index];
            type = this.unitInfo.type;
            level = this.unitInfo.level;
        }
        this.hpText.string = this.unitInfo.hp.toString();
        this.sliderObject.fillRange = this.unitInfo.hp / this.unitInfo.availableHp;
        if (type != null && level != null) {
            this.spriteObject.spriteFrame = SpriteStorage.instance.getSprite(type, level);
        }
    }

    renderInfo() {
        if (this.unitInfo.hp < 0) {
            this.unitInfo.hp = 0;
        }
        this.hpText.string = this.unitInfo.hp.toString();
        this.sliderObject.fillRange = this.unitInfo.hp / this.unitInfo.availableHp;
    }

    shotRender() {
        this.anim.play();
    }

    log() {
        if (this.team == TypesObjects.TEAM_OWN && Battle.instance.isBattle == false) {
            Battle.instance.clickTroop(this.index);
            this.nodeObject.destroy();
        }
    }
}