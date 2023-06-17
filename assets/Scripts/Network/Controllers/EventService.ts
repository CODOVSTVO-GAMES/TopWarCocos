import { UserStorageController } from "../../Controllers/StorageControllers/UserStorageController"
import { ServerApi } from "../Other/ServerApi"
import { EventsDTO } from "../DTO/EventsDTO"
import { BufferStorageController } from "../../Controllers/StorageControllers/BufferStorageController"

export class EventService {

    static requestToService(events: Array<string>) {
        const strKeys = JSON.parse(JSON.stringify(events))
        ServerApi.post('events', new EventsDTO(UserStorageController.getAccountId(), UserStorageController.getSessionId(), strKeys), EventService.parseDataStoragePostResponce)
    }

    static parseDataStoragePostResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("save events error")
    }

    static sendEvent(event: string) {
        BufferStorageController.addEventToQueue(event)
    }
}