import { _decorator, Component } from 'cc';
import { Model } from '../Structures/Model';
const { ccclass } = _decorator;

@ccclass('BufferModel')
export class BufferModel extends Component {

    public static instance: BufferModel

    public arrayBuffer: Model[] = []
    public eventsQueue: string[]

    protected onLoad(): void {
        BufferModel.instance = this
    }
}