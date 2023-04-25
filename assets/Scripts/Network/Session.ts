// import { _decorator, Component, Node } from 'cc';
// import { Sender } from './Sender';
// import { Storage } from '../Storage/Storage';
// import { MD5 } from 'crypto-es/lib/md5.js';


// const { ccclass, property } = _decorator;

// @ccclass('Session')
// export class Session extends Component {

//     public static instance: Session

//     protected onLoad(): void {
//         Session.instance = this
//     }

//     start() {
//         this.getStartSessionData(Storage.instance.getuserId(), Storage.instance.getSessionId());

//         this.schedule(this.updateSessionData, 60)
//     }

//     getStartSessionData(userId: string, sessionId: string){
//         let hash = this.hashGenerate(sessionId + '_' + userId)
//         Sender.instance.sendPostRequest('session', '{"userId":"' + userId + '","sessionHash":"' + hash + '", "sessionId":"' + sessionId + '"}', this.parseResponce);
//     }

//     updateSessionData(){
//         Sender.instance.sendPostRequest('session', '{"userId":"' + '5365675465' + '","sessionHash":"' + Storage.instance.getSessionHash() + '", "sessionId":"' + Storage.instance.getSessionId() + '"}', this.parseResponce);
//     }

//     parseResponce(status: number, body: string){
//         if (status == 200){
//             let json = JSON.parse(body)
            
//             Storage.instance.setSessionHash(json.hash)
//             Storage.instance.setSessionId(json.sessionid)
//             Storage.instance.setNodeId(json.nodeid.toString())
//         }
//         else if (status == 403){
//             console.log("Отказано " + body)
//         }else if (status == 502){
//             console.log('Запрос не дошел до сервера' + body)
//         }
//     }

//     hashGenerate(str: string) : string {
//         return MD5(str).toString();
//     }

// }
