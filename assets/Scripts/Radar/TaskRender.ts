import { _decorator, Color, Component, Node, Sprite } from 'cc';
import { BattleTaskTypes } from '../Static/BattleTaskTypes';
import { BattleTask } from '../Structures/BattleTask';
import { ModalRadarRewardLogic } from '../UI/Modals/ModalRadarReward/ModalRadarRewardLogic';
import { SecondaryInterface } from '../UI/SecondaryInterface';
import { TypesModals } from '../Static/TypesModals';
const { ccclass, property } = _decorator;

@ccclass('TaskRender')
export class TaskRender extends Component {

    @property({ type: Node })
    public obj: Node;

    @property({ type: Node })
    public message: Node;

    @property({ type: Sprite })
    public image: Sprite;

    @property({ type: Node })
    public stars: Node[] = [];

    public radarTask: BattleTask;

    /**
     * рендер задачи: картинка, звезды, точка выполненности
     * 
     * при нажатии на задачу открывается модалка информации о задаче, либо модалка награды
     */

    render(radarTask: BattleTask) {
        this.radarTask = radarTask;
        if (radarTask != null) {
            this.image.color = this.getSprite(radarTask.type);
            for (let i = 0; i < this.stars.length; i++) { // отрисовывает активные звезды 
                let isStarActive = i < radarTask.stars
                this.stars[i].active = isStarActive
            }
            if (radarTask.status < 2) {
                this.message.active = false;
            }
            else {
                this.message.active = true;
            }
        }
    }

    getSprite(type: string): Color {
        switch (type) {
            case BattleTaskTypes.TASK_SALVATION:
                return new Color(255, 0, 0, 255);
            case BattleTaskTypes.TASK_DARK_LEGION:
                return new Color(0, 255, 0, 255);
            case BattleTaskTypes.TASK_PERSONAL:
                return new Color(0, 0, 255, 255);
        }
    }

    pushTask() {
        if (this.radarTask.status < 2) {
            SecondaryInterface.instance.openRadarTaskInfo({ task: this.radarTask });
        }
        else {
            this.radarTask.status = 3;
            SecondaryInterface.instance.openRadarReward(this.radarTask);
            this.obj.destroy();
        }
    }

}