import { _decorator, Component, Node, Label, Sprite, SpriteFrame } from 'cc';
import { SecondaryInterface } from '../UI/SecondaryInterface';
import { TypesViews } from '../Static/TypesViews';
import { CommandPostModel } from '../Model/CommandPostModel';
import { CommandPostPresenter } from '../Presenter/CommandPostPresenter';
import { GameModel } from '../Model/GameModel';
import { TypesItems } from '../Static/TypesItems';
import { TypesObjects } from '../Static/TypesObjects';
import { SpriteModel } from '../Model/SpriteModel';
import { ConfigPresenter } from '../Presenter/ConfigPresenter';
import { ConvertLargeNumber } from '../Other/ConvertLargeNumber';
import { BackpackPresenter } from '../Presenter/BackpackPresenter';
const { ccclass, property } = _decorator;

@ccclass('CommandPostUpgradeOtherView')
export class CommandPostUpgradeOtherView extends Component {

    public static instance: CommandPostUpgradeOtherView

    @property({ type: Label })
    public mainTitle: Label

    @property({ type: Label })
    public actualLevelObject_0: Label

    @property({ type: Label })
    public actualLevelObject_1: Label

    @property({ type: Label })
    public nextLevelObject: Label

    @property({ type: Label })
    public gameLevel: Label

    @property({ type: Label })
    public receivedExperience: Label

    @property({ type: Label })
    public actualPower: Label

    @property({ type: Label })
    public receivedPower: Label

    @property({ type: Label })
    public requirementCoins: Label

    @property({ type: Label })
    public requirementItems: Label

    @property({ type: Sprite })
    public spriteActualLevelObject: Sprite

    @property({ type: Sprite })
    public spriteNextLevelObject: Sprite

    @property({ type: Sprite })
    public spriteUpgradeItem: Sprite

    @property({ type: Node })
    public upgradeButton: Node

    @property({ type: Node })
    public getItemsButton: Node

    protected onLoad(): void {
        CommandPostUpgradeOtherView.instance = this
    }

    public eventUpgradeOther() {
        let typeModal = SecondaryInterface.instance.getTypeActiveSecondLayoutModal();

        if (typeModal == TypesViews.UPGRATE_REPAIR_SHOP) this.eventUpgradeRepairShop()
        else if (typeModal == TypesViews.UPGRATE_MERGE_GOLD_MINE) this.eventUpgradeMergeGoldMine()
        else if (typeModal == TypesViews.UPGRATE_MERGE_TROOP_AIR) this.eventUpgradeMergeTroopAir()
        else if (typeModal == TypesViews.UPGRATE_MERGE_TROOP_MARINE) this.eventUpgradeMergeTroopMarine()
        else if (typeModal == TypesViews.UPGRATE_MERGE_TROOP_OVERLAND) this.eventUpgradeMergeBarracksOverland()
        else if (typeModal == TypesViews.UPGRATE_MERGE_BARRACK_AIR) this.eventUpgradeMergeBarracksAir()
        else if (typeModal == TypesViews.UPGRATE_MERGE_BARRACK_MARINE) this.eventUpgradeMergeBarracksMarine()
        else if (typeModal == TypesViews.UPGRATE_MERGE_BARRACK_OVERLAND) this.eventUpgradeMergeBarracksOverland()
        else if (typeModal == TypesViews.UPGRATE_BUILD_GOLD_MINE) this.eventUpgradeBuildGoldMine()
        else if (typeModal == TypesViews.UPGRATE_BUILD_BARRACK_AIR) this.eventUpgradeBuildBarracksAir()
        else if (typeModal == TypesViews.UPGRATE_BUILD_BARRACK_MARINE) this.eventUpgradeBuildBarracksMarine()
        else if (typeModal == TypesViews.UPGRATE_BUILD_BARRACK_OVERLAND) this.eventUpgradeBuildBarracksOverland()
    }

