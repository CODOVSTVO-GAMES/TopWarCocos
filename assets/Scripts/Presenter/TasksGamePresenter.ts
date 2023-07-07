import { TasksGameModel } from "../Model/TasksGameModel"
import { TaskGame } from "../Structures/TaskGame"
import { TasksGameView } from "../View/TasksGameView"
import { SecondaryInterface } from "../UI/SecondaryInterface"
import { ItemTasksGameView } from "../View/ItemTasksGameView"
import { GamePresenter } from "./GamePresenter"
import { TypesItems } from "../Static/TypesItems"
import { BackpackPresenter } from "./BackpackPresenter"
import { ConfigPresenter } from "./ConfigPresenter"
import { CommandPostModel } from "../Model/CommandPostModel"
import { TypesTasksGame } from "../Static/TypesTasksGame"
import { TypesObjects } from "../Static/TypesObjects"
import { PreviewTaskGameView } from "../View/PreviewTaskGameView"

export class TasksGamePresenter {

    public static processingCollectRewardTask(itemTasksGame: ItemTasksGameView) {
        let typeTask = itemTasksGame.typeTask
        let levelObjectTask = itemTasksGame.levelObjectTask

        this.collectReward(typeTask, levelObjectTask)
    }

    public static processingGoOverTask(itemTasksGame: ItemTasksGameView) {
        SecondaryInterface.instance.closeFirstLayoutModal()
    }

    public static addTask(typeTask: string, levelObjectTask: number, quantityRequired: number, quantityCompleted: number) {
        TasksGameModel.instance.tasks.push(new TaskGame(typeTask, levelObjectTask, quantityRequired, quantityCompleted, false))
        // TasksGameView.instance.renderItemsTasks()
    }

    public static preCheckTask(typeItem: string) {
        if (typeItem == TypesItems.PLAN_COMMAND_POST) {
            let a = ConfigPresenter.getImprivementResourceNumberMainBuildingByLevel(CommandPostModel.instance.levelCommandPost)

            if (BackpackPresenter.getQuantityItemByType(typeItem) > a) {
                let levelObjectTask = this.getLevelObjectTaskByTypeTask(TypesTasksGame.OPEN_UPGRADE_COMMAND_POST)

                this.checkTask(TypesTasksGame.OPEN_UPGRADE_COMMAND_POST, levelObjectTask, 1)
            }
        }
        else if (typeItem == TypesItems.PLAN_MERGE_GOLD_MINE) {
            let a = ConfigPresenter.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelMergeGoldMine)

            if (BackpackPresenter.getQuantityItemByType(typeItem) > a) {
                let levelObjectTask = this.getLevelObjectTaskByTypeTask(TypesTasksGame.OPEN_UPGRADE_MERGE_GOLD_MINE)

                this.checkTask(TypesTasksGame.OPEN_UPGRADE_MERGE_GOLD_MINE, levelObjectTask, 1)
            }
        }
        else if (typeItem == TypesItems.PLAN_MERGE_BARRACK_AIR) {
            let a = ConfigPresenter.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelMergeBarracksAir)

