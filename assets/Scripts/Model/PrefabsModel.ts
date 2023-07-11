import { _decorator, Component, Prefab } from 'cc';
import { TypesObjects } from '../Static/TypesObjects';
import { TypesViews } from '../Static/TypesViews';
const { ccclass, property } = _decorator;

@ccclass('PrefabsModel')
export class PrefabsModel extends Component {

    public static instance: PrefabsModel

    @property({ type: Prefab })
    private troopAir: Prefab

    @property({ type: Prefab })
    private troopMarine: Prefab

    @property({ type: Prefab })
    private troopOverland: Prefab

    @property({ type: Prefab })
    private barracks: Prefab

    @property({ type: Prefab })
    private commandPost: Prefab

    @property({ type: Prefab })
    private goldMine: Prefab

    @property({ type: Prefab })
    private bank: Prefab

    @property({ type: Prefab })
    private autocombine: Prefab

    @property({ type: Prefab })
    private radar: Prefab

    @property({ type: Prefab })
    private treasures: Prefab

    @property({ type: Prefab })
    private manipulator: Prefab

    @property({ type: Prefab })
    private repairShop: Prefab

    @property({ type: Prefab })
    private lobbyWar: Prefab

    @property({ type: Prefab })
    private expedition: Prefab

    @property({ type: Prefab })
    private wall2x2: Prefab

    @property({ type: Prefab })
    private wall4x4: Prefab

    @property({ type: Prefab })
    private wall8x8: Prefab

    @property({ type: Prefab })
    private battle2x2: Prefab

    @property({ type: Prefab })
    private battle4x4: Prefab

    @property({ type: Prefab })
    private battle8x8: Prefab

    // =================================================================

    @property({ type: Prefab })
    private profileView: Prefab

    @property({ type: Prefab })
    private shopCoinsView: Prefab

    @property({ type: Prefab })
    private shopGemsView: Prefab

    @property({ type: Prefab })
    private shopObjectView: Prefab

    @property({ type: Prefab })
    private experienceView: Prefab

    @property({ type: Prefab })
    private powerView: Prefab

    @property({ type: Prefab })
    private charactersView: Prefab

    @property({ type: Prefab })
    private characterParametersView: Prefab

    @property({ type: Prefab })
    private upgradeCharacterView: Prefab

    @property({ type: Prefab })
    private autocombineView: Prefab

    @property({ type: Prefab })
    private bankView: Prefab

    @property({ type: Prefab })
    private backpackView: Prefab

    @property({ type: Prefab })
    private radarView: Prefab

    @property({ type: Prefab })
    private tasksRadarView: Prefab

    @property({ type: Prefab })
    private tasksGameView: Prefab

    @property({ type: Prefab })
    private repairShopView: Prefab

    @property({ type: Prefab })
    private gameRewardView: Prefab


    @property({ type: Prefab })
    private victoryBattle: Prefab

    @property({ type: Prefab })
    private defeatBattle: Prefab


    @property({ type: Prefab })
    private commandPostView: Prefab

    @property({ type: Prefab })
    private commandPostUpgradeMainView: Prefab

    @property({ type: Prefab })
    private commandPostUpgradeOtherView: Prefab

    // =================================================================

    @property({ type: Prefab })
    private itemBackpack: Prefab

    // =================================================================

    @property({ type: Prefab })
    private completedTask: Prefab

    @property({ type: Prefab })
    private unfulfiledTask: Prefab

    // =================================================================

    @property({ type: Prefab })
    private itemMyAvailableTroop: Prefab

    @property({ type: Prefab })
    private troopBattle: Prefab

    // =================================================================

    protected onLoad(): void {
        PrefabsModel.instance = this
    }