    private eventUpgradeRepairShop() {
        CommandPostPresenter.processingUpgradeRepairShop()
    }

    private eventUpgradeMergeGoldMine() {
        CommandPostPresenter.processingUpgradeRepairShop()
    }

    private eventUpgradeMergeTroopAir() {
        CommandPostPresenter.processingUpgradeRepairShop()
    }

    private eventUpgradeMergeTroopMarine() {
        CommandPostPresenter.processingUpgradeRepairShop()
    }

    private eventUpgradeMergeTroopOverland() {
        CommandPostPresenter.processingUpgradeRepairShop()
    }

    private eventUpgradeMergeBarracksAir() {
        CommandPostPresenter.processingUpgradeRepairShop()
    }

    private eventUpgradeMergeBarracksMarine() {
        CommandPostPresenter.processingUpgradeRepairShop()
    }

    private eventUpgradeMergeBarracksOverland() {
        CommandPostPresenter.processingUpgradeRepairShop()
    }

    private eventUpgradeBuildGoldMine() {
        CommandPostPresenter.processingUpgradeRepairShop()
    }

    private eventUpgradeBuildBarracksAir() {
        CommandPostPresenter.processingUpgradeRepairShop()
    }

    private eventUpgradeBuildBarracksMarine() {
        CommandPostPresenter.processingUpgradeRepairShop()
    }

    private eventUpgradeBuildBarracksOverland() {
        CommandPostPresenter.processingUpgradeRepairShop()
    }

    public renderSuitableButton() {
        let typeActiveView = SecondaryInterface.instance.getTypeActiveSecondLayoutModal()
        let levelCommandPost = CommandPostModel.instance.levelCommandPost

        if (typeActiveView == TypesViews.UPGRATE_REPAIR_SHOP) {
            if (CommandPostModel.instance.levelRepairShop < levelCommandPost) this.renderUpgradeButton()
            else this.renderGetItemsButton()
        }
        else if (typeActiveView == TypesViews.UPGRATE_MERGE_GOLD_MINE) {
            if (CommandPostModel.instance.levelMergeGoldMine < levelCommandPost) this.renderUpgradeButton()
            else this.renderGetItemsButton()
        }
        else if (typeActiveView == TypesViews.UPGRATE_MERGE_TROOP_AIR) {
            if (CommandPostModel.instance.levelMergeTroopAir < levelCommandPost) this.renderUpgradeButton()
            else this.renderGetItemsButton()
        }
        else if (typeActiveView == TypesViews.UPGRATE_MERGE_TROOP_MARINE) {
            if (CommandPostModel.instance.levelMergeTroopMarine < levelCommandPost) this.renderUpgradeButton()
            else this.renderGetItemsButton()
        }
        else if (typeActiveView == TypesViews.UPGRATE_MERGE_TROOP_OVERLAND) {
            if (CommandPostModel.instance.levelMergeTroopOverland < levelCommandPost) this.renderUpgradeButton()
            else this.renderGetItemsButton()
        }
        else if (typeActiveView == TypesViews.UPGRATE_MERGE_BARRACK_AIR) {
            if (CommandPostModel.instance.levelMergeBarracksAir < levelCommandPost) this.renderUpgradeButton()
            else this.renderGetItemsButton()
        }
        else if (typeActiveView == TypesViews.UPGRATE_MERGE_BARRACK_MARINE) {
            if (CommandPostModel.instance.levelMergeBarracksMarine < levelCommandPost) this.renderUpgradeButton()
            else this.renderGetItemsButton()
        }
        else if (typeActiveView == TypesViews.UPGRATE_MERGE_BARRACK_OVERLAND) {
            if (CommandPostModel.instance.levelMergeBarracksOverland < levelCommandPost) this.renderUpgradeButton()
            else this.renderGetItemsButton()
        }
        else if (typeActiveView == TypesViews.UPGRATE_BUILD_GOLD_MINE) {
            if (CommandPostModel.instance.levelBuildGoldMine < levelCommandPost) this.renderUpgradeButton()
            else this.renderGetItemsButton()
        }
        else if (typeActiveView == TypesViews.UPGRATE_BUILD_BARRACK_AIR) {
            if (CommandPostModel.instance.levelBuildBarracksAir < levelCommandPost) this.renderUpgradeButton()
            else this.renderGetItemsButton()
        }
        else if (typeActiveView == TypesViews.UPGRATE_BUILD_BARRACK_MARINE) {
            if (CommandPostModel.instance.levelBuildBarracksMarine < levelCommandPost) this.renderUpgradeButton()
            else this.renderGetItemsButton()
        }
        else if (typeActiveView == TypesViews.UPGRATE_BUILD_BARRACK_OVERLAND) {
            if (CommandPostModel.instance.levelBuildBarracksOverland < levelCommandPost) this.renderUpgradeButton()
            else this.renderGetItemsButton()
        }
    }

