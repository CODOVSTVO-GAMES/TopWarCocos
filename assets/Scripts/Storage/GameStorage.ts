import { _decorator, Component, CCInteger } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameStorage')
export class GameStorage extends Component {

    public static instance: GameStorage

    @property({ type: CCInteger })
    public coins: number = 0;

    @property({ type: CCInteger })
    public coinsInTime: number = 0;

    @property({ type: CCInteger })
    public gems: number = 0;

    @property({ type: CCInteger })
    public energy: number = 0;

    @property({ type: CCInteger })
    public experience: number = 0;

    @property({ type: CCInteger })
    public level: number = 0;

    @property({ type: CCInteger })
    public maxPower: number = 0;

    @property({ type: CCInteger })
    public territoryPower: number = 0;

    @property({ type: CCInteger })
    public technoPower: number = 0;

    @property({ type: CCInteger })
    public heroPower: number = 0;

    @property({ type: CCInteger })
    public arsenalPower: number = 0;

    @property({ type: CCInteger })
    public professionPower: number = 0;

    onLoad() {
        GameStorage.instance = this
    }
}

