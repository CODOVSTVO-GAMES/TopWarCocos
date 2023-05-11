import { _decorator, Component, Node } from 'cc';
import { DataStorageDTO } from './DTO/DataStorageDTO';
import { ControllerUserStorage } from '../Storage/Controllers/ControllerUserStorage';
import { Sender } from './Sender';
import { ControllerBufferStorage } from '../Storage/Controllers/ControllerBufferStorage';
const { ccclass } = _decorator;

@ccclass('DataStorage')
export class DataStorage extends Component {

    public static instance: DataStorage

    onLoad() {
        DataStorage.instance = this;
    }

    start(): void {
        this.saveData()
    }

    saveData() {
        let arrs: Object[] = []
        setTimeout(() => Sender.instance.send('data-storage', new DataStorageDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionId(), ControllerBufferStorage.getBuffer()), this.parseDataStorageResponce), 3000)
    }

    parseDataStorageResponce(status: number, body: any) {
        // const json = JSON.parse(body)
        console.log(body)
        if (status == 200) {
            // const responseDTO = new ResponseDTO(json.data)

            // const sessionJson = JSON.parse(JSON.stringify(responseDTO.data))

            // const sessionDataDTO = new SessionDataDTO(sessionJson.userId, sessionJson.sessionHash, sessionJson.sessionId)
        }
        else if (status == 403) {//статусы пересмотреть
            console.log("Перезагрузить клиент " + body)
        } else if (status == 502 || status == 408) {
            console.log('Повторить запрос позже' + body)
        } else if (status == 400) {
            console.log('Я хз че делать' + body)
        }
    }

}

