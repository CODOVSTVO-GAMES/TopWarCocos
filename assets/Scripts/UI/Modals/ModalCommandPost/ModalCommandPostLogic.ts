import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ModalCommandPostLogic')
export class ModalCommandPostLogic extends Component {

    @property({ type: Node })
    public backgraund: Node;

    @property({ type: Node })
    public upgrateCommandPost: Node;

    @property({ type: Node })
    public upgrateOther: Node;

    start() {
        this.closeAll();
    }

    openUpgradeCommandPost() {
        this.backgraund.active = true;
        this.upgrateCommandPost.active = true;
    }

    openUpgradeOther(event, customEventData) {
        console.log(customEventData);
        this.backgraund.active = true;
        this.upgrateOther.active = true;
    }

    closeAll() {
        this.backgraund.active = false;
        this.upgrateCommandPost.active = false;
        this.upgrateOther.active = false;
    }
}
