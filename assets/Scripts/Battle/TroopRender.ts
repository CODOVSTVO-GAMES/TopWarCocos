import { _decorator, Animation, Component, Label, Node, Sprite } from 'cc';
import { TypesTeam } from '../Static/TypesTeam';
import { Unit } from '../Structures/Unit';
import { TypesAnimation } from '../Static/TypesAnimation';
const { ccclass, property } = _decorator;

@ccclass('TroopRender')
export class TroopRender extends Component {

    public team: string;

    public index: number;

    @property({ type: Node })
    public nodeObject: Node;

    @property({ type: Node })
    public bullet: Node;

    @property({ type: Sprite })
    public spriteObject: Sprite;

    @property({ type: Sprite })
    public sliderObject: Sprite;

    @property({ type: Label })
    public hpText: Label;

    @property({ type: Animation })
    public anim: Animation;

    public unitInfo: Unit;

    shotRenderInfo(time: number) {
        setTimeout(() => this.renderInfo(), (time * 750) + 750);
    }

    renderInfo() {
        if (this.unitInfo == null) {
            return this.destroy();
        }
        if (this.unitInfo.hp < 0) {
            this.unitInfo.hp = 0;
        }
        this.hpText.string = this.unitInfo.hp.toString();
        this.sliderObject.fillRange = this.unitInfo.hp / this.unitInfo.availableHp;
    }

    renderShot() {
        let typeAnimation;
        if (this.team == TypesTeam.TEAM_OWN) {
            typeAnimation = TypesAnimation.BULLET_SHOT_OWN;
        }
        else if (this.team == TypesTeam.TEAM_ENEMY) {
            typeAnimation = TypesAnimation.BULLET_SHOT_ENEMY;
        }
        try {
            this.anim.play(typeAnimation);
        }
        catch
        {
            console.log("error play animation")
        }

    }

    renderDead() {
        try {
            this.nodeObject.destroy();
        }
        catch
        {
            console.log("пиздец чего Даня тут понаписал, не работает :(")
        }
    }
}