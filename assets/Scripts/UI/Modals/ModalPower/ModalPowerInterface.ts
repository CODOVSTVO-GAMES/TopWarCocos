import { _decorator, Component, Label } from 'cc';
import { GameStorageController } from '../../../Controllers/GameStorageController';
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
        let power = GameStorageController.getPower().toString();
        let maxPower = GameStorageController.getMaxPower().toString();
        let territoryPower = GameStorageController.getTerritoryPower().toString();
        let technoPower = GameStorageController.getTechnoPower().toString();
        let heroPower = GameStorageController.getHeroPower().toString();
        let arsenalPower = GameStorageController.getArsenalPower().toString();
        let professionPower = GameStorageController.getProfessionPower().toString();
        let formationPower = GameStorageController.getFormationPower().toString();

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

