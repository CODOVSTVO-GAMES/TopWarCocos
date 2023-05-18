export class DataStorageDTO {
  userId: string
  sessionId: number
  dataObjects: object[]

  constructor(userId: string, sessinId: number, dataObjects: object[]) {
    this.userId = userId
    this.sessionId = sessinId
    this.dataObjects = dataObjects;
  }
}
