import { TaskTypes } from "../Static/TaskTypes";
import { TypesItems } from "../Static/TypesItems";
import { ControllerTaskStorage } from "../Storage/Controllers/ControllerTaskStorage";
import { ActiveTask } from "../Structures/ActiveTask";
import { TaskReward } from "../Structures/TaskReward";

/**описание работы
пришел запрос "открыта 10 тера"
в активные квесты добавлется квест открыта 10 тера с маркером выполнен
в активных квестах отмечаются выполнеными все квесты ниже уровнем если они есть
добавляются квесты открыть 11 теру и открыть 12 теру с маркером закрыто(если они небыли открыты)

при нажатии собрать квест открывается 11 12 13 квесты с маркером закрыто(если они небыли открыты)
начисляется награда
 */

export class MainTask {
    static openMap(mapNumder: number) {
        let reward = [new TaskReward(TypesItems.GOLD, 123)]// получить из стораджа по левелу
        ControllerTaskStorage.updateActiveTask(new ActiveTask(mapNumder, TaskTypes.OPEN_MAP, reward, true))

        reward = [new TaskReward(TypesItems.GOLD, 1234)]// получить из стораджа по левелу
        ControllerTaskStorage.updateActiveTask(new ActiveTask(mapNumder + 1, TaskTypes.OPEN_MAP, reward))

        reward = [new TaskReward(TypesItems.GOLD, 1234)]// получить из стораджа по левелу
        ControllerTaskStorage.updateActiveTask(new ActiveTask(mapNumder + 2, TaskTypes.OPEN_MAP, reward))
    }

}