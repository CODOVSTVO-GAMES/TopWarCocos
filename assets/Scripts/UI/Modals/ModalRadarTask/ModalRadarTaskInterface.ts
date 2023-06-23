import { _decorator, Color, Component, Label, Node, Sprite, SpriteFrame, Animation } from 'cc';
import { BattleTask } from '../../../Structures/BattleTask';
import { BattleTaskTypes } from '../../../Static/BattleTaskTypes';
import { TypesItems } from '../../../Static/TypesItems';
import { ModalRadarTaskLogic } from './ModalRadarTaskLogic';
import { SecondaryInterface } from '../../SecondaryInterface';
import { TypesModals } from '../../../Static/TypesModals';
const { ccclass, property } = _decorator;

@ccclass('ModalRadarTaskInterface')
export class ModalRadarTaskInterface extends Component {

    public static instance: ModalRadarTaskInterface;

    @property({ type: Animation })
    public animationOpenClose: Animation;

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
        this.schedule(this.renderModalTask, 0.1)
    }

    /**r
     * при нажатии на задачу рендерится модалка информации о задаче
     */


    renderModalTask() {
        if (SecondaryInterface.instance.activeSecondLayoutModal == TypesModals.RADAR_TASK_INFO) {
            const task = ModalRadarTaskLogic.instance.task
            // console.log('отрисовываем задачу ' + task.id)
            if (task.status == 0) {
                this.status.string = "Не началось";
                this.btnText.string = "Перейти";
                this.title.string = "Задание завершится через " + task.expiration;
            }
            else if (task.status == 1) {
                this.title.string = "Результаты через " + task.battleTime;
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
                    case TypesItems.PLAN_COMMAND_POST:
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

    updateInterface(task: BattleTask) {
        ModalRadarTaskLogic.instance.task = task
        this.renderModalTask()
    }

    getSpriteTask(type: string): Color {
        if (type == BattleTaskTypes.TASK_SALVATION) {
            return new Color(255, 0, 0, 255);
        } else if (type == BattleTaskTypes.TASK_DARK_LEGION) {
            return new Color(0, 255, 0, 255);
        } else if (type == BattleTaskTypes.TASK_PERSONAL) {
            return new Color(0, 0, 255, 255);
        }
    }
}