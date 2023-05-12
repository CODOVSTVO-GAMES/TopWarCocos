import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { TypesModalPumping } from '../../../../Static/TypesModalPumping';
const { ccclass, property } = _decorator;

@ccclass('ModalCharacterPumpingInterface')
export class ModalCharacterPumpingInterface extends Component {

    public static instance: ModalCharacterPumpingInterface;

    @property({ type: Node })
    public tabs: Node[] = [];

    @property({ type: Label })
    public level: Label;

    @property({ type: Label })
    public experience: Label;

    @property({ type: Sprite })
    public slider: Sprite;

    @property({ type: Label })
    public quantity: Label[] = [];

    @property({ type: Sprite })
    public flags: Sprite[] = [];

    onLoad() {
        ModalCharacterPumpingInterface.instance = this;
    }

    renderModalPumping(tab: string) {
        switch (tab) {
            case TypesModalPumping.PARAMETERS:

                break;
            case TypesModalPumping.PUMPING_LEVEL:

                break;
            case TypesModalPumping.PUMPING_STARS:

                break;
        }
    }
}