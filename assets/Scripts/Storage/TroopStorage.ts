import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('TroopStorage')
export class TroopStorage extends Component {

    public static instance: TroopStorage;

    public sizeTroopStorage: number = 80

    public sizeTroopAir: number[] = []
    public sizeTroopMarine: number[] = []
    public sizeTroopOverland: number[] = []

    public onLoad() {
        TroopStorage.instance = this
    }
}
