import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { CommandPostModel } from '../Model/CommandPostModel';
import { TypesObjects } from '../Static/TypesObjects';
import { SpriteModel } from '../Model/SpriteModel';
import { ConvertLargeNumber } from '../Other/ConvertLargeNumber';
import { SecondaryInterface } from '../UI/SecondaryInterface';
import { TypesModals } from '../Static/TypesModals';
import { GameModel } from '../Model/GameModel';
const { ccclass, property } = _decorator;

@ccclass('CommandPostView')
export class CommandPostView extends Component {

    public static instance: CommandPostView

    @property({ type: Label })
    public level: Label

    @property({ type: Label })
    public coins: Label

    @property({ type: Label })
    public gems: Label

    @property({ type: Label })
    public levelCommandPost: Label
    @property({ type: Sprite })
    public spriteCommandPost: Sprite
    @property({ type: Node })
    public warningCommandPost: Node

    @property({ type: Label })
    public levelRepairShop: Label
    @property({ type: Sprite })
    public spriteRepairShop: Sprite
    @property({ type: Node })
    public warningRepairShop: Node

    @property({ type: Label })
    public levelMergeGoldMine: Label
    @property({ type: Sprite })
    public spriteMergeGoldMine: Sprite
    @property({ type: Node })
    public warningMergeGoldMine: Node

    @property({ type: Label })
    public levelBuildGoldMine: Label
    @property({ type: Sprite })
    public spriteBuildGoldMine: Sprite
    @property({ type: Node })
    public warningBuildGoldMine: Node

    @property({ type: Label })
    public levelMergeTroopAir: Label
    @property({ type: Sprite })
    public spriteMergeTroopAir: Sprite
    @property({ type: Node })
    public warningMergeTroopAir: Node

    @property({ type: Label })
    public levelMergeTroopMarine: Label
    @property({ type: Sprite })
    public spriteMergeTroopMarine: Sprite
    @property({ type: Node })
    public warningMergeTroopMarine: Node

    @property({ type: Label })
    public levelMergeTroopOverland: Label
    @property({ type: Sprite })
    public spriteMergeTroopOverland: Sprite
    @property({ type: Node })
    public warningMergeTroopOverland: Node

    @property({ type: Label })
    public levelMergeBarracksAir: Label
    @property({ type: Sprite })
    public spriteMergeBarracksAir: Sprite
    @property({ type: Node })
    public warningMergeBarracksAir: Node

    @property({ type: Label })
    public levelMergeBarracksMarine: Label
    @property({ type: Sprite })
    public spriteMergeBarracksMarine: Sprite
    @property({ type: Node })
    public warningMergeBarracksMarine: Node

    @property({ type: Label })
    public levelMergeBarracksOverland: Label
    @property({ type: Sprite })
    public spriteMergeBarracksOverland: Sprite
    @property({ type: Node })
    public warningMergeBarracksOverland: Node

    @property({ type: Label })
    public levelBuildBarracksAir: Label
    @property({ type: Sprite })
    public spriteBuildBarracksAir: Sprite
    @property({ type: Node })
    public warningBuildBarracksAir: Node

    @property({ type: Label })
    public levelBuildBarracksMarine: Label
    @property({ type: Sprite })
    public spriteBuildBarracksMarine: Sprite
    @property({ type: Node })
    public warningBuildBarracksMarine: Node

    @property({ type: Label })
    public levelBuildBarracksOverland: Label
    @property({ type: Sprite })
    public spriteBuildBarracksOverland: Sprite
    @property({ type: Node })
    public warningBuildBarracksOverland: Node

    protected onLoad(): void {
        CommandPostView.instance = this
    }

