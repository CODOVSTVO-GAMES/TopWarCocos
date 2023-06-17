import { _decorator, Component, CCInteger } from 'cc';
import { RadarTask } from '../Structures/RadarTask';
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

    public tasks: RadarTask[] = []

    public task: any

    public onLoad() {
        RadarStorage.instance = this
    }
}