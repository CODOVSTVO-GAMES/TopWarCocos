import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ModalRepairShopInterface')
export class ModalRepairShopInterface extends Component {

    public static instance: ModalRepairShopInterface;

    onLoad() {
        ModalRepairShopInterface.instance = this;
    }

    updateInterface() {

    }
}