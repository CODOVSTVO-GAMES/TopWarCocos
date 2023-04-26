import { _decorator, Component, Node, Sprite } from 'cc';
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

    start() {
        let type;
        let level;
        if (this.team == TypesObjects.TEAM_OWN) {
            let unit = Battle.instance.arrayOwn[this.index];
            type = unit.type;
            level = unit.level;
        }
        else if (this.team == TypesObjects.TEAM_ENEMY) {
            let unit = Battle.instance.arrayEnemy[this.index];
            type = unit.type;
            level = unit.level;
        }
        if (type != null && level != null) {
            this.spriteObject.spriteFrame = SpriteStorage.instance.getSprite(type, level);
        }
    }

    log() {
        if (this.team == TypesObjects.TEAM_OWN) {
            Battle.instance.clickTroop(this.index);
            this.nodeObject.destroy();
        }
    }
}