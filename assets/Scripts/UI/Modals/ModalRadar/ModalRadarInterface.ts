import { _decorator, Component, instantiate, Label, Node, Prefab, Sprite, Vec3 } from 'cc';
import { ControllerRadarStorage } from '../../../Storage/Controllers/ControllerRadarStorage';
import { ControllerConfigStorage } from '../../../Storage/Controllers/ControllerConfigStorage';
import { ControllerGameStorage } from '../../../Storage/Controllers/ControllerGameStorage';
import { TaskRender } from '../../../Radar/TaskRender';
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

    
    /**
     * при нажатии на Message радара открывается модалка радара; 
     * в ней получаются из конфигов и стореджей все значения далее они рендерятся;
     * запускается цикл, который рандомно докидывает недостающие задачи;
     * после этого спавнятся задачи из RaadrStorage;
     * 
     * при нажатии на задачу открывается модалка информации о задаче;
     * рендерится модалка
     * при нажатии на кнопку ПЕРЕЙТИ, задача добавляется в буфер и изменяется статус задания, открывыется задание либо создаётся поход
     * после того как задание выполнено меняется статус задачи
     * 
     * при нажатии на задачу открывается модалка награды;
     * рендерится модалка
     * при нажатии на любое место в модалке начисляется награда и она закрывается
     * запускается цикл, который рандомно докидывает недостающие задачи;
     * 
     */


    /**
     * при открытии радара, отрисовка текстовых и картиночных полей в радаре
     * 
     * ререндер и спавн задач на локаторе
     */

    updateInterface() {
        let energy = ControllerGameStorage.getEnergy();
        let gems = ControllerGameStorage.getGems();
        let radarLevel = ControllerRadarStorage.getRadarLevel();
        let radarSignal = ControllerRadarStorage.getRadarSignal();
        let radarExperience = ControllerRadarStorage.getRadarExperience();
        let radarAvailableMissions = ControllerRadarStorage.getRadarAvailableMissions();
        let radarTime = ControllerRadarStorage.getRadarTime();
        let radarProgressNumber = ControllerConfigStorage.getRadarProgressNumberByLevel(radarLevel);
        let configRadar = ControllerConfigStorage.getRadarConfigByLevel(radarLevel);
        let cost;
        if (radarSignal <= 1) {
            cost = 0;
        }
        else {
            cost = 10;
        }

        this.sliderLevel.fillRange = radarExperience / radarProgressNumber;
        this.sliderEnergy.fillRange = energy / configRadar.maxEnergy;
        this.gemsText.string = gems.toString();
        this.levelText.string = "Ур. " + radarLevel;
        this.energyText.string = energy + "/" + configRadar.maxEnergy;
        this.tasksText.string = "Хранилище миссий " + radarAvailableMissions + "/" + configRadar.maxTasks;
        this.timeText.string = "Миссии доступны в: " + radarTime;
        this.signalText.string = radarSignal + "/5";
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
                if (i == 0) {
                    if (this.tasks[j] != null) {
                        this.tasks[j].render(this.tasks[j].radarTask);
                    }
                }
            }
            if (result == false && radarTasks[i].status < 3) {
                let task = instantiate(this.taskPrefab);
                task.setParent(this.parentNode);
                let x = Math.floor(Math.random() * 200);
                let y = Math.floor(Math.random() * 200);
                if (Math.floor(Math.random() * 2) == 1) {
                    x *= -1;
                }
                if (Math.floor(Math.random() * 2) == 1) {
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