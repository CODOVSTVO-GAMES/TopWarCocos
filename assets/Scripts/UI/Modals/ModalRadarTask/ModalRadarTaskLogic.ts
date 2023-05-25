import { _decorator, Component, Node } from 'cc';
import { RadarTask } from '../../../Structures/RadarTask';
const { ccclass, property } = _decorator;

@ccclass('ModalRadarTaskLogic')
export class ModalRadarTaskLogic extends Component {

    public static instance: ModalRadarTaskLogic;

    public task: RadarTask

    onLoad() {
        ModalRadarTaskLogic.instance = this;
    }

    pushButton() {

    }
}