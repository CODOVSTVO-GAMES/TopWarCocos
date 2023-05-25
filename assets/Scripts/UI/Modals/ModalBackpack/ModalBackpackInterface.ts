import { _decorator, Component, instantiate, Node, Vec3 } from 'cc';
import { ControllerInventoryStorage } from '../../../Storage/Controllers/ControllerInventoryStorage';
import { PrefabsStorage } from '../../../Storage/PrefabsStorage';
const { ccclass, property } = _decorator;

@ccclass('ModalBackpackInterface')
export class ModalBackpackInterface extends Component {

    public static instance: ModalBackpackInterface;

    @property({ type: Node })
    private parentContent: Node;

    onLoad() {
        ModalBackpackInterface.instance = this;
    }

    updateInterface() {
        console.log(ControllerInventoryStorage.getInvenoryLength());
        for (let i = 0; i < ControllerInventoryStorage.getInvenoryLength(); i++) {
            let object = instantiate(PrefabsStorage.instance.getItemBackpack());
            object.parent = this.parentContent;
        }
    }
}

