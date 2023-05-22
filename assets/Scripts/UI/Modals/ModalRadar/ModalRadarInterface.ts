import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ModalRadarInterface')
export class ModalRadarInterface extends Component {

    public static instance: ModalRadarInterface;

    onLoad() {
        ModalRadarInterface.instance = this;
    }

    updateInterface() {
    
    }
}