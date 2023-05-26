import { _decorator, Component, Label, Node, Sprite, SpriteFrame } from 'cc';
import { RadarTask } from '../../../Structures/RadarTask';
import { TypesItems } from '../../../Static/TypesItems';
const { ccclass, property } = _decorator;

@ccclass('ModalRadarRewardInterface')
export class ModalRadarRewardInterface extends Component {

    public static instance: ModalRadarRewardInterface;

    @property({ type: Sprite })
    public rewardsBG: Sprite[] = [];

    @property({ type: Sprite })
    public rewards: Sprite[] = [];

    @property({ type: Label })
    public quantity: Label[] = [];

    @property({ type: SpriteFrame })
    public spritesBG: SpriteFrame[] = [];

    @property({ type: SpriteFrame })
    public rewardSprites: SpriteFrame[] = [];

    onLoad() {
        ModalRadarRewardInterface.instance = this;
    }

    updateInterface(task: RadarTask) {
        for (let i = 0; i < this.rewards.length; i++) {
            this.quantity[i].string = task.rewards[i].quantity.toString();
            switch (task.rewards[i].type) {
                case TypesItems.PLAN_MAX_MAINBUILDING:
                    this.rewardsBG[i].spriteFrame = this.spritesBG[0];
                    break;
                case TypesItems.EXPERIENCE:
                    this.rewardsBG[i].spriteFrame = this.spritesBG[1];
                    break;
                default:
                    this.rewardsBG[i].spriteFrame = this.spritesBG[2];
                    break;
            }
        }
    }
}