import { _decorator } from 'cc';
import { TechnicalConfig } from "../../Static/TechnicalConfig";
import { Cryptor } from "./Cryptor";
import { RequestDTO } from "../DTO/RequestDTO";
import { ResponseDTO } from "../DTO/ResponseDTO";
import { UserStorageController } from '../../Controllers/StorageControllers/UserStorageController';
import { ModalShopObjectLogic } from '../../UI/Modals/ModalShopObject/ModalShopObjectLogic';

export class ServerApi {

    static post(endpoint: string, data: object, func: Function) {
        const requestDTO = new RequestDTO(data, Cryptor.getHashByObj(data), UserStorageController.getSessionHash(), UserStorageController.getSessionId())
        this.request(endpoint, requestDTO, func, "POST", data)
    }

    static get(endpoint: string, data: object, func: Function) {
        const requestDTO = new RequestDTO(data, Cryptor.getHashByObj(data), UserStorageController.getSessionHash(), UserStorageController.getSessionId())
        this.request(endpoint, requestDTO, func, "GET", data)
    }

    private static request(endpoint: string, data: RequestDTO, func: Function, type: string, dataObj: object) {
        // console.log(JSON.stringify(dataObj))
        var xhr = new XMLHttpRequest();

        if (type == "GET") {//спецификация HTTP не дает отправить тело в гет запросе
            xhr.open(type, TechnicalConfig.SERVER_DOMAIN + endpoint + '?dto=' + JSON.stringify(dataObj), true);
            xhr.setRequestHeader("sessionId", UserStorageController.getSessionId().toString());
            xhr.setRequestHeader("sessionHash", UserStorageController.getSessionHash());
            xhr.setRequestHeader("dataHash", Cryptor.getHashByObj(dataObj));
            xhr.send()
        } else {
            xhr.open(type, TechnicalConfig.SERVER_DOMAIN + endpoint, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("sessionId", UserStorageController.getSessionId().toString());
            xhr.setRequestHeader("sessionHash", UserStorageController.getSessionHash());
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
        // console.log('Глобальный парсер статус: ' + status)
        if (status == 200) {
            let json
            try {
                json = JSON.parse(body)
            } catch (e) {
                throw "Невозможно распарсить ответ сервера, что делаем? (Лог ОШИБКА на сервер + ???)"
            }

            const responseDTO = new ResponseDTO(json.data)
            const responseJson = JSON.parse(JSON.stringify(responseDTO.data))
            customFunction(responseJson, true)
        }
        else if (status == 403) {
            console.log('Сервер выдал 403. Перезагрузите клиент')
            customFunction('responseJson', false)
            // LoadingGame.reloadGame()
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