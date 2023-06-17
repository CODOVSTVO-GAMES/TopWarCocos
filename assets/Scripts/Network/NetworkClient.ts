import { _decorator, Component } from 'cc';
import { BufferStorageController } from '../Controllers/StorageControllers/BufferStorageController';
import { DataStorageService } from './Controllers/DataStorageService';
import { EventService } from './Controllers/EventService';
import { GameStorageController } from '../Controllers/StorageControllers/GameStorageController';
import { TypesStorages } from '../Static/TypesStorages';
import { SessionService } from './Controllers/SessionService';
import { CommandPostStorageController } from '../Controllers/StorageControllers/CommandPostStorageController';
import { UserStorageController } from '../Controllers/StorageControllers/UserStorageController';
import { RedirectionToScene } from '../Other/RedirectionToScene';
import { SceneNames } from '../Static/SceneNames';
import { CharactrerStorageController } from '../Controllers/StorageControllers/CharactrerStorageController';
import { HomeMapStorageController } from '../Controllers/StorageControllers/HomeMapStorageController';
import { InventoryStorageController } from '../Controllers/StorageControllers/InventoryStorageController';
import { RadarStorageController } from '../Controllers/StorageControllers/RadarStorageController';
import { PaymentsService } from './Controllers/PaymentsService';
import { AutocombineStorageController } from '../Controllers/StorageControllers/AutocombineStorageController';
import { MapService } from './Controllers/MapService';
const { ccclass } = _decorator;

@ccclass('NetworkClient')
export class NetworkClient extends Component {

    public static instance: NetworkClient

    onLoad() {
        NetworkClient.instance = this;
        this.schedule(SessionService.updateSessionData, 60);
        this.schedule(this.sendEvents, 5);
        this.schedule(this.sendData, 4);

        setTimeout(MapService.getEnemy, 4000)
    }

    private sendData() {
        if (BufferStorageController.isBufferFull()) {
            DataStorageService.saveData(BufferStorageController.getBuffer());
            BufferStorageController.clearBufferStorage();
        }
    }

    private sendEvents() {
        if (BufferStorageController.isEventsQueueFull()) {
            EventService.requestToService(BufferStorageController.getQueueEvents());
            BufferStorageController.clearEventsQueue();
        }
    }

    dataRecipient(objects: object[]) {
        if (UserStorageController.getIsNewUser()) {
            GameStorageController.assignStartingValues();
            HomeMapStorageController.assignStartingValues();
            InventoryStorageController.assignStartingValues();
            CharactrerStorageController.assignStartingValues();
            CommandPostStorageController.assignStartingValues();
            RadarStorageController.assignStartingValues();
            AutocombineStorageController.assignStartingValues();
            RedirectionToScene.redirect(SceneNames.HOME_MAP);
            return;
        }

        if (objects == null) throw 'Пришел пустой обьект';

        for (let i = 0; i < objects.length; i++) {
            const json = objects[i];
            let jsonValue = json['value'];
            if (json['key'] == TypesStorages.GAME_STORAGE) {
                GameStorageController.assigningSaveValues(jsonValue);
            }
            else if (json['key'] == TypesStorages.HOME_MAP_STORAGE) {
                HomeMapStorageController.assigningSaveValuesServer(jsonValue);
            }
            else if (json['key'] == TypesStorages.INVENTORY_STORAGE) {
                InventoryStorageController.assigningSaveValues(jsonValue);
            }
            else if (json['key'] == TypesStorages.CHARACTER_STORAGE) {
                CharactrerStorageController.assigningSaveValues(jsonValue);
            }
            else if (json['key'] == TypesStorages.COMMAND_POST_STORAGE) {
                CommandPostStorageController.assigningSaveValues(jsonValue);
            }
            else if (json['key'] == TypesStorages.RADAR_STORAGE) {
                RadarStorageController.assigningSaveValues(jsonValue);
            }
            else if (json['key'] == TypesStorages.AUTOCOMBINE_STORAGE) {
                AutocombineStorageController.assigningSaveValues(jsonValue);
            }
        }
        PaymentsService.getProducts();
        RedirectionToScene.redirect(SceneNames.HOME_MAP);
    }
}

