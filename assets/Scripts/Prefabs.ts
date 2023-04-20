import { _decorator, Component, Prefab } from 'cc';
import { TypesObjects } from './Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('Prefabs')
export class Prefabs extends Component {

    public static instance: Prefabs;

    @property({ type: Prefab })
    private troopAir: Prefab;

    @property({ type: Prefab })
    private troopMarine: Prefab;

    @property({ type: Prefab })
    private troopOverland: Prefab;

    @property({ type: Prefab })
    private barracksAir: Prefab;

    @property({ type: Prefab })
    private barracksMarine: Prefab;

    @property({ type: Prefab })
    private barracksOverland: Prefab;

    @property({ type: Prefab })
    private townHall: Prefab;

    @property({ type: Prefab })
    private goldMine: Prefab;

    onLoad() {
        Prefabs.instance = this;
    }

    getPrefab(type: string): Prefab {
        if (type == TypesObjects.TROOP_AIR) return this.troopAir;
        else if (type == TypesObjects.TROOP_MARINE) return this.troopMarine;
        else if (type == TypesObjects.TROOP_OVERLAND) return this.troopOverland;
        else if (type == TypesObjects.BARTACK_AIR) return this.barracksAir;
        else if (type == TypesObjects.BARTACK_MARINE) return this.barracksMarine;
        else if (type == TypesObjects.BARTACK_OVERLAND) return this.barracksOverland;
        else if (type == TypesObjects.TOWN_HALL) return this.townHall;
        else if (type == TypesObjects.GOLD_MINE) return this.goldMine;
        else return null;
    }
}

