import { _decorator, Component, CCInteger } from 'cc';
import { BattleTask } from '../Structures/BattleTask';
const { ccclass, property } = _decorator;

@ccclass('RadarStorage')
export class RadarStorage extends Component {

    public static instance: RadarStorage

    @property({ type: CCInteger })
    public radarLevel: number

    @property({ type: CCInteger })
    public availableMissions: number

    @property({ type: CCInteger })
    public timeToUpdate: number

    @property({ type: CCInteger })
    public signalQuality: number

    @property({ type: CCInteger })
    public radarExperience: number

    public tasks: BattleTask[] = []

    public task: any

    public onLoad() {
        RadarStorage.instance = this
    }

}