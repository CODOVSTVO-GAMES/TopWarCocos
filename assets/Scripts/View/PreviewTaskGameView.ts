import { _decorator, Component, Label } from 'cc';
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
            let quantityRequired = TasksGameModel.instance.tasks[TasksGameModel.instance.tasks.length - 1].quantityRequired
            let quantityCompleted = TasksGameModel.instance.tasks[TasksGameModel.instance.tasks.length - 1].quantityCompleted
            subtitleTask = quantityCompleted + "/" + quantityRequired
        }

        this.subtitleTask.string = subtitleTask
    }

    private renderQauntityTasks() {
        let quantityTasks = TasksGameModel.instance.tasks.length.toString()

        this.quantityTasks.string = quantityTasks
    }
}