import { _decorator, Component, Node } from 'cc';
import { DataStorageDTO } from './DTO/DataStorageDTO';
import { ControllerUserStorage } from '../Storage/Controllers/ControllerUserStorage';
import { Sender } from './Sender';
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

    saveData(){
        let arrs : Object[] = []
        arrs.push({"name":"xxx", "value":{'x':"sdsds"}})
        arrs.push({"name":"xqwxx", "value":{'x':"sd4234sds"}})
        arrs.push({"name":"xq123123wxx", "value":{'x':"sdsd234324s"}})
        setTimeout(()=>Sender.instance.send('data-storage', new DataStorageDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionId(), arrs), this.parseDataStorageResponce), 3000)
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

