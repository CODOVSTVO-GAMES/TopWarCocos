import { _decorator, Component } from 'cc';
import { BufferStorageController } from '../Controllers/StorageControllers/BufferStorageController';
import { DataStorageService } from '../Controllers/NetworkControllers/DataStorageService';
import { EventService } from '../Controllers/NetworkControllers/EventService';
import { SessionService } from '../Controllers/NetworkControllers/SessionService';
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
        if (BufferStorageController.isBufferFull()) {
            DataStorageService.saveData(BufferStorageController.getBuffer())
            BufferStorageController.clearBufferStorage()
        }
    }

    private sendEvents() {
        if (BufferStorageController.isEventsQueueFull()) {
            EventService.requestToService(BufferStorageController.getQueueEvents())
            BufferStorageController.clearEventsQueue()
        }
    }
}

