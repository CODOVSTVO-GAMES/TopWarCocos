import { _decorator, Component, EventTouch, instantiate, Node, Prefab } from 'cc';
import { MapStorage } from '../../Storage/MapStorage';
import { ObjectParameters } from '../../ObjectParameters';
import { BattleMap } from '../BattleMap';
import { TroopParameters } from '../TroopParameters';
import { OwnArmyRender } from '../OwnArmyRender';
const { ccclass, property } = _decorator;

@ccclass('ChoosingTroopsLogic')
export class ChoosingTroopsLogic extends Component {

    public static instance: ChoosingTroopsLogic;

    @property({ type: Prefab })
    public troop: Prefab;

    types: string[] = ["troopAir", "troopMarine", "troopOverland"];
    levels: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    onLoad() {
        ChoosingTroopsLogic.instance = this;
    }

    start() {
        for (let i = 0; i < 3; i++) {
            let freeIndex;
            for (let i = 0; i < MapStorage.instance.arrayObjectParameters.length; i++) {
                if (MapStorage.instance.arrayObjectParameters[i] == null) {
                    freeIndex = i;
                    break;
                }
            }
            MapStorage.instance.arrayObjectParameters[freeIndex] = new ObjectParameters();
            MapStorage.instance.arrayObjectParameters[freeIndex].type = "troopOverland"; //this.types[Math.floor(Math.random() * this.types.length)];
            MapStorage.instance.arrayObjectParameters[freeIndex].level = this.levels[Math.floor(Math.random() * this.types.length)];
        }
    }

    clickToCard(event, customEventData) {
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
            BattleMap.instance.arrayTroopParametrsOwn[freeCell].type = MapStorage.instance.arrayObjectParameters[customEventData].type;
            BattleMap.instance.arrayTroopParametrsOwn[freeCell].level = MapStorage.instance.arrayObjectParameters[customEventData].level;
            BattleMap.instance.arrayTroopParametrsOwn[freeCell].index = freeCell;
        }
    }
}