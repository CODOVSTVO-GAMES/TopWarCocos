import { _decorator, Component } from 'cc';
import {md5} from './md5';

const { ccclass, property } = _decorator;

@ccclass('Sender')
export class Sender extends Component {

    public static instance: Sender

    private url: string = "http://codovstvo.ru:9600/";

    onLoad() {
        Sender.instance = this;
    }

    sendPostRequest(endpoint: string, body: string, func: Function) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", this.url + endpoint, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        let x = '{"data":'+ body + ',"hash":"' + this.getHash(body) + '"}'
        xhr.send(x);
        
        xhr.onload = function () {
            func(xhr.status, xhr.responseText)
        }

        xhr.onerror = function(){
            func(xhr.status, xhr.responseText)
        }
    }  

    getHash(str: string) : string{
        return this.hashGenerator("data_"+ str)
    }

    hashGenerator(str: string) : string {
        return md5(str).toString();
    }  

}

