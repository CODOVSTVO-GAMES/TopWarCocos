import { ControllerUserStorage } from "../../Storage/Controllers/ControllerUserStorage";
import { ClientService } from "../other/ClientService";
import { SessionDataDTO } from "../DTO/SessionDataDTO";
import { LoadingGame } from "../../LoadingGame/LoadingGame";

export class SessionService {

    static getStartSessionData() {
        const sessionDataDTO = new SessionDataDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionHash(), ControllerUserStorage.getSessionId())
        ClientService.post('session', sessionDataDTO, SessionService.parseGetSessionResponce);
    }

    static updateSessionData() {
        const sessionDataDTO = new SessionDataDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionHash(), ControllerUserStorage.getSessionId())
        ClientService.post('session', sessionDataDTO, SessionService.parseUpdateSessionResponce);
    }

    static parseUpdateSessionResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("update session error")
        const sessionDataDTO = SessionService.parseResponse(data)
        ControllerUserStorage.setSessionHash(sessionDataDTO.sessionHash)
        ControllerUserStorage.setSessionId(sessionDataDTO.sessionId)

        console.log("update session № " + sessionDataDTO.sessionId + ", session hash: " + sessionDataDTO.sessionHash + ', userId: ' + ControllerUserStorage.getUserId())
    }

    static parseGetSessionResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get session error")
        else {
            const sessionDataDTO = SessionService.parseResponse(data)
            ControllerUserStorage.setSessionHash(sessionDataDTO.sessionHash)
            ControllerUserStorage.setSessionId(sessionDataDTO.sessionId)

            console.log("get session № " + sessionDataDTO.sessionId + ", session hash: " + sessionDataDTO.sessionHash + ', userId: ' + ControllerUserStorage.getUserId())
            LoadingGame.getStorages()
        }

    }

    static parseResponse(data: any): SessionDataDTO {
        const sessionJson = JSON.parse(JSON.stringify(data))
        return new SessionDataDTO(sessionJson.userId, sessionJson.sessionHash, sessionJson.sessionId)
    }

}