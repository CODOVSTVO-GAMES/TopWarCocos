import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('RadarEvents')
export class RadarEvents extends Component {

    public eventAddEnergy() {
        // добавить энергии

    }

    public eventClickTask() {
        // нажатие на задачу на карте

    }

    public eventScanMap() {
        // сканировать карту

    }
}
