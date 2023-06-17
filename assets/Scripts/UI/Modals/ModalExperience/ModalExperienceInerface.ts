import { _decorator, Component, Label } from 'cc';
import { ConvertLargeNumber } from '../../../Other/ConvertLargeNumber';
import { GameStorageController } from '../../../Controllers/StorageControllers/GameStorageController';
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
        let experience = "Опыт " + ConvertLargeNumber.convert(GameStorageController.getExperience()) + "/" + ConvertLargeNumber.convert(GameStorageController.getExpirienceForNextLevel());
        let requiredExperience = "До " + (GameStorageController.getLevel() + 1).toString() + " уровня еще требуется " + ConvertLargeNumber.convert(GameStorageController.getRemainingExpirienceForNextLevel());

        this.experience.string = experience;
        this.requiredExperience.string = requiredExperience;
    }
}

