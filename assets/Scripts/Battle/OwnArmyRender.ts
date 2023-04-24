import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { BattleMap } from './BattleMap';
import { TroopParameters } from './TroopParameters';
const { ccclass, property } = _decorator;

@ccclass('OwnArmyRender')
export class OwnArmyRender extends Component {

    public static instance: OwnArmyRender;

    @property({ type: Prefab })
    public troop: Prefab;

    onLoad() {
        OwnArmyRender.instance = this;
    }

    start() {

    }

    updateRender() {
        for (let i = 0; i < BattleMap.instance.arrayTroopParametrsOwn.length; i++) {
            if (BattleMap.instance.arrayTroopParametrsOwn[i] != null) {
                
            }
        }
    }
}