import { UserStorageController } from "../StorageControllers/UserStorageController";
import { ServerApi } from "./ServerApi";
import { SessionDataDTO } from "../../Structures/DTO/SessionDataDTO";
import { LoadingGame } from "../../LoadingGame/LoadingGame";

export class SessionService {

    static getStartSessionData() {
        const sessionDataDTO = new SessionDataDTO(UserStorageController.getAccountId(), UserStorageController.getSessionHash(), UserStorageController.getSessionId())
        ServerApi.post('session', sessionDataDTO, SessionService.parseGetSessionResponce);
    }

    static updateSessionData() {
        const sessionDataDTO = new SessionDataDTO(UserStorageController.getAccountId(), UserStorageController.getSessionHash(), UserStorageController.getSessionId())
        ServerApi.post('session', sessionDataDTO, SessionService.parseUpdateSessionResponce);
    }

    static parseUpdateSessionResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("update session error")
        const sessionDataDTO = SessionService.parseResponse(data)
        UserStorageController.setSessionHash(sessionDataDTO.sessionHash)
        UserStorageController.setSessionId(sessionDataDTO.sessionId)
        UserStorageController.setServerTime(sessionDataDTO.serverTime)
    }

    static parseGetSessionResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get session error")
        else {
            const sessionDataDTO = SessionService.parseResponse(data)
            UserStorageController.setSessionHash(sessionDataDTO.sessionHash)
            UserStorageController.setSessionId(sessionDataDTO.sessionId)
            UserStorageController.setServerTime(sessionDataDTO.serverTime)

            console.log("get session № " + sessionDataDTO.sessionId + ", session hash: " + sessionDataDTO.sessionHash + ', accountId: ' + UserStorageController.getAccountId())
            LoadingGame.getStorages()
        }

    }

    static parseResponse(data: any): SessionDataDTO {
        const sessionJson = JSON.parse(JSON.stringify(data))
        let sessionDataDTO = new SessionDataDTO(sessionJson.userId, sessionJson.sessionHash, sessionJson.sessionId)
        sessionDataDTO.serverTime = sessionJson.serverTime
        return sessionDataDTO
    }
}