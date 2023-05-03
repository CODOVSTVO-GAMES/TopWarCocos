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
    private barracks: Prefab;

    @property({ type: Prefab })
    private townHall: Prefab;

    @property({ type: Prefab })
    private goldMine: Prefab;

    @property({ type: Prefab })
    private wall: Prefab;

    @property({ type: Prefab })
    private battle: Prefab;

    onLoad() {
        Prefabs.instance = this;
    }

    getPrefab(type: string): Prefab {
        if (type == TypesObjects.TROOP_AIR) return this.troopAir;
        else if (type == TypesObjects.TROOP_MARINE) return this.troopMarine;
        else if (type == TypesObjects.TROOP_OVERLAND) return this.troopOverland;
        else if (type == TypesObjects.BARRACKS_AIR) return this.barracks;
        else if (type == TypesObjects.BARRACKS_MARINE) return this.barracks;
        else if (type == TypesObjects.BARRACKS_OVERLAND) return this.barracks;
        else if (type == TypesObjects.TOWN_HALL) return this.townHall;
        else if (type == TypesObjects.GOLD_MINE) return this.goldMine;
        else if (type == TypesObjects.WALL) return this.wall;
        else if (type == TypesObjects.BATTLE) return this.battle;
        else return null;
    }
}