    public eventOpenUpgradeCommandPost() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_COMMAND_POST)
    }

    public eventOpenRepairShop() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_REPAIR_SHOP)
    }

    public eventOpenMergeGoldMine() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_GOLD_MINE)
    }

    public eventOpenMergeTroopAir() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_TROOP_AIR)
    }

    public eventOpenMergeTroopMarine() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_TROOP_MARINE)
    }

    public eventOpenMergeTroopOverland() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_TROOP_OVERLAND)
    }

    public eventOpenMergeBarracksAir() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_BARRACK_AIR)
    }

    public eventOpenMergeBarracksMarine() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_BARRACK_MARINE)
    }

    public eventOpenMergeBarracksOverland() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_MERGE_BARRACK_OVERLAND)
    }

    public eventOpenBuildGoldMine() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_BUILD_GOLD_MINE)
    }

    public eventOpenBuildBarracksAir() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_BUILD_BARRACK_AIR)
    }

    public eventOpenBuildBarracksMarine() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_BUILD_BARRACK_MARINE)
    }

    public eventOpenBuildBarracksOverland() {
        SecondaryInterface.instance.openSecondModal(TypesModals.UPGRATE_BUILD_BARRACK_OVERLAND)
    }

    public renderHeader() {
        let level = GameModel.instance.level.toString()
        let coins = ConvertLargeNumber.convert(GameModel.instance.coins)
        let gems = GameModel.instance.gems.toString()

        this.level.string = level
        this.coins.string = coins
        this.gems.string = gems
    }

    public renderItemUpgradeCommandPost() {
        let levelCommandPost = CommandPostModel.instance.levelCommandPost
        let spriteCommandPost = SpriteModel.instance.getObjectSprite(TypesObjects.COMMAND_POST, levelCommandPost)

        this.levelCommandPost.string = "Ур. " + levelCommandPost
        this.spriteCommandPost.spriteFrame = spriteCommandPost
        this.warningCommandPost.active = false
    }

    public renderItemUpgradeRepairShop() {
        let levelRepairShop = CommandPostModel.instance.levelRepairShop
        let spriteCommandPost = SpriteModel.instance.getObjectSprite(TypesObjects.REPAIR_SHOP, levelRepairShop)

        this.levelRepairShop.string = "Ур. " + levelRepairShop
        this.spriteCommandPost.spriteFrame = spriteCommandPost
        this.warningRepairShop.active = false
    }

    public renderItemUpgradeMergeGoldMine() {
        let levelMergeGoldMine = CommandPostModel.instance.levelMergeGoldMine
        let spriteMergeGoldMine = SpriteModel.instance.getObjectSprite(TypesObjects.GOLD_MINE, levelMergeGoldMine)

        this.levelMergeGoldMine.string = "Ур. " + levelMergeGoldMine
        this.spriteMergeGoldMine.spriteFrame = spriteMergeGoldMine
        this.warningMergeGoldMine.active = false
    }

    public renderItemUpgradeBuildGoldMine() {
        let levelBuildGoldMine = CommandPostModel.instance.levelBuildGoldMine
        let spriteBuildGoldMine = SpriteModel.instance.getObjectSprite(TypesObjects.GOLD_MINE, levelBuildGoldMine)

        this.levelBuildGoldMine.string = "Ур. " + levelBuildGoldMine
        this.spriteBuildGoldMine.spriteFrame = spriteBuildGoldMine
        this.warningBuildGoldMine.active = false
    }

    public renderItemUpgradeMergeTroopAir() {
        let levelMergeTroopAir = CommandPostModel.instance.levelMergeTroopAir
        let spriteMergeTroopAir = SpriteModel.instance.getObjectSprite(TypesObjects.TROOP_AIR, levelMergeTroopAir)

        this.levelMergeTroopAir.string = "Ур. " + levelMergeTroopAir
        this.spriteMergeTroopAir.spriteFrame = spriteMergeTroopAir
        this.warningMergeTroopAir.active = false
    }

    public renderItemUpgradeMergeTroopMarine() {
        let levelMergeTroopMarine = CommandPostModel.instance.levelMergeTroopMarine
        let spriteMergeTroopMarine = SpriteModel.instance.getObjectSprite(TypesObjects.TROOP_MARINE, levelMergeTroopMarine)

        this.levelMergeTroopMarine.string = "Ур. " + levelMergeTroopMarine
        this.spriteMergeTroopMarine.spriteFrame = spriteMergeTroopMarine
        this.warningMergeTroopMarine.active = false
    }

    public renderItemUpgradeMergeTroopOverland() {
        let levelMergeTroopOverland = CommandPostModel.instance.levelMergeTroopOverland
        let spriteMergeTroopOverland = SpriteModel.instance.getObjectSprite(TypesObjects.TROOP_OVERLAND, levelMergeTroopOverland)

        this.levelMergeTroopOverland.string = "Ур. " + levelMergeTroopOverland
        this.spriteMergeTroopOverland.spriteFrame = spriteMergeTroopOverland
        this.warningMergeTroopOverland.active = false
    }

    public renderItemUpgradeMergeBarrackAir() {
        let levelMergeBarracksAir = CommandPostModel.instance.levelMergeBarracksAir
        let spriteMergeBarracksAir = SpriteModel.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, levelMergeBarracksAir)

        this.levelMergeBarracksAir.string = "Ур. " + levelMergeBarracksAir
        this.spriteMergeBarracksAir.spriteFrame = spriteMergeBarracksAir
        this.warningMergeBarracksAir.active = false
    }

    public renderItemUpgradeMergeBarrackMarine() {
        let levelMergeBarracksMarine = CommandPostModel.instance.levelMergeBarracksMarine
        let spriteMergeBarracksMarine = SpriteModel.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, levelMergeBarracksMarine)

        this.levelMergeBarracksMarine.string = "Ур. " + levelMergeBarracksMarine
        this.spriteMergeBarracksMarine.spriteFrame = spriteMergeBarracksMarine
        this.warningMergeBarracksMarine.active = false
    }

    public renderItemUpgradeMergeBarrackOverland() {
        let levelMergeBarracksOverland = CommandPostModel.instance.levelMergeBarracksOverland
        let spriteMergeBarracksOverland = SpriteModel.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, levelMergeBarracksOverland)

        this.levelMergeBarracksOverland.string = "Ур. " + levelMergeBarracksOverland
        this.spriteMergeBarracksOverland.spriteFrame = spriteMergeBarracksOverland
        this.warningMergeBarracksOverland.active = false
    }

    public renderItemUpgradeBuildBarrackAir() {
        let levelBuildBarracksAir = CommandPostModel.instance.levelBuildBarracksAir
        let spriteBuildBarracksAir = SpriteModel.instance.getObjectSprite(TypesObjects.BARRACKS_AIR, levelBuildBarracksAir)

        this.levelBuildBarracksAir.string = "Ур. " + levelBuildBarracksAir
        this.spriteBuildBarracksAir.spriteFrame = spriteBuildBarracksAir
        this.warningBuildBarracksAir.active = false
    }

    public renderItemUpgradeBuildBarrackMarine() {
        let levelBuildBarracksMarine = CommandPostModel.instance.levelBuildBarracksMarine
        let spriteBuildBarracksMarine = SpriteModel.instance.getObjectSprite(TypesObjects.BARRACKS_MARINE, levelBuildBarracksMarine)

        this.levelBuildBarracksMarine.string = "Ур. " + levelBuildBarracksMarine
        this.spriteBuildBarracksMarine.spriteFrame = spriteBuildBarracksMarine
        this.warningBuildBarracksMarine.active = false
    }

    public renderItemUpgradeBuildBarrackOverland() {
        let levelBuildBarracksOverland = CommandPostModel.instance.levelBuildBarracksOverland
        let spriteBuildBarracksOverland = SpriteModel.instance.getObjectSprite(TypesObjects.BARRACKS_OVERLAND, levelBuildBarracksOverland)

        this.levelBuildBarracksOverland.string = "Ур. " + levelBuildBarracksOverland
        this.spriteBuildBarracksOverland.spriteFrame = spriteBuildBarracksOverland
        this.warningBuildBarracksOverland.active = false
    }
}