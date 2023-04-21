import { _decorator, Component, SpriteFrame } from 'cc';
import { TypesObjects } from './Static/TypesObjects';
const { ccclass, property } = _decorator;

@ccclass('SpriteStorage')
export class SpriteStorage extends Component {

    public static instance: SpriteStorage;

    @property({ type: SpriteFrame })
    public troopAir: SpriteFrame[] = [];

    @property({ type: SpriteFrame })
    public troopMarine: SpriteFrame[] = [];

    @property({ type: SpriteFrame })
    public troopOverland: SpriteFrame[] = [];

    @property({ type: SpriteFrame })
    public barracksAir: SpriteFrame[] = [];

    @property({ type: SpriteFrame })
    public barracksMarine: SpriteFrame[] = [];

    @property({ type: SpriteFrame })
    public barracksOverland: SpriteFrame[] = [];

    @property({ type: SpriteFrame })
    public townHall: SpriteFrame[] = [];

    @property({ type: SpriteFrame })
    public goldMine: SpriteFrame[] = [];

    onLoad() {
        SpriteStorage.instance = this;
    }

    getSprite(type: string, level: number): SpriteFrame {
        if (type == TypesObjects.TROOP_AIR) return this.troopAir[level - 1];
        else if (type == TypesObjects.TROOP_MARINE) return this.troopAir[level - 1];
        else if (type == TypesObjects.TROOP_OVERLAND) return this.troopAir[level - 1];
        else if (type == TypesObjects.BARRACKS_AIR) return this.barracksAir[level - 1];
        else if (type == TypesObjects.BARRACKS_MARINE) return this.barracksMarine[level - 1];
        else if (type == TypesObjects.BARRACKS_OVERLAND) return this.barracksOverland[level - 1];
        else if (type == TypesObjects.TOWN_HALL) return this.townHall[level - 1];
        else if (type == TypesObjects.GOLD_MINE) return this.goldMine[level - 1];
        else return null;
    }
}