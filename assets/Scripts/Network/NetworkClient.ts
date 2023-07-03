import { _decorator, Component } from 'cc';
import { DataStorageService } from '../Controllers/NetworkControllers/DataStorageService';
import { EventService } from '../Controllers/NetworkControllers/EventService';
import { SessionService } from '../Controllers/NetworkControllers/SessionService';
import { BufferPresenter } from '../Presenter/BufferPresenter';
const { ccclass } = _decorator;

@ccclass('NetworkClient')
export class NetworkClient extends Component {

    public static instance: NetworkClient

    protected onLoad(): void {
        NetworkClient.instance = this
        this.schedule(SessionService.updateSessionData, 60)
        this.schedule(this.sendEvents, 5)
        this.schedule(this.sendData, 4)
    }

    private sendData() {
        if (BufferPresenter.isBufferFull()) {
            DataStorageService.saveData(BufferPresenter.getBuffer())
            BufferPresenter.clearBufferStorage()
        }
    }

    private sendEvents() {
        if (BufferPresenter.isEventsQueueFull()) {
            EventService.requestToService(BufferPresenter.getQueueEvents())
            BufferPresenter.clearEventsQueue()
        }
    }
}