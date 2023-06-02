import { _decorator, Component, SpriteFrame } from 'cc';
import { TypesObjects } from '../Static/TypesObjects';
import { TypesCharacters } from '../Static/TypesCharacters';
import { TypesItems } from '../Static/TypesItems';
const { ccclass, property } = _decorator;

@ccclass('SpriteStorage')
export class SpriteStorage extends Component {

    public static instance: SpriteStorage;

    // =================================================================

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

    // =================================================================

    @property({ type: SpriteFrame })
    public characters: SpriteFrame[] = [];

    // =================================================================

    @property({ type: SpriteFrame })
    public coordFree: SpriteFrame;

    @property({ type: SpriteFrame })
    public coordSelect: SpriteFrame;

    @property({ type: SpriteFrame })
    public coodBlock: SpriteFrame;

    @property({ type: SpriteFrame })
    public coordHint: SpriteFrame;

    // =================================================================

    @property({ type: SpriteFrame })
    public planCommandPost: SpriteFrame;

    @property({ type: SpriteFrame })
    public planMergeTroopAir: SpriteFrame;

    @property({ type: SpriteFrame })
    public planMergeTroopMarine: SpriteFrame;

    @property({ type: SpriteFrame })
    public planMergeTroopOverland: SpriteFrame;

    @property({ type: SpriteFrame })
    public planMergeGoldMine: SpriteFrame;

    @property({ type: SpriteFrame })
    public planMergeBarrackAir: SpriteFrame;

    @property({ type: SpriteFrame })
    public planMergeBarrackMarine: SpriteFrame;

    @property({ type: SpriteFrame })
    public planMergeBarrackOverland: SpriteFrame;

    @property({ type: SpriteFrame })
    public planBuildGoldMine: SpriteFrame;

    @property({ type: SpriteFrame })
    public planBuildBarrackAir: SpriteFrame;

    @property({ type: SpriteFrame })
    public planBuildBarrackMarine: SpriteFrame;

    @property({ type: SpriteFrame })
    public planBuildBarrackOverland: SpriteFrame;

    @property({ type: SpriteFrame })
    public bookExperienceWhite: SpriteFrame;

    @property({ type: SpriteFrame })
    public bookExperienceGreen: SpriteFrame;

    @property({ type: SpriteFrame })
    public bookExperienceBlue: SpriteFrame;

    @property({ type: SpriteFrame })
    public bookExperiencePurple: SpriteFrame;

    @property({ type: SpriteFrame })
    public bookExperienceOrange: SpriteFrame;

    @property({ type: SpriteFrame })
    public test: SpriteFrame;

    onLoad() {
        SpriteStorage.instance = this;
    }

    getObjectSprite(type: string, level: number): SpriteFrame {
        if (type == TypesObjects.TROOP_AIR) return this.troopAir[level - 1];
        else if (type == TypesObjects.TROOP_MARINE) return this.troopMarine[level - 1];
        else if (type == TypesObjects.TROOP_OVERLAND) return this.troopOverland[level - 1];
        else if (type == TypesObjects.BARRACKS_AIR) return this.barracksAir[level - 1];
        else if (type == TypesObjects.BARRACKS_MARINE) return this.barracksMarine[level - 1];
        else if (type == TypesObjects.BARRACKS_OVERLAND) return this.barracksOverland[level - 1];
        else if (type == TypesObjects.COMMAND_POST) {
            if (level < 5) return this.commandPost[0];
            else if (level >= 5 && level < 10) return this.commandPost[1];
            else if (level >= 10 && level < 15) return this.commandPost[2];
            else if (level >= 15) return this.commandPost[3];
        }
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
    }

    getCharacterSprite(type: string): SpriteFrame {
        if (type == TypesCharacters.BLACK_WIDOW) return this.characters[0];
        else if (type == TypesCharacters.CHARACTER_1) return this.characters[1];
        else if (type == TypesCharacters.CHARACTER_2) return this.characters[2];
        else if (type == TypesCharacters.CHARACTER_3) return this.characters[3];
        else if (type == TypesCharacters.CHARACTER_4) return this.characters[4];
        else if (type == TypesCharacters.CHARACTER_5) return this.characters[5];
        else if (type == TypesCharacters.CHARACTER_6) return this.characters[6];
        else if (type == TypesCharacters.CHARACTER_7) return this.characters[7];
        else return null;
    }

    getItemBackpack(type: string): SpriteFrame {
        if (type == TypesItems.PLAN_COMMAND_POST) return this.planCommandPost;

        else if (type == TypesItems.PLAN_MERGE_TROOP_AIR) return this.planMergeTroopAir;
        else if (type == TypesItems.PLAN_MERGE_TROOP_MARINE) return this.planMergeTroopMarine;
        else if (type == TypesItems.PLAN_MERGE_TROOP_OVERLAND) return this.planMergeTroopOverland;

        else if (type == TypesItems.PLAN_MERGE_GOLD_MINE) return this.planMergeGoldMine;
        else if (type == TypesItems.PLAN_MERGE_BARRACK_AIR) return this.planMergeBarrackAir;
        else if (type == TypesItems.PLAN_MERGE_BARRACK_MARINE) return this.planMergeBarrackMarine;
        else if (type == TypesItems.PLAN_MERGE_BARRACK_OVERLAND) return this.planMergeBarrackOverland;

        else if (type == TypesItems.PLAN_BUILD_GOLD_MINE) return this.planBuildGoldMine;
        else if (type == TypesItems.PLAN_BUILD_BARRACK_AIR) return this.planBuildBarrackAir;
        else if (type == TypesItems.PLAN_BUILD_BARRACK_MARINE) return this.planBuildBarrackMarine;
        else if (type == TypesItems.PLAN_BUILD_BARRACK_OVERLAND) return this.planBuildBarrackOverland;

        else if (type == TypesItems.BOOK_EXPERIENCE_WHITE) return this.bookExperienceWhite;
        else if (type == TypesItems.BOOK_EXPERIENCE_GREEN) return this.bookExperienceGreen;
        else if (type == TypesItems.BOOK_EXPERIENCE_BLUE) return this.bookExperienceBlue;
        else if (type == TypesItems.BOOK_EXPERIENCE_PURPLE) return this.bookExperiencePurple;
        else if (type == TypesItems.BOOK_EXPERIENCE_ORANGE) return this.bookExperienceOrange;

        else return this.test;
    }

    getSpriteCoord(type: string): SpriteFrame {
        if (type == "coordFree") return this.coordFree;
        else if (type == "coordSelect") return this.coordSelect;
        else if (type == "coordBlock") return this.coodBlock;
        else if (type == "coordHint") return this.coordHint;
    }
}