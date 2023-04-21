import { _decorator, Component, Prefab } from 'cc';
import { TypesObjects } from './Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('Prefabs')
export class Prefabs extends Component {

    public static instance: Prefabs;

    @property({ type: Prefab })
    private troop: Prefab;

    @property({ type: Prefab })
    private barracks: Prefab;

    @property({ type: Prefab })
    private townHall: Prefab;

    @property({ type: Prefab })
    private goldMine: Prefab;

    onLoad() {
        Prefabs.instance = this;
    }

    getPrefab(type: string): Prefab {
        if (type == TypesObjects.TROOP_AIR) return this.troop;
        else if (type == TypesObjects.TROOP_MARINE) return this.troop;
        else if (type == TypesObjects.TROOP_OVERLAND) return this.troop;
        else if (type == TypesObjects.BARTACK_AIR) return this.barracks;
        else if (type == TypesObjects.BARTACK_MARINE) return this.barracks;
        else if (type == TypesObjects.BARTACK_OVERLAND) return this.barracks;
        else if (type == TypesObjects.TOWN_HALL) return this.townHall;
        else if (type == TypesObjects.GOLD_MINE) return this.goldMine;
        else return null;
    }
}

