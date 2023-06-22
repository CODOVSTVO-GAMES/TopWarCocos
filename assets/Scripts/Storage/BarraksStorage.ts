import { _decorator, Component } from 'cc';
import { Barrack } from '../Structures/Barrack';
const { ccclass } = _decorator;

@ccclass('BarraksStorage')
export class BarraksStorage extends Component {

    public static instance: BarraksStorage

    public storage: Array<Barrack> = []

    public onLoad() {
        BarraksStorage.instance = this
    }
}

