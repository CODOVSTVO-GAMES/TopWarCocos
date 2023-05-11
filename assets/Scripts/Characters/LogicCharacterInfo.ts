import { _decorator, Component, Node } from 'cc';
import { RenderCharacterInfo } from './RenderCharacterInfo';
const { ccclass, property } = _decorator;

@ccclass('LogicCharacterInfo')
export class LogicCharacterInfo extends Component {

    @property({ type: Node })
    public modal: Node;

    modalOpen(event, customEventData) {
        this.modal.active = RenderCharacterInfo.instance.renderCharacter(customEventData);
    }

    modalClose() {
        this.modal.active = false;
    }
}