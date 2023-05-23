import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { ControllerRadarStorage } from '../../../Storage/Controllers/ControllerRadarStorage';
import { ControllerConfigStorage } from '../../../Storage/Controllers/ControllerConfigStorage';
import { ControllerGameStorage } from '../../../Storage/Controllers/ControllerGameStorage';
const { ccclass, property } = _decorator;

@ccclass('ModalRadarInterface')
export class ModalRadarInterface extends Component {

    public static instance: ModalRadarInterface;

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

    onLoad() {
        ModalRadarInterface.instance = this;
    }

    updateInterface() {
        console.log("update");
        let radarLevel = ControllerRadarStorage.getRadarLevel();
        let config = ControllerConfigStorage.getRadarConfigByLevel(radarLevel);
        let cost;
        if (ControllerRadarStorage.getRadarSignal() <= 1) {
            cost = 0;
        }
        else {
            cost = 10;
        }
        // this.sliderLevel.fillRange = ControllerRadarStorage.getRadar;
        this.sliderEnergy.fillRange = ControllerGameStorage.getEnergy() / config.maxEnergy;
        this.gemsText.string = ControllerGameStorage.getGems().toString();
        this.levelText.string = "Ур. " + ControllerRadarStorage.getRadarLevel();
        this.energyText.string = ControllerGameStorage.getEnergy() + "/" + config.maxEnergy;
        this.tasksText.string = "Хранилище миссий " + ControllerRadarStorage.getRadarAvailableMissions() + "/" + config.maxTasks;
        this.timeText.string = "Миссии доступны в: " + ControllerRadarStorage.getRadarTime();
        this.signalText.string = ControllerRadarStorage.getRadarSignal() + "/5";
        this.costText.string = cost > 0 ? cost.toString() : "Бесплатно";
    }

    renderLocator() {

    }
}