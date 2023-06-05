import { _decorator, Component } from 'cc';
import { Unit } from '../Structures/Unit';
import { FreeUnit } from '../Structures/FreeUnit';
const { ccclass } = _decorator;

@ccclass('BattleStorage')
export class BattleStorage extends Component {

    public static instance: BattleStorage

    public arrayOwn: Unit[] = [];
    public arrayEnemy: Unit[] = [];
    public arrayCards: FreeUnit[] = [];
    public quantityPlaces: number[] = [];
    public isBattle: boolean = false;
    public level: number = 2;
    public attackingTeam: number = 0;
    public attackNumber: number = 0;

    onLoad() {
        BattleStorage.instance = this;
    }
}

