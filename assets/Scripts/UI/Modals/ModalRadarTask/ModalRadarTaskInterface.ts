import { _decorator, Color, Component, Label, Node, Sprite, SpriteFrame, Animation } from 'cc';
import { RadarTask } from '../../../Structures/RadarTask';
import { TypesRadar } from '../../../Static/TypesRadar';
import { TypesItems } from '../../../Static/TypesItems';
import { ModalRadarTaskLogic } from './ModalRadarTaskLogic';
import { ModalRadarLogic } from '../ModalRadar/ModalRadarLogic';
const { ccclass, property } = _decorator;

@ccclass('ModalRadarTaskInterface')
export class ModalRadarTaskInterface extends Component {

    public static instance: ModalRadarTaskInterface;

    @property({ type: Animation })
    public animationModal: Animation;

    @property({ type: Label })
    public title: Label;

    @property({ type: Label })
    public status: Label;

    @property({ type: Label })
    public btnText: Label;

    @property({ type: Sprite })
    public image: Sprite;

    @property({ type: Label })
    public quantity: Label[] = [];

    @property({ type: Node })
    public stars: Node[] = [];

    @property({ type: Sprite })
    public rewardsBG: Sprite[] = [];

    @property({ type: Sprite })
    public rewards: Sprite[] = [];

    @property({ type: SpriteFrame })
    public spritesBG: SpriteFrame[] = [];

    @property({ type: SpriteFrame })
    public rewardSprites: SpriteFrame[] = [];

    onLoad() {
        ModalRadarTaskInterface.instance = this;
    }

    updateInterface(task: RadarTask) {
        ModalRadarTaskLogic.instance.task = task;
        this.title.string = "Задание завершится через " + task.time;
        if (task.status == 0) {
            this.status.string = "Не началось";
            this.btnText.string = "Перейти";
        }
        else if (task.status == 1) {
            this.status.string = "В походе";
            this.btnText.string = "В походе...";
        }
        this.image.color = this.getSpriteTask(task.type);
        for (let i = 0; i < this.stars.length; i++) {
            this.stars[i].active = i < task.stars;
        }
        for (let i = 0; i < task.rewards.length; i++) {
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
        this.animationModal.play();
        this.startTimer();
    }

    animationCloseModal() {
        this.animationModal.stop();
    }

    getSpriteTask(type: string): Color {
        switch (type) {
            case TypesRadar.TASK_SALVATION:
                return new Color(255, 0, 0, 255);
            case TypesRadar.TASK_DARK_LEGION:
                return new Color(0, 255, 0, 255);
            case TypesRadar.TASK_PERSONAL:
                return new Color(0, 0, 255, 255);
        }
    }

    startTimer() {
        let timer = setInterval(() => {
            if (ModalRadarTaskLogic.instance.task != null) {
                let time = ModalRadarTaskLogic.instance.task.time;
                if (ModalRadarLogic.instance.modalRadarTask.active && time > 0) {
                    ModalRadarTaskLogic.instance.task.time--;
                    this.title.string = "Задание завершится через " + time;
                }
                else {
                    clearInterval(timer);
                }
            }
            else {
                clearInterval(timer);
            }
        }, 1000);
    }
}