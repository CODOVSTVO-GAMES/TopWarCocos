import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RadarStorage')
export class RadarStorage extends Component {

    public static instance: RadarStorage;
.0
    public radarLevel: number;
    public availableMissions: number;
    public maximumMissions: number;
    public timeToUpdate: number;
    public signalQuality: number;

    onLoad() {
        RadarStorage.instance = this;
    }
}