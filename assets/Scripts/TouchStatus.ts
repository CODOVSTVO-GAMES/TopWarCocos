import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TouchStatus')
export class TouchStatus extends Component {

    public static instance: TouchStatus;

    public status: boolean = false;

    onEnable() {
        TouchStatus.instance = this;
    }
}