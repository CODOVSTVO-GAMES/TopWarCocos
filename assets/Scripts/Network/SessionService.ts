import { _decorator } from 'cc';
import { ControllerUserStorage } from "../Storage/Controllers/ControllerUserStorage";
import { ClientService } from "./ClientService";
import { Cryptor } from "./Cryptor";
import { ResponseDTO } from "./DTO/ResponseDTO";
import { SessionDataDTO } from "./DTO/SessionDataDTO";

export class SessionService{

    static getStartSessionData(userId: string, sessionId: number) {
        const sessionDataDTO = new SessionDataDTO(userId, Cryptor.getRandomHash(), sessionId)
        ClientService.post('session', sessionDataDTO, this.parseSessionResponce);
    }

    static updateSessionData() {
        const sessionDataDTO = new SessionDataDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionHash(), ControllerUserStorage.getSessionId())
        ClientService.post('session', sessionDataDTO, this.parseSessionResponce);
    }

    static parseSessionResponce(json : JSON) {
        console.log(json)
        // const json = JSON.parse(body)
        // if (status == 200) {
        //     const responseDTO = new ResponseDTO(json.data)
        //     const sessionJson = JSON.parse(JSON.stringify(responseDTO.data))


        //     const sessionDataDTO = new SessionDataDTO(sessionJson.userId, sessionJson.sessionHash, sessionJson.sessionId)

        //     ControllerUserStorage.setSessionHash(sessionDataDTO.sessionHash)
        //     ControllerUserStorage.setSessionId(sessionDataDTO.sessionId)
        // }
        // else if (status == 403) {
        //     console.log("Перезагрузить клиент " + body)
        // } else if (status == 502 || status == 408) {
        //     console.log('Повторить запрос позже' + body)
        // } else if (status == 400) {
        //     console.log('Я хз че делать' + body)
        // }
    }

}