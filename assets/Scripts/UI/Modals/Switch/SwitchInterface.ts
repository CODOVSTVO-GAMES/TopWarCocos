import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SwitchInterface')
export class SwitchInterface extends Component {

    public static instance: SwitchInterface;

    

    onLoad() {
        SwitchInterface.instance = this;
    }
}