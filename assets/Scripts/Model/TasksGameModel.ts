import { _decorator, Component, Node } from 'cc';
import { TaskGame } from '../Structures/TaskGame';
const { ccclass } = _decorator;

@ccclass('TasksGameModel')
export class TasksGameModel extends Component {

    public static instance: TasksGameModel

    public tasks: Array<TaskGame>
    public itemsTasksGame: Array<Node>

    protected onLoad(): void {
        TasksGameModel.instance = this
    }
}