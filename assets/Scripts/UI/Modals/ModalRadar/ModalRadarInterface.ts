import { _decorator, Component, instantiate, Label, Node, Prefab, Sprite, Vec3 } from 'cc';
import { ControllerRadarStorage } from '../../../Storage/Controllers/ControllerRadarStorage';
import { ControllerConfigStorage } from '../../../Storage/Controllers/ControllerConfigStorage';
import { ControllerGameStorage } from '../../../Storage/Controllers/ControllerGameStorage';
import { TaskRender } from '../../../Radar/TaskRender';
import { RadarTask } from '../../../Structures/RadarTask';
const { ccclass, property } = _decorator;

@ccclass('ModalRadarInterface')
export class ModalRadarInterface extends Component {

    public static instance: ModalRadarInterface;

    @property({ type: Node })
    public parentNode: Node;

    @property({ type: Prefab })
    public taskPrefab: Prefab;

    @property({ type: Sprite })
    public sliderLevel: Sprite;

    @property({ type: Sprite })
    public sliderEnergy: Sprite;

    @property({ type: Label })
    public gemsText: Label;

    @property({ type: Label })
    public levelText: Label;

    @property({ type: Label })
    public energyText: Label;

    @property({ type: Label })
    public tasksText: Label;

    @property({ type: Label })
    public timeText: Label;

    @property({ type: Label })
    public signalText: Label;

    @property({ type: Label })
    public costText: Label;

    public tasks: TaskRender[] = [];

    onLoad() {
        ModalRadarInterface.instance = this;
    }

    updateInterface() {
        let radarLevel = ControllerRadarStorage.getRadarLevel();
        let config = ControllerConfigStorage.getRadarConfigByLevel(radarLevel);
        let cost;
        if (ControllerRadarStorage.getRadarSignal() <= 1) {
            cost = 0;
        }
        else {
            cost = 10;
        }

        // console.log()

        // this.sliderLevel.fillRange = ControllerRadarStorage.getRadar;
        this.sliderEnergy.fillRange = ControllerGameStorage.getEnergy() / config.maxEnergy;
        this.gemsText.string = ControllerGameStorage.getGems().toString();
        this.levelText.string = "Ур. " + ControllerRadarStorage.getRadarLevel();
        this.energyText.string = ControllerGameStorage.getEnergy() + "/" + config.maxEnergy;
        this.tasksText.string = "Хранилище миссий " + ControllerRadarStorage.getRadarAvailableMissions() + "/" + config.maxTasks;
        this.timeText.string = "Миссии доступны в: " + ControllerRadarStorage.getRadarTime();
        this.signalText.string = ControllerRadarStorage.getRadarSignal() + "/5";
        this.costText.string = cost > 0 ? cost.toString() : "Бесплатно";
        this.renderLocator();
    }

    renderLocator() {
        let radarTasks = ControllerRadarStorage.getRadarTasks();
        for (let i = 0; i < radarTasks.length; i++) {
            let result = false;
            for (let j = 0; j < this.tasks.length; j++) {
                if (radarTasks[i] == this.tasks[j].radarTask) {
                    result = true;
                }
            }
            if (result == false) {
                let task = instantiate(this.taskPrefab);
                task.setParent(this.parentNode);
                let x = Math.floor(Math.random() * 200);
                let y = Math.floor(Math.random() * 200);
                if (Math.floor(Math.random()) == 1) {
                    x *= -1;
                }
                if (Math.floor(Math.random()) == 1) {
                    y *= -1;
                }
                task.position = new Vec3(x, y, 0);
                let taskRender = task.getComponent(TaskRender);
                taskRender.render(radarTasks[i]);
                this.tasks.push(taskRender);
            }
        }
    }
}