import { _decorator, Component, Node, Animation } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MessageAnimation')
export class MessageAnimation extends Component {

    @property({ type: Animation })
    public anim: Animation;

    startAnimation() {
        this.anim.play();
    }

    stopAnimation() {
        this.anim.stop();
    }
}