import { _decorator, Component, Node, Animation } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AnimationModals')
export class AnimationModals extends Component {

    public static instance: AnimationModals;

    // @property({ type: Animation })
    // public modalCharacterPumping: Animation;

    // @property({ type: Animation })
    // public modalRadarTaskInfo: Animation;

    // @property({ type: Animation })
    // public modalRadarReward: Animation;

    // public modalUpgradeComandPost: Animation;

    onLoad() {
        AnimationModals.instance = this;
    }

    modalAnimation(modal: Node, typeAnimation: string) {
        try { modal.getComponent(Animation).play(typeAnimation); }
        catch { console.log("error: cc.Animation not received"); }
    }
}