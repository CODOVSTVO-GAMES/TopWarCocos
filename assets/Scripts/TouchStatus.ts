import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('TouchStatus')
export class TouchStatus extends Component {

    public static instance: TouchStatus;

    public activeTouch: boolean;

    onEnable() {
        TouchStatus.instance = this;
        console.log(151 / 51);
    }
}