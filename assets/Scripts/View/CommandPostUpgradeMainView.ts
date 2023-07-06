import { _decorator, Component, Label, Sprite } from 'cc';
import { CommandPostModel } from '../Model/CommandPostModel';
import { ConvertLargeNumber } from '../Other/ConvertLargeNumber';
import { GameModel } from '../Model/GameModel';
import { ConfigPresenter } from '../Presenter/ConfigPresenter';
import { BackpackPresenter } from '../Presenter/BackpackPresenter';
import { TypesItems } from '../Static/TypesItems';
import { TypesObjects } from '../Static/TypesObjects';
import { SpriteModel } from '../Model/SpriteModel';
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

    public renderInterface() {
        let mainTitle = "Простой командный пункт"
        let actualLevel = "Ур. " + CommandPostModel.instance.levelCommandPost
        let nextLevelObject = "Ур. " + (CommandPostModel.instance.levelCommandPost + 1).toString()
        let level = GameModel.instance.level.toString()
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigPresenter.getExpMainBuildingByLevel(CommandPostModel.instance.levelCommandPost + 1))
        let actualPower = GameModel.instance.power.toString()
        let receivedPower = "+" + ConfigPresenter.getPowerMainBuildingByLevel(CommandPostModel.instance.levelCommandPost + 1).toString()
        let actualAttactBonus = ConfigPresenter.getAttackBonusMainBuildingByLevel(CommandPostModel.instance.levelCommandPost).toString()
        let receivedAttactBonus = "+" + (ConfigPresenter.getAttackBonusMainBuildingByLevel(CommandPostModel.instance.levelCommandPost + 1) - ConfigPresenter.getAttackBonusMainBuildingByLevel(CommandPostModel.instance.levelCommandPost)).toString()

        let requirementCoins = ConvertLargeNumber.convert(GameModel.instance.coins) + "/" + ConvertLargeNumber.convert(ConfigPresenter.getPriceUpdateMainBuildingByLevel(CommandPostModel.instance.levelCommandPost + 1))
        let requirementItems = BackpackPresenter.getQuantityItemByType(TypesItems.PLAN_COMMAND_POST) + "/" + (ConfigPresenter.getImprivementResourceNumberMainBuildingByLevel(CommandPostModel.instance.levelCommandPost + 1))

        let actualSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.COMMAND_POST, CommandPostModel.instance.levelCommandPost)
        let nextSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.COMMAND_POST, (CommandPostModel.instance.levelCommandPost + 1))

        this.mainTitle.string = mainTitle
        this.actualLevelObject.string = actualLevel
        this.nextLevelObject.string = nextLevelObject
        this.level.string = level
        this.receivedExperience.string = receivedExperience
        this.actualPower.string = actualPower
        this.receivedPower.string = receivedPower
        this.actualAttactBonus.string = actualAttactBonus
        this.receivedAttactBonus.string = receivedAttactBonus
        this.actualQuantityTroops.string = "0"
        this.nextQuantityTroops.string = "0"
        this.actualMarchingCampaign.string = "0"
        this.nextMarchingCampaign.string = "0"

        this.requirementCoins.string = requirementCoins
        this.requirementItems.string = requirementItems

        this.spriteActualLevelObject.spriteFrame = actualSpriteObject
        this.spriteNextLevelObject.spriteFrame = nextSpriteObject
    }
}