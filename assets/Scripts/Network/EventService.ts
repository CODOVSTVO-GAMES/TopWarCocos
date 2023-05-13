import { ControllerUserStorage } from "../Storage/Controllers/ControllerUserStorage"
import { ClientService } from "./ClientService"
import { DataStorageDTO } from "./DTO/DataStorageDTO"
import { EventsDTO } from "./DTO/EventsDTO"

export class EventService {

    static sendEvents(events: Array<string>) {
        console.log('save data request')
        const strKeys = JSON.parse(JSON.stringify(events))
        ClientService.post('events', new EventsDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionId(), strKeys), EventService.parseDataStoragePostResponce)
    }

    static parseDataStoragePostResponce(data: any, isDone : boolean) {
        if (!isDone) console.log("Ошибка запроса ивентов")
        console.log('post event done')
    }
}