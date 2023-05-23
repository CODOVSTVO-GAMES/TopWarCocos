import { LoadingGame } from "../LoadingGame/LoadingGame";
import { TechnicalConfig } from "../Static/TechnicalConfig";
import { ControllerUserStorage } from "../Storage/Controllers/ControllerUserStorage";

export class OkConnector {

    static SDK_URL: string = 'https://api.ok.ru/js/fapi5.js'

    static initPlugin() {
        this.addJavaScript(this.SDK_URL).then(
            () => {
                var rParams = FAPI.Util.getRequestParameters();
                FAPI.init(rParams["api_server"], rParams["apiconnection"], function () { console.log("FAPI init"); OkConnector.getUserInfo() }, function () {
                    console.log('FAPI error');
                    if (!TechnicalConfig.ISPROD) {
                        LoadingGame.getUser()
                    } else {
                        console.log("Игра не запустится")
                    }
                })
            }
        )
    }

    static getUserInfo() {
        FAPI.Client.call({ "fields": "uid", "method": "users.getCurrentUser" }, OkConnector.callbackUserGetInfo);
    }

    static showPayment(title: string, description: string, code: string, price: number){
        FAPI.UI.showPayment(title, description, code, price)
    }

    static addJavaScript(src: string) {
        return new Promise(resolve => {
            let script = document.createElement('script')
            script.src = src
            script.addEventListener('load', resolve)
            document.head.appendChild(script)
        })
    }

    static callbackUserGetInfo(status, data, error) {
        if (data) {
            ControllerUserStorage.setUserId(data['uid'])
            // console.log("OK get UserInfo done")
            LoadingGame.getUser()
        } else {
            console.log("err " + error)
        }
    }

}