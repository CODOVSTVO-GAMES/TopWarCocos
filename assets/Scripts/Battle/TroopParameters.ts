import { _decorator, Component, Node, Sprite, CCString, CCFloat } from 'cc';
import { SpriteStorage } from '../SpriteStorage';
import { TroopsStorage } from './TroopsStorage';
import { ChoosingTroopsInterface } from './ChoosingTroops/ChoosingTroopsInterface';
import { TypesObjects } from '../Static/TypesObjects';
import { BattleMap } from './BattleMap';
import { ChoosingTroopsLogic } from './ChoosingTroops/ChoosingTroopsLogic';
const { ccclass, property } = _decorator;

@ccclass('TroopParameters')
export class TroopParameters extends Component {

    @property({ type: CCString })
    public type: string;

    @property({ type: CCString })
    public team: string;

    @property({ type: CCFloat })
    public level: number;

    @property({ type: CCFloat })
    public index: number;

    @property({ type: CCFloat })
    public quantity: number;

    @property({ type: Node })
    public nodeObject: Node;

    @property({ type: Sprite })
    public spriteObject: Sprite;

    start() {
        this.spriteObject.spriteFrame = SpriteStorage.instance.getSprite(this.type, this.level);
    }

    log() {
        if (this.team == TypesObjects.TEAM_OWN) {
            TroopsStorage.instance.arrayObjectParameters[this.index].inBattle = false;
            switch (this.type) {
                case TypesObjects.TROOP_OVERLAND:
                    ChoosingTroopsLogic.instance.troopOverland[this.level]++;
                    break;
                case TypesObjects.TROOP_MARINE:
                    ChoosingTroopsLogic.instance.troopMarine[this.level]++;
                    break;
                case TypesObjects.TROOP_AIR:
                    ChoosingTroopsLogic.instance.troopAir[this.level]++;
                    break;
            }
            BattleMap.instance.arrayTroopParametrsOwn[BattleMap.instance.arrayTroopParametrsOwn.indexOf(this)] = null;
            ChoosingTroopsInterface.instance.updateCards();
            this.nodeObject.destroy();
        }
    }
}