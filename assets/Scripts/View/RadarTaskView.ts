import { _decorator, Component, Node, Label, Sprite, SpriteFrame, Color } from 'cc';
import { SecondaryInterface } from '../UI/SecondaryInterface';
import { BattleTask } from '../Structures/BattleTask';
import { TypesModals } from '../Static/TypesModals';
import { BattleTaskTypes } from '../Static/BattleTaskTypes';
import { RadarPresenter } from '../Presenter/RadarPresenter';
import { RadarModel } from '../Model/RadarModel';
import { TypesItems } from '../Static/TypesItems';
const { ccclass, property } = _decorator; 

@ccclass('RadarTaskView')
export class RadarTaskView extends Component {

    public static instance: RadarTaskView

    @property({ type: Animation })
    public animationOpenClose: Animation

    @property({ type: Label })
    public title: Label

    @property({ type: Label })
    public status: Label

    @property({ type: Label })
    public btnText: Label

    @property({ type: Sprite })
    public image: Sprite

    @property({ type: Label })
    public quantity: Label[] = []

    @property({ type: Node })
    public stars: Node[] = []

    @property({ type: Sprite })
    public rewardsBG: Sprite[] = []

    @property({ type: Sprite })
    public rewards: Sprite[] = []

    @property({ type: SpriteFrame })
    public spritesBG: SpriteFrame[] = []

    @property({ type: SpriteFrame })
    public rewardSprites: SpriteFrame[] = []

    public task: BattleTask

    protected onLoad(): void {
        RadarTaskView.instance = this
        this.schedule(this.renderModalTask, 0.1)
    }

    public renderModalTask() {
        if (SecondaryInterface.instance.activeSecondLayoutModal == TypesModals.RADAR_TASK_INFO) {
            const task = RadarModel.instance.task

            if (task.status == 0) {
                this.status.string = "Не началось"
                this.btnText.string = "Перейти"
                this.title.string = "Задание завершится через " + task.expiration
            }
            else if (task.status == 1) {
                this.title.string = "Результаты через " + task.battleTime
                this.status.string = "В походе"
                this.btnText.string = "В походе..."
            }


            this.image.color = this.getSpriteTask(task.type);
            for (let i = 0; i < this.stars.length; i++) {
                this.stars[i].active = i < task.stars
            }
            for (let i = 0; i < task.rewards.length; i++) {
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

    public updateInterface(task: BattleTask) {
        RadarModel.instance.task = task
        this.renderModalTask()
    }

    public getSpriteTask(type: string): Color {
        if (type == BattleTaskTypes.TASK_SALVATION) {
            return new Color(255, 0, 0, 255)
        } else if (type == BattleTaskTypes.TASK_DARK_LEGION) {
            return new Color(0, 255, 0, 255)
        } else if (type == BattleTaskTypes.TASK_PERSONAL) {
            return new Color(0, 0, 255, 255)
        }
    }

    public pushButton() {
        if (this.task.type == BattleTaskTypes.TASK_SALVATION) {
            RadarPresenter.activateTask(this.task)
        }
        else if (this.task.type == BattleTaskTypes.TASK_PERSONAL) {
            // MapService.attackEnemy(this.task)
            // BuferTasks.instance.addTaskPersonal(this.task);
            SecondaryInterface.instance.closeSecondLayoutModal()
            SecondaryInterface.instance.closeAllModals()

            let random = Math.floor(Math.random() * 100)
            if (random < 25) {
                SecondaryInterface.instance.openWireCut()
            }
            else if (random < 50) {
                SecondaryInterface.instance.openBombDisposal()
            }
            else if (random < 75) {
                SecondaryInterface.instance.openQuestion()
            }
            else {
                SecondaryInterface.instance.openSwith()
            }
        }
    }
}