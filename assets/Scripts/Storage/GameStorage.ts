import { _decorator, Component, CCInteger } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameStorage')
export class GameStorage extends Component {

    public static instance: GameStorage

    @property({ type: CCInteger })
    public coins: number;

    @property({ type: CCInteger })
    public coinsInTime: number;

    @property({ type: CCInteger })
    public gems: number;

    @property({ type: CCInteger })
    public energy: number;

    @property({ type: CCInteger })
    public maxEnergy: number;

    @property({ type: CCInteger })
    public experience: number;

    @property({ type: CCInteger })
    public level: number;

    @property({ type: CCInteger })
    public maxPower: number;

    @property({ type: CCInteger })
    public territoryPower: number;

    @property({ type: CCInteger })
    public technoPower: number;

    @property({ type: CCInteger })
    public heroPower: number;

    @property({ type: CCInteger })
    public arsenalPower: number;

    @property({ type: CCInteger })
    public professionPower: number;

    @property({ type: CCInteger })
    public formationPower: number;

    onLoad() {
        GameStorage.instance = this
    }
}

