import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BombDisposalInterface')
export class BombDisposalInterface extends Component {

    public static instance: BombDisposalInterface;

    @property({ type: Label })
    public taskText: Label;

    @property({ type: Label })
    public resultText: Label;

    onLoad() {
        BombDisposalInterface.instance = this;
    }

    updateInterface(task: string, result: string) {
        this.taskText.string = task;
        this.resultText.string = result;
    }
}