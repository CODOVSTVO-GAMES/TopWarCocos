import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ModalBackpackInterface')
export class ModalBackpackInterface extends Component {

    public static instance: ModalBackpackInterface;

    onLoad() {
        ModalBackpackInterface.instance = this;
    }

    updateInterface() {
        console.log("q");
    }
}

