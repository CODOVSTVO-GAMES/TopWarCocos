import { _decorator, Component, Label, Sprite, SpriteFrame } from 'cc';
import { TypesItems } from '../Static/TypesItems';
import { RadarStorage } from '../Storage/RadarStorage';
import { BackpackPresenter } from '../Presenter/BackpackPresenter';
import { GamePresenter } from '../Presenter/GamePresenter';
const { ccclass, property } = _decorator;

@ccclass('RewardView')
export class RewardView extends Component {

    public static instance: RewardView

    @property({ type: Animation })
    public animationOpenClose: Animation;

    @property({ type: Sprite })
    public rewardsBG: Sprite[] = []

    @property({ type: Sprite })
    public rewards: Sprite[] = []

    @property({ type: Label })
    public quantity: Label[] = []

    @property({ type: SpriteFrame })
    public spritesBG: SpriteFrame[] = []

    @property({ type: SpriteFrame })
    public rewardSprites: SpriteFrame[] = []

    protected onLoad(): void {
        RewardView.instance = this;
    }

    public giveReward() {
        for (let i = 0; i < RadarStorage.instance.task.rewards.length; i++) {
            if (RadarStorage.instance.task.rewards[i].type != TypesItems.EXPERIENCE) {
                BackpackPresenter.addItemBackpack(RadarStorage.instance.task.rewards[i].type, RadarStorage.instance.task.rewards[i].quantity)
            }
            else {
                GamePresenter.addExperience(RadarStorage.instance.task.rewards[i].quantity)
            }
        }

        // RadarStorageController.addRadarExperience(1);
        // RadarStorageController.reduceRadarTask(RadarStorage.instance.task);

        // RadarStorageController.reduceRadarAvailableMissions(1); //добавить при победе в миссии
    }

    public renderInterface() {
        let task = RadarStorage.instance.task

        for (let i = 0; i < this.rewards.length; i++) {
            this.quantity[i].string = task.rewards[i].quantity.toString()

            switch (task.rewards[i].type) {
                case TypesItems.PLAN_COMMAND_POST:
                    this.rewardsBG[i].spriteFrame = this.spritesBG[0]
                    break
                case TypesItems.EXPERIENCE:
                    this.rewardsBG[i].spriteFrame = this.spritesBG[1]
                    break
                default:
                    this.rewardsBG[i].spriteFrame = this.spritesBG[2]
                    break
            }
        }
    }
}