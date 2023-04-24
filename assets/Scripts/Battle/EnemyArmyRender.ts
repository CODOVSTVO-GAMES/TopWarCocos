import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { BattleMap } from './BattleMap';
import { TroopParameters } from './TroopParameters';
const { ccclass, property } = _decorator;

@ccclass('EnemyArmyRender')
export class EnemyArmyRender extends Component {

    public static instance: EnemyArmyRender;

    @property({ type: Prefab })
    public troop: Prefab;

    onLoad() {
        EnemyArmyRender.instance = this;
    }

    start() {

    }

    updateRender() {
        for (let i = 0; i < BattleMap.instance.arrayTroopParametrsEnemy.length; i++) {
            if (BattleMap.instance.arrayTroopParametrsEnemy[i] != null) {

            }
        }
    }
}

