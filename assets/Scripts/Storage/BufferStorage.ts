import { _decorator, Component } from 'cc';
import { Buffer } from '../Structures/Buffer';
const { ccclass } = _decorator;

@ccclass('BufferStorage')
export class BufferStorage extends Component {

    public static instance: BufferStorage

    public arrayBuffer: Array<Buffer> = []

    public eventsQueue: string[] = []

    public onLoad() {
        BufferStorage.instance = this
    }
}

