import { _decorator, Component, Node } from 'cc';
import { TaskGame } from '../Structures/TaskGame';
const { ccclass } = _decorator;

@ccclass('TasksGameModel')
export class TasksGameModel extends Component {

    public static instance: TasksGameModel

    public tasks: TaskGame[]
    public itemsTasksGame: Node[]

    protected onLoad(): void {
        TasksGameModel.instance = this
        this.assignStartingValues()
    }

    private assignStartingValues() {
        this.tasks = []
    }
}