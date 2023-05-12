import { ControllerUserStorage } from "../Storage/Controllers/ControllerUserStorage";
import { ClientService } from "./ClientService";
import { Cryptor } from "./other/Cryptor";
import { SessionDataDTO } from "./DTO/SessionDataDTO";

export class SessionService {

    static getStartSessionData(userId: string, sessionId: number) {
        const sessionDataDTO = new SessionDataDTO(userId, Cryptor.getRandomHash(), sessionId)
        ClientService.post('session', sessionDataDTO, this.parseSessionResponce);
    }

    static updateSessionData() {
        const sessionDataDTO = new SessionDataDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionHash(), ControllerUserStorage.getSessionId())
        ClientService.post('session', sessionDataDTO, this.parseSessionResponce);
    }

    static parseSessionResponce(data: any) {
        const sessionJson = JSON.parse(JSON.stringify(data))
        const sessionDataDTO = new SessionDataDTO(sessionJson.userId, sessionJson.sessionHash, sessionJson.sessionId)
        ControllerUserStorage.setSessionHash(sessionDataDTO.sessionHash)
        ControllerUserStorage.setSessionId(sessionDataDTO.sessionId)
    }

}