export class QueueItem {
    modalName: string
    data: object

    constructor(modalName: string, data = {}) {
        this.modalName = modalName
        this.data = data
    }
}