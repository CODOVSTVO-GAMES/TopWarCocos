import { _decorator, Component, Node } from 'cc';
import { BombDisposalInterface } from './BombDisposalInterface';
import { SecondaryInterface } from '../../SecondaryInterface';
import { BuferTasks } from '../../../Radar/BuferTasks';
const { ccclass, property } = _decorator;

@ccclass('BombDisposalLogic')
export class BombDisposalLogic extends Component {

    public static instance: BombDisposalLogic;

    private str = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    private taskText: string = "";
    private resultText: string = "";
    private triggerDelete: boolean = false;

    onLoad() {
        BombDisposalLogic.instance = this;
    }

    renderModal() {
        this.resultText = "";
        this.taskText = this.randomString();
        BombDisposalInterface.instance.updateInterface(this.taskText, this.resultText);
    }

    pushButton(event, customEventData) {
        if (this.resultText.length >= 4) {
            if (this.resultText == this.taskText) {
                SecondaryInterface.instance.closeAllModals();
                BuferTasks.instance.awardingPersonal();
            }
            else {
                if (this.triggerDelete == false) {
                    this.triggerDelete = true;
                    setTimeout(() => {
                        this.resultText = "";
                        BombDisposalInterface.instance.updateInterface(this.taskText, this.resultText);
                        this.triggerDelete = false;
                    }, 3000)
                }
            }
        }
        else {
            this.resultText += customEventData;
            BombDisposalInterface.instance.updateInterface(this.taskText, this.resultText);
        }
    }

    randomString(): string {
        let str = "";
        for (let i = 0; i < 4; i++) {
            str += this.str[Math.floor(Math.random() * this.str.length)];
        }
        return str;
    }
}