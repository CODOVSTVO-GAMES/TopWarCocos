import { _decorator, Component, Node, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MainInterface')
export class MainInterface extends Component {

    public static instance: MainInterface

    @property({ type: Node })
    public mainNode: Node

    public onLoad() {
        MainInterface.instance = this
    }

    resizeMainInterface(raito = 1) {
        this.mainNode.setScale(v3(raito, raito, this.mainNode.scale.z))
    }
}
 