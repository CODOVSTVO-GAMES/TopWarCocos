import { _decorator, Component, Label } from 'cc';
import { TasksGamePresenter } from '../Presenter/TasksGamePresenter';
const { ccclass, property } = _decorator;

@ccclass('ItemTasksGameView')
export class ItemTasksGameView extends Component {

    public typeTask: string
    public levelObjectTask: number
    public quantityRequired: number
    public quantityCompleted: number

    @property({ type: Label })
    public typeTaskText: Label

    @property({ type: Label })
    public quantityReward: Label

    public eventCollectRewardTask() {
        TasksGamePresenter.processingCollectRewardTask(this)
    }

    public eventGoOverTask() {
        TasksGamePresenter.processingGoOverTask(this)
    }

    public renderTypeTask() {
        let typeTask = "(" + this.quantityCompleted + "/" + this.quantityRequired + ") " + this.typeTask + " level: " + this.levelObjectTask

        this.typeTaskText.string = typeTask
    }

    public renderQuantityReward() {
        let quantityReward = "1"

        this.quantityReward.string = quantityReward
    }
}
