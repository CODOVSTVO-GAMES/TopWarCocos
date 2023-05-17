import { ControllerUserStorage } from "../../Storage/Controllers/ControllerUserStorage"
import { ClientService } from "../other/ClientService"
import { EventsDTO } from "../DTO/EventsDTO"
import { ControllerBufferStorage } from "../../Storage/Controllers/ControllerBufferStorage"

export class EventService {

    static requestToService(events: Array<string>) {
        const strKeys = JSON.parse(JSON.stringify(events))
        ClientService.post('events', new EventsDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionId(), strKeys), EventService.parseDataStoragePostResponce)
    }

    static parseDataStoragePostResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("save events error")
    }

    static sendEvent(event : string){
        ControllerBufferStorage.addEventToQueue(event)
    }
}