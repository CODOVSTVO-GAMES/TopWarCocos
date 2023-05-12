import { _decorator, Component } from 'cc';
import { DataStorageDTO } from './DTO/DataStorageDTO';
import { ControllerUserStorage } from '../Storage/Controllers/ControllerUserStorage';
import { Sender } from './Sender';
import { ResponseDTO } from './DTO/ResponseDTO';
import { DataStorageResponseDTO } from './DTO/DataStorageResponseDTO';
import { TypesStorages } from '../Static/TypesStorages';
import { ControllerGameStorage } from '../Storage/Controllers/ControllerGameStorage';
const { ccclass } = _decorator;

@ccclass('DataStorage')
export class DataStorage extends Component {

    public static instance: DataStorage

    onLoad() {
        DataStorage.instance = this;
    }

    start() {
        let myArr = [TypesStorages.GAME_STORAGE]
        setTimeout(() => this.getData(myArr), 3000)
    }

    saveData(data: string) {
        ClientService.post('data-storage', new DataStorageDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionId(), data), this.parseDataStorageResponce)
    }

    getData(keys: Array<string>) {
        const strKeys = JSON.parse(JSON.stringify(keys))
        ClientService.get('data-storage', new DataStorageDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionId(), strKeys), this.parseDataStorageResponce)
    }

    dataRecipient(objects: object[]) {

        if(objects == null) return;

        if (objects.length > 0) {

            console.log("stage 0");

            let json = JSON.parse(JSON.stringify(objects));
            let obj = JSON.parse(json[0].value);

            console.log("stage 1");

            console.log("SERVER-COINS: " + obj.coins);

            ControllerGameStorage.equateCoins(obj.coins);
            ControllerGameStorage.equateGems(obj.coinsInTime);
            ControllerGameStorage.equateGems(obj.gems);
            ControllerGameStorage.equateEnergy(obj.energy);
            ControllerGameStorage.equateExperience(obj.experience);
            ControllerGameStorage.equateMaxPower(obj.maxPower);
            ControllerGameStorage.equateTerritoryPower(obj.territoryPower);
            ControllerGameStorage.equateTechnoPower(obj.technoPower);
            ControllerGameStorage.equateHeroPower(obj.heroPower);
            ControllerGameStorage.equateArsenalPower(obj.arsenalPower);
            ControllerGameStorage.equateProfessionPower(obj.professionPower);

            console.log("stage 2");

        }
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

