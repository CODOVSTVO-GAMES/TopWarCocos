import { _decorator, Component, Node } from 'cc';
import { MapEnemyBattle } from '../Structures/MapEnemyUnits';
import { TroopBattle } from '../Structures/TroopBattle';
const { ccclass } = _decorator;

@ccclass('BattleModel')
export class BattleModel extends Component {

    public static instance: BattleModel

    public myTroopsBattle: TroopBattle[] = []
    public myAvailableTroops: TroopBattle[] = []
    public enemyTroopsBattle: TroopBattle[] = []

    public itemsMyAvailableTroops: Node[] = []


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