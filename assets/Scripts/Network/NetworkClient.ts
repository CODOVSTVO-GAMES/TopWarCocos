import { _decorator, Component } from 'cc';
import { BufferStorageController } from '../Controllers/BufferStorageController';
import { DataStorageService } from './Controllers/DataStorageService';
import { EventService } from './Controllers/EventService';
import { GameStorageController } from '../Controllers/GameStorageController';
import { TypesStorages } from '../Static/TypesStorages';
import { SessionService } from './Controllers/SessionService';
import { CommandPostStorageController } from '../Controllers/CommandPostStorageController';
import { UserStorageController } from '../Controllers/UserStorageController';
import { RedirectionToScene } from '../Other/RedirectionToScene';
import { SceneNames } from '../Static/SceneNames';
import { CharactrerStorageController } from '../Controllers/CharactrerStorageController';
import { HomeMapStorageController } from '../Controllers/HomeMapStorageController';
import { InventoryStorageController } from '../Controllers/InventoryStorageController';
import { RadarStorageController } from '../Controllers/RadarStorageController';
import { PaymentsService } from './Controllers/PaymentsService';
import { AutocombineStorageController } from '../Controllers/AutocombineStorageController';
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

