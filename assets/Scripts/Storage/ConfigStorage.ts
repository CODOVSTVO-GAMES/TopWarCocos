import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ConfigStorage')
export class ConfigStorage extends Component {

    //

    public static instance: ConfigStorage;

    start() {
        ConfigStorage.instance = this;
    }


}

