import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TroopStorage')
export class TroopStorage extends Component {

    public static instance: TroopStorage;

    public sizeTroopStorage: number = 80;

    public sizeTroopAir: number[] = [];
    public sizeTroopMarine: number[] = [];
    public sizeTroopOverland: number[] = [];

    onLoad() {
        TroopStorage.instance = this;
    }

    start() {

    }
}