    public getGameObjectPrefab(type: string): Prefab {
        if (type == TypesObjects.TROOP_AIR) return this.troopAir
        else if (type == TypesObjects.TROOP_MARINE) return this.troopMarine
        else if (type == TypesObjects.TROOP_OVERLAND) return this.troopOverland
        else if (type == TypesObjects.BARRACKS_AIR) return this.barracks
        else if (type == TypesObjects.BARRACKS_MARINE) return this.barracks
        else if (type == TypesObjects.BARRACKS_OVERLAND) return this.barracks
        else if (type == TypesObjects.COMMAND_POST) return this.commandPost
        else if (type == TypesObjects.GOLD_MINE) return this.goldMine
        else if (type == TypesObjects.BANK) return this.bank
        else if (type == TypesObjects.AUTOCOMBINE) return this.autocombine
        else if (type == TypesObjects.RADAR) return this.radar
        else if (type == TypesObjects.TREASURES) return this.treasures
        else if (type == TypesObjects.WHOLE_MANIPULATOR) return this.manipulator
        else if (type == TypesObjects.PADDED_MANIPULATOR) return this.manipulator
        else if (type == TypesObjects.REPAIR_SHOP) return this.repairShop
        else if (type == TypesObjects.LOBBY_WARS) return this.lobbyWar
        else if (type == TypesObjects.EXPEDITION) return this.expedition
        else if (type == TypesObjects.WALL_2X2) return this.wall2x2
        else if (type == TypesObjects.WALL_4X4) return this.wall4x4
        else if (type == TypesObjects.WALL_8X8) return this.wall8x8
        else if (type == TypesObjects.BATTLE_2X2) return this.battle2x2
        else if (type == TypesObjects.BATTLE_4X4) return this.battle4x4
        else if (type == TypesObjects.BATTLE_8X8) return this.battle8x8
        else {
            console.log("ERROR: Object not found")
            return null
        }
    }

    public getViewPrefabs(type: string): Prefab {
        if (type == TypesViews.PROFILE) return this.profileView
        else if (type == TypesViews.SHOP_COINS) return this.shopCoinsView
        else if (type == TypesViews.SHOP_GEMS) return this.shopGemsView
        else if (type == TypesViews.SHOP_OBJECT) return this.shopObjectView
        else if (type == TypesViews.EXPERIENCE) return this.experienceView
        else if (type == TypesViews.POWER) return this.powerView
        else if (type == TypesViews.CHARACTERS) return this.charactersView
        else if (type == TypesViews.CHARACTER_PARAMETERS) return this.characterParametersView
        else if (type == TypesViews.UPGRADE_CHARACTER) return this.upgradeCharacterView
        else if (type == TypesViews.AUTOCOMBINE) return this.autocombineView
        else if (type == TypesViews.BANK) return this.bankView
        else if (type == TypesViews.BACKPACK) return this.backpackView
        else if (type == TypesViews.RADAR) return this.radarView
        else if (type == TypesViews.TASKS_RADAR) return this.tasksRadarView
        else if (type == TypesViews.TASKS_GAME) return this.tasksGameView
        else if (type == TypesViews.REPAIR_SHOP) return this.repairShopView
        else if (type == TypesViews.GAME_REWARD) return this.gameRewardView

        else if (type == TypesViews.VICTORY_BATTLE) return this.victoryBattle
        else if (type == TypesViews.DEFEAT_BATTLE) return this.defeatBattle

        else if (type == TypesViews.COMMAND_POST) return this.commandPostView
        else if (type == TypesViews.UPGRATE_COMMAND_POST) return this.commandPostUpgradeMainView
        else if (type == TypesViews.UPGRATE_MERGE_GOLD_MINE) return this.commandPostUpgradeOtherView
        else if (type == TypesViews.UPGRATE_MERGE_TROOP_AIR) return this.commandPostUpgradeOtherView
        else if (type == TypesViews.UPGRATE_MERGE_TROOP_MARINE) return this.commandPostUpgradeOtherView
        else if (type == TypesViews.UPGRATE_MERGE_TROOP_OVERLAND) return this.commandPostUpgradeOtherView
        else if (type == TypesViews.UPGRATE_MERGE_BARRACK_AIR) return this.commandPostUpgradeOtherView
        else if (type == TypesViews.UPGRATE_MERGE_BARRACK_MARINE) return this.commandPostUpgradeOtherView
        else if (type == TypesViews.UPGRATE_MERGE_BARRACK_OVERLAND) return this.commandPostUpgradeOtherView
        else if (type == TypesViews.UPGRATE_BUILD_GOLD_MINE) return this.commandPostUpgradeOtherView
        else if (type == TypesViews.UPGRATE_BUILD_BARRACK_AIR) return this.commandPostUpgradeOtherView
        else if (type == TypesViews.UPGRATE_BUILD_BARRACK_MARINE) return this.commandPostUpgradeOtherView
        else if (type == TypesViews.UPGRATE_BUILD_BARRACK_OVERLAND) return this.commandPostUpgradeOtherView
        else {
            console.log("ERROR: Object not found")
            return null
        }
    }

    public getItemBackpack(): Prefab {
        return this.itemBackpack
    }

    public getItemTasksGame(type: string): Prefab {
        if (type == "completedTask") {
            return this.completedTask
        }
        else if (type == "unfulfiledTask") {
            return this.unfulfiledTask
        }
    }

    public getItemMyAvailableTroop() {
        return this.itemMyAvailableTroop
    }

    public getTroopBattle() {
        return this.troopBattle
    }
}