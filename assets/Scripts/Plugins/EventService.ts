import { UserPresenter } from "../Presenter/UserPresenter"
import { ServerApi } from "./ServerApi"
import { EventsDTO } from "../Structures/DTO/EventsDTO"
import { BufferPresenter } from "../Presenter/BufferPresenter"

export class EventService {

    static requestToService(events: Array<string>) {
        const strKeys = JSON.parse(JSON.stringify(events))
        ServerApi.post('events', new EventsDTO(UserPresenter.getAccountId(), UserPresenter.getSessionId(), strKeys), EventService.parseDataStoragePostResponce)
    }

    static parseDataStoragePostResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("save events error")
        else {

        }
    }

    static sendEvent(event: string) {
        BufferPresenter.addEventToQueue(event)
    }
}