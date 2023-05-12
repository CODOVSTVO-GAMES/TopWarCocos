import { _decorator, Component, Node } from 'cc';
import { DataStorageDTO } from './DTO/DataStorageDTO';
import { ControllerUserStorage } from '../Storage/Controllers/ControllerUserStorage';
import { Sender } from './Sender';
import { ControllerBufferStorage } from '../Storage/Controllers/ControllerBufferStorage';
const { ccclass } = _decorator;

@ccclass('DataStorage')
export class DataStorage extends Component {

    public static instance: DataStorage

    public objArray : object[] = []
    public

    onLoad() {
        DataStorage.instance = this;
    }

    start(): void {
        let myArr = ['gameStorage', 'gameStorage']
        setTimeout(() => this.getData(myArr), 3000)
    }

    saveData(data: string) {
        console.log(data)
        Sender.instance.post('data-storage', new DataStorageDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionId(), data), this.parseDataStorageResponce)
    }

    getData(keys: Array<string>) : object[] {
        const strKeys = JSON.parse(JSON.stringify(keys))
        console.log(strKeys)
        Sender.instance.get('data-storage', new DataStorageDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionId(), strKeys), this.parseDataStorageResponce)
        return this.objArray
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

