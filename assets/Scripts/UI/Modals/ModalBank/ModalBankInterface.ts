import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ModalBankInterface')
export class ModalBankInterface extends Component {

    public static instance: ModalBankInterface;

    onLoad() {
        ModalBankInterface.instance = this;
    }

    updateInterface() {

    }
}