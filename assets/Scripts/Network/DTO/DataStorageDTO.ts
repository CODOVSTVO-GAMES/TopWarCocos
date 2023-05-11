export class DataStorageDTO {
  userId: string
  sessionId: number
  dataObjects: string

  constructor(userId: string, sessinId: number, dataObjects: string) {
    this.userId = userId
    this.sessionId = sessinId
    this.dataObjects = dataObjects;
  }
}
