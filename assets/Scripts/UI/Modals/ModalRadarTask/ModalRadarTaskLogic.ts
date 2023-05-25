import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ModalRadarTaskLogic')
export class ModalRadarTaskLogic extends Component {

    public static instance: ModalRadarTaskLogic;

    

    onLoad() {
        ModalRadarTaskLogic.instance = this;
    }
}