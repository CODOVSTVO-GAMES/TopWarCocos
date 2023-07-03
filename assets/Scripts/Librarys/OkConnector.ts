import { LoadingGame } from "../LoadingGame/LoadingGame";
import { TechnicalConfig } from "../Static/TechnicalConfig";
import { UserPresenter } from "../Presenter/UserPresenter";

export class OkConnector {

    static SDK_URL: string = 'https://api.ok.ru/js/fapi5.js'

    static initPlugin() {
        this.addJavaScript(this.SDK_URL).then(
            () => {
                var rParams = FAPI.Util.getRequestParameters();
                // console.log('referer: ' + rParams['referer'])
                // console.log('locationip: ' + rParams['ip_geo_location'])
                FAPI.init(rParams["api_server"], rParams["apiconnection"], function () { OkConnector.ifSDKReady() }, function () {
                    // console.log('FAPI error');
                    if (!TechnicalConfig.ISPROD) {
                        LoadingGame.getUser()
                    } else {
                        console.log("Игра не запустится")
                    }
                })
            }
        )
    }

    static ifSDKReady() {
        console.log("FAPI init")
        OkConnector.setApiCallback()
        OkConnector.getUserInfo()
        FAPI.UI.getPageInfo()
    }

    static getUserInfo() {
        FAPI.Client.call({ "fields": "uid", "method": "users.getCurrentUser" }, OkConnector.callbackUserGetInfo);
    }

    static showPayment(title: string, description: string, code: string, price: number) {
        FAPI.UI.showPayment(title, description, code, price, null, null, "ok", "true")// можем прокинуть айди аккаунта в сервис
    }

    static loadRewardedAd() {
        FAPI.UI.loadAd();
    }

    static showRewardedAd() {
        FAPI.UI.showLoadedAd()
    }

    static showInterstitialAd() {
        FAPI.UI.showAd()
    }

    static showRatingDialog() {
        FAPI.UI.showRatingDialog();
    }

    static setVindowSize(width: number, height: number) {
        let w = 0
        let h = 0
        if (width >= 760) {
            width = 760
        }
        if (height >= 4000) {
            height = 4000
        }
        FAPI.UI.setWindowSize(width, height);
    }

    static callbackUserGetInfo(status, data, error) {
        if (data) {
            UserPresenter.setUserId(data['uid'])
            // console.log("OK get UserInfo done")
            LoadingGame.getUser()
        } else {
            console.log("err " + error)
        }
    }

    static showInvite() {
        FAPI.UI.showInvite("Поиграй в мою игру!", "showInviteMyArg1=kek");
        // в случае успеха возвращает в API_callback третьим параметром строку, в которой через запятую указаны id приглашенных друзей
    }

    static joinGroup() {
        FAPI.UI.joinGroup(123123123, true); // при запросе написать проверку на участие в группе
    }

    static addJavaScript(src: string) {
        return new Promise(resolve => {
            let script = document.createElement('script')
            script.src = src
            script.addEventListener('load', resolve)
            document.head.appendChild(script)
        })
    }

    static setApiCallback() {
        window.API_callback = (method: string, result: string, data: string) => {

            switch (method) {
                case 'showPayment': {
                    console.log('Статус платежа ' + result)
                    if (result == 'ok') {
                        console.log("куплены предметы: " + data)
                    }
                }
                case 'loadRewardedAd': {
                    if (result == 'ok') {
                        console.log("Реклама с наградой загружена: " + data)
                    }
                    else {
                        console.log("Реклама с наградой ошибка: " + data)
                    }
                }
                case 'showLoadedAd': {
                    if (result == 'ok') {
                        console.log("Реклама с наградой показана: " + data)
                    }
                    else {
                        console.log("Реклама с наградой ошибка показа: " + data)
                    }
                }
                case 'showAd': {
                    if (result == 'ok') {
                        if (data == 'ready' || data == 'ad_prepared') {
                            console.log("Реклама показывается: " + data)
                        } else if (data == 'ad_shown') {
                            console.log("Реклама показана: " + data)
                        }
                        else {
                            console.log("Реклама статус: " + data)
                        }
                    }
                    else {
                        console.log("Реклама ошибка показа: " + data)//при дебаге принтануть резалт
                    }
                }
                case 'showInvite': {
                    if (result == 'ok') {
                        console.log('showInvite ok ' + data)
                    }
                    else if (result == 'cancel') {
                        console.log('showInvite cancel ' + data)
                    }
                    else {
                        console.log('showInvite error ' + data)
                    }
                }
                case 'showRatingDialog': {
                    console.log("юзер поставил рейтинг " + data)
                }
                case 'joinGroup': {
                    console.log("ивент вступления в группу. Результат " + data)
                }
                case 'getPageInfo': {
                    console.log("page info " + data)
                    let info = JSON.parse(data)
                    // OkConnector.setVindowSize(info['clientWidth'], info['clientHeight'])
                }
            }
        }
    }
}
