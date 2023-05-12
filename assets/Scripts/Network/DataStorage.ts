import { _decorator, Component } from 'cc';
import { DataStorageDTO } from './DTO/DataStorageDTO';
import { ControllerUserStorage } from '../Storage/Controllers/ControllerUserStorage';
import { ResponseDTO } from './DTO/ResponseDTO';
import { DataStorageResponseDTO } from './DTO/DataStorageResponseDTO';
import { TypesStorages } from '../Static/TypesStorages';
import { ControllerGameStorage } from '../Storage/Controllers/ControllerGameStorage';
import { ClientService } from './ClientService';
import { SessionService } from './SessionService';
import { DataStorageService } from './DataStorageService';
const { ccclass } = _decorator;

@ccclass('DataStorage')
export class DataStorage extends Component {

    public static instance: DataStorage

    onLoad() {
        DataStorage.instance = this;
    }

    start() {
        let myArr = [TypesStorages.GAME_STORAGE]
        setTimeout(() => DataStorageService.getData(myArr), 1000)
    }

    dataRecipient(objects: object[]) {
        if (objects == null) throw 'Пришел пустой обьект'

        for (let l = 0; l < objects.length; l++) {
            const json = JSON.parse(JSON.stringify(objects[l]))

            console.log(json.key) //название класса
            const jsonValue = JSON.parse(json.value)// обьект класса

            if (json.key == TypesStorages.GAME_STORAGE) {
                console.log(jsonValue.coins)
                ControllerGameStorage.equateCoins(jsonValue.coins);
                ControllerGameStorage.equateGems(jsonValue.coinsInTime);
                ControllerGameStorage.equateGems(jsonValue.gems);
                ControllerGameStorage.equateEnergy(jsonValue.energy);
                ControllerGameStorage.equateExperience(jsonValue.experience);
                ControllerGameStorage.equateMaxPower(jsonValue.maxPower);
                ControllerGameStorage.equateTerritoryPower(jsonValue.territoryPower);
                ControllerGameStorage.equateTechnoPower(jsonValue.technoPower);
                ControllerGameStorage.equateHeroPower(jsonValue.heroPower);
                ControllerGameStorage.equateArsenalPower(jsonValue.arsenalPower);
                ControllerGameStorage.equateProfessionPower(jsonValue.professionPower);
            }
        }
    }

}

