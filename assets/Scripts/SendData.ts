import { _decorator, Component, Node } from 'cc';
import { DataStorage } from './Network/DataStorage';
import { ControllerBufferStorage } from './Storage/Controllers/ControllerBufferStorage';
const { ccclass, property } = _decorator;

@ccclass('SendData')
export class SendData extends Component {

    start() {
        this.send();
    }

    send() {
        if (this.node) {
            setTimeout(() => {
                console.log("send data");
                DataStorage.instance.saveData(ControllerBufferStorage.getBuffer());
                ControllerBufferStorage.clearBufferStorage();
                this.send();
            }, 2000);
        }
    }
}

