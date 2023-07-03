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

    private assignStartingValues() {
        this.coins = 100000000
        this.gems = 70
        this.energy = 75
        this.maxEnergy = 75
        this.experience = 0
        this.level = 1
        this.maxPower = 0
        this.territoryPower = 0
        this.technoPower = 0
        this.heroPower = 0
        this.arsenalPower = 0
        this.professionPower = 0
        this.formationPower = 0
    }
}