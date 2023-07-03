import { UserPresenter } from "../Presenter/UserPresenter";
import { ServerApi } from "./ServerApi";
import { SessionDataDTO } from "../Structures/DTO/SessionDataDTO";
import { LoadingGame } from "../LoadingGame/LoadingGame";

export class SessionService {

    static getStartSessionData() {
        const sessionDataDTO = new SessionDataDTO(UserPresenter.getAccountId(), UserPresenter.getSessionHash(), UserPresenter.getSessionId())
        ServerApi.post('session', sessionDataDTO, SessionService.parseGetSessionResponce);
    }

    static updateSessionData() {
        const sessionDataDTO = new SessionDataDTO(UserPresenter.getAccountId(), UserPresenter.getSessionHash(), UserPresenter.getSessionId())
        ServerApi.post('session', sessionDataDTO, SessionService.parseUpdateSessionResponce);
    }

    static parseUpdateSessionResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("update session error")
        const sessionDataDTO = SessionService.parseResponse(data)
        UserPresenter.setSessionHash(sessionDataDTO.sessionHash)
        UserPresenter.setSessionId(sessionDataDTO.sessionId)
        UserPresenter.setServerTime(sessionDataDTO.serverTime)
    }

    static parseGetSessionResponce(data: any, isDone: boolean) {
        if (!isDone) console.log("get session error")
        else {
            const sessionDataDTO = SessionService.parseResponse(data)
            UserPresenter.setSessionHash(sessionDataDTO.sessionHash)
            UserPresenter.setSessionId(sessionDataDTO.sessionId)
            UserPresenter.setServerTime(sessionDataDTO.serverTime)

            console.log("get session № " + sessionDataDTO.sessionId + ", session hash: " + sessionDataDTO.sessionHash + ', accountId: ' + UserPresenter.getAccountId())
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