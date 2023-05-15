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
        this.power.string = ControllerGameStorage.getPower().toString();
        this.maxPower.string = ControllerGameStorage.getMaxPower().toString();
        this.territoryPower.string = ControllerGameStorage.getTerritoryPower().toString();
        this.technoPower.string = ControllerGameStorage.getTechnoPower().toString();
        this.heroPower.string = ControllerGameStorage.getHeroPower().toString();
        this.arsenalPower.string = ControllerGameStorage.getArsenalPower().toString();
        this.professionPower.string = ControllerGameStorage.getProfessionPower().toString();
        this.formationPower.string = ControllerGameStorage.getFormationPower().toString();
    }
}

