import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ModalCommandPostLogic')
export class ModalCommandPostLogic extends Component {

    @property({ type: Node })
    public commandPostPanel: Node;

    @property({ type: Node })
    public otherPanel: Node;

    openUpgradeCommandPost() {
        this.commandPostPanel.active = true;
    }

    openOther() {
        this.otherPanel.active = true;
    }
}
