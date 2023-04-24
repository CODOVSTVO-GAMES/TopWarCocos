import { _decorator, Component, Node } from 'cc';
import { TroopParameters } from './TroopParameters';
const { ccclass, property } = _decorator;

@ccclass('BattleMap')
export class BattleMap extends Component {

    public static instance: BattleMap;

    @property({ type: Node })
    public coordsOwn: Node[] = [];

    @property({ type: Node })
    public coordsEnemy: Node[] = [];

    @property({ type: TroopParameters })
    public arrayTroopParametrsOwn: TroopParameters[] = [];

    @property({ type: TroopParameters })
    public arrayTroopParametrsEnemy: TroopParameters[] = [];

    onLoad() {
        BattleMap.instance = this;
        this.arrayTroopParametrsOwn = new Array(6);
        this.arrayTroopParametrsEnemy = new Array(6);
    }

    start() {

    }
}