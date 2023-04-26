import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { TypesObjects } from '../../Static/TypesObjects';
import { SpriteStorage } from '../../SpriteStorage';
import { TroopsStorage } from '../TroopsStorage';
import { ChoosingTroopsLogic } from './ChoosingTroopsLogic';
const { ccclass, property } = _decorator;

@ccclass('ChoosingTroopsInterface')
export class ChoosingTroopsInterface extends Component {

    public static instance: ChoosingTroopsInterface;

    @property({ type: Node })
    public cards: Node[] = [];

    @property({ type: Sprite })
    public sprites: Sprite[] = [];

    @property({ type: Label })
    public texts: Label[] = [];

    @property({ type: Label })
    public quantity: Label[] = [];

    public countCards: number = 0;

    onLoad() {
        ChoosingTroopsInterface.instance = this;
    }

    start() {
        this.updateCards();
    }

    updateCards() {
        this.countCards = 0;
        for (let i = 19; i >= 0; i--) {
            if (ChoosingTroopsLogic.instance.troopOverland[i] > 0) {
                this.cards[this.countCards].active = true;
                this.texts[this.countCards].string = "Lvl. " + i;
                this.quantity[this.countCards].string = ChoosingTroopsLogic.instance.troopOverland[i].toString();
                this.sprites[this.countCards].spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.TROOP_OVERLAND, i);
                this.countCards++;
            }
            if (ChoosingTroopsLogic.instance.troopMarine[i] > 0) {
                this.cards[this.countCards].active = true;
                this.texts[this.countCards].string = "Lvl. " + i;
                this.sprites[this.countCards].spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.TROOP_MARINE, i);
                this.countCards++;
            }
            if (ChoosingTroopsLogic.instance.troopAir[i] > 0) {
                this.cards[this.countCards].active = true;
                this.texts[this.countCards].string = "Lvl. " + i;
                this.sprites[this.countCards].spriteFrame = SpriteStorage.instance.getSprite(TypesObjects.TROOP_AIR, i);
                this.countCards++;
            }
        }
        // for (let i = 0; i < TroopsStorage.instance.arrayObjectParameters.length; i++) {
        //     if (TroopsStorage.instance.arrayObjectParameters[i]) {
        //         if (TroopsStorage.instance.arrayObjectParameters[i].type == TypesObjects.TROOP_AIR ||
        //             TroopsStorage.instance.arrayObjectParameters[i].type == TypesObjects.TROOP_MARINE ||
        //             TroopsStorage.instance.arrayObjectParameters[i].type == TypesObjects.TROOP_OVERLAND) {
        //             if (TroopsStorage.instance.arrayObjectParameters[i].inBattle == false) {
        //                 this.cards[this.countCards].active = true;
        //                 this.texts[this.countCards].string = "Lvl. " + TroopsStorage.instance.arrayObjectParameters[i].level;
        //                 this.sprites[this.countCards].spriteFrame = SpriteStorage.instance.getSprite(TroopsStorage.instance.arrayObjectParameters[i].type, TroopsStorage.instance.arrayObjectParameters[i].level);
        //                 this.countCards++;
        //             }
        //         }
        //     }
        // }
        for (let i = this.countCards; i < this.cards.length; i++) {
            this.cards[i].active = false;
        }
    }
}