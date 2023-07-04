import { _decorator, Component } from 'cc';
import { Buffer } from '../Structures/Buffer';
const { ccclass } = _decorator;

@ccclass('BufferModel')
export class BufferModel extends Component {

    public static instance: BufferModel

    public arrayBuffer: Buffer[] = []
    public eventsQueue: string[]

    protected onLoad(): void {
        BufferModel.instance = this
    }
}