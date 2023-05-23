import { _decorator, Component, SpriteFrame } from 'cc';
import { TypesObjects } from '../Static/TypesObjects';
import { TypesCharacters } from '../Static/TypesCharacters';
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
    public commandPost: SpriteFrame[] = [];

    @property({ type: SpriteFrame })
    public goldMine: SpriteFrame[] = [];

    @property({ type: SpriteFrame })
    public bank: SpriteFrame[] = [];

    @property({ type: SpriteFrame })
    public autocombine: SpriteFrame[] = [];

    @property({ type: SpriteFrame })
    public radar: SpriteFrame[] = [];

    @property({ type: SpriteFrame })
    public manipulator: SpriteFrame[] = [];

    @property({ type: SpriteFrame })
    public repairShop: SpriteFrame[] = [];

    @property({ type: SpriteFrame })
    public lobbyWar: SpriteFrame[] = [];

    @property({ type: SpriteFrame })
    public expedition: SpriteFrame[] = [];




    @property({ type: SpriteFrame })
    public wall: SpriteFrame[] = [];

    @property({ type: SpriteFrame })
    public battle: SpriteFrame[] = [];

    @property({ type: SpriteFrame })
    public characters: SpriteFrame[] = [];

    onLoad() {
        SpriteStorage.instance = this;
    }

    getSprite(type: string, level: number): SpriteFrame {
        if (type == TypesObjects.TROOP_AIR) return this.troopAir[level - 1];
        else if (type == TypesObjects.TROOP_MARINE) return this.troopMarine[level - 1];
        else if (type == TypesObjects.TROOP_OVERLAND) return this.troopOverland[level - 1];
        else if (type == TypesObjects.BARRACKS_AIR) return this.barracksAir[level - 1];
        else if (type == TypesObjects.BARRACKS_MARINE) return this.barracksMarine[level - 1];
        else if (type == TypesObjects.BARRACKS_OVERLAND) return this.barracksOverland[level - 1];
        else if (type == TypesObjects.COMMAND_POST) return this.commandPost[level - 1];
        else if (type == TypesObjects.GOLD_MINE) return this.goldMine[level - 1];
        else if (type == TypesObjects.BANK) return this.bank[level - 1];
        else if (type == TypesObjects.AUTOCOMBINE) return this.autocombine[level - 1];
        else if (type == TypesObjects.RADAR) return this.radar[level - 1];
        else if (type == TypesObjects.MANIPULATOR) return this.manipulator[level - 1];
        else if (type == TypesObjects.REPAIR_SHOP) return this.repairShop[level - 1];
        else if (type == TypesObjects.LOBBY_WARS) return this.lobbyWar[level - 1];
        else if (type == TypesObjects.EXPEDITION) return this.expedition[level - 1];



        else if (type == TypesObjects.WALL) return this.wall[level - 1];
        else if (type == TypesObjects.BATTLE) return this.battle[level - 1];
        else if (type == TypesCharacters.BLACK_WIDOW) return this.characters[0];
        else if (type == TypesCharacters.CHARACTER_1) return this.characters[1];
        else if (type == TypesCharacters.CHARACTER_2) return this.characters[2];
        else if (type == TypesCharacters.CHARACTER_3) return this.characters[3];
        else if (type == TypesCharacters.CHARACTER_4) return this.characters[4];
        else if (type == TypesCharacters.CHARACTER_5) return this.characters[5];
        else if (type == TypesCharacters.CHARACTER_6) return this.characters[6];
        else if (type == TypesCharacters.CHARACTER_7) return this.characters[7];
        else return null;
    }
}