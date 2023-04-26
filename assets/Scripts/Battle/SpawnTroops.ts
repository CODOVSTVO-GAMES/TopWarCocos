import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { BattleMap } from './BattleMap';
import { TroopParameters } from './TroopParameters';
import { TroopsStorage } from './TroopsStorage';
import { TypesObjects } from '../Static/TypesObjects';
import { ChoosingTroopsLogic } from './ChoosingTroops/ChoosingTroopsLogic';
const { ccclass, property } = _decorator;

@ccclass('SpawnTroops')
export class SpawnTroops extends Component {

    public static instance: SpawnTroops;

    @property({ type: Prefab })
    public troop: Prefab;

    onLoad() {
        SpawnTroops.instance = this;
    }

    spawnTroop(index: number) {
        let freeCell = -1;
        for (let i = 0; i < BattleMap.instance.arrayTroopParametrsOwn.length; i++) {
            if (BattleMap.instance.arrayTroopParametrsOwn[i] == null) {
                freeCell = i;
                break;
            }
        }
        if (freeCell >= 0) {
            let gameObject = instantiate(this.troop);
            gameObject.setParent(BattleMap.instance.coordsOwn[freeCell]);
            let troopParameters = gameObject.getComponent(TroopParameters);
            BattleMap.instance.arrayTroopParametrsOwn[freeCell] = troopParameters;
            troopParameters.type = TroopsStorage.instance.arrayObjectParameters[index].type;
            troopParameters.level = TroopsStorage.instance.arrayObjectParameters[index].level;
            troopParameters.index = freeCell;
            troopParameters.team = TypesObjects.TEAM_OWN;
            switch (troopParameters.type) {
                case TypesObjects.TROOP_OVERLAND:
                    ChoosingTroopsLogic.instance.troopOverland[troopParameters.level]--;
                    break;
                case TypesObjects.TROOP_MARINE:
                    ChoosingTroopsLogic.instance.troopMarine[troopParameters.level]--;
                    break;
                case TypesObjects.TROOP_AIR:
                    ChoosingTroopsLogic.instance.troopAir[troopParameters.level]--;
                    break;
            }
            TroopsStorage.instance.arrayObjectParameters[index].inBattle = true;
        }
    }
}