            if (BackpackPresenter.getQuantityItemByType(typeItem) > a) {
                let levelObjectTask = this.getLevelObjectTaskByTypeTask(TypesTasksGame.OPEN_UPGRADE_MERGE_BARRACK_AIR)

                this.checkTask(TypesTasksGame.OPEN_UPGRADE_MERGE_BARRACK_AIR, levelObjectTask, 1)
            }
        }
        else if (typeItem == TypesItems.PLAN_MERGE_BARRACK_MARINE) {
            let a = ConfigPresenter.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelMergeBarracksMarine)

            if (BackpackPresenter.getQuantityItemByType(typeItem) > a) {
                let levelObjectTask = this.getLevelObjectTaskByTypeTask(TypesTasksGame.OPEN_UPGRADE_MERGE_BARRACK_MARINE)

                this.checkTask(TypesTasksGame.OPEN_UPGRADE_MERGE_BARRACK_MARINE, levelObjectTask, 1)
            }
        }
        else if (typeItem == TypesItems.PLAN_MERGE_BARRACK_OVERLAND) {
            let a = ConfigPresenter.getIimprivementResourceNumberBuildingMergeByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelMergeBarracksOverland)

            if (BackpackPresenter.getQuantityItemByType(typeItem) > a) {
                let levelObjectTask = this.getLevelObjectTaskByTypeTask(TypesTasksGame.OPEN_UPGRADE_MERGE_BARRACK_OVERLAND)

                this.checkTask(TypesTasksGame.OPEN_UPGRADE_MERGE_BARRACK_OVERLAND, levelObjectTask, 1)
            }
        }
        else if (typeItem == TypesItems.PLAN_BUILD_GOLD_MINE) {
            let a = ConfigPresenter.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.GOLD_MINE, CommandPostModel.instance.levelBuildGoldMine)

            if (BackpackPresenter.getQuantityItemByType(typeItem) > a) {
                let levelObjectTask = this.getLevelObjectTaskByTypeTask(TypesTasksGame.OPEN_UPGRADE_BUILD_GOLD_MINE)

                this.checkTask(TypesTasksGame.OPEN_UPGRADE_BUILD_GOLD_MINE, levelObjectTask, 1)
            }
        }
        else if (typeItem == TypesItems.PLAN_BUILD_BARRACK_AIR) {
            let a = ConfigPresenter.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_AIR, CommandPostModel.instance.levelBuildBarracksAir)

            if (BackpackPresenter.getQuantityItemByType(typeItem) > a) {
                let levelObjectTask = this.getLevelObjectTaskByTypeTask(TypesTasksGame.OPEN_UPGRADE_BUILD_BARRACK_AIR)

                this.checkTask(TypesTasksGame.OPEN_UPGRADE_BUILD_BARRACK_AIR, levelObjectTask, 1)
            }
        }
        else if (typeItem == TypesItems.PLAN_BUILD_BARRACK_MARINE) {
            let a = ConfigPresenter.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_MARINE, CommandPostModel.instance.levelBuildBarracksMarine)

            if (BackpackPresenter.getQuantityItemByType(typeItem) > a) {
                let levelObjectTask = this.getLevelObjectTaskByTypeTask(TypesTasksGame.OPEN_UPGRADE_BUILD_BARRACK_MARINE)

                this.checkTask(TypesTasksGame.OPEN_UPGRADE_BUILD_BARRACK_MARINE, levelObjectTask, 1)
            }
        }
        else if (typeItem == TypesItems.PLAN_BUILD_BARRACK_OVERLAND) {
            let a = ConfigPresenter.getIimprivementResourceNumberUpdateBuildingSpawnByTypeAndLevel(TypesObjects.BARRACKS_OVERLAND, CommandPostModel.instance.levelBuildBarracksOverland)

            if (BackpackPresenter.getQuantityItemByType(typeItem) > a) {
                let levelObjectTask = this.getLevelObjectTaskByTypeTask(TypesTasksGame.OPEN_UPGRADE_BUILD_BARRACK_OVERLAND)

                this.checkTask(TypesTasksGame.OPEN_UPGRADE_BUILD_BARRACK_OVERLAND, levelObjectTask, 1)
            }
        }
    }

    public static checkTask(typeTask: string, levelObjectTask: number, quantity: number) {
        for (let i = 0; i < TasksGameModel.instance.tasks.length; i++) {
            if (TasksGameModel.instance.tasks[i].typeTask != typeTask) continue
            if (TasksGameModel.instance.tasks[i].levelObjectTask != levelObjectTask) continue
            if (TasksGameModel.instance.tasks[i].rewardTrigger) continue

            TasksGameModel.instance.tasks[i].quantityCompleted += quantity

            if (TasksGameModel.instance.tasks[i].quantityCompleted > TasksGameModel.instance.tasks[i].quantityRequired) {
                TasksGameModel.instance.tasks[i].quantityCompleted = TasksGameModel.instance.tasks[i].quantityRequired
                TasksGameModel.instance.tasks[i].rewardTrigger = true
            }
        }
    }

    public static collectReward(typeTask: string, levelObjectTask: number) {
        for (let i = 0; i < TasksGameModel.instance.tasks.length; i++) {
            if (TasksGameModel.instance.tasks[i].typeTask != typeTask) continue
            if (TasksGameModel.instance.tasks[i].levelObjectTask != levelObjectTask) continue
            if (TasksGameModel.instance.tasks[i].rewardTrigger == false) continue

            let quantityRequired = TasksGameModel.instance.tasks[i].quantityRequired
            let quantityCompleted = 0

            this.deleteTask(i)
            this.addTask(typeTask, levelObjectTask + 1, quantityRequired, quantityCompleted)

            GamePresenter.addCoins(1)

            TasksGameView.instance.renderItemsTasks()
            PreviewTaskGameView.instance.renderInterface()
            break
        }
    }

    public static deleteTask(index: number) {
        TasksGameModel.instance.tasks.splice(index, 1)
    }

    private static getLevelObjectTaskByTypeTask(typeTask) {
        for (let i = 0; i < TasksGameModel.instance.tasks.length; i++) {
            if (TasksGameModel.instance.tasks[i] == typeTask) {
                return TasksGameModel.instance.tasks[i].levelObjectTask
            }
        }
    }
}