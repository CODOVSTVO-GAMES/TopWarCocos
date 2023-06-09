import { _decorator, Component } from 'cc';
import { Barrack } from '../Structures/Barrack';
const { ccclass } = _decorator;

@ccclass('BarrackModel')
export class BarrackModel extends Component {

    public static instance: BarrackModel

    public arrayBarracks: Barrack[]

    protected onLoad(): void {
        BarrackModel.instance = this
        this.assignStartingValues()
    }

    private assignStartingValues() {
        this.arrayBarracks = []
    }
}