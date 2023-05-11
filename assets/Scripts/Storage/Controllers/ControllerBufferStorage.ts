import { _decorator } from 'cc';
import { BufferStorage } from '../BufferStorage';
import { Buffer } from '../../Structures/Buffer';

export class ControllerBufferStorage {

    static addItem(type: string, obj: Object) {
        for (let i = 0; i < BufferStorage.instance.arrayBuffer.length; i++) {
            if (BufferStorage.instance.arrayBuffer[i].name == type) {
                delete BufferStorage.instance.arrayBuffer[i];
            }
        }
        BufferStorage.instance.arrayBuffer.push(new Buffer(type, obj));
    }

    static getBuffer(): string {
        return JSON.parse(JSON.stringify(BufferStorage.instance.arrayBuffer));
    }

    static clearBufferStorage() {
        BufferStorage.instance.arrayBuffer = new Array<Buffer>;
    }
}   