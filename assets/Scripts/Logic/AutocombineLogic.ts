import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AutocombineLogic')
export class AutocombineLogic extends Component {

    public static instance: AutocombineLogic

    public onLoad() {
        AutocombineLogic.instance = this
    }
}