import { ControllerUserStorage } from "../Storage/Controllers/ControllerUserStorage";
import { ClientService } from "./ClientService";
import { SessionDataDTO } from "./DTO/SessionDataDTO";

export class SessionService {

    static getStartSessionData() {
        const sessionDataDTO = new SessionDataDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionHash(), ControllerUserStorage.getSessionId())
        ClientService.post('session', sessionDataDTO, SessionService.parseSessionPostResponce);
    }

    static updateSessionData() {
        const sessionDataDTO = new SessionDataDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionHash(), ControllerUserStorage.getSessionId())
        ClientService.post('session', sessionDataDTO, SessionService.parseSessionPostResponce);
    }

    static parseSessionPostResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("Ошибка запроса сессии")
        const sessionJson = JSON.parse(JSON.stringify(data))
        const sessionDataDTO = new SessionDataDTO(sessionJson.userId, sessionJson.sessionHash, sessionJson.sessionId)
        ControllerUserStorage.setSessionHash(sessionDataDTO.sessionHash)
        ControllerUserStorage.setSessionId(sessionDataDTO.sessionId)
    }

}