import { _decorator } from 'cc';
import { TechnicalConfig } from "../Static/TechnicalConfig";
import { Cryptor } from "../Other/Cryptor";
import { RequestDTO } from "../Structures/DTO/RequestDTO";
import { ResponseDTO } from "../Structures/DTO/ResponseDTO";
import { UserPresenter } from '../Presenter/UserPresenter';

export class ServerApi {

    static post(endpoint: string, data: object, func: Function) {
        const requestDTO = new RequestDTO(data, Cryptor.getHashByObj(data), UserPresenter.getSessionHash(), UserPresenter.getSessionId())
        this.request(endpoint, requestDTO, func, "POST", data)
    }

    static get(endpoint: string, data: object, func: Function) {
        const requestDTO = new RequestDTO(data, Cryptor.getHashByObj(data), UserPresenter.getSessionHash(), UserPresenter.getSessionId())
        this.request(endpoint, requestDTO, func, "GET", data)
    }

    private static request(endpoint: string, data: RequestDTO, func: Function, type: string, dataObj: object) {
        var xhr = new XMLHttpRequest();

        if (type == "GET") {
            //спецификация HTTP не дает отправить тело в гет запросе
            xhr.open(type, TechnicalConfig.SERVER_DOMAIN + endpoint + '?dto=' + JSON.stringify(dataObj), true);
            xhr.setRequestHeader("sessionId", UserPresenter.getSessionId().toString());
            xhr.setRequestHeader("sessionHash", UserPresenter.getSessionHash());
            xhr.setRequestHeader("dataHash", Cryptor.getHashByObj(dataObj));
            xhr.send()
        } else {
            xhr.open(type, TechnicalConfig.SERVER_DOMAIN + endpoint, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("sessionId", UserPresenter.getSessionId().toString());
            xhr.setRequestHeader("sessionHash", UserPresenter.getSessionHash());
            xhr.setRequestHeader("dataHash", Cryptor.getHashByObj(dataObj));
            xhr.send(JSON.stringify(dataObj));
        }

        const globalParser = this.globalResponseParser
        xhr.onload = function () {
            globalParser(xhr.status, xhr.responseText, func)
        }

        xhr.onerror = function () {
            globalParser(xhr.status, xhr.responseText, func)
        }
    }

    private static globalResponseParser(status: number, body: any, customFunction: Function) {
        if (status == 200) {
            let json: any

            try {
                json = JSON.parse(body)
            } catch (e) {
                throw "Невозможно распарсить ответ сервера, что делаем? (Лог ОШИБКА на сервер + ???)"
            }

            const responseDTO = new ResponseDTO(json.data)
            if (json != null) {
                const responseJson = JSON.parse(JSON.stringify(responseDTO.data))
                customFunction(responseJson, true)
            }
            else 
            {
                console.log("ERROR JSON SERVER API")
            }
        }
        else if (status == 403) {
            console.log('Сервер выдал 403. Перезагрузите клиент')
            customFunction('responseJson', false)
        }
        else if (status == 408) {
            console.log('Сервер выдал 502 или 408. Повторите запрос позже')
            customFunction('responseJson', false)
        }
        else if (status == 400) {
            console.log('Сервер выдал 400. Что будем делать???')
            customFunction('responseJson', false)
        }
        else {
            console.log('Сервер выдал неизвестный статус. Что будем делать??? status: ' + status)
        }
    }
}