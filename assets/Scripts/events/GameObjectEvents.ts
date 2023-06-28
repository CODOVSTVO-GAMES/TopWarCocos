import { _decorator, Component } from 'cc';
import { ObjectParameters } from '../ObjectParameters';
import { GameObjectEventsController } from '../Controllers/UIEventControllers/GameObjectEventsController';
const { ccclass, property } = _decorator;

@ccclass('GameObjectEvents')
export class GameObjectEvents extends Component {

    @property({ type: ObjectParameters })
    public objectParameters: ObjectParameters

    public eventClickOnMessage() {
        // нажатие на сообщение сверху обьекта
        GameObjectEventsController.prepClickOnMessage(this.objectParameters)
    }

    public eventClickOnGameObejct() {
        // нажатие на сам обьект 
        GameObjectEventsController.prepClickOnGameObejct(this.objectParameters)
    }
}