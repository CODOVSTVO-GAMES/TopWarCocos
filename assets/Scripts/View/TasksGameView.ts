import { _decorator, Component, Node, instantiate } from 'cc';
import { TasksGameModel } from '../Model/TasksGameModel';
import { PrefabsModel } from '../Model/PrefabsModel';
import { ItemTasksGameView } from './ItemTasksGameView';
const { ccclass, property } = _decorator;

@ccclass('TasksGameView')
export class TasksGameView extends Component {

    public static instance: TasksGameView

    @property({ type: Node })
    public parentContent: Node

    protected onLoad(): void {
        TasksGameView.instance = this
    }

    public renderItemsTasks() {
        for (let i = 0; i < TasksGameModel.instance.itemsTasksGame.length; i++) {
            TasksGameModel.instance.itemsTasksGame[i].destroy()
        }
        TasksGameModel.instance.itemsTasksGame = []
        for (let i = 0; i < TasksGameModel.instance.tasks.length; i++) {

            let typeItem: string

            if (TasksGameModel.instance.tasks[i].rewardTrigger) {
                typeItem = "completedTask"
            }
            else {
                typeItem = "unfulfiledTask"
            }

            let object = instantiate(PrefabsModel.instance.getItemTasksGame(typeItem))

            object.getComponent(ItemTasksGameView).typeTask = TasksGameModel.instance.tasks[i].typeTask
            object.getComponent(ItemTasksGameView).levelObjectTask = TasksGameModel.instance.tasks[i].levelObjectTask
            object.getComponent(ItemTasksGameView).quantityRequired = TasksGameModel.instance.tasks[i].quantityRequired
            object.getComponent(ItemTasksGameView).quantityCompleted = TasksGameModel.instance.tasks[i].quantityCompleted
            object.getComponent(ItemTasksGameView).renderTypeTask()
            object.getComponent(ItemTasksGameView).renderQuantityReward()

            object.parent = this.parentContent

            TasksGameModel.instance.itemsTasksGame.push(object)
        }
    }
}