import { _decorator, Component, Node } from 'cc';
import { WarriorParameters } from './WarriorParameters';
const { ccclass, property } = _decorator;

@ccclass('BattleMap')
export class BattleMap extends Component {

    public static instance: BattleMap;

    @property({ type: Node })
    public coords: Node[] = [];

    @property({ type: WarriorParameters })
    public arrayWarriorParametrsOwn: WarriorParameters[] = [];

    @property({ type: WarriorParameters })
    public arrayWarriorParametrsEnemy: WarriorParameters[] = [];

    onLoad() {
        BattleMap.instance = this;
    }

    start() {

    }
}