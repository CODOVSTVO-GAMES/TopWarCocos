import { _decorator, Component } from 'cc';
import { BattleTask } from '../Structures/BattleTask';
const { ccclass } = _decorator;

@ccclass('RadarModel')
export class RadarModel extends Component {

    public static instance: RadarModel

    public radarLevel: number
    public availableMissions: number
    public timeToUpdate: number
    public signalQuality: number
    public radarExperience: number
    public tasks: BattleTask[]
    public task: any

    protected onLoad(): void {
        this.assignStartingValues()
        RadarModel.instance = this
    }

    private assignStartingValues() {
        this.tasks = []
    }
}