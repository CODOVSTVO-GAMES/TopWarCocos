import { UserStorageController } from "../StorageControllers/UserStorageController"
import { ServerApi } from "./ServerApi"
import { EventsDTO } from "../../Structures/DTO/EventsDTO"
import { BufferStorageController } from "../StorageControllers/BufferStorageController"

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