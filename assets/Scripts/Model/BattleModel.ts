import { _decorator, Component } from 'cc';
import { Unit } from '../Structures/Unit';
import { FreeUnit } from '../Structures/FreeUnit';
import { MapEnemyBattle } from '../Structures/MapEnemyUnits';
const { ccclass } = _decorator;

@ccclass('BattleModel')
export class BattleModel extends Component {

    public static instance: BattleModel

    public arrayOwn: Unit[] = []
    public arrayEnemy: Unit[] = []
    public arrayCards: FreeUnit[] = []
    public mapEnemyArr: MapEnemyBattle[] = []
    public quantityPlaces: number[] = []
    public isBattle: boolean = false
    public numberBattle: number = 0;
    public indexObjectBattle: number = 0;
    public quantityAvailableFreeCoords: number = 0
    public attackingTeam: number = 0
    public attackNumber: number = 0

    protected onLoad(): void {
        BattleModel.instance = this
        this.assignStartingValues()
    }

    private assignStartingValues() {

    }
}