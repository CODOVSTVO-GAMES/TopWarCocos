import { _decorator, Component, Label } from 'cc';
import { ConvertLargeNumber } from '../../../Other/ConvertLargeNumber';
import { ControllerGameStorage } from '../../../Storage/Controllers/ControllerGameStorage';
const { ccclass, property } = _decorator;

@ccclass('ModalExperienceInerface')
export class ModalExperienceInerface extends Component {

    public static instance: ModalExperienceInerface;

    @property({ type: Label })
    public experience: Label;

    @property({ type: Label })
    public requiredExperience: Label;

    onLoad() {
        ModalExperienceInerface.instance = this;
    }

    updateInterface() {
        this.experience.string = "Опыт " + ConvertLargeNumber.convert(ControllerGameStorage.getExperience()) + "/" + ConvertLargeNumber.convert(ControllerGameStorage.getExpirienceForNextLevel());
        this.requiredExperience.string = "До " + (ControllerGameStorage.getLevel() + 1).toString() + " уровня еще требуется " + ConvertLargeNumber.convert(ControllerGameStorage.getRemainingExpirienceForNextLevel());
    }
}

