import { _decorator, Component, Label, Node, Sprite, Vec3 } from 'cc';
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

    @property({ type: Label })
    public hpText: Label;

    public unitInfo: Unit;

    start() {
        let type;
        let level;
        if (this.team == TypesObjects.TEAM_OWN) {
            this.unitInfo = Battle.instance.arrayOwn[this.index];
            type = this.unitInfo.type;
            level = this.unitInfo.level;
            this.hpText.string = this.unitInfo.hp.toString();
        }
        else if (this.team == TypesObjects.TEAM_ENEMY) {
            this.unitInfo = Battle.instance.arrayEnemy[this.index];
            type = this.unitInfo.type;
            level = this.unitInfo.level;
            this.hpText.string = this.unitInfo.hp.toString();
        }
        if (type != null && level != null) {
            this.spriteObject.spriteFrame = SpriteStorage.instance.getSprite(type, level);
        }
    }

    renderInfo() {
        this.hpText.string = this.unitInfo.hp.toString();
    }

    log() {
        if (this.team == TypesObjects.TEAM_OWN && Battle.instance.isBattle == false) {
            Battle.instance.clickTroop(this.index);
            this.nodeObject.destroy();
        }
    }
}