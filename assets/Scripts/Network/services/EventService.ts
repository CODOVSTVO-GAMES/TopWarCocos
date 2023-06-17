import { UserStorageController } from "../../Controllers/UserStorageController"
import { ClientService } from "../other/ClientService"
import { EventsDTO } from "../DTO/EventsDTO"
import { BufferStorageController } from "../../Controllers/BufferStorageController"

export class EventService {

    static requestToService(events: Array<string>) {
        const strKeys = JSON.parse(JSON.stringify(events))
        ClientService.post('events', new EventsDTO(UserStorageController.getAccountId(), UserStorageController.getSessionId(), strKeys), EventService.parseDataStoragePostResponce)
    }

    static parseDataStoragePostResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("save events error")
    }

    static sendEvent(event: string) {
        BufferStorageController.addEventToQueue(event)
    }
}