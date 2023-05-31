import { _decorator, Component } from 'cc';
import { ControllerBufferStorage } from '../Storage/Controllers/ControllerBufferStorage';
import { DataStorageService } from './services/DataStorageService';
import { EventService } from './services/EventService';
import { ControllerGameStorage } from '../Storage/Controllers/ControllerGameStorage';
import { TypesStorages } from '../Static/TypesStorages';
import { SessionService } from './services/SessionService';
import { ControllerCommandPostStorage } from '../Storage/Controllers/ControllerCommandPostStorage';
import { ControllerUserStorage } from '../Storage/Controllers/ControllerUserStorage';
import { RedirectionToScene } from '../Other/RedirectionToScene';
import { SceneNames } from '../Static/SceneNames';
import { ControllerCharactrerStorage } from '../Storage/Controllers/ControllerCharactrerStorage';
import { ControllerHomeMapStorage } from '../Storage/Controllers/ControllerHomeMapStorage';
import { ControllerInventoryStorage } from '../Storage/Controllers/ControllerInventoryStorage';
import { ControllerRadarStorage } from '../Storage/Controllers/ControllerRadarStorage';
import { LoadingGame } from '../LoadingGame/LoadingGame';
import { PaymentsService } from './services/PaymentsService';
const { ccclass } = _decorator;

@ccclass('NetworkClient')
export class NetworkClient extends Component {

    public static instance: NetworkClient

    onLoad() {
        NetworkClient.instance = this
        this.schedule(SessionService.updateSessionData, 60)
        this.schedule(this.sendEvents, 5)
        this.schedule(this.sendData, 4)
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
        if (ControllerUserStorage.getIsNewUser()) {
            ControllerGameStorage.assignStartingValues();
            ControllerHomeMapStorage.assignStartingValues();
            ControllerInventoryStorage.assignStartingValues();
            ControllerCharactrerStorage.assignStartingValues();
            ControllerCommandPostStorage.assignStartingValues();
            ControllerRadarStorage.assignStartingValues();
            RedirectionToScene.redirect(SceneNames.HOME_MAP);
            return;
        }

        if (objects == null) throw 'Пришел пустой обьект';

        for (let i = 0; i < objects.length; i++) {
            const json = objects[i];
            let jsonValue = json['value'];
            if (json['key'] == TypesStorages.GAME_STORAGE) {
                ControllerGameStorage.assigningSaveValues(jsonValue);
            }
            else if (json['key'] == TypesStorages.HOME_MAP_STORAGE) {
                ControllerHomeMapStorage.assigningSaveValues(jsonValue);
            }
            else if (json['key'] == TypesStorages.INVENTORY_STORAGE) {
                ControllerInventoryStorage.assigningSaveValues(jsonValue);
            }
            else if (json['key'] == TypesStorages.CHARACTER_STORAGE) {
                ControllerCharactrerStorage.assigningSaveValues(jsonValue);
            }
            else if (json['key'] == TypesStorages.COMMAND_POST_STORAGE) {
                ControllerCommandPostStorage.assigningSaveValues(jsonValue);
            }
            else if (json['key'] == TypesStorages.RADAR_STORAGE) {
                ControllerRadarStorage.assigningSaveValues(jsonValue);
            }
        }
        PaymentsService.getProducts();
        RedirectionToScene.redirect(SceneNames.HOME_MAP);
    }
}

