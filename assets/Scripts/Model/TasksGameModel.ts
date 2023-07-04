import { _decorator, Component, Node } from 'cc';
import { TaskGame } from '../Structures/TaskGame';
const { ccclass } = _decorator;

@ccclass('TasksGameModel')
export class TasksGameModel extends Component {

    public static instance: TasksGameModel

    public tasks: TaskGame[]
    public itemsTasksGame: Node[]

    protected onLoad(): void {
        this.assignStartingValues()
        TasksGameModel.instance = this
    }

    private assignStartingValues() {
        this.tasks = []
    }
}