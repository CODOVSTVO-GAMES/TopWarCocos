import { BufferModel } from "../Model/BufferModel";
import { Buffer } from "../Structures/Buffer";
import { SecondaryInterface } from "../UI/SecondaryInterface";

export class BufferPresenter {

    static addItem(type: string, obj: Object) {
        if (obj == null) return;
        for (let i = 0; i < BufferModel.instance.arrayBuffer.length; i++) {
            if (BufferModel.instance.arrayBuffer[i].nameStorage == type) {
                BufferModel.instance.arrayBuffer.splice(i, 1);
                return BufferModel.instance.arrayBuffer.push(new Buffer(type, obj));
            }
        }
        BufferModel.instance.arrayBuffer.push(new Buffer(type, obj));
    }

    static getBuffer(): object[] {
        return BufferModel.instance.arrayBuffer;
    }

    static isBufferFull(): boolean {
        if (BufferModel.instance.arrayBuffer.length > 0) {
            return true;
        }
        return false;

    }
    static addEventToQueue(event: string) {
        BufferModel.instance.eventsQueue.push(event);
    }

    static getQueueEvents(): Array<string> {
        return BufferModel.instance.eventsQueue
    }

    static isEventsQueueFull(): boolean {
        if (BufferModel.instance.eventsQueue.length > 0) {
            return true;
        }
        return false;
    }

    static clearEventsQueue() {
        BufferModel.instance.eventsQueue = new Array<string>;
    }

    static clearBufferStorage() {
        BufferModel.instance.arrayBuffer = new Array<Buffer>;
    }
}