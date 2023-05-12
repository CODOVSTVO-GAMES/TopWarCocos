import { _decorator } from 'cc';
import { TechnicalConfig } from "../Static/TechnicalConfig";
import { Cryptor } from "./other/Cryptor";
import { RequestDTO } from "./DTO/RequestDTO";
import { ResponseDTO } from "./DTO/ResponseDTO";

export class ClientService {

    static post(endpoint: string, data: object, func: Function) {
        const requestDTO = new RequestDTO(data, Cryptor.getHashByObj(data))
        this.request(endpoint, requestDTO, func, "POST")
    }

    static get(endpoint: string, data: object, func: Function) {
        const requestDTO = new RequestDTO(data, Cryptor.getHashByObj(data))
        this.request(endpoint, requestDTO, func, "GET")
    }

    private static request(endpoint: string, data: RequestDTO, func: Function, type: string) {
        // console.log(data)
        // console.log(JSON.stringify(data))

        var xhr = new XMLHttpRequest();
        if (type == "GET") {//спецификация HTTP не дает отправить тело в гет запросе
            xhr.open(type, 'http://' + TechnicalConfig.SERVER_DOMAIN + endpoint + '?dto=' + JSON.stringify(data), true);
            xhr.send()
        } else {
            xhr.open(type, 'http://' + TechnicalConfig.SERVER_DOMAIN + endpoint, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(data));
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
                // console.log(e)//дебаг
                throw "Невозможно распарсить ответ сервера, что делаем? (Лог ОШИБКА на сервер + ???)"
            }

            const responseDTO = new ResponseDTO(json.data)
            const sessionJson = JSON.parse(JSON.stringify(responseDTO.data))
            customFunction(sessionJson)
        }
        else if (status == 403) {
            console.log('Сервер выдал 403. Перезагрузите клиент')
        }
        else if (status == 403) {
            console.log('Сервер выдал 502 или 408. Повторите запрос позже')
        }
        else if (status == 400) {
            console.log('Сервер выдал 400. Что будем делать???')
        }
    }
}