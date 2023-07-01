import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('GameModel')
export class GameModel extends Component {

    public static instance: GameModel

    public coins: number = 100000000
    public gems: number = 70
    public energy: number = 75
    public maxEnergy: number = 75
    public experience: number = 0
    public level: number = 1
    public maxPower: number = 0
    public territoryPower: number = 0
    public technoPower: number = 0
    public heroPower: number = 0
    public arsenalPower: number = 0
    public professionPower: number = 0
    public formationPower: number = 0

    protected onLoad(): void {
        GameModel.instance = this
    }
}