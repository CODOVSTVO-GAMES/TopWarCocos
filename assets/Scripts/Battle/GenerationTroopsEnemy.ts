import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { BattleMap } from './BattleMap';
import { TroopParameters } from './TroopParameters';
import { EnemyArmyRender } from './EnemyArmyRender';
const { ccclass, property } = _decorator;

@ccclass('GenerationTroopsEnemy')
export class GenerationTroopsEnemy extends Component {

    public static instance: GenerationTroopsEnemy;

    @property({ type: Prefab })
    public troop: Prefab;

    types: string[] = ["troopAir", "troopMarine", "troopOverland"];
    levels: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    onLoad() {
        GenerationTroopsEnemy.instance = this;
    }

    start() {
        for (let i = 0; i < BattleMap.instance.arrayTroopParametrsEnemy.length; i++) {
            let gameObject = instantiate(this.troop);
            gameObject.setParent(BattleMap.instance.coordsEnemy[i]);
            let troopParameters = gameObject.getComponent(TroopParameters);
            BattleMap.instance.arrayTroopParametrsEnemy[i] = troopParameters;
            BattleMap.instance.arrayTroopParametrsEnemy[i].type = "troopOverland";//this.types[Math.floor(Math.random() * this.types.length)];
            BattleMap.instance.arrayTroopParametrsEnemy[i].level = this.levels[Math.floor(Math.random() * this.types.length)];
            BattleMap.instance.arrayTroopParametrsEnemy[i].index = i;
        }
    }
}

