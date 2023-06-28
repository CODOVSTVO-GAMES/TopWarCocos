import { _decorator, Component } from 'cc';
import { ItemTasksGame } from '../UI/Modals/ModalTasksGame/ItemTasksGame';
import { TasksGameEventsController } from '../Controllers/UIEventControllers/TasksGameEventsController';
const { ccclass, property } = _decorator;

@ccclass('TasksGameEvents')
export class TasksGameEvents extends Component {

    @property({ type: ItemTasksGame })
    public itemTasksGame: ItemTasksGame

    public collectRewardTask() {
        // собрать награду
        TasksGameEventsController.prepCollectRewardTask(this.itemTasksGame)
    }

    public goOverTask() {
        // перейти к задаче
        TasksGameEventsController.prepGoOverTask(this.itemTasksGame)
    }
}
