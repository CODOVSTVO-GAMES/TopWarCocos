import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BattleMap')
export class BattleMap extends Component {

    public static instance: BattleMap;

    @property({ type: Node })
    public coordsOwn: Node[] = [];

    @property({ type: Node })
    public coordsEnemy: Node[] = [];

    onLoad() {
        BattleMap.instance = this;
    }
}