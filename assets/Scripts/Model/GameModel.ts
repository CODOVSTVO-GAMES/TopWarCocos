import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('GameModel')
export class GameModel extends Component {

    public static instance: GameModel

    public coins: number
    public gems: number
    public energy: number
    public maxEnergy: number
    public experience: number
    public level: number
    public power: number
    public maxPower: number
    public territoryPower: number
    public technoPower: number
    public heroPower: number
    public arsenalPower: number
    public professionPower: number
    public formationPower: number

    protected onLoad(): void {
        GameModel.instance = this
        this.assignStartingValues()
    }

    private assignStartingValues() {
        this.coins = 100000000
        this.gems = 70
        this.energy = 75
        this.maxEnergy = 75
        this.experience = 0
        this.level = 1
        this.power = 0
        this.maxPower = 0
        this.territoryPower = 0
        this.technoPower = 0
        this.heroPower = 0
        this.arsenalPower = 0
        this.professionPower = 0
        this.formationPower = 0
    }
}