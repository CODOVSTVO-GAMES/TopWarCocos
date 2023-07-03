import { _decorator, Component, Label, Sprite } from 'cc';
import { CommandPostPresenter } from '../Presenter/CommandPostPresenter';
import { GamePresenter } from '../Presenter/GamePresenter';
import { ConfigPresenter } from '../Presenter/ConfigPresenter';
import { CommandPostModel } from '../Model/CommandPostModel';
import { BackpackPresenter } from '../Presenter/BackpackPresenter';
import { TypesItems } from '../Static/TypesItems';
import { TypesObjects } from '../Static/TypesObjects';
import { HomeMapPresenter } from '../Presenter/HomeMapPresenter';
const { ccclass, property } = _decorator;

@ccclass('CommandPostUpgradeMainView')
export class CommandPostUpgradeMainView extends Component {

    public static instance: CommandPostUpgradeMainView

    @property({ type: Label })
    public mainTitle: Label

    @property({ type: Label })
    public actualLevelObject: Label

    @property({ type: Label })
    public nextLevelObject: Label

    @property({ type: Label })
    public level: Label

    @property({ type: Label })
    public receivedExperience: Label

    @property({ type: Label })
    public actualPower: Label

    @property({ type: Label })
    public receivedPower: Label

    @property({ type: Label })
    public actualAttactBonus: Label

    @property({ type: Label })
    public receivedAttactBonus: Label

    @property({ type: Label })
    public actualQuantityTroops: Label

    @property({ type: Label })
    public nextQuantityTroops: Label

    @property({ type: Label })
    public actualMarchingCampaign: Label

    @property({ type: Label })
    public nextMarchingCampaign: Label

    @property({ type: Label })
    public requirementCoins: Label

    @property({ type: Label })
    public requirementItems: Label

    @property({ type: Sprite })
    public spriteActualLevelObject: Sprite

    @property({ type: Sprite })
    public spriteNextLevelObject: Sprite


    protected onLoad(): void {
        CommandPostUpgradeMainView.instance = this
    }

    public eventUpgradeCommandPost() {
        CommandPostPresenter.addLevelCommandPost()
        GamePresenter.reduceCoins(ConfigPresenter.getPriceUpdateMainBuildingByLevel(CommandPostModel.instance.levelCommandPost))
        BackpackPresenter.reduceItemBackpack(TypesItems.PLAN_COMMAND_POST, ConfigPresenter.getImprivementResourceNumberMainBuildingByLevel(CommandPostModel.instance.levelCommandPost))
        GamePresenter.addExperience(ConfigPresenter.getExpMainBuildingByLevel(CommandPostModel.instance.levelCommandPost))
        // GamePresenter.addTechnoPower(ConfigStorageController.getPowerMainBuildingByLevel(CommandPostModel.instance.levelCommandPost))
        HomeMapPresenter.upgradeLevelObject(HomeMapPresenter.getObjectParametersByType(TypesObjects.COMMAND_POST).index)
    }

    public renderInterface() {
        let mainTitle = "Простой командный пункт"
        // let actualLevel = "Ур. " + CommandPostStorageController.getLevelCommandPost();
        // let nextLevelObject = "Ур. " + (CommandPostStorageController.getLevelCommandPost() + 1).toString();
        // let level = GameStorageController.getLevel().toString();
        // let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigStorageController.getExpMainBuildingByLevel(CommandPostStorageController.getLevelCommandPost() + 1));
        // let actualPower = GameStorageController.getPower().toString();
        // let receivedPower = "+" + ConfigStorageController.getPowerMainBuildingByLevel(CommandPostStorageController.getLevelCommandPost() + 1).toString();
        // let actualAttactBonus = ConfigStorageController.getAttackBonusMainBuildingByLevel(CommandPostStorageController.getLevelCommandPost()).toString();
        // let receivedAttactBonus = "+" + (ConfigStorageController.getAttackBonusMainBuildingByLevel(CommandPostStorageController.getLevelCommandPost() + 1) - ConfigStorageController.getAttackBonusMainBuildingByLevel(CommandPostStorageController.getLevelCommandPost())).toString();
        // let requirementCoins = ConvertLargeNumber.convert(GameStorageController.getCoins()) + "/" + ConvertLargeNumber.convert(ConfigStorageController.getPriceUpdateMainBuildingByLevel(CommandPostStorageController.getLevelCommandPost() + 1));
        // let requirementItems = BackpackStorageController.getQuantityByType(TypesItems.PLAN_COMMAND_POST) + "/" + (ConfigStorageController.getImprivementResourceNumberMainBuildingByLevel(CommandPostStorageController.getLevelCommandPost() + 1));
        // let actualSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.COMMAND_POST, CommandPostStorageController.getLevelCommandPost());
        // let nextSpriteObject = SpriteStorage.instance.getObjectSprite(TypesObjects.COMMAND_POST, (CommandPostStorageController.getLevelCommandPost() + 1));


        this.mainTitle.string = mainTitle
        // this.actualLevelObject.string = actualLevel;
        // this.nextLevelObject.string = nextLevelObject;
        // this.level.string = level;
        // this.receivedExperience.string = receivedExperience;
        // this.actualPower.string = actualPower;
        // this.receivedPower.string = receivedPower;
        // this.actualAttactBonus.string = actualAttactBonus
        // this.receivedAttactBonus.string = receivedAttactBonus
        // this.actualQuantityTroops.string = "0";
        // this.nextQuantityTroops.string = "0";
        // this.actualMarchingCampaign.string = "0";
        // this.nextMarchingCampaign.string = "0";

        // this.requirementCoins.string = requirementCoins
        // this.requirementItems.string = requirementItems;

        // this.actualSpriteObject.spriteFrame = actualSpriteObject;
        // this.nextSpriteObject.spriteFrame = nextSpriteObject;
    }
}