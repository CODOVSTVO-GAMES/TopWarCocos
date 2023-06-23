import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { RadarStorageController } from '../Controllers/StorageControllers/RadarStorageController';
import { TaskRender } from '../Radar/TaskRender';
import { RadarStorage } from '../Storage/RadarStorage';
const { ccclass, property } = _decorator;

@ccclass('RadarRender')
export class RadarRender extends Component {

    public static instance: RadarRender

    @property({ type: Node })
    public locatorNode: Node;

    @property({ type: Prefab })
    public taskPrefab: Prefab;

    protected onLoad(): void {
        RadarRender.instance = this
    }

    updateInterface() {
        this.renderLocator()
    }

    renderLocator() {
        let tasks = RadarStorage.instance.tasks
        for (let l = 0; l < tasks.length; l++) {
            if (tasks[l].node == null) {
                let task = instantiate(this.taskPrefab);
                task.setParent(this.locatorNode)
                task.position = tasks[l].coords
                let taskRender = task.getComponent(TaskRender);
                taskRender.render(tasks[l])

                tasks[l].node = task
            }
        }
    }

    cleanTasks() {
        let tasks = RadarStorage.instance.tasks
        for (let l = 0; l < tasks.length; l++) {
            tasks[l].node.destroy()
            tasks[l].node = null
        }

    }
}

