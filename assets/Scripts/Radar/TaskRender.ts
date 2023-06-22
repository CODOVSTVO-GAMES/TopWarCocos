import { _decorator, Color, Component, Node, Sprite } from 'cc';
import { BattleTaskTypes } from '../Static/BattleTaskTypes';
import { BattleTask } from '../Structures/BattleTask';
import { SecondaryInterface } from '../UI/SecondaryInterface';
import { RadarStorageController } from '../Controllers/StorageControllers/RadarStorageController';
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

    public task: BattleTask = null
    private callBack = null

    /**
     * рендер задачи: картинка, звезды, точка выполненности
     * 
     * при нажатии на задачу открывается модалка информации о задаче, либо модалка награды
     */

    protected onEnable(): void {
        this.callBack = this.schedule(this.rerender, 1)
    }
    protected onDisable(): void {
        this.unschedule(this.callBack)
    }

    rerender() {
        this.render(this.task)
    }

    render(task: BattleTask) {
        this.task = task
        this.image.color = this.getSprite(task.type);
        for (let i = 0; i < this.stars.length; i++) { // отрисовывает активные звезды 
            let isStarActive = i < task.stars
            this.stars[i].active = isStarActive
        }
        if (task.status < 2) {
            this.message.active = false;
        }
        else {
            this.message.active = true;
        }
    }

    pushTask() {
        if (this.task.status < 2) {
            SecondaryInterface.instance.openRadarTaskInfo({ task: this.task });
        }
        else {
            this.task.status = 3;
            SecondaryInterface.instance.openRadarReward(this.task);
            this.obj.destroy();
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
}