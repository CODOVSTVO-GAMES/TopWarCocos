import { _decorator, Component, js, math, Node } from 'cc';
import { Sender } from './Sender';
import { md5 } from './md5';
import { ControllerUserStorage } from '../Storage/Controllers/ControllerUserStorage';
import { SessionDataDTO } from './DTO/SessionDataDTO';
import { ResponseDTO } from './DTO/ResponseDTO';
const { ccclass } = _decorator;

@ccclass('Session')
export class Session extends Component {

    public static instance: Session

    onLoad() {
        Session.instance = this
    }

    start() {
        this.getStartSessionData(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionId())
        this.schedule(this.updateSessionData, 60)
    }

    getStartSessionData(userId: string, sessionId: number) {
        const sessionDataDTO = new SessionDataDTO(userId, this.getRandomHash(), sessionId)
        Sender.instance.send('session', sessionDataDTO, this.parseSessionResponce);
    }

    updateSessionData() {
        const sessionDataDTO = new SessionDataDTO(ControllerUserStorage.getUserId(), ControllerUserStorage.getSessionHash(), ControllerUserStorage.getSessionId())
        Sender.instance.send('session', sessionDataDTO, this.parseSessionResponce);
    }

    parseSessionResponce(status: number, body: any) {
        const json = JSON.parse(body)
        if (status == 200) {
            const responseDTO = new ResponseDTO(json.data)

            const sessionJson = JSON.parse(JSON.stringify(responseDTO.data))

            const sessionDataDTO = new SessionDataDTO(sessionJson.userId, sessionJson.sessionHash, sessionJson.sessionId)

            ControllerUserStorage.setSessionHash(sessionDataDTO.sessionHash)
            ControllerUserStorage.setSessionId(sessionDataDTO.sessionId)
        }
        else if (status == 403) {
            console.log("Перезагрузить клиент " + body)
        } else if (status == 502 || status == 408) {
            console.log('Повторить запрос позже' + body)
        } else if (status == 400) {
            console.log('Я хз че делать' + body)
        }
    }

    hashGenerate(str: string): string {
        return md5(str).toString();
    }

    getRandomHash(): string {
        return this.hashGenerate(Math.random().toString())
    }
}
