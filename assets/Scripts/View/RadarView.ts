import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { RadarModel } from '../Model/RadarModel';
const { ccclass, property } = _decorator;

@ccclass('RadarView')
export class RadarView extends Component {

    public static instance: RadarView

    @property({ type: Node })
    public locatorNode: Node;

    @property({ type: Prefab })
    public taskPrefab: Prefab;

    protected onLoad(): void {
        RadarView.instance = this
    }

    updateInterface() {
        this.renderLocator()
    }

    renderLocator() {
        let tasks = RadarModel.instance.tasks
        for (let l = 0; l < tasks.length; l++) {
            if (tasks[l].node == null) {
                let task = instantiate(this.taskPrefab)
                task.setParent(this.locatorNode)
                task.position = tasks[l].coords
                // let taskRender = task.getComponent(TaskRender)
                // taskRender.render(tasks[l])

                tasks[l].node = task
            }
        }
    }

    cleanTasks() {
        let tasks = RadarModel.instance.tasks
        for (let l = 0; l < tasks.length; l++) {
            tasks[l].node.destroy()
            tasks[l].node = null
        }
    }
}
