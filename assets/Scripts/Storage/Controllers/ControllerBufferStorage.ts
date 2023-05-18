import { _decorator } from 'cc';
import { BufferStorage } from '../BufferStorage';
import { Buffer } from '../../Structures/Buffer';

export class ControllerBufferStorage {

    static addItem(type: string, obj: Object) {
        if (obj == null) {
            console.log("addItem пришел пустой обьект")
            return;
        }
        for (let i = 0; i < BufferStorage.instance.arrayBuffer.length; i++) {
            if (BufferStorage.instance.arrayBuffer[i].name == type) {
                BufferStorage.instance.arrayBuffer.splice(i, 1);
                return BufferStorage.instance.arrayBuffer.push(new Buffer(type, obj));
            }
        }
        BufferStorage.instance.arrayBuffer.push(new Buffer(type, obj));
    }

    static getBuffer(): object[] {
        return BufferStorage.instance.arrayBuffer
    }

    static isBufferFull(): boolean {
        if (BufferStorage.instance.arrayBuffer.length > 0) {
            return true;
        }
        return false;

    }
    static addEventToQueue(event: string) {
        BufferStorage.instance.eventsQueue.push(event)
    }

    static getQueueEvents(): Array<string> {
        return BufferStorage.instance.eventsQueue
    }

    static isEventsQueueFull(): boolean {
        if (BufferStorage.instance.eventsQueue.length > 0) {
            return true;
        }
        return false;
    }

    static clearEventsQueue() {
        BufferStorage.instance.eventsQueue = new Array<string>;
    }

    static clearBufferStorage() {
        BufferStorage.instance.arrayBuffer = new Array<Buffer>;
    }
}   