import { _decorator, Component } from 'cc';
import {md5} from './md5';

const { ccclass, property } = _decorator;

@ccclass('Sender')
export class Sender extends Component {

    public static instance: Sender

    private url: string = "http://localhost:9601/";

    onLoad() {
        Sender.instance = this;
    }

    sendPostRequest(endpoint: string, body: string, func: Function) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", this.url + endpoint, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        // console.log(body)

        let x = '{"data":'+ body + ',"hash": "' + this.getHashJsonObject(JSON.parse(body)) + '"}'

        xhr.send(x);
        
        xhr.onload = function () {
            func(xhr.status, xhr.responseText)
        }

        xhr.onerror = function(){
            func(xhr.status, xhr.responseText)
        }
    }  

    getRandomHash() : string{
        return this.hashGenerator((Math.random() * 1000).toString())
    }

    getHashJsonObject(json: JSON) : string{
        return this.hashGenerator(this.cookJsonToContertHash(json))
    }

    cookJsonToContertHash(json: JSON) : string {
        let str = ''
        for(var key in json){
            str += key + '_' + json[key] + ','
        }
        return str
    }

    hashGenerator(str: string) : string {
        return md5(str).toString();
    }  

}

