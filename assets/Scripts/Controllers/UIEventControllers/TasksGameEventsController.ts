import { TasksGameLogic } from "../../Logic/TasksGameLogic";
import { ItemTasksGame } from "../../UI/Modals/ModalTasksGame/ItemTasksGame";
import { SecondaryInterface } from "../../UI/SecondaryInterface";

export class TasksGameEventsController {

    static prepCollectRewardTask(itemTasksGame: ItemTasksGame) {
        // подготовка сбора награды

        let typeTask = itemTasksGame.typeTask
        let levelObjectTask = itemTasksGame.levelObjectTask

        TasksGameLogic.instance.collectReward(typeTask, levelObjectTask)
    }

    static prepGoOverTask(itemTasksGame: ItemTasksGame) {
        // подготовка перейти к задаче

        SecondaryInterface.instance.closeFirstLayoutModal()
    }
} 