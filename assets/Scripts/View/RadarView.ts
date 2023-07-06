import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { RadarModel } from '../Model/RadarModel';
import { ItemTaskRadarView } from './ItemTaskRadarView';
const { ccclass, property } = _decorator;

@ccclass('RadarView')
export class RadarView extends Component {

    public static instance: RadarView

    @property({ type: Node })
    public locatorNode: Node

    @property({ type: Prefab })
    public taskPrefab: Prefab

    protected onLoad(): void {
        RadarView.instance = this
    }

    updateInterface() {
        this.renderLocator()
    }

    renderLocator() {
        let tasks = RadarModel.instance.tasks
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].node == null) {
                let task = instantiate(this.taskPrefab)
                task.setParent(this.locatorNode)
                task.position = tasks[i].coords
                let taskRender = task.getComponent(ItemTaskRadarView)
                taskRender.render(tasks[i])

                tasks[i].node = task
            }
        }
    }

    cleanTasks() {
        let tasks = RadarModel.instance.tasks
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].node.destroy()
            tasks[i].node = null
        }
    }
}
