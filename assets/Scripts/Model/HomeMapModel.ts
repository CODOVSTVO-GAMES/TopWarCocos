import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('HomeMapModel')
export class HomeMapModel extends Component {

    public static instance: HomeMapModel

    protected onLoad(): void {
        HomeMapModel.instance = this
    }
}