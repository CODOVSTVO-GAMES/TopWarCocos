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
        let power = ControllerGameStorage.getPower().toString();
        let maxPower = ControllerGameStorage.getMaxPower().toString();
        let territoryPower = ControllerGameStorage.getTerritoryPower().toString();
        let technoPower = ControllerGameStorage.getTechnoPower().toString();
        let heroPower = ControllerGameStorage.getHeroPower().toString();
        let arsenalPower = ControllerGameStorage.getArsenalPower().toString();
        let professionPower = ControllerGameStorage.getProfessionPower().toString();
        let formationPower = ControllerGameStorage.getFormationPower().toString();

        this.power.string = power;
        this.maxPower.string = maxPower;
        this.territoryPower.string = territoryPower;
        this.technoPower.string = technoPower;
        this.heroPower.string = heroPower;
        this.arsenalPower.string = arsenalPower;
        this.professionPower.string = professionPower;
        this.formationPower.string = formationPower;
    }
}

