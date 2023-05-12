import { _decorator, Component, Label } from 'cc';
import { ControllerGameStorage } from '../../../Storage/Controllers/ControllerGameStorage';
const { ccclass, property } = _decorator;

@ccclass('ModalPowerInterface')
export class ModalPowerInterface extends Component {

    public static instance: ModalPowerInterface;

    @property({ type: Label })
    public power: Label;

    @property({ type: Label })
    public maxPower: Label;

    @property({ type: Label })
    public territoryPower: Label;

    @property({ type: Label })
    public technoPower: Label;

    @property({ type: Label })
    public heroPower: Label;

    @property({ type: Label })
    public arsenalPower: Label;

    @property({ type: Label })
    public professionPower: Label;

    @property({ type: Label })
    public formationPower: Label;

    onLoad() {
        ModalPowerInterface.instance = this;
    }

    updateInterface() {
        this.power.string = "Боевая мощь " + ControllerGameStorage.getPower().toString();
        this.maxPower.string = "Самая высокая БМ в истории " + ControllerGameStorage.getMaxPower().toString();
        this.territoryPower.string = "Территориальная БМ " + ControllerGameStorage.getTerritoryPower().toString();
        this.technoPower.string = "Технологическая БМ " + ControllerGameStorage.getTechnoPower().toString();
        this.heroPower.string = "БМ героя " + ControllerGameStorage.getHeroPower().toString();
        this.arsenalPower.string = "БМ арсенала " + ControllerGameStorage.getArsenalPower().toString();
        this.professionPower.string = "БМ професси " + ControllerGameStorage.getProfessionPower().toString();
        this.formationPower.string = "Сила формации " + ControllerGameStorage.getFormationPower().toString();
    }
}

