export class DataStorageDTO {
  accountId: string
  sessionId: number
  dataObjects: object[]

  constructor(accountId: string, sessinId: number, dataObjects: object[]) {
    this.accountId = accountId
    this.sessionId = sessinId
    this.dataObjects = dataObjects;
  }
}
