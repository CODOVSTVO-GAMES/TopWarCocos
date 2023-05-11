export class DataStorageDTO {
    userId: string
    sessionId: number
    dataObjects: Array<object>
    constructor(userId: string, sessinId: number, dataObjects: Array<object>) {
      this.userId = userId
      this.sessionId = sessinId
      this.dataObjects = dataObjects;
    }
  }
  