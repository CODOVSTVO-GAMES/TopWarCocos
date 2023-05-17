import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ModalCommandPostLogic')
export class ModalCommandPostLogic extends Component {

    @property({ type: Node })
    public upgrateCommandPost: Node;

    @property({ type: Node })
    public upgrateOther: Node;

    openUpgradeCommandPost() {
        this.upgrateCommandPost.active = true;
    }

    openUpgradeOther(event, customEventData) {
        this.upgrateOther.active = true;
    }
}
