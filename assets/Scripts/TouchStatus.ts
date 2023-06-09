import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('TouchStatus')
export class TouchStatus extends Component {

    public static instance: TouchStatus

    public activeTouch: boolean

    public onEnable() {
        TouchStatus.instance = this
    }
}