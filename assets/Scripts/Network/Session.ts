import { _decorator, Component, Node } from 'cc';
import { Sender } from './Sender';
import { UserStorage } from '../Storage/UserStorage';
import { md5 } from './md5';
const { ccclass, property } = _decorator;

@ccclass('Session')
export class Session extends Component {

    public static instance: Session

    onLoad() {
        Session.instance = this
    }

    start() {
        this.getStartSessionData(UserStorage.instance.getUserId(), UserStorage.instance.getSessionId());

        this.schedule(this.updateSessionData, 60)
    }

    getStartSessionData(userId: string, sessionId: string) {
        let hash = this.hashGenerate(sessionId + '_' + userId)
        Sender.instance.sendPostRequest('session', '{"userId":"' + userId + '","sessionHash":"' + hash + '","sessionId":"' + sessionId + '"}', this.parseResponce);
    }

    updateSessionData() {
        Sender.instance.sendPostRequest('session', '{"userId":"' + '5365675465' + '","sessionHash":"' + UserStorage.instance.getSessionHash() + '","sessionId":"' + UserStorage.instance.getSessionId() + '"}', this.parseResponce);
    }

    parseResponce(status: number, body: string) {
        if (status == 200) {
            let json = JSON.parse(body)
            // console.log(json)

            UserStorage.instance.setSessionHash(json.hash)
            UserStorage.instance.setSessionId(json.sessionId)
        }
        else if (status == 403) {
            console.log("Отказано " + body)
        } else if (status == 502) {
            console.log('Запрос не дошел до сервера' + body)
        }
    }

    hashGenerate(str: string): string {
        return md5(str).toString();
    }
}
