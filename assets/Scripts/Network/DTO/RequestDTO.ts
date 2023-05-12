export class RequestDTO {
  data: object;
  hash: string;
  sessionHash: string
  sessionid: number

  constructor(data: object, hash: string, sessionHash: string, sessionid: number) {
    this.data = data;
    this.hash = hash;
    this.sessionHash = sessionHash
    this.sessionid = sessionid
  }
}
