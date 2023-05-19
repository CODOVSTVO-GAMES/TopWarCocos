import { _decorator, Component, Node } from 'cc';
import { RadarTask } from '../Structures/RadarTask';
const { ccclass, property } = _decorator;

@ccclass('RadarStorage')
export class RadarStorage extends Component {

    public static instance: RadarStorage;
    
    public radarLevel: number;
    public availableMissions: number;
    public timeToUpdate: number;
    public signalQuality: number;
    public tasks: RadarTask[] = [];

    onLoad() {
        RadarStorage.instance = this;
    }
}