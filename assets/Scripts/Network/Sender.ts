import { _decorator, Component } from 'cc';
import { md5 } from './md5';
import { RequestDTO } from './DTO/RequestDTO';

const { ccclass, property } = _decorator;

@ccclass('Sender')
export class Sender extends Component {

    public static instance: Sender

    private url: string = "http://localhost:9600/";

    onLoad() {
        Sender.instance = this;
    }

    post(endpoint: string, data: object, func: Function) {
        const requestDTO = new RequestDTO(data, this.getHash(data))
        this.request(endpoint, requestDTO, func, "POST")
    }

    get(endpoint: string, data: object, func: Function){
        const requestDTO = new RequestDTO(data, this.getHash(data))
        this.request(endpoint, requestDTO, func, "GET")
    }

    private request(endpoint: string, data: RequestDTO, func: Function, type: string) {
        var xhr = new XMLHttpRequest();
        xhr.open(type, this.url + endpoint, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));

        xhr.onload = function () {
            func(xhr.status, xhr.responseText)
        }

        xhr.onerror = function () {
            func(xhr.status, xhr.responseText)
        }
    }

    private getHash(obj: object): string {
        const str = JSON.stringify(obj)
        return this.hashGenerator("data_" + str)
    }

    private hashGenerator(str: string): string {
        return md5(str).toString();
    }

}

