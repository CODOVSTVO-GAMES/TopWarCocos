import { _decorator, Component, js, Node } from 'cc';
import { DataStorageDTO } from './DTO/DataStorageDTO';
import { ControllerUserStorage } from '../Storage/Controllers/ControllerUserStorage';
import { Sender } from './Sender';
import { ControllerBufferStorage } from '../Storage/Controllers/ControllerBufferStorage';
import { ResponseDTO } from './DTO/ResponseDTO';
import { DataStorageResponseDTO } from './DTO/DataStorageResponseDTO';
const { ccclass } = _decorator;

@ccclass('DataStorage')
export class DataStorage extends Component {

    public static instance: DataStorage

    onLoad() {
        DataStorage.instance = this;
    }

    start(): void {
        let myArr = ['gameStorage', 'gameStorage']
        setTimeout(() => this.getData(myArr))
    }

    saveData(data: string) {
        Sender.instance.post('data-storage', new DataStorageDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionId(), data), this.parseDataStorageResponce)
    }

    async getData(keys: Array<string>) {
        const strKeys = JSON.parse(JSON.stringify(keys))
        Sender.instance.get('data-storage', new DataStorageDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionId(), strKeys), this.parseDataStorageResponce)
    }

    dataRecipient(objects : object[]){
        console.log('------')
        console.log(objects)
    }

    parseDataStorageResponce(status: number, body: any) {
        const json = JSON.parse(body)
        if (status == 200) {
            const responseDTO = new ResponseDTO(json.data)
            const dataStorageJson = JSON.parse(JSON.stringify(responseDTO.data))
            const dataStorageResponseDTO = new DataStorageResponseDTO(dataStorageJson.objects)

            DataStorage.instance.dataRecipient(dataStorageResponseDTO.dataObjects)
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

