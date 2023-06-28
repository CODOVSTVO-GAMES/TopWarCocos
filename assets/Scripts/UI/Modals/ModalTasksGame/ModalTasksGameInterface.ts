import { _decorator, Component, Node, instantiate } from 'cc';
import { TasksGameStorage } from '../../../Storage/TasksGameStorage';
import { PrefabsStorage } from '../../../Storage/PrefabsStorage';
import { ItemTasksGame } from './ItemTasksGame';
const { ccclass, property } = _decorator;

@ccclass('ModalTasksGameInterface')
export class ModalTasksGameInterface extends Component {

    public static instance: ModalTasksGameInterface

    @property({ type: Node })
    public parentContent: Node

    @property({ type: Node })
    private items: Node[] = []

    public onLoad() {
        ModalTasksGameInterface.instance = this
    }

    public updateInterface() {
        console.log("UPDATE INTERFACE")
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].destroy();
        }
        this.items = new Array
        for (let i = 0; i < TasksGameStorage.instance.storage.length; i++) {

            let typeItem: string

            if (TasksGameStorage.instance.storage[i].rewardTrigger) {
                typeItem = "completedTask"
            }
            else {
                typeItem = "unfulfiledTask"
            }

            let object = instantiate(PrefabsStorage.instance.getItemTasksGame(typeItem))

            this.items.push(object)

            object.getComponent(ItemTasksGame).typeTask = TasksGameStorage.instance.storage[i].typeTask
            object.getComponent(ItemTasksGame).levelObjectTask = TasksGameStorage.instance.storage[i].levelObjectTask
            object.getComponent(ItemTasksGame).quantityRequired = TasksGameStorage.instance.storage[i].quantityRequired
            object.getComponent(ItemTasksGame).quantityCompleted = TasksGameStorage.instance.storage[i].quantityCompleted
            object.getComponent(ItemTasksGame).updateLabels()

            object.parent = this.parentContent
        }
    }
}   