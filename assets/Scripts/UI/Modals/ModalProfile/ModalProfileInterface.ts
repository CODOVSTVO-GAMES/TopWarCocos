import { _decorator, Component, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ModalProfileInterface')
export class ModalProfileInterface extends Component {

    public static instance: ModalProfileInterface;

    onLoad() {
        ModalProfileInterface.instance = this;
    }

    updateInterface() {

    }
}