    private renderUpgradeButton() {
        this.upgradeButton.active = true
        this.getItemsButton.active = false
    }

    private renderGetItemsButton() {
        this.upgradeButton.active = false
        this.getItemsButton.active = true
    }

    private render(mainTitle: string, actualLevel: string, nextLevelObject: string, level: string, receivedExperience: string, actualPower: string, receivedPower: string, requirementCoins: string, requirementItems: string, spriteActualLevelObject: SpriteFrame, spriteNextLevelObject: SpriteFrame, spriteUpgradeItem: SpriteFrame) {
        this.mainTitle.string = mainTitle
        this.actualLevelObject_0.string = actualLevel
        this.actualLevelObject_1.string = actualLevel
        this.nextLevelObject.string = nextLevelObject
        this.gameLevel.string = level
        this.receivedExperience.string = receivedExperience
        this.actualPower.string = actualPower
        this.receivedPower.string = receivedPower
        this.requirementCoins.string = requirementCoins
        this.requirementItems.string = requirementItems
        this.spriteActualLevelObject.spriteFrame = spriteActualLevelObject
        this.spriteNextLevelObject.spriteFrame = spriteNextLevelObject
        this.spriteUpgradeItem.spriteFrame = spriteUpgradeItem
    }

    public renderInterfaceRepairShop() {
        let mainTitle = "Ремонтный цех"
        let actualLevel = "Ур. " + CommandPostModel.instance.levelRepairShop
        let nextLevelObject = "Ур. " + (CommandPostModel.instance.levelRepairShop + 1).toString()
        let level = GameModel.instance.level.toString()
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigPresenter.getExpMainBuildingByLevel(CommandPostModel.instance.levelRepairShop + 1))
        let actualPower = GameModel.instance.power.toString()
        let receivedPower = "+" + ConfigPresenter.getPowerMainBuildingByLevel(CommandPostModel.instance.levelRepairShop + 1).toString()
        let requirementCoins = ConvertLargeNumber.convert(GameModel.instance.coins) + "/" + ConvertLargeNumber.convert(ConfigPresenter.getPriceUpdateRepairBuilding(CommandPostModel.instance.levelRepairShop + 1))
        let requirementItems = BackpackPresenter.getQuantityItemByType(TypesItems.PLAN_COMMAND_POST) + "/" + (ConfigPresenter.getImprivementResourceNumberRepairBuilding(CommandPostModel.instance.levelRepairShop + 1))
        let actualSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.REPAIR_SHOP, CommandPostModel.instance.levelRepairShop)
        let nextSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.REPAIR_SHOP, CommandPostModel.instance.levelRepairShop + 1)
        let spriteUpgradeItem = SpriteModel.instance.getItemBackpack(TypesItems.PLAN_COMMAND_POST);

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem)
    }

    public renderInterfaceMergeGoldMine() {
        let mainTitle = "Обьединение золотого рудника"
        let actualLevel = "Ур. " + CommandPostModel.instance.levelMergeGoldMine
        let nextLevelObject = "Ур. " + (CommandPostModel.instance.levelMergeGoldMine + 1).toString()
        let level = GameModel.instance.level.toString()
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigPresenter.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelMergeGoldMine + 1))
        let actualPower = GameModel.instance.power.toString()
        let receivedPower = "+" + ConfigPresenter.getPowerMainBuildingByLevel(CommandPostModel.instance.levelMergeGoldMine + 1).toString()
        let requirementCoins = ConvertLargeNumber.convert(GameModel.instance.coins) + "/" + ConvertLargeNumber.convert(ConfigPresenter.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelMergeGoldMine + 1))
        let requirementItems = BackpackPresenter.getQuantityItemByType(TypesItems.PLAN_MERGE_GOLD_MINE) + "/" + (ConfigPresenter.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelMergeGoldMine + 1))
        let actualSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelMergeGoldMine)
        let nextSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelMergeGoldMine + 1)
        let spriteUpgradeItem = SpriteModel.instance.getItemBackpack(TypesItems.PLAN_MERGE_GOLD_MINE)

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem)
    }

    public renderInterfaceMergeTroopAir() {
        let mainTitle = "Юнит ВВС"
        let actualLevel = "Ур. " + CommandPostModel.instance.levelMergeTroopAir
        let nextLevelObject = "Ур. " + (CommandPostModel.instance.levelMergeTroopAir + 1).toString()
        let level = GameModel.instance.level.toString()
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigPresenter.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostModel.instance.levelMergeTroopAir + 1))
        let actualPower = GameModel.instance.power.toString()
        let receivedPower = "+" + ConfigPresenter.getPowerMainBuildingByLevel(CommandPostModel.instance.levelMergeTroopAir + 1).toString()
        let requirementCoins = ConvertLargeNumber.convert(GameModel.instance.coins) + "/" + ConvertLargeNumber.convert(ConfigPresenter.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostModel.instance.levelMergeTroopAir + 1))
        let requirementItems = BackpackPresenter.getQuantityItemByType(TypesItems.PLAN_MERGE_TROOP_AIR) + "/" + (ConfigPresenter.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_AIR, CommandPostModel.instance.levelMergeTroopAir + 1))
        let actualSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.TROOP_AIR, CommandPostModel.instance.levelMergeTroopAir)
        let nextSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.TROOP_AIR, CommandPostModel.instance.levelMergeTroopAir + 1)
        let spriteUpgradeItem = SpriteModel.instance.getItemBackpack(TypesItems.PLAN_MERGE_TROOP_AIR)

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem)
    }

    public renderInterfaceMergeTroopMarine() {
        let mainTitle = "Юнит ВМФ"
        let actualLevel = "Ур. " + CommandPostModel.instance.levelMergeTroopMarine
        let nextLevelObject = "Ур. " + (CommandPostModel.instance.levelMergeTroopMarine + 1).toString()
        let level = GameModel.instance.level.toString()
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigPresenter.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostModel.instance.levelMergeTroopMarine + 1))
        let actualPower = GameModel.instance.power.toString()
        let receivedPower = "+" + ConfigPresenter.getPowerMainBuildingByLevel(CommandPostModel.instance.levelMergeTroopMarine + 1).toString()
        let requirementCoins = ConvertLargeNumber.convert(GameModel.instance.coins) + "/" + ConvertLargeNumber.convert(ConfigPresenter.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostModel.instance.levelMergeTroopMarine + 1))
        let requirementItems = BackpackPresenter.getQuantityItemByType(TypesItems.PLAN_MERGE_TROOP_MARINE) + "/" + (ConfigPresenter.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_MARINE, CommandPostModel.instance.levelMergeTroopMarine + 1))
        let actualSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.TROOP_MARINE, CommandPostModel.instance.levelMergeTroopMarine)
        let nextSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.TROOP_MARINE, CommandPostModel.instance.levelMergeTroopMarine + 1)
        let spriteUpgradeItem = SpriteModel.instance.getItemBackpack(TypesItems.PLAN_MERGE_TROOP_MARINE)

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem)
    }

    public renderInterfaceMergeTroopOverland() {
        let mainTitle = "Юнит СВ";
        let actualLevel = "Ур. " + CommandPostModel.instance.levelMergeTroopOverland
        let nextLevelObject = "Ур. " + (CommandPostModel.instance.levelMergeTroopOverland + 1).toString()
        let level = GameModel.instance.level.toString()
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigPresenter.getExpirienceUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostModel.instance.levelMergeTroopOverland + 1))
        let actualPower = GameModel.instance.power.toString()
        let receivedPower = "+" + ConfigPresenter.getPowerMainBuildingByLevel(CommandPostModel.instance.levelMergeTroopOverland + 1).toString()
        let requirementCoins = ConvertLargeNumber.convert(GameModel.instance.coins) + "/" + ConvertLargeNumber.convert(ConfigPresenter.getPriceUpdateUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostModel.instance.levelMergeTroopOverland + 1))
        let requirementItems = BackpackPresenter.getQuantityItemByType(TypesItems.PLAN_MERGE_TROOP_OVERLAND) + "/" + (ConfigPresenter.getImprivementResourceNumberUnitsByTypeAndLevel(TypesObjects.TROOP_OVERLAND, CommandPostModel.instance.levelMergeTroopOverland + 1))
        let actualSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.TROOP_OVERLAND, CommandPostModel.instance.levelMergeTroopOverland)
        let nextSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.TROOP_OVERLAND, CommandPostModel.instance.levelMergeTroopOverland + 1)
        let spriteUpgradeItem = SpriteModel.instance.getItemBackpack(TypesItems.PLAN_MERGE_TROOP_OVERLAND)

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem)
    }

    public renderInterfaceMergeBarracksAir() {
        let mainTitle = "Обьядинить базу ВВС";
        let actualLevel = "Ур. " + CommandPostModel.instance.levelMergeBarracksAir
        let nextLevelObject = "Ур. " + (CommandPostModel.instance.levelMergeBarracksAir + 1).toString()
        let level = GameModel.instance.level.toString()
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigPresenter.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelMergeBarracksAir + 1))
        let actualPower = GameModel.instance.power.toString()
        let receivedPower = "+" + ConfigPresenter.getPowerMainBuildingByLevel(CommandPostModel.instance.levelMergeBarracksAir + 1).toString()
        let requirementCoins = ConvertLargeNumber.convert(GameModel.instance.coins) + "/" + ConvertLargeNumber.convert(ConfigPresenter.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelMergeBarracksAir + 1))
        let requirementItems = BackpackPresenter.getQuantityItemByType(TypesItems.PLAN_MERGE_BARRACK_AIR) + "/" + (ConfigPresenter.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelMergeBarracksAir + 1))
        let actualSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelMergeBarracksAir)
        let nextSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelMergeBarracksAir + 1)
        let spriteUpgradeItem = SpriteModel.instance.getItemBackpack(TypesItems.PLAN_MERGE_BARRACK_AIR)

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem)
    }

    public renderInterfaceMergeBarracksMarine() {
        let mainTitle = "Синтезировать верфь"
        let actualLevel = "Ур. " + CommandPostModel.instance.levelMergeBarracksMarine
        let nextLevelObject = "Ур. " + (CommandPostModel.instance.levelMergeBarracksMarine + 1).toString()
        let level = GameModel.instance.level.toString()
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigPresenter.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelMergeBarracksMarine + 1))
        let actualPower = GameModel.instance.power.toString()
        let receivedPower = "+" + ConfigPresenter.getPowerMainBuildingByLevel(CommandPostModel.instance.levelMergeBarracksMarine + 1).toString()
        let requirementCoins = ConvertLargeNumber.convert(GameModel.instance.coins) + "/" + ConvertLargeNumber.convert(ConfigPresenter.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelMergeBarracksMarine + 1))
        let requirementItems = BackpackPresenter.getQuantityItemByType(TypesItems.PLAN_MERGE_BARRACK_MARINE) + "/" + (ConfigPresenter.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelMergeBarracksMarine + 1))
        let actualSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelMergeBarracksMarine)
        let nextSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelMergeBarracksMarine + 1)
        let spriteUpgradeItem = SpriteModel.instance.getItemBackpack(TypesItems.PLAN_MERGE_BARRACK_MARINE)

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem)
    }

    public renderInterfaceMergeBarracksOverland() {
        let mainTitle = "Синтезировать казарму"
        let actualLevel = "Ур. " + CommandPostModel.instance.levelMergeBarracksOverland
        let nextLevelObject = "Ур. " + (CommandPostModel.instance.levelMergeBarracksOverland + 1).toString()
        let level = GameModel.instance.level.toString()
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigPresenter.getExpirienceBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelMergeBarracksOverland + 1))
        let actualPower = GameModel.instance.power.toString()
        let receivedPower = "+" + ConfigPresenter.getPowerMainBuildingByLevel(CommandPostModel.instance.levelMergeBarracksOverland + 1).toString()
        let requirementCoins = ConvertLargeNumber.convert(GameModel.instance.coins) + "/" + ConvertLargeNumber.convert(ConfigPresenter.getPriceUpdateBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelMergeBarracksOverland + 1))
        let requirementItems = BackpackPresenter.getQuantityItemByType(TypesItems.PLAN_MERGE_BARRACK_OVERLAND) + "/" + (ConfigPresenter.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelMergeBarracksOverland + 1))
        let actualSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelMergeBarracksOverland)
        let nextSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelMergeBarracksOverland + 1)
        let spriteUpgradeItem = SpriteModel.instance.getItemBackpack(TypesItems.PLAN_MERGE_BARRACK_OVERLAND)

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem)
    }

    public renderInterfaceBuildGoldMine() {
        let mainTitle = "Строительство золотого рудника"
        let actualLevel = "Ур. " + CommandPostModel.instance.levelBuildGoldMine
        let nextLevelObject = "Ур. " + (CommandPostModel.instance.levelMergeGoldMine + 1).toString()
        let level = GameModel.instance.level.toString()
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigPresenter.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelMergeGoldMine + 1))
        let actualPower = GameModel.instance.power.toString()
        let receivedPower = "+" + ConfigPresenter.getPowerMainBuildingByLevel(CommandPostModel.instance.levelMergeGoldMine + 1).toString()
        let requirementCoins = ConvertLargeNumber.convert(GameModel.instance.coins) + "/" + ConvertLargeNumber.convert(ConfigPresenter.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelMergeGoldMine + 1))
        let requirementItems = BackpackPresenter.getQuantityItemByType(TypesItems.PLAN_BUILD_GOLD_MINE) + "/" + (ConfigPresenter.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelMergeGoldMine + 1))
        let actualSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelMergeGoldMine)
        let nextSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelMergeGoldMine + 1)
        let spriteUpgradeItem = SpriteModel.instance.getItemBackpack(TypesItems.PLAN_BUILD_GOLD_MINE)

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem)
    }

    public renderInterfaceBuildBarracksAir() {
        let mainTitle = "Построить базу ВВС"
        let actualLevel = "Ур. " + CommandPostModel.instance.levelBuildBarracksAir
        let nextLevelObject = "Ур. " + (CommandPostModel.instance.levelBuildBarracksAir + 1).toString()
        let level = GameModel.instance.level.toString()
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigPresenter.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelBuildBarracksAir + 1))
        let actualPower = GameModel.instance.power.toString()
        let receivedPower = "+" + ConfigPresenter.getPowerMainBuildingByLevel(CommandPostModel.instance.levelBuildBarracksAir + 1).toString()
        let requirementCoins = ConvertLargeNumber.convert(GameModel.instance.coins) + "/" + ConvertLargeNumber.convert(ConfigPresenter.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelBuildBarracksAir + 1))
        let requirementItems = BackpackPresenter.getQuantityItemByType(TypesItems.PLAN_BUILD_BARRACK_AIR) + "/" + (ConfigPresenter.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelBuildBarracksAir + 1))
        let actualSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelBuildBarracksAir)
        let nextSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelBuildBarracksAir + 1)
        let spriteUpgradeItem = SpriteModel.instance.getItemBackpack(TypesItems.PLAN_BUILD_BARRACK_AIR)

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem)
    }

    public renderInterfaceBuildBarracksMarine() {
        let mainTitle = "Построить верфь"
        let actualLevel = "Ур. " + CommandPostModel.instance.levelBuildBarracksMarine
        let nextLevelObject = "Ур. " + (CommandPostModel.instance.levelBuildBarracksMarine + 1).toString()
        let level = GameModel.instance.level.toString()
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigPresenter.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelBuildBarracksMarine + 1))
        let actualPower = GameModel.instance.power.toString()
        let receivedPower = "+" + ConfigPresenter.getPowerMainBuildingByLevel(CommandPostModel.instance.levelBuildBarracksMarine + 1).toString()
        let requirementCoins = ConvertLargeNumber.convert(GameModel.instance.coins) + "/" + ConvertLargeNumber.convert(ConfigPresenter.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelBuildBarracksMarine + 1))
        let requirementItems = BackpackPresenter.getQuantityItemByType(TypesItems.PLAN_BUILD_BARRACK_MARINE) + "/" + (ConfigPresenter.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelBuildBarracksMarine + 1))
        let actualSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelBuildBarracksMarine)
        let nextSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelBuildBarracksMarine + 1)
        let spriteUpgradeItem = SpriteModel.instance.getItemBackpack(TypesItems.PLAN_BUILD_BARRACK_MARINE)

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem)
    }

    public renderInterfaceBuildBarracksOverland() {
        let mainTitle = "Построить казарму"
        let actualLevel = "Ур. " + CommandPostModel.instance.levelBuildBarracksOverland
        let nextLevelObject = "Ур. " + (CommandPostModel.instance.levelBuildBarracksOverland + 1).toString()
        let level = GameModel.instance.level.toString()
        let receivedExperience = "+" + ConvertLargeNumber.convert(ConfigPresenter.getExpirienceBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelBuildBarracksOverland + 1))
        let actualPower = GameModel.instance.power.toString()
        let receivedPower = "+" + ConfigPresenter.getPowerMainBuildingByLevel(CommandPostModel.instance.levelBuildBarracksOverland + 1).toString()
        let requirementCoins = ConvertLargeNumber.convert(GameModel.instance.coins) + "/" + ConvertLargeNumber.convert(ConfigPresenter.getPriceUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelBuildBarracksOverland + 1))
        let requirementItems = BackpackPresenter.getQuantityItemByType(TypesItems.PLAN_BUILD_BARRACK_OVERLAND) + "/" + (ConfigPresenter.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelBuildBarracksOverland + 1))
        let actualSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelBuildBarracksOverland)
        let nextSpriteObject = SpriteModel.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelBuildBarracksOverland + 1)
        let spriteUpgradeItem = SpriteModel.instance.getItemBackpack(TypesItems.PLAN_BUILD_BARRACK_OVERLAND)

        this.render(mainTitle, actualLevel, nextLevelObject, level, receivedExperience, actualPower, receivedPower, requirementCoins, requirementItems, actualSpriteObject, nextSpriteObject, spriteUpgradeItem)
    }
}