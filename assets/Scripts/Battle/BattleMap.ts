import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BattleMap')
export class BattleMap extends Component {

    public static instance: BattleMap;

    @property({ type: Node })
    public coords: Node[] = [];

    public 

    onLoad() {
        BattleMap.instance = this;
    }

    start() {

    }
}