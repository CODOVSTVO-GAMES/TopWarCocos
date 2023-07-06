import { _decorator, Component, Node } from 'cc';
import { TasksGamePresenter } from '../Presenter/TasksGamePresenter';
import { TypesTasksGame } from '../Static/TypesTasksGame';
import { TaskGame } from '../Structures/TaskGame';
const { ccclass } = _decorator;

@ccclass('TasksGameModel')
export class TasksGameModel extends Component {

    public static instance: TasksGameModel

    public tasks: TaskGame[]
    public itemsTasksGame: Node[] = []

    protected onLoad(): void {
        TasksGameModel.instance = this
        this.assignStartingValues()
    }

    private assignStartingValues() {
        this.tasks = []
        TasksGamePresenter.addTask(TypesTasksGame.OPEN_ZONE, 2, 1, 0)
        TasksGamePresenter.addTask(TypesTasksGame.MERGE_GOLD_MINE, 2, 5, 5)
        TasksGamePresenter.addTask(TypesTasksGame.MERGE_BARRACK_AIR, 2, 2, 0)
        TasksGamePresenter.addTask(TypesTasksGame.MERGE_BARRACK_MARINE, 2, 2, 0)
        TasksGamePresenter.addTask(TypesTasksGame.MERGE_BARRACK_OVERLAND, 2, 2, 0)
        TasksGamePresenter.addTask(TypesTasksGame.BUILD_GOLD_MINE, 1, 10, 1)
        TasksGamePresenter.addTask(TypesTasksGame.BUILD_BARRACK_AIR, 1, 4, 0)
        TasksGamePresenter.addTask(TypesTasksGame.BUILD_BARRACK_MARINE, 1, 4, 0)
        TasksGamePresenter.addTask(TypesTasksGame.BUILD_BARRACK_OVERLAND, 1, 4, 0)
        TasksGamePresenter.addTask(TypesTasksGame.OPEN_UPGRADE_COMMAND_POST, 2, 1, 0)
        TasksGamePresenter.addTask(TypesTasksGame.OPEN_UPGRADE_MERGE_GOLD_MINE, 2, 1, 0)
        TasksGamePresenter.addTask(TypesTasksGame.OPEN_UPGRADE_MERGE_BARRACK_AIR, 2, 1, 0)
        TasksGamePresenter.addTask(TypesTasksGame.OPEN_UPGRADE_MERGE_BARRACK_MARINE, 2, 1, 0)
        TasksGamePresenter.addTask(TypesTasksGame.OPEN_UPGRADE_MERGE_BARRACK_OVERLAND, 2, 1, 0)
        TasksGamePresenter.addTask(TypesTasksGame.OPEN_UPGRADE_BUILD_GOLD_MINE, 2, 1, 0)
        TasksGamePresenter.addTask(TypesTasksGame.OPEN_UPGRADE_BUILD_BARRACK_AIR, 2, 1, 0)
        TasksGamePresenter.addTask(TypesTasksGame.OPEN_UPGRADE_BUILD_BARRACK_MARINE, 2, 1, 0)
        TasksGamePresenter.addTask(TypesTasksGame.OPEN_UPGRADE_BUILD_BARRACK_OVERLAND, 2, 1, 0)
    }
}