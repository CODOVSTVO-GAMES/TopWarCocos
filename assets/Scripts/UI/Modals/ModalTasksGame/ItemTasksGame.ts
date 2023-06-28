import { _decorator, Component, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ItemTasksGame')
export class ItemTasksGame extends Component {

    public typeTask: string
    public levelObjectTask: number
    public quantityRequired: number
    public quantityCompleted: number

    @property({ type: Label })
    public typeTaskText: Label

    @property({ type: Label })
    public quantityReward: Label;

    public updateLabels() {
        this.typeTaskText.string = "(" + this.quantityCompleted + "/" + this.quantityRequired + ") " + this.typeTask + " level: " + this.levelObjectTask
        this.quantityReward.string = "1"
    }
}
