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
        let experience = "Опыт " + ConvertLargeNumber.convert(ControllerGameStorage.getExperience()) + "/" + ConvertLargeNumber.convert(ControllerGameStorage.getExpirienceForNextLevel());
        let requiredExperience = "До " + (ControllerGameStorage.getLevel() + 1).toString() + " уровня еще требуется " + ConvertLargeNumber.convert(ControllerGameStorage.getRemainingExpirienceForNextLevel());

        this.experience.string = experience;
        this.requiredExperience.string = requiredExperience;
    }
}

