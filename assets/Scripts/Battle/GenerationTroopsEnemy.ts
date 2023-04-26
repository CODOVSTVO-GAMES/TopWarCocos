import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { BattleMap } from './BattleMap';
import { TroopParameters } from './TroopParameters';
import { TypesObjects } from '../Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('GenerationTroopsEnemy')
export class GenerationTroopsEnemy extends Component {

    public static instance: GenerationTroopsEnemy;

    @property({ type: Prefab })
    public troop: Prefab;
    // TypesObjects.TROOP_AIR, 
    types: string[] = [TypesObjects.TROOP_MARINE, TypesObjects.TROOP_OVERLAND];
    levels: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    onLoad() {
        GenerationTroopsEnemy.instance = this;
    }

    start() {
        for (let i = 0; i < BattleMap.instance.arrayTroopParametrsEnemy.length; i++) {
            let gameObject = instantiate(this.troop);
            gameObject.setParent(BattleMap.instance.coordsEnemy[i]);
            let troopParameters = gameObject.getComponent(TroopParameters);
            BattleMap.instance.arrayTroopParametrsEnemy[i] = troopParameters;
            BattleMap.instance.arrayTroopParametrsEnemy[i].type = this.types[Math.floor(Math.random() * this.types.length)];
            BattleMap.instance.arrayTroopParametrsEnemy[i].level = this.levels[Math.floor(Math.random() * this.levels.length)];
            BattleMap.instance.arrayTroopParametrsEnemy[i].index = i;
            BattleMap.instance.arrayTroopParametrsEnemy[i].team = TypesObjects.TEAM_ENEMY;
        }
    }
}