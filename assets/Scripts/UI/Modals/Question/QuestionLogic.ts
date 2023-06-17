import { _decorator, Component, Node } from 'cc';
import { QuestionInterface } from './QuestionInterface';
import { BuferTasks } from '../../../Radar/BuferTasks';
import { SecondaryInterface } from '../../SecondaryInterface';
const { ccclass, property } = _decorator;

@ccclass('QuestionLogic')
export class QuestionLogic extends Component {

    public static instance: QuestionLogic;

    private text: string = "";
    private textButtons: string[] = [];
    private trigger: boolean = false;

    onLoad() {
        QuestionLogic.instance = this;
    }
    /**
     * выбор ответа мини игра
     */

    /**
     * при открытии этого задания, расчитывается логическая часть модалки
     * 
     * при нажатии на вариант ответа через секунду модалка закрывается, задание считается выполненым
     */

    renderModal() {
        this.trigger = false;
        this.text = this.getText();
        this.textButtons = this.getTextButtons();
        QuestionInterface.instance.updateInterface(this.text, this.textButtons);
    }

    pushButton(event, customEventData) {
        if (this.trigger == false) {
            this.trigger = true;
            QuestionInterface.instance.updateInterface(this.textButtons[customEventData], this.textButtons);
            setTimeout(() => {
                SecondaryInterface.instance.closeAllModals();
                BuferTasks.instance.awardingPersonal();
            }, 1000);
        }
    }

    getText(): string {
        return "Вход был пыльным , покрытывмтялв мхомпыфыът звоатцуз тщрыфвап";
    }

    getTextButtons(): string[] {
        return ["Прокрасться через дверь", "Подняться скрытно по воздуховоду", "Взорвать дверь взрывчаткой и вломиться внутрь", "Искать другие секретные пути"];
    }
}