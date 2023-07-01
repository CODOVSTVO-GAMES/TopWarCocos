import { _decorator, Component, Label } from 'cc';
import { ConvertLargeNumber } from '../Other/ConvertLargeNumber';
import { ConfigStorageController } from '../Controllers/StorageControllers/ConfigStorageController';
import { GameModel } from '../Model/GameModel';
import { ExperiencePresenter } from '../Presenter/ExperiencePresenter';
const { ccclass, property } = _decorator;

@ccclass('ExperienceView')
export class ExperienceView extends Component {

    public static instance: ExperienceView

    @property({ type: Label })
    public experience: Label

    @property({ type: Label })
    public requiredExperience: Label

    protected onLoad(): void {
        ExperienceView.instance = this
    }

    public eventLearnTechnology() {
        ExperiencePresenter.processingLearnTechnology()
    }

    public eventnRadarAssignment() {
        ExperiencePresenter.processingRadarAssignment()
    }

    public eventnBuildingConstruction() {
        ExperiencePresenter.processingBuildingConstruction()
    }

    public eventnUnitTraining() {
        ExperiencePresenter.processingUnitTraining()
    }

    public renderInterface() {
        let a = ConfigStorageController.getLevelExpirienceByLevel(GameModel.instance.level + 1)
        let b = ConfigStorageController.getLevelExpirienceByLevel(GameModel.instance.level + 1) - GameModel.instance.experience
        let experience = "Опыт " + ConvertLargeNumber.convert(GameModel.instance.experience) + "/" + ConvertLargeNumber.convert(a)
        let requiredExperience = "До " + (GameModel.instance.level + 1).toString() + " уровня еще требуется " + ConvertLargeNumber.convert(b)

        this.experience.string = experience
        this.requiredExperience.string = requiredExperience
    }
}