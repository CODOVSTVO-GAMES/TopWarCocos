import { _decorator, CCInteger, Component, Node } from 'cc';
import { ChoosingTroopsInterface } from './ChoosingTroopsInterface';
import { SpawnTroops } from '../SpawnTroops';
import { TroopsStorage } from '../TroopsStorage';
import { TypesObjects } from '../../Static/TypesObjects';
import { ObjectParameters } from '../../ObjectParameters';
const { ccclass, property } = _decorator;

@ccclass('ChoosingTroopsLogic')
export class ChoosingTroopsLogic extends Component {

    public static instance: ChoosingTroopsLogic;

    @property({ type: CCInteger })
    public troopOverland: number[] = [];

    @property({ type: CCInteger })
    public troopMarine: number[] = [];

    @property({ type: CCInteger })
    public troopAir: number[] = [];

    onLoad() {
        ChoosingTroopsLogic.instance = this;
        this.troopOverland = new Array(20).fill(0);
        this.troopMarine = new Array(20).fill(0);
        this.troopAir = new Array(20).fill(0);
    }

    start() {
        for (let i = 0; i < TroopsStorage.instance.arrayObjectParameters.length; i++) {
            let objectParameters = TroopsStorage.instance.arrayObjectParameters[i];
            if (objectParameters != null) {
                switch (objectParameters.type) {
                    case TypesObjects.TROOP_OVERLAND:
                        this.troopOverland[objectParameters.level]++;
                        break;
                    case TypesObjects.TROOP_MARINE:
                        this.troopMarine[objectParameters.level]++;
                        break;
                    case TypesObjects.TROOP_AIR:
                        this.troopAir[objectParameters.level]++;
                        break;
                    default:
                        console.warn("Ашибка");
                        break;
                }
            }
        }
    }

    clickToCard(event, customEventData) {
        // let cardIndex;
        // for (let i = 0; i < TroopsStorage.instance.arrayObjectParameters.length; i++) {
        //     if (TroopsStorage.instance.arrayObjectParameters[i] == null) {
        //         if (TroopsStorage.instance.arrayObjectParameters[i].inBattle == false) {
        //             cardIndex = i;
        //         }
        //         break;
        //     }
        // }
        SpawnTroops.instance.spawnTroop(customEventData);
        ChoosingTroopsInterface.instance.updateCards();
    }
}