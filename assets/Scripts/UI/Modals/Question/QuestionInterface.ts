import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('QuestionInterface')
export class QuestionInterface extends Component {

    public static instance: QuestionInterface;

    @property({ type: Label })
    public text: Label;

    @property({ type: Label })
    public textButtons: Label[] = [];

    onLoad() {
        QuestionInterface.instance = this;
    }
    /**
     * выбор ответа мини игра
     */

    updateInterface(text: string, textButtons: string[]) {
        this.text.string = text;
        for (let i = 0; i < this.textButtons.length; i++) {
            this.textButtons[i].string = textButtons[i];
        }
    }
}