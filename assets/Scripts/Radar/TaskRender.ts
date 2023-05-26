import { _decorator, Color, Component, Node, Sprite } from 'cc';
import { TypesRadar } from '../Static/TypesRadar';
import { RadarTask } from '../Structures/RadarTask';
import { RedirectionToScene } from '../Other/RedirectionToScene';
import { SceneNames } from '../Static/SceneNames';
import { ModalRadarLogic } from '../UI/Modals/ModalRadar/ModalRadarLogic';
const { ccclass, property } = _decorator;

@ccclass('TaskRender')
export class TaskRender extends Component {

    @property({ type: Node })
    public obj: Node;

    @property({ type: Sprite })
    public image: Sprite;

    @property({ type: Node })
    public stars: Node[] = [];

    public radarTask: RadarTask;

    render(radarTask: RadarTask) {
        this.radarTask = radarTask;
        this.image.color = this.getSprite(radarTask.type);
        for (let i = 0; i < this.stars.length; i++) {
            this.stars[i].active = i < radarTask.stars;
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

    pushTask() {
        console.log(this.radarTask.status)
        if (this.radarTask.status < 2) {
            ModalRadarLogic.instance.openRadarTask(this.radarTask);
        }
        else {
            ModalRadarRewardLogic.instance.openModalReward(task);
            
            this.obj.destroy();
        }
    }
}