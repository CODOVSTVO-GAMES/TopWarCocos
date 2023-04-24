import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { MapStorage } from '../../Storage/MapStorage';
import { TypesObjects } from '../../Static/TypesObjects';
import { SpriteStorage } from '../../SpriteStorage';
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

    public countCards: number = 0;

    onLoad() {
        ChoosingTroopsInterface.instance = this;
    }

    start() {
        for (let i = 0; i < MapStorage.instance.arrayObjectParameters.length; i++) {
            if (MapStorage.instance.arrayObjectParameters[i]) {
                if (MapStorage.instance.arrayObjectParameters[i].type == TypesObjects.TROOP_AIR ||
                    MapStorage.instance.arrayObjectParameters[i].type == TypesObjects.TROOP_MARINE ||
                    MapStorage.instance.arrayObjectParameters[i].type == TypesObjects.TROOP_OVERLAND) {
                    console.log(MapStorage.instance.arrayObjectParameters[i]);
                    this.cards[this.countCards].active = true;
                    this.texts[this.countCards].string = "Lvl. " + MapStorage.instance.arrayObjectParameters[i].level;
                    // this.sprites[this.countCards].spriteFrame = SpriteStorage.instance.getSprite(MapStorage.instance.arrayObjectParameters[i].type, MapStorage.instance.arrayObjectParameters[i].level);
                    this.countCards++;
                }
            }
        }
    }
}