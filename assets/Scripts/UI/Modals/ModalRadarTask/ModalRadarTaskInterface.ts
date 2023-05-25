import { _decorator, Color, Component, Label, Node, Sprite } from 'cc';
import { RadarTask } from '../../../Structures/RadarTask';
import { TypesRadar } from '../../../Static/TypesRadar';
const { ccclass, property } = _decorator;

@ccclass('ModalRadarTaskInterface')
export class ModalRadarTaskInterface extends Component {

    public static instance: ModalRadarTaskInterface;

    @property({ type: Label })
    public title: Label;

    @property({ type: Label })
    public status: Label;

    @property({ type: Sprite })
    public image: Sprite;

    @property({ type: Label })
    public quantity: Label[] = [];

    @property({ type: Node })
    public stars: Node[] = [];

    @property({ type: Sprite })
    public rewardsBG: Sprite[] = [];

    @property({ type: Sprite })
    public rewards: Sprite[] = [];

    onLoad() {
        ModalRadarTaskInterface.instance = this;
    }

    updateInterface(task: RadarTask) {
        this.title.string = "Задание завершится через " + task.time;
        this.status.string = "Не началось";
        this.image.color = this.getSprite(task.type);
        for (let i = 0; i < this.stars.length; i++) {
            this.stars[i].active = i < task.stars;
        }
        for(let i = 0; i < this.quantity.length; i++) {

        }
    }

    getSprite(type: string): Color {
        switch (type) {
            case TypesRadar.TASK_SALVATION:
                return new Color(255, 0, 0, 255);
            case TypesRadar.TASK_DARK_LEGION:
                return new Color(0, 255, 0, 255);
            case TypesRadar.TASK_PERSONAL:
                return new Color(0, 0, 255, 255);
        }
    }
}