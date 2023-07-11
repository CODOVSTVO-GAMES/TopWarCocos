import { _decorator, Component, Node } from 'cc';
import { TroopBattle } from '../Structures/TroopBattle';
const { ccclass } = _decorator;

@ccclass('BattleModel')
export class BattleModel extends Component {

    public static instance: BattleModel

    public myTroopsBattle: TroopBattle[] = []
    public myAvailableTroops: TroopBattle[] = []
    public enemyTroopsBattle: TroopBattle[] = []

    public myTroopsBattleOnMap: Node[] = []
    public enemyTroopsBattleOnMap: Node[] = []
    public itemsMyAvailableTroops: Node[] = []

    public numberBattle: number = 0
    public indexObjectBattle: number = 0
    public attackingTeam: number = 0
    public attackNumber: number = 0

    public isPreparation: boolean = false
    public isBattle: boolean = false
    public isEnd: boolean = false

    protected onLoad(): void {
        BattleModel.instance = this
    }
}