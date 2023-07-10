import { _decorator, Component, Label, Sprite, SpriteFrame } from 'cc';
import { TasksGameModel } from '../Model/TasksGameModel';
import { TasksGamePresenter } from '../Presenter/TasksGamePresenter';
const { ccclass, property } = _decorator;

@ccclass('PreviewTaskGameView')
export class PreviewTaskGameView extends Component {

    public static instance: PreviewTaskGameView

    @property({ type: Label })
    public titleTask: Label

    @property({ type: Label })
    public subtitleTask: Label

    @property({ type: Label })
    public quantityTasks: Label

    @property({ type: Sprite })
    public spriteOpenTaskGame: Sprite

    @property({ type: Sprite })
    public backgraundPreviewTaskGame: Sprite

    @property({ type: SpriteFrame })
    public spriteFrameButton: SpriteFrame

    @property({ type: SpriteFrame })
    public spriteFrameButtonDone: SpriteFrame

    @property({ type: SpriteFrame })
    public spriteBackgraundPreview: SpriteFrame

    @property({ type: SpriteFrame })
    public spriteBackgraundPreviewDone: SpriteFrame

    protected onLoad(): void {
        PreviewTaskGameView.instance = this
        this.renderInterface()
    }

    public eventCollectRewardTask() {
        let typeTask = TasksGameModel.instance.tasks[TasksGameModel.instance.tasks.length - 1].typeTask
        let levelObjectTask = TasksGameModel.instance.tasks[TasksGameModel.instance.tasks.length - 1].levelObjectTask

        TasksGamePresenter.collectReward(typeTask, levelObjectTask)
    }

    public renderInterface() {
        this.renderTitleTask()
        this.renderSubtitleTask()
        this.renderQauntityTasks()
        this.renderSprites()
    }

    private renderTitleTask() {
        let titleTask = TasksGameModel.instance.tasks[TasksGameModel.instance.tasks.length - 1].typeTask

        this.titleTask.string = titleTask
    }

    private renderSubtitleTask() {
        let subtitleTask: string

        if (TasksGameModel.instance.tasks[TasksGameModel.instance.tasks.length - 1].rewardTrigger) {
            subtitleTask = "Выполнено"
        }
        else {
            let quantityRequired = TasksGameModel.instance.tasks[TasksGameModel.instance.tasks.length - 1].quantityRequired.toString()
            let quantityCompleted = TasksGameModel.instance.tasks[TasksGameModel.instance.tasks.length - 1].quantityCompleted.toString()
            subtitleTask = quantityCompleted + "/" + quantityRequired
        }

        this.subtitleTask.string = subtitleTask
    }

    private renderQauntityTasks() {
        let quantityTasks = TasksGameModel.instance.tasks.length.toString()

        this.quantityTasks.string = quantityTasks
    }

    private renderSprites() {
        if (TasksGameModel.instance.tasks[TasksGameModel.instance.tasks.length - 1].rewardTrigger) {
            this.spriteOpenTaskGame.spriteFrame = this.spriteFrameButtonDone
            this.backgraundPreviewTaskGame.spriteFrame = this.spriteBackgraundPreviewDone
        }
        else {
            this.spriteOpenTaskGame.spriteFrame = this.spriteFrameButton
            this.backgraundPreviewTaskGame.spriteFrame = this.spriteBackgraundPreview
        }
    }
}