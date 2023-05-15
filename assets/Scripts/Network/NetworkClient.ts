import { _decorator, Component, Node } from 'cc';
import { ControllerBufferStorage } from '../Storage/Controllers/ControllerBufferStorage';
import { DataStorageService } from './services/DataStorageService';
import { EventService } from './services/EventService';
import { ControllerGameStorage } from '../Storage/Controllers/ControllerGameStorage';
import { TypesStorages } from '../Static/TypesStorages';
import { SessionService } from './services/SessionService';
const { ccclass } = _decorator;

@ccclass('NetworkClient')
export class NetworkClient extends Component {

    public static instance: NetworkClient

    onLoad() {
        NetworkClient.instance = this
        SessionService.getStartSessionData()
        this.schedule(SessionService.updateSessionData, 60)
        this.schedule(this.sendEvents, 5)
        this.schedule(this.sendData, 4)

        let myArr = [TypesStorages.GAME_STORAGE]
        setTimeout(() => DataStorageService.getData(myArr), 500)
    }

    private sendData() {
        if (ControllerBufferStorage.isBufferFull()) {
            DataStorageService.saveData(ControllerBufferStorage.getBuffer());
            ControllerBufferStorage.clearBufferStorage();
        }
    }

    private sendEvents() {
        if (ControllerBufferStorage.isEventsQueueFull()) {
            EventService.requestToService(ControllerBufferStorage.getQueueEvents())
            ControllerBufferStorage.clearEventsQueue()
        }
    }

    dataRecipient(objects: object[]) {
        if (objects == null) throw 'Пришел пустой обьект'
        for (let l = 0; l < objects.length; l++) {
            const json = JSON.parse(JSON.stringify(objects[l]))
            const jsonValue = JSON.parse(json.value)// обьект класса
            if (json.key == TypesStorages.GAME_STORAGE) {
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
            else if (json.key == TypesStorages.HOME_MAP_STORAGE) {

            }
            else if (json.key == TypesStorages.INVENTORY_STORAGE) {

            }
            else if (json.key == TypesStorages.CHARACTER_STORAGE) {

            }
        }
    }
}

